import { Either, Left, Right, fromLeft, fromRight, isLeft, isRight } from './Either'
import { HKT, Kind, Params } from './HKT'
import { Maybe, isJust } from './Maybe'
import * as NEA from './NonEmptyArray'
import { Associative } from './Typeclass/Associative'
import * as AB from './Typeclass/AssociativeBoth'
import * as AE from './Typeclass/AssociativeEither'
import * as AF from './Typeclass/AssociativeFlatten'
import { Bottom1 } from './Typeclass/Bottom'
import { Compact1 } from './Typeclass/Compact'
import { Concat } from './Typeclass/Concat'
import * as C from './Typeclass/Covariant'
import * as CI from './Typeclass/CovariantWithIndex'
import { Debug } from './Typeclass/Debug'
import { Eq, fromEquals } from './Typeclass/Eq'
import * as FilterM from './Typeclass/FilterMap'
import * as FilterMI from './Typeclass/FilterMapWithIndex'
import * as FM from './Typeclass/FoldMap'
import * as FMWI from './Typeclass/FoldMapWithIndex'
import * as FE from './Typeclass/ForEach'
import { ForEachWithIndex1 } from './Typeclass/ForEachWithIndex'
import { Identity } from './Typeclass/Identity'
import * as IB from './Typeclass/IdentityBoth'
import * as IF from './Typeclass/IdentityFlatten'
import * as Ord from './Typeclass/Ord'
import * as PM from './Typeclass/PartitionMap'
import * as PMI from './Typeclass/PartitionMapWithIndex'
import { Reduce1 } from './Typeclass/Reduce'
import { ReduceRight1 } from './Typeclass/ReduceRight'
import * as RRI from './Typeclass/ReduceRightWithIndex'
import * as RI from './Typeclass/ReduceWithIndex'
import { Separate1 } from './Typeclass/Separate'
import * as T from './Typeclass/Top'
import { Arity2, pipe } from './function'
import * as N from './number'

export interface ArrayHKT extends HKT {
  readonly type: ReadonlyArray<this[Params.A]>
}

export const match =
  <A, B, C>(onEmpty: () => A, onValues: (values: NEA.NonEmptyArray<B>) => C) =>
  (values: ReadonlyArray<B>): A | C =>
    NEA.isNonEmpty(values) ? onValues(values) : onEmpty()

export const makeEq = <A>(E: Eq<A>): Eq<ReadonlyArray<A>> =>
  fromEquals((a, b) => a.length === b.length && a.every((a, i) => E.equals(a, b[i])))

export const makeOrd = <A>(O: Ord.Ord<A>): Ord.Ord<ReadonlyArray<A>> =>
  Ord.fromCompare((a, b) => {
    const lengthOrdering = pipe(
      N.Ord,
      Ord.contramap((a: readonly A[]) => a.length),
    ).compare(a, b)

    if (lengthOrdering !== 0) {
      return lengthOrdering
    }

    for (let i = 0; i < a.length; ++i) {
      const ai = a[i]
      const bi = b[i]
      const iOrdering = O.compare(ai, bi)

      if (iOrdering !== 0) {
        return iOrdering
      }
    }

    return 0
  })

export const concat =
  <A>(second: ReadonlyArray<A>) =>
  (first: ReadonlyArray<A>): ReadonlyArray<A> =>
    [...first, ...second]

export const makeAssociative = <A>(): Associative<ReadonlyArray<A>> => ({
  concat: (a, b) => [...a, ...b],
})

export const makeDebug = <A>(D: Debug<A>): Debug<ReadonlyArray<A>> => ({
  debug: (a) => `[
  ${a.map(D.debug).join(',\n  ')}
]`,
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
export const race = AE.tuple<ArrayHKT>({ ...AssociativeEither, ...Covariant })

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

export const filterMap = <A, B>(f: (a: A) => Maybe<B>) => filterMapWithIndex<A, B>((_, a) => f(a))

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

export const FoldMapWithIndex: FMWI.FoldMapWithIndex1<ArrayHKT, number> = {
  foldMapWithIndex: (I) => (f) => (a) => a.reduce((b, a, i) => I.concat(b, f(i, a)), I.id),
}

export const foldMapWithIndex = FoldMapWithIndex.foldMapWithIndex
export const toMap = FMWI.toMap(FoldMapWithIndex)

export const foldMap =
  <B>(I: Identity<B>) =>
  <A>(f: (a: A) => B) =>
    foldMapWithIndex(I)((_, a: A) => f(a))

export const FoldMap: FM.FoldMap1<ArrayHKT> = {
  foldMap,
}

export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const reverse = <A>(a: ReadonlyArray<A>): ReadonlyArray<A> => a.slice(0).reverse()
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
export const isEmpty = <A>(a: ReadonlyArray<A>): a is readonly [] => a.length === 0
export const isNonEmpty = NEA.isNonEmpty

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
export const mapAccum = FE.mapAccum(ForEach)

export const IdentityBoth: IB.IdentityBoth1<ArrayHKT> = {
  ...Top,
  ...AssociativeBoth,
}

export const tuple = IB.tuple<ArrayHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<ArrayHKT>({ ...IdentityBoth, ...Covariant })

export const IdentityFlatten: IF.IdentityFlatten1<ArrayHKT> = {
  ...Top,
  ...AssociativeFlatten,
}

export const PartitionMapWithIndex: PMI.PartitionMapWithIndex1<ArrayHKT, number> = {
  partitionMapWithIndex:
    <A, B, C>(f: (k: number, a: A) => Either<B, C>) =>
    (a: readonly A[]): readonly [readonly B[], readonly C[]] => {
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

export const sort =
  <A>(O: Ord.Ord<A>) =>
  (array: ReadonlyArray<A>): ReadonlyArray<A> =>
    array.slice(0).sort(O.compare)

export const difference = <A>(E: Eq<A>) => {
  const contain_ = contains(E)

  return (second: ReadonlyArray<A>) =>
    (first: ReadonlyArray<A>): ReadonlyArray<A> => {
      if (first.length === 0) {
        return second
      }

      if (second.length === 0) {
        return first
      }

      const diff: A[] = []

      for (const a of first) {
        if (!pipe(second, contain_(a))) {
          diff.push(a)
        }
      }

      for (const a of second) {
        if (!pipe(first, contain_(a))) {
          diff.push(a)
        }
      }

      return diff
    }
}

export const intersection = <A>(E: Eq<A>) => {
  const contain_ = contains(E)

  return (second: ReadonlyArray<A>) =>
    (first: ReadonlyArray<A>): ReadonlyArray<A> => {
      if (first.length === 0 || second.length === 0) {
        return []
      }

      const diff: A[] = []

      for (const a of first) {
        if (pipe(second, contain_(a))) {
          diff.push(a)
        }
      }

      for (const a of second) {
        if (pipe(first, contain_(a))) {
          diff.push(a)
        }
      }

      return diff
    }
}

export const union =
  <A>(C: Concat<A>) =>
  (second: ReadonlyArray<A>) =>
  (first: ReadonlyArray<A>): ReadonlyArray<A> => {
    const length = Math.max(first.length, second.length)
    const out: A[] = Array(length)

    for (let i = 0; i < length; ++i) {
      const hasF = i in first
      const hasS = i in second

      if (hasF && hasS) {
        out[i] = C.concat(first[i], second[i])
      } else if (hasF) {
        out[i] = first[i]
      } else {
        out[i] = second[i]
      }
    }

    return out
  }
