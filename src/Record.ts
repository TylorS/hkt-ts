import { Cast } from 'ts-toolbelt/out/Any/Cast.js'

import { sort } from './Array.js'
import * as Either from './Either.js'
import { HKT, HKT2, Kind, Params } from './HKT.js'
import * as Maybe from './Maybe.js'
import * as AE from './Typeclass/AssociativeEither.js'
import { Bottom2 } from './Typeclass/Bottom.js'
import { Compact2 } from './Typeclass/Compact.js'
import { Compactable2 } from './Typeclass/Compactable.js'
import * as C from './Typeclass/Covariant.js'
import { Debug } from './Typeclass/Debug.js'
import { Eq } from './Typeclass/Eq.js'
import * as FilterM from './Typeclass/FilterMap.js'
import * as FM from './Typeclass/FoldMap.js'
import { FoldMapWithIndex2, FoldMapWithIndex2EC } from './Typeclass/FoldMapWithIndex.js'
import * as FE from './Typeclass/ForEach/index.js'
import { Identity } from './Typeclass/Identity.js'
import * as IB from './Typeclass/IdentityBoth.js'
import * as IE from './Typeclass/IdentityEither.js'
import { Ord, tuple } from './Typeclass/Ord.js'
import * as PM from './Typeclass/PartitionMap.js'
import { Reduce2 } from './Typeclass/Reduce.js'
import { ReduceRight2 } from './Typeclass/ReduceRight.js'
import { ReduceRightWithIndex2, ReduceRightWithIndex2EC } from './Typeclass/ReduceRightWithIndex.js'
import { ReduceWithIndex2, ReduceWithIndex2EC } from './Typeclass/ReduceWithIndex.js'
import { Separate2 } from './Typeclass/Separate.js'
import { makeFromValue } from './Typeclass/Top.js'
import { flow, pipe } from './function.js'

export type ReadonlyRecord<K extends string, T> = { readonly [_ in K]: T }

export const fromRecord = <K extends string, A>(r: Record<K, A>): ReadonlyRecord<K, A> => ({ ...r })

export const toRecord = <K extends string, A>(r: ReadonlyRecord<K, A>): Record<K, A> => ({ ...r })

export const size = <A>(r: ReadonlyRecord<string, A>): number => Object.keys(r).length

export const empty: ReadonlyRecord<never, never> = {}

export const keys =
  (O: Ord<string>) =>
  <K extends string, A>(r: Record<K, A>): ReadonlyArray<K> =>
    pipe(Object.keys(r) as unknown as ReadonlyArray<K>, sort(O as Ord<K>))

export const values =
  <A>(O: Ord<A>) =>
  <K extends string>(r: Record<K, A>): ReadonlyArray<A> =>
    pipe(Object.values(r) as unknown as ReadonlyArray<A>, sort(O))

export const entries =
  <A>(OK: Ord<string>, OV: Ord<A>) =>
  <K extends string>(r: Record<K, A>): ReadonlyArray<readonly [K, A]> =>
    pipe(Object.entries(r) as any as ReadonlyArray<readonly [K, A]>, sort(tuple(OK as Ord<K>, OV)))

export const isEmpty = <A>(r: ReadonlyRecord<string, A>) => size(r) === 0

export const upsertAt =
  <A>(k: string, a: A) =>
  (r: ReadonlyRecord<string, A>): ReadonlyRecord<string, A> => {
    if (k in r && r[k] === a) {
      return r
    }
    const out: Record<string, A> = Object.assign({}, r)
    out[k] = a
    return out
  }

export const has = <K extends string>(k: string, r: ReadonlyRecord<K, unknown>): k is K => k in r

export function deleteAt<K extends string>(
  k: K,
): <KS extends string, A>(
  r: ReadonlyRecord<KS, A>,
) => ReadonlyRecord<string extends K ? string : Exclude<KS, K>, A>
export function deleteAt(
  k: string,
): <A>(r: ReadonlyRecord<string, A>) => ReadonlyRecord<string, A> {
  return <A>(r: ReadonlyRecord<string, A>) => {
    if (!(k in r)) {
      return r
    }
    const out: Record<string, A> = Object.assign({}, r)
    delete out[k]
    return out
  }
}

export const updateAt =
  <A>(k: string, a: A) =>
  <K extends string>(r: ReadonlyRecord<K, A>): Maybe.Maybe<ReadonlyRecord<K, A>> => {
    if (!has(k, r)) {
      return Maybe.Nothing
    }
    if (r[k] === a) {
      return Maybe.Just(r)
    }
    const out: Record<K, A> = Object.assign({}, r)
    out[k] = a

    return Maybe.Just(out)
  }

export const modifyAt =
  <A>(k: string, f: (a: A) => A) =>
  <K extends string>(r: ReadonlyRecord<K, A>): Maybe.Maybe<ReadonlyRecord<K, A>> => {
    if (!has(k, r)) {
      return Maybe.Nothing
    }
    const next = f(r[k])

    if (next === r[k]) {
      return Maybe.Just(r)
    }

    const out: Record<K, A> = Object.assign({}, r)
    out[k] = next
    return Maybe.Just(out)
  }

export function pop<K extends string>(
  k: K,
): <KS extends string, A>(
  r: ReadonlyRecord<KS, A>,
) => Maybe.Maybe<readonly [A, ReadonlyRecord<string extends K ? string : Exclude<KS, K>, A>]>
export function pop(
  k: string,
): <A>(r: ReadonlyRecord<string, A>) => Maybe.Maybe<readonly [A, ReadonlyRecord<string, A>]> {
  const deleteAtk = deleteAt(k)
  return (r) => {
    const oa = pipe(r, lookup(k))

    return Maybe.isNothing(oa) ? Maybe.Nothing : Maybe.Just([oa.value, deleteAtk(r)])
  }
}

export function lookup<A>(k: string): (r: ReadonlyRecord<string, A>) => Maybe.Maybe<A> {
  return (r) => (has(k, r) ? Maybe.Just(r[k]) : Maybe.Nothing)
}

export function mapWithIndex<A, B>(
  f: (k: string, a: A) => B,
): (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, B> {
  return (r) => {
    const out: Record<string, B> = {}
    for (const k in r) {
      if (has(k, r)) {
        out[k] = f(k, r[k])
      }
    }
    return out
  }
}

export function map<A, B>(
  f: (a: A) => B,
): (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, B> {
  return mapWithIndex((_, a) => f(a))
}

export function collect(
  O: Ord<string>,
): <K extends string, A, B>(
  f: (k: K, a: A) => B,
) => (r: ReadonlyRecord<string, A>) => ReadonlyArray<B> {
  const keysO = keys(O)

  return <K extends string, A, B>(f: (k: K, a: A) => B) =>
    (r: ReadonlyRecord<K, A>) => {
      const out: Array<B> = []
      for (const key of keysO(r)) {
        out.push(f(key, r[key]))
      }
      return out
    }
}

export function makeDebug(O: Ord<string>): <A>(S: Debug<A>) => Debug<ReadonlyRecord<string, A>> {
  return <A>(S: Debug<A>) => ({
    debug: (r: ReadonlyRecord<string, A>) => {
      const elements = collect(O)((k, a: A) => `${JSON.stringify(k)}:${S.debug(a)}`)(r).join(',')
      return elements === '' ? '{}' : `{${elements}}`
    },
  })
}

export function makeEq<A>(E: Eq<A>): Eq<ReadonlyRecord<string, A>> {
  return {
    equals: (a, b) =>
      Object.is(a, b) ? true : Object.entries(a).every(([k, a]) => E.equals(a, b[k])),
  }
}

export interface RecordHKT extends HKT2 {
  readonly type: ReadonlyRecord<Cast<this[Params.E], string>, this[Params.A]>
}

export const Covariant: C.Covariant2<RecordHKT> = {
  map,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const AssociativeEither: AE.AssociativeEither2<RecordHKT> = {
  either: (s) => (f) => isEmpty(f) ? pipe(s, map(Either.Right)) : pipe(f, map(Either.Left)),
}

export const either = AssociativeEither.either
export const orElse = AE.orElse<RecordHKT>({ ...AssociativeEither, ...Covariant })

export const Bottom: Bottom2<RecordHKT> = {
  bottom: empty,
}

export const IdentityEither: IE.IdentityEither2<RecordHKT> = {
  ...AssociativeEither,
  ...Bottom,
}

export const Separate: Separate2<RecordHKT> = {
  separate: <K extends string, A, B>(kind: ReadonlyRecord<K, Either.Either<A, B>>) => {
    const lefts = {} as Record<K, A>
    const rights = {} as Record<K, B>

    for (const [k, either] of Object.entries<Either.Either<A, B>>(kind)) {
      if (Either.isLeft(either)) {
        lefts[k as K] = either.left
      } else {
        rights[k as K] = either.right
      }
    }

    return [lefts, rights]
  },
}

export const separate = Separate.separate

export const FilterMap: FilterM.FilterMap2<RecordHKT> = {
  filterMap:
    <A, B>(f: (a: A) => Maybe.Maybe<B>) =>
    <E extends string>(kind: ReadonlyRecord<E, A>): ReadonlyRecord<E, B> =>
      (isEmpty(kind)
        ? empty
        : Object.fromEntries(
            Object.entries(kind).flatMap(([k, v]) =>
              pipe(
                v as A,
                f,
                Maybe.match(
                  () => [],
                  (b) => [[k, b]] as const,
                ),
              ),
            ),
          )) as ReadonlyRecord<E, B>,
}

export const filterMap = FilterMap.filterMap
export const compact = FilterM.compact(FilterMap)

export const Compactable: Compactable2<RecordHKT> = {
  compact,
  separate,
}

export const Compact: Compact2<RecordHKT> = {
  compact: FilterM.compact(FilterMap),
}

export const ForEach: FE.ForEach2<RecordHKT> = {
  map,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const fromValue = makeFromValue(IBC)
    const tuple = IB.tuple(IBC)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      <E1 extends string>(kind: ReadonlyRecord<E1, A>): Kind<T2, ReadonlyRecord<E1, B>> =>
        isEmpty(kind)
          ? fromValue(empty)
          : pipe(
              kind,
              map(f),
              (x) =>
                Object.entries(x).map(([k, kind]) =>
                  pipe(
                    kind,
                    IBC.map((a) => new Map([[k, a]])),
                  ),
                ),
              (x) => tuple(...x),
              IBC.map((maps) => {
                const output = new Map()

                for (const map of maps) {
                  map.forEach((b, k) => output.set(k, b))
                }

                return output
              }),
            )
  },
}

export const forEach = ForEach.forEach
export const sequence = FE.sequence(ForEach)
export const mapAccum = FE.mapAccum(ForEach)
export const foldMap = FE.foldMap(ForEach)

export const FoldMap: FM.FoldMap2<RecordHKT> = {
  foldMap,
}
export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
export const reduceAssociative = FM.reduceAssociative(FoldMap)
export const reduceCommutative = FM.reduceCommutative(FoldMap)
export const reduceIdentity = FM.reduceIdentity(FoldMap)
export const toArray = FM.toArray(FoldMap)
export const reduce = FM.reduce(FoldMap)
export const reverse = FM.reverse<RecordHKT>({ ...FoldMap, ...ForEach })

export const foldMapWithIndex =
  <B>(I: Identity<B>) =>
  <K extends string, A>(f: (key: K, a: A) => B) =>
  (r: ReadonlyRecord<K, A>): B =>
    Object.entries<A>(r).reduce((b, [k, a]) => I.concat(b, f(k as K, a)), I.id)

export const FoldMapWithIndex: FoldMapWithIndex2<RecordHKT, string> = {
  foldMapWithIndex,
}

export const makeFoldMapWithIndex = <K extends string>(): FoldMapWithIndex2EC<RecordHKT, K, K> =>
  FoldMapWithIndex as FoldMapWithIndex2EC<RecordHKT, K, K>

export const Reduce: Reduce2<RecordHKT> = {
  reduce,
}

export const ReduceWithIndex: ReduceWithIndex2<RecordHKT, string> = {
  reduceWithIndex:
    <B, A>(b: B, f: (k: string, b: B, a: A) => B) =>
    <E>(k: ReadonlyRecord<Cast<E, string>, A>): B =>
      Object.entries<A>(k).reduce((b, [k, v]) => f(k, b, v), b),
}

export const reduceWithIndex = ReduceWithIndex.reduceWithIndex

export const makeReduceWithIndex = <K extends string>(): ReduceWithIndex2EC<RecordHKT, K, K> =>
  ReduceWithIndex as ReduceWithIndex2EC<RecordHKT, K, K>

export const ReduceRight: ReduceRight2<RecordHKT> = {
  reduceRight:
    <B, A>(b: B, f: (a: A, b: B) => B) =>
    <E>(kind: ReadonlyRecord<Cast<E, string>, A>) =>
      reduce(b, (b: B, a: A) => f(a, b))(reverse(kind)),
}

export const reduceRight = ReduceRight.reduceRight

export const ReduceRightWithIndex: ReduceRightWithIndex2<RecordHKT, string> = {
  reduceRightWithIndex:
    <B, A>(b: B, f: (k: string, a: A, b: B) => B) =>
    <E>(k: ReadonlyRecord<Cast<E, string>, A>): B =>
      Object.entries<A>(k)
        .reverse()
        .reduce((b, [k, v]) => f(k, v, b), b),
}

export const makeReduceRightWithIndex = <K extends string>(): ReduceRightWithIndex2EC<
  RecordHKT,
  K,
  K
> => ReduceRightWithIndex as ReduceRightWithIndex2EC<RecordHKT, K, K>

export const PartitionMap: PM.PartitionMap2<RecordHKT> = {
  partitionMap: (f) => flow(map(f), separate),
}

export const partitionMap = PartitionMap.partitionMap
