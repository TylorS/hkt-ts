import { Cast } from 'ts-toolbelt/out/Any/Cast'

import { Associative } from '../typeclasses/concrete/Associative'
import { Identity } from '../typeclasses/concrete/Identity'

export type StructEntries = ReadonlyArray<readonly [PropertyKey, any]>

export const fromEntries = <Entries extends StructEntries>(
  ...entries: Entries
): FromEntries<Entries> => Object.fromEntries(entries) as FromEntries<Entries>

export type FromEntries<Entries extends StructEntries, R = unknown> = Entries extends readonly [
  readonly [infer K, infer V],
  ...infer Rest,
]
  ? FromEntries<Cast<Rest, StructEntries>, Intersect<R, KV<Cast<K, PropertyKey>, V>>>
  : { readonly [K in keyof R]: R[K] }

export type KV<K extends PropertyKey, V> = {
  readonly [_ in K]: V
}

export type Intersect<A, B> = {
  readonly [K in keyof A | keyof B]: K extends keyof B ? B[K] : A[Cast<K, keyof A>]
}

export const makeAssignAssociative = <A extends object = never>(): Associative<A> => ({
  concat: (first, second) => ({ ...first, ...second }),
})

export const empty: Readonly<Record<PropertyKey, never>> = Object.create(null)

export const makeAssignIdentity = <A extends object = never>(): Identity<A> => ({
  ...makeAssignAssociative<A>(),
  id: empty,
})

/**
 * Creates a new object by recursively evolving a shallow copy of `a`, according to the `transformation` functions.
 *
 * @example
 * import { pipe } from 'hkt-ts'
 * import { evolve } from 'hkt-ts/struct'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     { a: 'a', b: 1 },
 *     evolve({
 *       a: (a) => a.length,
 *       b: (b) => b * 2
 *     })
 *   ),
 *   { a: 1, b: 2 }
 * )
 */
export const evolve =
  <A, F extends { [K in keyof A]: (a: A[K]) => unknown }>(transformations: F) =>
  (a: A): { [K in keyof F]: ReturnType<F[K]> } => {
    const out: Record<string, unknown> = {}
    for (const k in a) {
      out[k] = transformations[k](a[k])
    }
    return out as any
  }
