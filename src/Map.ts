import { Either, Left, Right, isLeft } from './Either.js'
import { HKT, HKT2, Kind, Params } from './HKT.js'
import * as M from './Maybe.js'
import { Predicate } from './Predicate.js'
import { Refinement } from './Refinement.js'
import { Associative } from './Typeclass/Associative.js'
import * as AE from './Typeclass/AssociativeEither.js'
import { Bicovariant2 } from './Typeclass/Bicovariant.js'
import { Bottom2 } from './Typeclass/Bottom.js'
import { Compact2 } from './Typeclass/Compact.js'
import { Compactable2 } from './Typeclass/Compactable.js'
import { Concat } from './Typeclass/Concat.js'
import * as C from './Typeclass/Covariant.js'
import { Debug } from './Typeclass/Debug.js'
import { Eq, fromEquals } from './Typeclass/Eq.js'
import * as FilterM from './Typeclass/FilterMap.js'
import * as FM from './Typeclass/FoldMap.js'
import * as FE from './Typeclass/ForEach/index.js'
import { Identity } from './Typeclass/Identity.js'
import * as IB from './Typeclass/IdentityBoth.js'
import * as IE from './Typeclass/IdentityEither.js'
import { Ord } from './Typeclass/Ord.js'
import * as PM from './Typeclass/PartitionMap.js'
import { Separate2 } from './Typeclass/Separate.js'
import { makeFromValue } from './Typeclass/Top.js'
import { flow, pipe } from './function.js'

import Maybe = M.Maybe

export function withMutation<K, V>(f: (map: Map<K, V>) => void) {
  return (map: ReadonlyMap<K, V>): ReadonlyMap<K, V> => {
    const mutable = new Map(map)

    f(mutable)

    return mutable
  }
}

export const fromMap = <K, A>(m: Map<K, A>): ReadonlyMap<K, A> => new Map(m)

export function toMap<K, A>(m: ReadonlyMap<K, A>): Map<K, A> {
  return new Map(m)
}

export function makeDebug<K, A>(SK: Debug<K>, SA: Debug<A>): Debug<ReadonlyMap<K, A>> {
  return {
    debug: (m) => `Map<
  ${Array.from(m.entries())
    .map(([k, v]) => `  ${SK.debug(k)} => ${SA.debug(v)}`)
    .join('\n  ')}
>`,
  }
}

/**
 * Calculate the number of key/value pairs in a map
 */
export const size = <K, A>(m: ReadonlyMap<K, A>): number => m.size

/**
 * Test whether or not a map is empty
 */
export const isEmpty = <K, A>(m: ReadonlyMap<K, A>): boolean => m.size === 0

/**
 * Test whether or not a map is non-empty
 */
export const isNonEmpty = <K, A>(m: ReadonlyMap<K, A>): boolean => m.size > 0

/**
 * Test whether or not a key exists in a map
 */
export function member<K>(E: Eq<K>): <A>(k: K) => (m: ReadonlyMap<K, A>) => boolean {
  const lookupE = lookup(E)

  return (k) => flow(lookupE(k), M.isJust)
}

interface Next<A> {
  readonly done?: boolean
  readonly value: A
}

/**
 * Test whether or not a value is a member of a map
 */
export function elem<A>(E: Eq<A>): <K>(a: A) => (m: ReadonlyMap<K, A>) => boolean {
  return (a) => (m) => {
    const values = m.values()
    let e: Next<A>
    while (!(e = values.next()).done) {
      const v = e.value
      if (E.equals(a, v)) {
        return true
      }
    }
    return false
  }
}

/**
 * Get a sorted `ReadonlyArray` of the keys contained in a `ReadonlyMap`.
 */
export const keys =
  <K>(O: Ord<K>) =>
  <A>(m: ReadonlyMap<K, A>): ReadonlyArray<K> =>
    Array.from(m.keys()).sort(O.compare)

/**
 * Get a sorted `ReadonlyArray` of the values contained in a `ReadonlyMap`.
 */
export const values =
  <A>(O: Ord<A>) =>
  <K>(m: ReadonlyMap<K, A>): ReadonlyArray<A> =>
    Array.from(m.values()).sort(O.compare)

export function collect<K>(
  O: Ord<K>,
): <A, B>(f: (k: K, a: A) => B) => (m: ReadonlyMap<K, A>) => ReadonlyArray<B> {
  const keysO = keys(O)
  return <A, B>(f: (k: K, a: A) => B) =>
    (m: ReadonlyMap<K, A>): ReadonlyArray<B> => {
      const out: Array<B> = []
      const ks = keysO(m)
      for (const key of ks) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        out.push(f(key, m.get(key)!))
      }
      return out
    }
}

/**
 * Get a sorted `ReadonlyArray` of the key/value pairs contained in a `ReadonlyMap`.
 */
export const toReadonlyArray = <K>(
  O: Ord<K>,
): (<A>(m: ReadonlyMap<K, A>) => ReadonlyArray<readonly [K, A]>) =>
  collect(O)((k, a) => [k, a] as const)

/**
 * Insert or replace a key/value pair in a `ReadonlyMap`.
 */
export const upsertAt = <K>(
  E: Eq<K>,
): (<A>(k: K, a: A) => (m: ReadonlyMap<K, A>) => ReadonlyMap<K, A>) => {
  const lookupWithKeyE = lookupWithKey(E)
  return (k, a) => {
    const lookupWithKeyEk = lookupWithKeyE(k)
    return (m) => {
      const found = lookupWithKeyEk(m)

      if (M.isNothing(found)) {
        const out = new Map(m)
        out.set(k, a)

        return out
      } else if (found.value[1] !== a) {
        const out = new Map(m)
        out.set(found.value[0], a)

        return out
      }

      return m
    }
  }
}

/**
 * Delete a key and value from a map
 */
export const deleteAt = <K>(
  E: Eq<K>,
): ((k: K) => <A>(m: ReadonlyMap<K, A>) => ReadonlyMap<K, A>) => {
  const lookupWithKeyE = lookupWithKey(E)

  return (k) => (m) => {
    const found = lookupWithKeyE(k)(m)

    if (M.isJust(found)) {
      const r = new Map(m)
      r.delete(found.value[0])
      return r
    }

    return m
  }
}

export const updateAt = <K>(
  E: Eq<K>,
): (<A>(k: K, a: A) => (m: ReadonlyMap<K, A>) => Maybe<ReadonlyMap<K, A>>) => {
  const modifyAtE = modifyAt(E)

  return (k, a) => modifyAtE(k, () => a)
}

export const modifyAt = <K>(
  E: Eq<K>,
): (<A>(k: K, f: (a: A) => A) => (m: ReadonlyMap<K, A>) => Maybe<ReadonlyMap<K, A>>) => {
  const lookupWithKeyE = lookupWithKey(E)
  return <A>(k: K, f: (a: A) => A) =>
    (m: ReadonlyMap<K, A>) => {
      const found = lookupWithKeyE(k)(m)

      if (M.isNothing(found)) {
        return M.Nothing
      }

      const [fk, fv] = found.value
      const next = f(fv)

      if (next === fv) {
        return M.Just(m)
      }

      return M.Just(new Map([...m, [fk, next]]))
    }
}

/**
 * Delete a key and value from a map, returning the value as well as the subsequent map
 */
export function pop<K>(
  E: Eq<K>,
): (k: K) => <A>(m: ReadonlyMap<K, A>) => Maybe<readonly [A, ReadonlyMap<K, A>]> {
  const lookupE = lookup(E)
  const deleteAtE = deleteAt(E)
  return (k) => {
    const deleteAtEk = deleteAtE(k)

    return (m) =>
      pipe(
        m,
        lookupE(k),
        M.map((a) => [a, deleteAtEk(m)]),
      )
  }
}

/**
 * Lookup the value for a key in a `Map`.
 * If the result is a `Some`, the existing key is also returned.
 */
export function lookupWithKey<K>(
  E: Eq<K>,
): (k: K) => <A>(m: ReadonlyMap<K, A>) => Maybe<readonly [K, A]> {
  return (k: K) =>
    <A>(m: ReadonlyMap<K, A>) => {
      const entries = m.entries()

      let e: Next<[K, A]>
      while (!(e = entries.next()).done) {
        const [ka, a] = e.value
        if (E.equals(ka, k)) {
          return M.Just([ka, a])
        }
      }

      return M.Nothing
    }
}

/**
 * Lookup the value for a key in a `Map`.
 */
export function lookup<K>(E: Eq<K>): (k: K) => <A>(m: ReadonlyMap<K, A>) => Maybe<A> {
  const lookupWithKeyE = lookupWithKey(E)

  return (k) => (m) =>
    pipe(
      m,
      lookupWithKeyE(k),
      M.map(([, a]) => a),
    )
}

/**
 * Test whether or not one `Map` contains all of the keys and values contained in another `Map`
 */
export function isSubmap<K, A>(
  SK: Eq<K>,
  SA: Eq<A>,
): (that: ReadonlyMap<K, A>) => (me: ReadonlyMap<K, A>) => boolean {
  const lookupWithKeyS = lookupWithKey(SK)

  return (that: ReadonlyMap<K, A>) => (me) => {
    const entries = me.entries()
    let e: Next<readonly [K, A]>

    while (!(e = entries.next()).done) {
      const [k, a] = e.value
      const d2OptA = lookupWithKeyS(k)(that)

      if (M.isNothing(d2OptA) || !SK.equals(k, d2OptA.value[0]) || !SA.equals(a, d2OptA.value[1])) {
        return false
      }
    }

    return true
  }
}

export const empty: ReadonlyMap<never, never> =
  // the type annotation here is intended (otherwise it doesn't type-check)
  new Map<never, never>()

export function makeEq<K, A>(SK: Eq<K>, SA: Eq<A>): Eq<ReadonlyMap<K, A>> {
  const isSubmapSKSA = isSubmap(SK, SA)
  return fromEquals((x, y) => isSubmapSKSA(y)(x) && isSubmapSKSA(y)(x))
}

/**
 * Gets `Identity` instance for Maps given `Associative` instance for their values
 */
export function makeAssociative<K, A>(
  SK: Eq<K>,
  SA: Associative<A>,
): Associative<ReadonlyMap<K, A>> {
  const lookupWithKeyS = lookupWithKey(SK)
  return {
    concat: (mx, my) => {
      if (isEmpty(mx)) {
        return my
      }
      if (isEmpty(my)) {
        return mx
      }
      const r = new Map(mx)
      const entries = my.entries()
      let e: Next<readonly [K, A]>

      while (!(e = entries.next()).done) {
        const [k, a] = e.value
        const mxOptA = lookupWithKeyS(k)(mx)
        if (M.isJust(mxOptA)) {
          r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], a))
        } else {
          r.set(k, a)
        }
      }

      return r
    },
  }
}

/**
 * Create a map with one key/value pair
 */
export const singleton = <K, A>(k: K, a: A): ReadonlyMap<K, A> => new Map([[k, a]])

const _mapWithIndex = <K, A, B>(fa: ReadonlyMap<K, A>, f: (k: K, a: A) => B): ReadonlyMap<K, B> => {
  const m = new Map<K, B>()
  const entries = fa.entries()
  let e: Next<readonly [K, A]>

  while (!(e = entries.next()).done) {
    const [key, a] = e.value
    m.set(key, f(key, a))
  }

  return m
}

export const filterMapWithIndex =
  <K, A, B>(f: (k: K, a: A) => Maybe<B>) =>
  (fa: ReadonlyMap<K, A>): ReadonlyMap<K, B> => {
    const m = new Map<K, B>()
    const entries = fa.entries()

    let e: Next<readonly [K, A]>
    while (!(e = entries.next()).done) {
      const [k, a] = e.value
      const o = f(k, a)
      if (M.isJust(o)) {
        m.set(k, o.value)
      }
    }

    return m
  }

export function filterWithIndex<K, A, B extends A>(
  predicateWithIndex: (k: K, a: A) => a is B,
): (m: ReadonlyMap<K, A>) => ReadonlyMap<K, B>
export function filterWithIndex<K, A>(
  predicateWithIndex: (k: K, a: A) => boolean,
): <B extends A>(m: ReadonlyMap<K, B>) => ReadonlyMap<K, B>
export function filterWithIndex<K, A>(
  predicateWithIndex: (k: K, a: A) => boolean,
): (m: ReadonlyMap<K, A>) => ReadonlyMap<K, A>
export function filterWithIndex<K, A>(
  predicateWithIndex: (k: K, a: A) => boolean,
): (m: ReadonlyMap<K, A>) => ReadonlyMap<K, A> {
  return (m: ReadonlyMap<K, A>) => {
    const out = new Map<K, A>()
    const entries = m.entries()

    let e: Next<readonly [K, A]>
    while (!(e = entries.next()).done) {
      const [k, a] = e.value
      if (predicateWithIndex(k, a)) {
        out.set(k, a)
      }
    }

    return out
  }
}

export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): <K>(fa: ReadonlyMap<K, A>) => ReadonlyMap<K, B>
  <A>(predicate: Predicate<A>): <K, B extends A>(fb: ReadonlyMap<K, B>) => ReadonlyMap<K, B>
  <A>(predicate: Predicate<A>): <K>(fa: ReadonlyMap<K, A>) => ReadonlyMap<K, A>
} =
  <A>(predicate: Predicate<A>) =>
  <K>(fa: ReadonlyMap<K, A>) =>
    filterWithIndex<K, A>((_, a) => predicate(a))(fa)

export const filterMap: <A, B>(
  f: (a: A) => Maybe<B>,
) => <K>(fa: ReadonlyMap<K, A>) => ReadonlyMap<K, B> = (f) => (fa) =>
  pipe(
    fa,
    filterMapWithIndex((_, a) => f(a)),
  )

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 */
export const map: <A, B>(f: (a: A) => B) => <K>(fa: ReadonlyMap<K, A>) => ReadonlyMap<K, B> =
  (f) => (fa) =>
    _mapWithIndex(fa, (_, a) => f(a))

export const mapWithIndex: <K, A, B>(
  f: (k: K, a: A) => B,
) => (fa: ReadonlyMap<K, A>) => ReadonlyMap<K, B> = (f) => (fa) => _mapWithIndex(fa, f)

export const makeUnionAssociative = <K, A>(
  E: Eq<K>,
  S: Associative<A>,
): Associative<ReadonlyMap<K, A>> => {
  const unionES = union(E, S)

  return {
    concat: (first, second) => unionES(second)(first),
  }
}

export const makeIntersectionAssociative = <K, A>(
  E: Eq<K>,
  S: Associative<A>,
): Associative<ReadonlyMap<K, A>> => {
  const intersectionES = intersection(E, S)

  return {
    concat: (first, second) => intersectionES(second)(first),
  }
}

export const makeDifferenceConcat =
  <K>(E: Eq<K>) =>
  <A>(): Concat<ReadonlyMap<K, A>> => {
    const differenceE = difference(E)

    return {
      concat: (first, second) => differenceE(second)(first),
    }
  }

export const reduce = <K>(
  O: Ord<K>,
): (<B, A>(b: B, f: (b: B, a: A) => B) => (m: ReadonlyMap<K, A>) => B) => {
  const reduceWithIndexO = reduceWithIndex(O)

  return (b, f) => reduceWithIndexO(b, (_, b, a) => f(b, a))
}

export const foldMapOrd = <K>(
  O: Ord<K>,
): (<M>(M: Identity<M>) => <A>(f: (a: A) => M) => (m: ReadonlyMap<K, A>) => M) => {
  const foldMapWithIndexO = foldMapWithIndex(O)

  return (M) => {
    const foldMapWithIndexOM = foldMapWithIndexO(M)
    return (f) => foldMapWithIndexOM((_, a) => f(a))
  }
}

export const reduceRight = <K>(
  O: Ord<K>,
): (<B, A>(b: B, f: (a: A, b: B) => B) => (m: ReadonlyMap<K, A>) => B) => {
  const reduceRightWithIndexO = reduceRightWithIndex(O)

  return (b, f) => reduceRightWithIndexO(b, (_, b, a) => f(b, a))
}

export const reduceWithIndex = <K>(
  O: Ord<K>,
): (<B, A>(b: B, f: (k: K, b: B, a: A) => B) => (m: ReadonlyMap<K, A>) => B) => {
  const keysO = keys(O)
  return (b, f) => (m) => {
    let out = b
    for (const k of keysO(m)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      out = f(k, out, m.get(k)!)
    }

    return out
  }
}

export const foldMapWithIndex = <K>(
  O: Ord<K>,
): (<M>(
  M: Associative<M> & Identity<M>,
) => <A>(f: (k: K, a: A) => M) => (m: ReadonlyMap<K, A>) => M) => {
  const keysO = keys(O)

  return (M) => (f) => (m) => {
    let out = M.id
    for (const k of keysO(m)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      out = M.concat(out, f(k, m.get(k)!))
    }
    return out
  }
}

export const reduceRightWithIndex = <K>(
  O: Ord<K>,
): (<B, A>(b: B, f: (k: K, a: A, b: B) => B) => (m: ReadonlyMap<K, A>) => B) => {
  const keysO = keys(O)

  return (b, f) => (m) => {
    let out = b
    const ks = keysO(m)
    const len = ks.length

    for (let i = len - 1; i >= 0; i--) {
      const k = ks[i]
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      out = f(k, m.get(k)!, out)
    }

    return out
  }
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

export const union = <K, A>(
  E: Eq<K>,
  C: Concat<A>,
): ((second: ReadonlyMap<K, A>) => (first: ReadonlyMap<K, A>) => ReadonlyMap<K, A>) => {
  const lookupE = lookup(E)

  return (second) => (first) => {
    if (isEmpty(first)) {
      return second
    }

    if (isEmpty(second)) {
      return first
    }

    const out: Map<K, A> = new Map()
    const firstEntries = first.entries()

    let e: Next<readonly [K, A]>
    while (!(e = firstEntries.next()).done) {
      const [k, a] = e.value
      const oka = lookupE(k)(second)
      if (M.isJust(oka)) {
        out.set(k, C.concat(a, oka.value))
      } else {
        out.set(k, a)
      }
    }

    const secondEntries = second.entries()

    while (!(e = secondEntries.next()).done) {
      const [k, a] = e.value
      const oka = lookupE(k)(out)

      if (M.isNothing(oka)) {
        out.set(k, a)
      }
    }

    return out
  }
}

export const intersection = <K, A>(
  E: Eq<K>,
  C: Concat<A>,
): ((second: ReadonlyMap<K, A>) => (first: ReadonlyMap<K, A>) => ReadonlyMap<K, A>) => {
  const lookupE = lookup(E)
  return (second) => (first) => {
    if (isEmpty(first) || isEmpty(second)) {
      return empty
    }

    const out: Map<K, A> = new Map()
    const entries = first.entries()
    let e: Next<readonly [K, A]>

    while (!(e = entries.next()).done) {
      const [k, a] = e.value
      const oka = lookupE(k)(second)
      if (M.isJust(oka)) {
        out.set(k, C.concat(a, oka.value))
      }
    }

    return out
  }
}

export const difference = <K>(
  E: Eq<K>,
): (<A>(_second: ReadonlyMap<K, A>) => (first: ReadonlyMap<K, A>) => ReadonlyMap<K, A>) => {
  const memberE = member(E)
  return <A>(second: ReadonlyMap<K, A>) =>
    (first: ReadonlyMap<K, A>) => {
      if (isEmpty(first)) {
        return second
      }

      if (isEmpty(second)) {
        return first
      }

      const out: Map<K, A> = new Map()
      const firstEntries = first.entries()

      let e: Next<readonly [K, A]>
      while (!(e = firstEntries.next()).done) {
        const [k, a] = e.value
        if (!memberE(k)(second)) {
          out.set(k, a)
        }
      }

      const secondEntries = second.entries()

      while (!(e = secondEntries.next()).done) {
        const [k, a] = e.value
        if (!memberE(k)(first)) {
          out.set(k, a)
        }
      }

      return out
    }
}

export interface MapHKT extends HKT2 {
  readonly type: ReadonlyMap<this[Params.E], this[Params.A]>
}

export const Covariant: C.Covariant2<MapHKT> = {
  map,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const AssociativeEither: AE.AssociativeEither2<MapHKT> = {
  either: (s) => (f) => isEmpty(f) ? pipe(s, map(Right)) : pipe(f, map(Left)),
}

export const either = AssociativeEither.either
export const orElse = AE.orElse<MapHKT>({ ...AssociativeEither, ...Covariant })

export const Bicovariant: Bicovariant2<MapHKT> = {
  bimap: (f, g) => (kind) => new Map(Array.from(kind).map(([k, v]) => [f(k), g(v)])),
}

export const bimap = Bicovariant.bimap

export const Bottom: Bottom2<MapHKT> = {
  bottom: empty,
}

export const IdentityEither: IE.IdentityEither2<MapHKT> = {
  ...AssociativeEither,
  ...Bottom,
}

export const Separate: Separate2<MapHKT> = {
  separate: <K, A, B>(kind: ReadonlyMap<K, Either<A, B>>) => {
    const lefts = new Map<K, A>()
    const rights = new Map<K, B>()

    for (const [k, either] of kind) {
      if (isLeft(either)) {
        lefts.set(k, either.left)
      } else {
        rights.set(k, either.right)
      }
    }

    return [lefts, rights]
  },
}

export const separate = Separate.separate

export const FilterMap: FilterM.FilterMap2<MapHKT> = {
  filterMap,
}

export const compact = FilterM.compact(FilterMap)

export const Compact: Compact2<MapHKT> = {
  compact,
}

export const Compactable: Compactable2<MapHKT> = {
  compact,
  separate,
}

export const ForEach: FE.ForEach2<MapHKT> = {
  map,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const fromValue = makeFromValue(IBC)
    const tuple = IB.tuple(IBC)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      <E1>(kind: ReadonlyMap<E1, A>): Kind<T2, ReadonlyMap<E1, B>> =>
        isEmpty(kind)
          ? fromValue(empty)
          : pipe(
              kind,
              map(f),
              (x) =>
                tuple(
                  ...Array.from(x.entries()).map(([k, kind]) =>
                    pipe(
                      kind,
                      IBC.map((a) => new Map([[k, a]])),
                    ),
                  ),
                ),
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

export const FoldMap: FM.FoldMap2<MapHKT> = {
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

export const PartitionMap: PM.PartitionMap2<MapHKT> = {
  partitionMap: (f) => flow(map(f), separate),
}

export const partitionMap = PartitionMap.partitionMap
