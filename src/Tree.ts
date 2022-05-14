import { identity, pipe } from './function'
import { HKT, HKT2, Kind, Params, Variance } from './HKT'
import * as AB from './Typeclass/AssociativeBoth'
import * as AF from './Typeclass/AssociativeFlatten'
import * as BI from './Typeclass/Bicovariant'
import * as C from './Typeclass/Covariant'
import * as FM from './Typeclass/FoldMap'
import * as FE from './Typeclass/ForEach'
import * as IB from './Typeclass/IdentityBoth'
import { Unary } from './Unary'

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

export function getChildLength<P, C>(tree: Tree<P, C>): number {
  if (tree.type === 'Leaf') {
    return 1
  }

  return tree.forest.length
}

export interface TreeHKT extends HKT2 {
  readonly type: Tree<this[Params.E], this[Params.A]>
  readonly defaults: {
    [Params.E]: Variance.Covariant<any>
  }
}

export const bimap =
  <A, B, C, D>(f: Unary<A, B>, g: Unary<C, D>) =>
  (tree: Tree<A, C>): Tree<B, D> => {
    if (tree.type === 'Leaf') {
      return leaf(g(tree.value))
    }

    return parent(f(tree.value), tree.forest.map(bimap(f, g)))
  }

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
    if (tree.type === 'Leaf') {
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
        if (kind.type === 'Leaf') {
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
