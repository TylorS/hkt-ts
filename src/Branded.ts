/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Branded is a module to help you construct Branded types.
 */
import { M as B } from 'ts-toolbelt'

import { Constrain, HKT2, Params, Variance } from './HKT'
import * as Associative from './Typeclass/Associative'
import * as AB from './Typeclass/AssociativeBoth'
import { Bounded } from './Typeclass/Bounded'
import * as Commutative from './Typeclass/Commutative'
import { Concat } from './Typeclass/Concat'
import * as C from './Typeclass/Covariant'
import { Eq } from './Typeclass/Eq'
import { Identity } from './Typeclass/Identity'
import { Inverse } from './Typeclass/Inverse'
import { Ord } from './Typeclass/Ord'
import * as T from './Typeclass/Top'
import { unsafeCoerce } from './function'

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
export type Combine<T, U> = ValueOf<T> & ValueOf<U> & Brand<BrandOf<T> & BrandOf<U>>

/**
 * @category Constructor
 */
export const Branded = <A extends Branded<any, any>>() => {
  const constructor_ = <E extends ValueOf<A>>(e: E): Branded<BrandOf<A>, E> => unsafeCoerce(e)

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

  constructor_.makeInverse = (A: Inverse<ValueOf<A>>): Inverse<A> => unsafeCoerce(A)

  return constructor_
}

export const brand: <A extends Branded<any, any>>(value: ValueOf<A>) => A = unsafeCoerce

export const unwrap: <A extends Branded<any, any>>(value: A) => ValueOf<A> = unsafeCoerce

/**
 * Helper for removing all Branded values from a given type. Can be helpful for generating
 * an incoming type from a domain type.
 */
export type StripBranded<A> = A extends B.Primitive | Date
  ? ValueOf<A>
  : {
      readonly [K in keyof A]: StripBranded<A[K]>
    }

export interface BrandedHKT extends HKT2 {
  readonly type: Branded<this[Params.E], this[Params.A]>
}

export const Covariant: C.Covariant2<BrandedHKT> = {
  map: (f) => (k) => unsafeCoerce(f(k)),
}

export const map = Covariant.map
export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const tupled = C.tupled(Covariant)
export const mapTo = C.mapTo(Covariant)

export const AssociativeBoth: AB.AssociativeBoth2<BrandedHKT> = {
  both: (s) => (f) => unsafeCoerce([f, s] as const),
}

export const both = AssociativeBoth.both
export const tuple = AB.tuple<BrandedHKT>({ ...AssociativeBoth, ...Covariant })

export const makeTop =
  <BRAND>() =>
  <B>(
    value: B,
  ): T.Top2<
    Constrain<
      Constrain<BrandedHKT, Params.A, Variance.Invariant<B>>,
      Params.E,
      Variance.Contravariant<BRAND>
    >
  > => ({
    top: unsafeCoerce(value),
  })
