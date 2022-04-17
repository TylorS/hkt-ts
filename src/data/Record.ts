import { sort } from './Array'
import { Debug } from '../typeclasses/concrete/Debug'
import { Eq } from '../typeclasses/concrete/Eq'
import { Just, Maybe, Nothing, isNothing } from './Maybe'
import { Ord, tuple } from '../typeclasses/concrete/Ord'
import { pipe } from '../function/function'

export type ReadonlyRecord<K extends string, T> = { readonly [_ in K]: T }

export const fromRecord = <K extends string, A>(r: Record<K, A>): ReadonlyRecord<K, A> => ({ ...r })

export const toRecord = <K extends string, A>(r: ReadonlyRecord<K, A>): Record<K, A> => ({ ...r })

export const size = <A>(r: ReadonlyRecord<string, A>): number => Object.keys(r).length

export const keys =
  (O: Ord<string>) =>
  <K extends string, A>(r: Record<K, A>): ReadonlyArray<K> =>
    pipe(Object.keys(r) as unknown as ReadonlyArray<K>, sort(O))

export const values =
  <A>(O: Ord<A>) =>
  <K extends string>(r: Record<K, A>): ReadonlyArray<A> =>
    pipe(Object.values(r) as unknown as ReadonlyArray<A>, sort(O))

export const entries =
  <A>(OK: Ord<string>, OV: Ord<A>) =>
  <K extends string>(r: Record<K, A>): ReadonlyArray<readonly [K, A]> =>
    pipe(Object.entries(r) as any as ReadonlyArray<readonly [K, A]>, sort(tuple(OK, OV)))

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
  <K extends string>(r: ReadonlyRecord<K, A>): Maybe<ReadonlyRecord<K, A>> => {
    if (!has(k, r)) {
      return Nothing
    }
    if (r[k] === a) {
      return Just(r)
    }
    const out: Record<K, A> = Object.assign({}, r)
    out[k] = a

    return Just(out)
  }

export const modifyAt =
  <A>(k: string, f: (a: A) => A) =>
  <K extends string>(r: ReadonlyRecord<K, A>): Maybe<ReadonlyRecord<K, A>> => {
    if (!has(k, r)) {
      return Nothing
    }
    const next = f(r[k])

    if (next === r[k]) {
      return Just(r)
    }

    const out: Record<K, A> = Object.assign({}, r)
    out[k] = next
    return Just(out)
  }

export function pop<K extends string>(
  k: K,
): <KS extends string, A>(
  r: ReadonlyRecord<KS, A>,
) => Maybe<readonly [A, ReadonlyRecord<string extends K ? string : Exclude<KS, K>, A>]>
export function pop(
  k: string,
): <A>(r: ReadonlyRecord<string, A>) => Maybe<readonly [A, ReadonlyRecord<string, A>]> {
  const deleteAtk = deleteAt(k)
  return (r) => {
    const oa = pipe(r, lookup(k))

    return isNothing(oa) ? Nothing : Just([oa.value, deleteAtk(r)])
  }
}

export function lookup<A>(k: string): (r: ReadonlyRecord<string, A>) => Maybe<A> {
  return (r) => (has(k, r) ? Just(r[k]) : Nothing)
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
