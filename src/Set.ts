import * as A from './Array'
import { Left, Right } from './Either'
import { HKT, Kind, Params } from './HKT'
import * as M from './Maybe'
import { Associative } from './Typeclass/Associative'
import * as AE from './Typeclass/AssociativeEither'
import * as AF from './Typeclass/AssociativeFlatten'
import { Bottom1 } from './Typeclass/Bottom'
import { Compact1 } from './Typeclass/Compact'
import { Concat } from './Typeclass/Concat'
import * as C from './Typeclass/Covariant'
import { Debug } from './Typeclass/Debug'
import * as Eq from './Typeclass/Eq'
import * as FIM from './Typeclass/FilterMap'
import * as FM from './Typeclass/FoldMap'
import * as FE from './Typeclass/ForEach/index'
import { fromIdentityEitherCovariant } from './Typeclass/Identity'
import * as IB from './Typeclass/IdentityBoth'
import { IdentityEither1 } from './Typeclass/IdentityEither'
import { IdentityFlatten1 } from './Typeclass/IdentityFlatten'
import * as Ord from './Typeclass/Ord'
import * as PM from './Typeclass/PartitionMap'
import { Separate1 } from './Typeclass/Separate'
import * as T from './Typeclass/Top'
import { flow, pipe } from './function'

export interface SetHKT extends HKT {
  readonly type: ReadonlySet<this[Params.A]>
}

export const difference =
  <A>(Eq: Eq.Eq<A>) =>
  (second: ReadonlySet<A>) =>
  (first: ReadonlySet<A>) =>
    new Set(A.difference(Eq)([...second])([...first]))

export const intersection =
  <A>(Eq: Eq.Eq<A>) =>
  (second: ReadonlySet<A>) =>
  (first: ReadonlySet<A>) =>
    new Set(A.intersection(Eq)([...second])([...first]))

export const union =
  <A>(C: Concat<A>) =>
  (second: ReadonlySet<A>) =>
  (first: ReadonlySet<A>) =>
    new Set(A.union(C)([...second])([...first]))

export const Covariant: C.Covariant1<SetHKT> = {
  map: (f) => (set) => new Set([...set].map(f)),
}

export const map = Covariant.map
export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const Flatten: AF.AssociativeFlatten1<SetHKT> = {
  flatten: (set) => new Set(Array.from(set).flatMap((s) => Array.from(s))),
}

export const flatten = Flatten.flatten
export const flatMap = AF.flatMap<SetHKT>({ ...Flatten, ...Covariant })
export const bind = AF.bind<SetHKT>({ ...Flatten, ...Covariant })

export const AssociativeBoth = AF.makeAssociativeBoth<SetHKT>({ ...Flatten, ...Covariant })
export const both = AssociativeBoth.both

export const Top: T.Top1<SetHKT> = {
  top: new Set([[]]),
}

export const top = Top.top
export const fromValue = T.makeFromValue<SetHKT>({ ...Top, ...Covariant })
export const fromLazy = T.makeFromValue<SetHKT>({ ...Top, ...Covariant })

export const IdentityBoth: IB.IdentityBoth1<SetHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const tuple = IB.tuple<SetHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<SetHKT>({ ...IdentityBoth, ...Covariant })

export const IdentityFlatten: IdentityFlatten1<SetHKT> = {
  ...Flatten,
  ...Top,
}

export const AssociativeEither: AE.AssociativeEither1<SetHKT> = {
  either: (second) => (first) =>
    first.size === 0 ? pipe(second, map(Right)) : pipe(first, map(Left)),
}

export const either = AssociativeEither.either

export const orElse = AE.orElse<SetHKT>({ ...AssociativeEither, ...Covariant })
export const race = AE.tuple<SetHKT>({ ...AssociativeEither, ...Covariant })

export const Bottom: Bottom1<SetHKT> = {
  bottom: new Set(),
}

export const bottom = Bottom.bottom

export const IdentityEither: IdentityEither1<SetHKT> = {
  ...AssociativeEither,
  ...Bottom,
}

export const makeEq = <A>(E: Eq.Eq<A>): Eq.Eq<ReadonlySet<A>> =>
  pipe(
    E,
    A.makeEq,
    Eq.contramap((a) => Array.from(a)),
  )

export const makeOrd = <A>(O: Ord.Ord<A>): Ord.Ord<ReadonlySet<A>> =>
  pipe(
    O,
    A.makeOrd,
    Ord.contramap((a) => Array.from(a)),
  )

export const makeDebug = <A>(D: Debug<A>): Debug<ReadonlySet<A>> => ({
  debug: (set) => `Set ${A.makeDebug(D).debug(Array.from(set))}`,
})

export const makeAssociative = <A>(): Associative<ReadonlySet<A>> => ({
  concat: (f, s) => new Set([...f, ...s]),
})

export const makeIdentity = fromIdentityEitherCovariant<SetHKT>({ ...IdentityEither, ...Covariant })

export const ForEach: FE.ForEach1<SetHKT> = {
  map,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const tuple = IB.tuple(IBC)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      (kind: ReadonlySet<A>): Kind<T2, ReadonlySet<B>> =>
        tuple(...Array.from(kind).map(f))
  },
}

export const forEach = ForEach.forEach
export const sequence = FE.sequence(ForEach)
export const mapAccum = FE.mapAccum(ForEach)
export const foldMap = FE.foldMap(ForEach)

export const FoldMap: FM.FoldMap1<SetHKT> = {
  foldMap,
}

export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
export const isEmpty = <A>(a: ReadonlySet<A>): boolean => a.size === 0
export const isNonEmpty = <A>(a: ReadonlySet<A>): boolean => a.size > 0
export const toArray = FM.toArray(FoldMap)
export const partitionMap = FM.partitionMap<SetHKT>({
  ...FoldMap,
  ...IdentityEither,
  ...Top,
  ...Covariant,
})

export const PartitionMap: PM.PartitionMap1<SetHKT> = {
  partitionMap,
}

export const separate = PM.separate(PartitionMap)

export const Separate: Separate1<SetHKT> = {
  separate,
}

export const FilterMap: FIM.FilterMap1<SetHKT> = {
  filterMap: (f) => (set) =>
    new Set(
      [...set].flatMap(
        flow(
          f,
          M.tupled,
          M.getOrElse(() => []),
        ),
      ),
    ),
}

export const filterMap = FilterMap.filterMap
export const compact = FIM.compact(FilterMap)
export const filter = FIM.filter(FilterMap)

export const Compact: Compact1<SetHKT> = {
  compact,
}

export const compacted = FE.compacted<SetHKT>({ ...ForEach, ...Compact })
export const separated = FE.separated<SetHKT>({ ...ForEach, ...Separate })
