import { HKT, Kind, Params } from './HKT'
import * as Tree from './Tree'
import { Associative } from './Typeclass/Associative'
import * as AB from './Typeclass/AssociativeBoth'
import * as AF from './Typeclass/AssociativeFlatten'
import * as C from './Typeclass/Covariant'
import { Debug } from './Typeclass/Debug'
import { Eq } from './Typeclass/Eq'
import * as FM from './Typeclass/FoldMap'
import * as FE from './Typeclass/ForEach'
import { Identity } from './Typeclass/Identity'
import * as IB from './Typeclass/IdentityBoth'
import { Ord } from './Typeclass/Ord'
import { pipe } from './function'

// A specialization of Tree which has the same parent + child nodes
export type RoseTree<A> = Tree.Tree<A, A>

export type RoseForest<A> = Tree.Forest<A, A>

export function RoseTree<A>(value: A, forest: RoseForest<A> = []): RoseTree<A> {
  return {
    type: 'Parent',
    value,
    forest,
  }
}

export interface RoseTreeHKT extends HKT {
  readonly type: RoseTree<this[Params.A]>
}

export const Covariant: C.Covariant1<RoseTreeHKT> = {
  map: (f) => Tree.bimap(f, f),
}

export const map = Covariant.map
export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const Flatten: AF.AssociativeFlatten1<RoseTreeHKT> = {
  flatten: Tree.flatten as AF.AssociativeFlatten1<RoseTreeHKT>['flatten'],
}

export const flatten = Flatten.flatten
export const flatMap = AF.flatMap<RoseTreeHKT>({ ...Flatten, ...Covariant })
export const bind = AF.bind<RoseTreeHKT>({ ...Flatten, ...Covariant })

export const AssociativeBoth = AF.makeAssociativeBoth<RoseTreeHKT>({ ...Flatten, ...Covariant })
export const tuple = AB.tuple<RoseTreeHKT>({ ...AssociativeBoth, ...Covariant })

export const ForEach: FE.ForEach1<RoseTreeHKT> = {
  map: Covariant.map,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const tuple = IB.tuple(IBC)

    const forEach_ =
      <A, B>(f: (a: A) => Kind<T2, B>) =>
      (kind: RoseTree<A>): Kind<T2, RoseTree<B>> => {
        if (kind.type === 'Leaf') {
          return pipe(kind.value, f, IBC.map(Tree.leaf))
        }

        return pipe(
          tuple(f(kind.value), ...kind.forest.map(forEach_(f))),
          IBC.map(([value, ...forest]) => RoseTree(value, forest)),
        )
      }

    return forEach_
  },
}

export const forEach = ForEach.forEach

export const foldMap = FE.foldMap(ForEach)
export const mapAccum = FE.mapAccum(ForEach)
export const sequence = FE.sequence(ForEach)

export const FoldMap: FM.FoldMap1<RoseTreeHKT> = {
  foldMap,
}

export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const reverse = FM.reverse<RoseTreeHKT>({ ...FoldMap, ...ForEach })
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)

export const makeDebug = <A>(D: Debug<A>): Debug<RoseTree<A>> => Tree.makeDebug(D, D)

export const makeEq = <A>(E: Eq<A>): Eq<RoseTree<A>> => Tree.makeEq(E, E)

export const makeAssociative = <A>(A: Associative<A>): Associative<RoseTree<A>> =>
  Tree.makeAssociative(A, A)

export const makeIdentity = <A>(A: Identity<A>): Identity<RoseTree<A>> => Tree.makeIdentity(A, A)

export const makeOrd = <A>(O: Ord<A>): Ord<RoseTree<A>> => Tree.makeOrd(O, O)
