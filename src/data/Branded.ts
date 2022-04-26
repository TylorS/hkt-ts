/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Branded is a module to help you construct Branded types.
 */
import { M } from 'ts-toolbelt'

import { Constrain, HKT2, Params, Variance } from '../HKT'
import { unsafeCoerce } from '../function/function'
import * as Associative from '../typeclasses/concrete/Associative'
import * as Commutative from '../typeclasses/concrete/Commutative'
import { Concat } from '../typeclasses/concrete/Concat'
import { Eq } from '../typeclasses/concrete/Eq'
import { Identity } from '../typeclasses/concrete/Identity'
import { Ord } from '../typeclasses/concrete/Ord'
import { AssociativeBoth2 } from '../typeclasses/effect/AssociativeBoth'
import { Bounded } from '../typeclasses/effect/Bounded'
import { Covariant2 } from '../typeclasses/effect/Covariant'
import { Top2 } from '../typeclasses/effect/Top'

export const BRAND = Symbol('@hkt-ts/Brand')
export type BRAND = typeof BRAND

export type Brand<T> = { readonly [BRAND]: (brand: T) => void }

/**
 * @category Type-level
 */
export type BrandOf<A> = [A] extends [Branded<infer Brand, infer _>] ? Brand : unknown

/**
 * @category Type-level
 */
export type ValueOf<A> = A extends Branded<BrandOf<A>, infer R> ? R : never

/**
 * @category Model
 */
export type Branded<B, T> = T & Brand<B>

/**
 * @category Type-level
 */
export type Combine<T, U> = Branded<BrandOf<T> & BrandOf<U>, ValueOf<T> & ValueOf<U>>

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

export const unwrap: <A extends Branded<any, any>>(value: A) => ValueOf<A> = unsafeCoerce

/**
 * Helper for removing all Branded values from a given type. Can be helpful for generating
 * an incoming type from a domain type.
 */
export type StripBranded<A> = A extends M.Primitive | Date
  ? ValueOf<A>
  : {
      readonly [K in keyof A]: StripBranded<A[K]>
    }

export interface BrandedHKT extends HKT2 {
  readonly type: Branded<this[Params.E], this[Params.A]>
}

export const Covariant: Covariant2<BrandedHKT> = {
  map: (f) => (k) => unsafeCoerce(f(k)),
}

export const AssociativeBoth: AssociativeBoth2<BrandedHKT> = {
  both: (s) => (f) => unsafeCoerce([f, s] as const),
}

export const makeTop =
  <BRAND>() =>
  <B>(
    value: B,
  ): Top2<
    Constrain<
      Constrain<BrandedHKT, Params.A, Variance.Invariant<B>>,
      Params.E,
      Variance.Contravariant<BRAND>
    >
  > => ({
    top: unsafeCoerce(value),
  })
