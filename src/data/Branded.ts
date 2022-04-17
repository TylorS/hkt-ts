/**
 * Branded is a module to help you construct Branded types.

 */
import { M } from 'ts-toolbelt'

import * as Associative from '../typeclasses/concrete/Associative'
import { Bounded } from '../typeclasses/effect/Bounded'
import * as Commutative from '../typeclasses/concrete/Commutative'
import { Concat } from '../typeclasses/concrete/Concat'
import { Eq } from '../typeclasses/concrete/Eq'
import { Identity } from '../typeclasses/concrete/Identity'
import { Ord } from '../typeclasses/concrete/Ord'
import { unsafeCoerce } from '../function/function'

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
export const Branded = <A extends Branded<any, any>>() => {
  const constructor_ = <E extends ValueOf<A>>(e: E): Branded<E, BrandOf<A>> => unsafeCoerce(e)

  constructor_.makeEq = (A: Eq<ValueOf<A>>): Eq<A> => unsafeCoerce(A)

  constructor_.makeOrd = (A: Ord<ValueOf<A>>): Ord<A> => unsafeCoerce(A)

  constructor_.makeBounded = (A: Bounded<ValueOf<A>>): Bounded<A> => unsafeCoerce(A)

  constructor_.makeIdentity = (A: Identity<ValueOf<A>>): Identity<A> => unsafeCoerce(A)

  constructor_.makeConcat = (A: Concat<ValueOf<A>>): Concat<A> => unsafeCoerce(A)

  constructor_.makeAssociative = (
    A: Associative.Associative<ValueOf<A>>,
  ): Associative.Associative<A> => unsafeCoerce(A)

  constructor_.makeCommutative = (
    A: Commutative.Commutative<ValueOf<A>>,
  ): Commutative.Commutative<A> => unsafeCoerce(A)

  return constructor_
}

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
