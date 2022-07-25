import * as A from './Array.js'
import { HKT, HKT2, Kind, Params, Variance } from './HKT.js'
import * as ASSOC from './Typeclass/Associative.js'
import * as AB from './Typeclass/AssociativeBoth.js'
import * as AF from './Typeclass/AssociativeFlatten.js'
import * as BI from './Typeclass/Bicovariant.js'
import * as C from './Typeclass/Covariant.js'
import { Debug } from './Typeclass/Debug.js'
import * as EQ from './Typeclass/Eq.js'
import * as FM from './Typeclass/FoldMap.js'
import * as FE from './Typeclass/ForEach/index.js'
import * as I from './Typeclass/Identity.js'
import * as IB from './Typeclass/IdentityBoth.js'
import * as Ord from './Typeclass/Ord.js'
import { Unary } from './Unary.js'
import { flow, identity, pipe } from './function.js'
import * as N from './number.js'

export type Tree<Parent, Child> = ParentNode<Parent, Child> | LeafNode<Child>

export type Forest<Parent, Child> = readonly Tree<Parent, Child>[]

export interface ParentNode<Parent, Child> {
  readonly tag: 'Parent'
  readonly value: Parent
  readonly forest: Forest<Parent, Child>
}

export const parent = <Parent, Child>(
  value: Parent,
  forest: Forest<Parent, Child>,
): ParentNode<Parent, Child> => ({
  tag: 'Parent',
  value,
  forest,
})

export interface LeafNode<Child> {
  readonly tag: 'Leaf'
  readonly value: Child
}

export const leaf = <Child>(value: Child): LeafNode<Child> => ({
  tag: 'Leaf',
  value,
})

export const match =
  <P, A, C, B>(f: (parent: P, forest: Forest<P, C>) => A, g: (child: C) => B) =>
  (tree: Tree<P, C>): A | B =>
    tree.tag === 'Leaf' ? g(tree.value) : f(tree.value, tree.forest)

export interface TreeHKT extends HKT2 {
  readonly type: Tree<this[Params.E], this[Params.A]>
  readonly defaults: {
    [Params.E]: Variance.Covariant<any>
  }
}

export const bimap =
  <A, B, C, D>(f: Unary<A, B>, g: Unary<C, D>) =>
  (tree: Tree<A, C>): Tree<B, D> =>
    pipe(
      tree,
      match((a, forest) => parent(f(a), forest.map(bimap(f, g))), flow(g, leaf)),
    )

export const Bicovariant: BI.Bicovariant2<TreeHKT> = {
  bimap,
}

export const mapLeaf = BI.map(Bicovariant)
export const mapParent = BI.mapLeft(Bicovariant)

export const Covariant: C.Covariant2<TreeHKT> = {
  map: mapLeaf,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const flatMap =
  <A, P2, B>(f: (a: A) => Tree<P2, B>) =>
  <P1>(tree: Tree<P1, A>): Tree<P1 | P2, B> => {
    if (tree.tag === 'Leaf') {
      return f(tree.value)
    }

    return {
      ...tree,
      forest: tree.forest.flatMap(flatMap(f)),
    }
  }

export const Flatten: AF.AssociativeFlatten2<TreeHKT> = {
  flatten: flatMap(identity) as AF.AssociativeFlatten2<TreeHKT>['flatten'],
}

export const flatten = Flatten.flatten

export const AssociativeBoth = AF.makeAssociativeBoth<TreeHKT>({ ...Flatten, ...Covariant })

export const tuple = AB.tuple<TreeHKT>({ ...AssociativeBoth, ...Covariant })

export const ForEach: FE.ForEach2<TreeHKT> = {
  map: mapLeaf,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const tuple = IB.tuple(IBC)

    const forEach_ =
      <A, B>(f: (a: A) => Kind<T2, B>) =>
      <E1>(kind: Tree<E1, A>): Kind<T2, Tree<E1, B>> => {
        if (kind.tag === 'Leaf') {
          return pipe(kind.value, f, IBC.map(leaf))
        }

        return pipe(
          tuple(...kind.forest.map(forEach_(f))),
          IBC.map((forest) => parent(kind.value, forest)),
        )
      }

    return forEach_
  },
}

export const forEach = ForEach.forEach

export const foldMap = FE.foldMap(ForEach)
export const mapAccum = FE.mapAccum(ForEach)
export const sequence = FE.sequence(ForEach)

export const FoldMap: FM.FoldMap2<TreeHKT> = {
  foldMap,
}

export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const reverse = FM.reverse<TreeHKT>({ ...FoldMap, ...ForEach })
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)

export const makeEq = <E, A>(EQE: EQ.Eq<E>, EQA: EQ.Eq<A>): EQ.Eq<Tree<E, A>> => {
  const derived: EQ.Eq<Tree<E, A>> = EQ.sum<Tree<E, A>>()('tag')({
    Leaf: EQ.struct({
      tag: EQ.Strict,
      value: EQA,
    }),
    Parent: EQ.struct({
      tag: EQ.Strict,
      value: EQE,
      forest: A.makeEq(EQ.lazy(() => derived)),
    }),
  })

  return derived
}

export const makeOrd = <E, A>(OrdE: Ord.Ord<E>, OrdA: Ord.Ord<A>): Ord.Ord<Tree<E, A>> => {
  const derived: Ord.Ord<Tree<E, A>> = Ord.sum<Tree<E, A>>()('tag')(
    pipe(
      N.Ord,
      Ord.contramap((x) => (x === 'Leaf' ? 1 : 0)),
    ),
  )({
    Leaf: Ord.struct({
      tag: Ord.Static,
      value: OrdA,
    })(
      pipe(
        N.Ord,
        Ord.contramap((a) => (a === 'tag' ? 1 : 0)),
      ),
    ),
    Parent: Ord.struct({
      tag: Ord.Static,
      value: OrdE,
      forest: A.makeOrd(Ord.lazy(() => derived)),
    })(
      pipe(
        N.Ord,
        Ord.contramap((a) => (a === 'tag' ? 2 : a === 'forest' ? 1 : 0)),
      ),
    ),
  })

  return derived
}

export const makeAssociative = <E, A>(
  AE: ASSOC.Associative<E>,
  AA: ASSOC.Associative<A>,
): ASSOC.Associative<Tree<E, A>> => ({
  concat: (x, y) =>
    pipe(
      x,
      match(
        (e, forest) =>
          pipe(
            y,
            match(
              (e2, forest2) => parent(AE.concat(e, e2), [...forest, ...forest2]),
              (a2) => parent(e, [...forest, leaf(a2)]),
            ),
          ),
        (a) =>
          pipe(
            y,
            match(
              (e2, forest2) => parent(e2, [leaf(a), ...forest2]),
              (a2) => leaf(AA.concat(a, a2)),
            ),
          ),
      ),
    ),
})

export const makeIdentity = <E, A>(
  IE: I.Identity<E>,
  IA: I.Identity<A>,
): I.Identity<Tree<E, A>> => ({
  ...makeAssociative(IE, IA),
  id: parent(IE.id, [leaf(IA.id)]),
})

const draw = (indentation: string, forest: Forest<string, string>): string => {
  let r = ''
  const len = forest.length
  const lastIndex = len - 1
  let tree: Tree<string, string>
  for (let i = 0; i < len; i++) {
    tree = forest[i]
    const isLast = i === lastIndex
    r += indentation + (isLast ? '└' : '├') + '─ ' + tree.value

    if (tree.tag === 'Parent') {
      r += draw(indentation + (len > 1 && !isLast ? '│  ' : '   '), tree.forest)
    }
  }
  return r
}

export function drawForest(forest: Forest<string, string>): string {
  return draw('\n', forest)
}

export function drawTree(tree: Tree<string, string>): string {
  if (tree.tag === 'Leaf') {
    return tree.value
  }

  return tree.value + drawForest(tree.forest)
}

export const makeDebug = <E, A>(E: Debug<E>, A: Debug<A>): Debug<Tree<E, A>> => ({
  debug: flow(bimap(E.debug, A.debug), drawTree),
})
