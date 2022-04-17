import * as A from './Array'
import { Identity } from '../typeclasses/concrete/Identity'
import { Debug } from '../typeclasses/concrete/Debug'
import * as Eff from '../effects/Eff'
import * as Eq from '../typeclasses/concrete/Eq'
import { drawTree } from './RoseTree'
import * as Sync from '../effects/Sync'
import { identity, pipe } from '../function/function'
import { Associative } from '../typeclasses/concrete/Associative'

export type Tree<Parent, Child> = ParentNode<Parent, Child> | LeafNode<Child>

export type Forest<Parent, Child> = readonly Tree<Parent, Child>[]

export interface ParentNode<Parent, Child> {
  readonly type: 'Parent'
  readonly value: Parent
  readonly forest: Forest<Parent, Child>
}

export const parent = <Parent, Child>(
  value: Parent,
  forest: Forest<Parent, Child>,
): ParentNode<Parent, Child> => ({
  type: 'Parent',
  value,
  forest,
})

export interface LeafNode<Child> {
  readonly type: 'Leaf'
  readonly value: Child
}

export const leaf = <Child>(value: Child): LeafNode<Child> => ({
  type: 'Leaf',
  value,
})

export function bimap<P1, P2, C1, C2>(f: (parent: P1) => P2, g: (child: C1) => C2) {
  return (tree: Tree<P1, C1>): Tree<P2, C2> =>
    pipe(
      tree,
      bimapSafe(
        (a) => Sync.fromLazy(() => f(a)),
        (b) => Sync.fromLazy(() => g(b)),
      ),
      Sync.runWith,
      Eff.run,
    )
}

// Stack-safe bimaps
function bimapSafe<P1, P2, C1, C2>(
  f: (parent: P1) => Sync.Sync<P2>,
  g: (child: C1) => Sync.Sync<C2>,
) {
  return (tree: Tree<P1, C1>): Sync.Sync<Tree<P2, C2>> =>
    Eff.Eff(function* () {
      if (tree.type === 'Leaf') {
        return leaf(yield* g(tree.value))
      }

      const forest = yield* pipe(
        tree.forest,
        Sync.forEach((t) => pipe(t, bimapSafe(f, g))),
      )

      return parent(yield* f(tree.value), forest)
    })
}

export function mapParent<P1, P2>(f: (parent: P1) => P2) {
  return <C>(tree: Tree<P1, C>): Tree<P2, C> => bimap(f, identity)(tree)
}

export function map<C1, C2>(f: (child: C1) => C2) {
  return <P>(tree: Tree<P, C1>): Tree<P, C2> => bimap(identity, f)(tree)
}

export function makeDebug<P, C>(P: Debug<P>, C: Debug<C>): Debug<Tree<P, C>> {
  return {
    debug: (tree) => drawTree(pipe(tree, mapParent(P.debug), map(C.debug))),
  }
}

export function makeEq<P, C>(P: Eq.Eq<P>, C: Eq.Eq<C>): Eq.Eq<Tree<P, C>> {
  const forest = Eq.lazy(() => A.makeEq(eq))
  const eq = Eq.sum<Tree<P, C>>()('type')({
    Parent: Eq.struct({
      type: Eq.AlwaysEqual,
      value: P,
      forest,
    }),
    Leaf: Eq.struct({
      type: Eq.AlwaysEqual,
      value: C,
    }),
  })

  return eq
}

export const flatMap =
  <A, P2, B>(f: (a: A) => Tree<P2, B>) =>
  <P>(ma: Tree<P, A>): Tree<P | P2, B> => {
    if (ma.type === 'Leaf') {
      return f(ma.value)
    }

    return {
      type: 'Parent',
      value: ma.value,
      forest: ma.forest.map(flatMap(f)),
    }
  }

export const reduce =
  <A, B>(b: B, f: (b: B, a: A) => B) =>
  <P>(fa: Tree<P, A>): B =>
    pipe(
      fa,
      reduceSafe(b, (b, a) => Sync.fromLazy(() => f(b, a))),
      Sync.runWith,
      Eff.run,
    )

export const reduceSafe =
  <A, B>(b: B, f: (b: B, a: A) => Sync.Sync<B>) =>
  <P>(fa: Tree<P, A>): Sync.Sync<B> =>
    Eff.Eff(function* () {
      if (fa.type === 'Leaf') {
        return yield* f(b, fa.value)
      }

      if (fa.forest.length === 0) {
        return b
      }

      const len = fa.forest.length
      let r = yield* pipe(fa.forest[0], reduceSafe(b, f))

      for (let i = 1; i < len; i++) {
        r = yield* pipe(fa.forest[i], reduceSafe(r, f))
      }

      return r
    })

export const foldMap: <M>(
  AI: Associative<M> & Identity<M>,
) => <A>(f: (a: A) => M) => <P>(fa: Tree<P, A>) => M = (AI) => (f) =>
  reduce(AI.id, (acc, a) => AI.concat(acc, f(a)))

export const reduceRight =
  <A, B>(b: B, f: (a: A, b: B) => B) =>
  <P>(fa: Tree<P, A>): B =>
    pipe(
      fa,
      reduceRightSafe(b, (a, b) => Sync.fromLazy(() => f(a, b))),
      Sync.runWith,
      Eff.run,
    )

export const reduceRightSafe =
  <A, B>(b: B, f: (a: A, b: B) => Sync.Sync<B>) =>
  <P>(fa: Tree<P, A>): Sync.Sync<B> =>
    Eff.Eff(function* () {
      if (fa.type === 'Leaf') {
        return yield* f(fa.value, b)
      }

      let r: B = b
      const len = fa.forest.length

      for (let i = len - 1; i >= 0; i--) {
        r = yield* pipe(fa.forest[i], reduceRightSafe(r, f))
      }

      return r
    })

export function getChildLength<P, C>(tree: Tree<P, C>): number {
  if (tree.type === 'Leaf') {
    return 1
  }

  return tree.forest.length
}
