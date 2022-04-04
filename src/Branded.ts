/**
 * Branded is a module to help you construct Branded types.

 */
import { M } from 'ts-toolbelt'

import { unsafeCoerce } from './function'

export const BRAND = Symbol('@hkt-ts/Brand')
export type BRAND = typeof BRAND

export type Brand<T> = { readonly [BRAND]: (brand: T) => void }

/**
 * @category Type-level
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type BrandOf<A> = [A] extends [Branded<infer _, infer Brand>] ? Brand : unknown
/**
 * @category Type-level
 */
export type ValueOf<A> = A extends Branded<infer R, BrandOf<A>> ? R : never

/**
 * @category Model
 */
export type Branded<T, B> = T & Brand<B>

/**
 * @category Type-level
 */
export type Combine<T, U> = Branded<ValueOf<T> & ValueOf<U>, BrandOf<T> & BrandOf<U>>

/**
 * @category Constructor
 */
export const Branded =
  <A extends Branded<any, any>>() =>
  <E extends ValueOf<A>>(e: E): Branded<E, BrandOf<A>> =>
    unsafeCoerce(e)

export const brand: <A extends Branded<any, any>>(value: ValueOf<A>) => A = unsafeCoerce

/**
 * Helper for removing all Branded values from a given type. Can be helpful for generating
 * an incoming type from a domain type.
 */
export type StripBranded<A> = A extends M.Primitive | Date
  ? ValueOf<A>
  : {
      readonly [K in keyof A]: StripBranded<A[K]>
    }
