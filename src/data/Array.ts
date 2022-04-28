import { HKT, Kind, Params } from '../HKT'
import { Arity2, pipe } from '../function/function'
import { Associative } from '../typeclasses/concrete/Associative'
import { Debug } from '../typeclasses/concrete/Debug'
import { Eq, fromEquals } from '../typeclasses/concrete/Eq'
import { Identity } from '../typeclasses/concrete/Identity'
import * as AB from '../typeclasses/effect/AssociativeBoth'
import * as AE from '../typeclasses/effect/AssociativeEither'
import * as AF from '../typeclasses/effect/AssociativeFlatten'
import { Bottom1 } from '../typeclasses/effect/Bottom'
import { Compact1 } from '../typeclasses/effect/Compact'
import * as C from '../typeclasses/effect/Covariant'
import * as CI from '../typeclasses/effect/CovariantWithIndex'
import * as FilterM from '../typeclasses/effect/FilterMap'
import * as FilterMI from '../typeclasses/effect/FilterMapWithIndex'
import * as FM from '../typeclasses/effect/FoldMap'
import { FoldMapWithIndex1 } from '../typeclasses/effect/FoldMapWithIndex'
import * as FE from '../typeclasses/effect/ForEach'
import { ForEachWithIndex1 } from '../typeclasses/effect/ForEachWithIndex'
import * as IB from '../typeclasses/effect/IdentityBoth'
import { IdentityFlatten1 } from '../typeclasses/effect/IdentityFlatten'
import * as PM from '../typeclasses/effect/PartitionMap'
import * as PMI from '../typeclasses/effect/PartitionMapWithIndex'
import { Reduce1 } from '../typeclasses/effect/Reduce'
import { ReduceRight1 } from '../typeclasses/effect/ReduceRight'
import * as RRI from '../typeclasses/effect/ReduceRightWithIndex'
import * as RI from '../typeclasses/effect/ReduceWithIndex'
import { Separate1 } from '../typeclasses/effect/Separate'
import * as T from '../typeclasses/effect/Top'

import { Left, Right, fromLeft, fromRight, isLeft, isRight } from './Either'
import { Maybe, isJust } from './Maybe'
import { NonEmptyArray, isNonEmpty } from './NonEmptyArray'

export interface ArrayHKT extends HKT {
  readonly type: ReadonlyArray<this[Params.A]>
}

export const match =
  <A, B, C>(onEmpty: () => A, onValues: (values: NonEmptyArray<B>) => C) =>
  (values: ReadonlyArray<B>): A | C =>
    isNonEmpty(values) ? onValues(values) : onEmpty()

export const makeEq = <A>(E: Eq<A>): Eq<ReadonlyArray<A>> =>
  fromEquals((a, b) => a.length === b.length && a.every((a, i) => E.equals(a, b[i])))

export const concat =
  <A>(second: ReadonlyArray<A>) =>
  (first: ReadonlyArray<A>): ReadonlyArray<A> =>
    [...first, ...second]

export const makeAssociative = <A>(): Associative<ReadonlyArray<A>> => ({
  concat: (a, b) => concat(b)(a),
})

export const makeDebug = <A>(D: Debug<A>): Debug<ReadonlyArray<A>> => ({
  debug: (a) => `[
  ${a.map(D.debug).join(',\n  ')}]
`,
})

export const empty: readonly [] = []

export const makeIdentity = <A>(): Identity<ReadonlyArray<A>> => ({
  ...makeAssociative<A>(),
  id: empty,
})

export const mapWithIndex =
  <A, B>(f: Arity2<number, A, B>) =>
  (array: ReadonlyArray<A>): ReadonlyArray<B> => {
    const length = array.length
    const output: Array<B> = Array(length)

    for (let i = 0; i < length; ++i) {
      output[i] = f(i, array[i])
    }

    return output
  }

export const CovariantWithIndex: CI.CovariantWithIndex1<ArrayHKT, number> = {
  mapWithIndex,
}

export const map = CI.map(CovariantWithIndex)

export const Covariant: C.Covariant1<ArrayHKT> = {
  map,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const AssociativeEither: AE.AssociativeEither1<ArrayHKT> = {
  either: (second) => match(() => second.map(Right), map(Left)),
}

export const either = AssociativeEither.either

export const orElse = AE.orElse<ArrayHKT>({ ...AssociativeEither, ...Covariant })
export const eventually = AE.eventually<ArrayHKT>({ ...AssociativeEither, ...Covariant })

export const AssociativeFlatten: AF.AssociativeFlatten1<ArrayHKT> = {
  flatten: (a) => a.flat(1),
}

export const flatten = AssociativeFlatten.flatten
export const flatMap = AF.flatMap<ArrayHKT>({ ...AssociativeFlatten, ...Covariant })
export const bind = AF.bind<ArrayHKT>({ ...AssociativeFlatten, ...Covariant })

export const AssociativeBoth: AB.AssociativeBoth1<ArrayHKT> = AF.makeAssociativeBoth<ArrayHKT>({
  ...AssociativeFlatten,
  ...Covariant,
})

export const both = AssociativeBoth.both

export const FilterMapWithIndex: FilterMI.FilterMapWithIndex1<ArrayHKT, number> = {
  filterMapWithIndex:
    <A, B>(f: (k: number, a: A) => Maybe<B>) =>
    (a: ReadonlyArray<A>) => {
      const output: B[] = []

      for (let i = 0; i < a.length; ++i) {
        const m = f(i, a[i])

        if (isJust(m)) {
          output.push(m.value)
        }
      }

      return output
    },
}

export const filterMapWithIndex = FilterMapWithIndex.filterMapWithIndex

export const filterMap = <A, B>(f: (a: A) => Maybe<B>) => filterMapWithIndex((_, a: A) => f(a))

export const FilterMap: FilterM.FilterMap1<ArrayHKT> = {
  filterMap,
}

export const compact = FilterM.compact(FilterMap)
export const Compact: Compact1<ArrayHKT> = {
  compact,
}

export const filter = FilterM.filter(FilterMap)

export const Bottom: Bottom1<ArrayHKT> = {
  bottom: empty,
}

export const bottom = Bottom.bottom

export const Top: T.Top1<ArrayHKT> = {
  top: [{}],
}

export const top = Top.top
export const fromLazy = T.makeFromLazy<ArrayHKT>({ ...Top, ...Covariant })
export const fromValue = T.makeFromValue<ArrayHKT>({ ...Top, ...Covariant })
export const Do = fromLazy(() => Object.create(null) as Readonly<Record<never, never>>)

export const FoldMapWithIndex: FoldMapWithIndex1<ArrayHKT, number> = {
  foldMapWithIndex: (I) => (f) => (a) => a.reduce((b, a, i) => I.concat(b, f(i, a)), I.id),
}

export const foldMapWithIndex = FoldMapWithIndex.foldMapWithIndex

export const foldMap =
  <B>(I: Identity<B>) =>
  <A>(f: (a: A) => B) =>
    foldMapWithIndex(I)((_, a: A) => f(a))

export const FoldMap: FM.FoldMap1<ArrayHKT> = {
  foldMap,
}

export const concatenate = FM.concat(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)

export const ForEachWithIndex: ForEachWithIndex1<ArrayHKT, number> = {
  mapWithIndex,
  forEachWithIndex: <T2 extends HKT>(
    IBC: IB.IdentityBoth<T2> & CI.CovariantWithIndex<T2, number>,
  ) => {
    const map = CI.map(IBC)
    const tuple = IB.tuple<T2>({ ...IBC, map })

    return <A, B>(f: (index: number, a: A) => Kind<T2, B>) =>
      (array: ReadonlyArray<A>): Kind<T2, ReadonlyArray<B>> =>
        tuple(...array.map((a, i) => f(i, a)))
  },
}

export const forEachWithIndex = ForEachWithIndex

export const ForEach: FE.ForEach1<ArrayHKT> = {
  map,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const tuple = IB.tuple(IBC)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      (array: ReadonlyArray<A>): Kind<T2, ReadonlyArray<B>> =>
        tuple(...array.map(f))
  },
}

export const forEach = ForEach.forEach
export const sequence = FE.sequence(ForEach)

export const IdentityBoth: IB.IdentityBoth1<ArrayHKT> = {
  ...Top,
  ...AssociativeBoth,
}

export const tuple = IB.tuple<ArrayHKT>({ ...IdentityBoth, ...Covariant })

export const IdentityFlatten: IdentityFlatten1<ArrayHKT> = {
  ...Top,
  ...AssociativeFlatten,
}

export const PartitionMapWithIndex: PMI.PartitionMapWithIndex1<ArrayHKT, number> = {
  partitionMapWithIndex: (f) => (a) => {
    const es = a.map((a, i) => f(i, a))

    return [pipe(es, filter(isLeft), map(fromLeft)), pipe(es, filter(isRight), map(fromRight))]
  },
}

export const partitionMap = PMI.partitionMap(PartitionMapWithIndex)

export const PartitionMap: PM.PartitionMap1<ArrayHKT> = {
  partitionMap,
}

export const ReduceWithIndex: RI.ReduceWithIndex1<ArrayHKT, number> = {
  reduceWithIndex: (b, f) => (a) => a.reduce((b, a, i) => f(i, b, a), b),
}

export const reduceWithIndex = ReduceWithIndex.reduceWithIndex

export const reduce = RI.reduce(ReduceWithIndex)

export const Reduce: Reduce1<ArrayHKT> = {
  reduce,
}

export const ReduceRightWithIndex: RRI.ReduceRightWithIndex1<ArrayHKT, number> = {
  reduceRightWithIndex: (b, f) => (a) => a.reduceRight((b, a, i) => f(i, a, b), b),
}

export const reduceRightWithIndex = ReduceRightWithIndex.reduceRightWithIndex

export const reduceRight = RRI.reduceRight(ReduceRightWithIndex)

export const ReduceRight: ReduceRight1<ArrayHKT> = {
  reduceRight,
}

export const separate = PM.separate(PartitionMap)

export const Separate: Separate1<ArrayHKT> = {
  separate,
}
