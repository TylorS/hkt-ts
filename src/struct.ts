import { Cast } from 'ts-toolbelt/out/Any/Cast.js'

import { Associative } from './Typeclass/Associative.js'
import { Identity } from './Typeclass/Identity.js'

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
