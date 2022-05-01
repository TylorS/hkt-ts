import { Match } from '../function/Match'
import * as R from '../function/Refinement'
import { pipe } from '../function/function'
import * as Associative from '../typeclasses/concrete/Associative'
import * as Commutative from '../typeclasses/concrete/Commutative'
import { Concat } from '../typeclasses/concrete/Concat'
import * as D from '../typeclasses/concrete/Debug'
import * as E from '../typeclasses/concrete/Eq'
import { Identity } from '../typeclasses/concrete/Identity'
import * as I from '../typeclasses/concrete/Inverse'
import * as O from '../typeclasses/concrete/Ord'
import * as B from '../typeclasses/effect/Bounded'

import { Branded } from './Branded'
import { Just, Nothing } from './Maybe'

export const isNumber: R.Refinement<unknown, number> = (x: unknown): x is number =>
  typeof x === 'number'

export const isNan = Number.isNaN
export const isFinite = Number.isFinite
export const isSafeInteger = Number.isSafeInteger

export const parseInt: Match<string, number> = (s) => {
  const n = Number.parseInt(s, 10)

  return Number.isInteger(n) ? Just(n) : Nothing
}

export const parseFloat: Match<string, number> = (s) => {
  const n = Number.parseFloat(s)

  return isFinite(n) && !isNan(n) ? Just(n) : Nothing
}

export const Eq: E.Eq<number> = E.Strict

export const Ord: O.Ord<number> = {
  ...Eq,
  compare: (first, second) => (first < second ? -1 : first > second ? 1 : 0),
}

export const Debug: D.Debug<number> = {
  debug: (n) => JSON.stringify(n),
}

export const ConcatSub: Concat<number> = {
  concat: (first, second) => first - second,
}

export const ConcatDiv: Concat<number> = {
  concat: (first, second) => first / second,
}

export const AssociativeSum: Associative.Associative<number> = {
  concat: (first, second) => first + second,
}

export const AssociativeProduct: Associative.Associative<number> = {
  concat: (first, second) => first * second,
}

export const IdentitySum: Identity<number> = {
  ...AssociativeSum,
  id: 0,
}

export const IdentityProduct: Identity<number> = {
  ...AssociativeProduct,
  id: 1,
}

export const CommutativeSum: Commutative.Commutative<number> = AssociativeSum

export const CommutativeProduct: Commutative.Commutative<number> = AssociativeProduct

export const Bounded: B.Bounded<number> = {
  ...Ord,
  top: Infinity,
  bottom: -Infinity,
}

export const Inverse: I.Inverse<number> = {
  ...IdentitySum,
  inverse: ConcatSub.concat,
}

// Number types
export type Integer = Branded<{ readonly Integer: unique symbol }, number>
export const Integer = Branded<Integer>()

export type Float = Branded<{ readonly Float: unique symbol }, number>
export const Float = Branded<Float>()

// Number base categories
export type Negative = Branded<{ readonly Negative: unique symbol }, number>
export const Negative = Branded<Negative>()
export type NonNegative = Branded<{ readonly NonNegative: unique symbol }, number>
export const NonNegative = Branded<NonNegative>()
export type NonPositive = Branded<{ readonly NonPositive: unique symbol }, number>
export const NonPositive = Branded<NonPositive>()
export type NonZero = Branded<{ readonly NonZero: unique symbol }, number>
export const NonZero = Branded<NonZero>()
export type Positive = Branded<{ readonly Positive: unique symbol }, number>
export const Positive = Branded<Positive>()

// Base category refinements
export const isInteger: R.Refinement<number, Integer> = (n): n is Integer => Number.isInteger(n)
export const isFloat = R.not(isInteger) as R.Refinement<number, Float>

export const isNegative: R.Refinement<number, Negative> = (n): n is Negative => n < 0
export const isNonNegative: R.Refinement<number, NonNegative> = (n): n is NonNegative => n >= 0
export const isNonPositive: R.Refinement<number, NonPositive> = (n): n is NonPositive => n <= 0
export const isNonZero: R.Refinement<number, NonZero> = (n): n is NonZero => n !== 0
export const isPositive: R.Refinement<number, Positive> = (n): n is Positive => n > 0

// Compound refinements
export const isNegativeInteger = pipe(isInteger, R.and(isNegative))
export const isNegativeFloat = pipe(isFloat, R.and(isNegative))

export const isNonNegativeInteger = pipe(isInteger, R.and(isNonNegative))
export const isNonNegativeFloat = pipe(isFloat, R.and(isNonNegative))

export const isNonPositiveInteger = pipe(isInteger, R.and(isNonPositive))
export const isNonPositiveFloat = pipe(isFloat, R.and(isNonPositive))

export const isNonZeroInteger = pipe(isInteger, R.and(isNonZero))
export const isNonZeroFloat = pipe(isFloat, R.and(isNonZero))

export const isPositiveInteger = pipe(isInteger, R.and(isPositive))
export const isPositiveFloat = pipe(isFloat, R.and(isPositive))

// Compound types
export type NegativeInteger = R.OutputOf<typeof isNegativeInteger>
export const NegativeInteger = Branded<NegativeInteger>()

export type NegativeFloat = R.OutputOf<typeof isNegativeFloat>
export const NegativeFloat = Branded<NegativeFloat>()

export type NonNegativeInteger = R.OutputOf<typeof isNonNegativeInteger>
export const NonNegativeInteger = Branded<NonNegativeInteger>()

export type NonNegativeFloat = R.OutputOf<typeof isNonNegativeFloat>
export const NonNegativeFloat = Branded<NonNegativeFloat>()

export type NonPositiveInteger = R.OutputOf<typeof isNonPositiveInteger>
export const NonPositiveInteger = Branded<NonPositiveInteger>()

export type NonPositiveFloat = R.OutputOf<typeof isNonPositiveFloat>
export const NonPositiveFloat = Branded<NonPositiveFloat>()

export type NonZeroInteger = R.OutputOf<typeof isNonZeroInteger>
export const NonZeroInteger = Branded<NonZeroInteger>()
export type NonZeroFloat = R.OutputOf<typeof isNonZeroFloat>
export const NonZeroFloat = Branded<NonZeroFloat>()

export type PositiveInteger = R.OutputOf<typeof isPositiveInteger>
export const PositiveInteger = Branded<PositiveInteger>()
export type PositiveFloat = R.OutputOf<typeof isPositiveFloat>
export const PositiveFloat = Branded<PositiveFloat>()
