import { Cast } from 'ts-toolbelt/out/Any/Cast'

import { HKT, HKT2, Kind, Params } from '../HKT'
import { Debug } from '../Typeclass/Data/Debug'
import { Eq } from '../Typeclass/Data/Eq'
import { Ord, tuple } from '../Typeclass/Data/Ord'
import * as AE from '../Typeclass/Effect/AssociativeEither'
import { Bottom2 } from '../Typeclass/Effect/Bottom'
import { Compact2 } from '../Typeclass/Effect/Compact'
import { Compactable2 } from '../Typeclass/Effect/Compactable'
import * as C from '../Typeclass/Effect/Covariant'
import * as FilterM from '../Typeclass/Effect/FilterMap'
import * as FE from '../Typeclass/Effect/ForEach'
import * as IB from '../Typeclass/Effect/IdentityBoth'
import * as IE from '../Typeclass/Effect/IdentityEither'
import * as PM from '../Typeclass/Effect/PartitionMap'
import { Separate2 } from '../Typeclass/Effect/Separate'
import { makeFromValue } from '../Typeclass/Effect/Top'
import { flow, pipe } from '../function/function'

import { sort } from './Array'
import * as Either from './Either'
import * as Maybe from './Maybe'

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

export const PartitionMap: PM.PartitionMap2<RecordHKT> = {
  partitionMap: (f) => flow(map(f), separate),
}

export const partitionMap = PartitionMap.partitionMap
