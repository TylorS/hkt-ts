import { Associative } from './Associative'
import { AssociativeIdentity } from './AssociativeIdentity'
import * as B from './Bounded'
import { Branded } from './Branded'
import { Concat } from './Concat'
import * as D from './Debug'
import * as E from './Eq'
import * as G from './Group'
import * as I from './Inverse'
import { Match } from './Match'
import { Just, Nothing } from './Maybe'
import * as O from './Ord'
import * as R from './Refinement'
import { pipe } from './function'

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

export const Eq: E.Eq<number> = E.fromEquals((a, b) => a === b)

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

export const AssociativeSum: Associative<number> = {
  concat: (first, second) => first + second,
}

export const AssociativeProduct: Associative<number> = {
  concat: (first, second) => first * second,
}

export const AssociativeIdentitySum: AssociativeIdentity<number> = {
  concat: AssociativeSum.concat,
  id: 0,
}

export const AssociativeIdentityProduct: AssociativeIdentity<number> = {
  concat: AssociativeProduct.concat,
  id: 1,
}

export const Bounded: B.Bounded<number> = {
  ...Ord,
  top: Infinity,
  bottom: -Infinity,
}

export const Inverse: I.Inverse<number> = {
  inverse: (a) => -a,
}

export const Group: G.Group<number> = {
  ...AssociativeIdentitySum,
  ...Inverse,
}

// Number types
export type Integer = Branded<number, { readonly Integer: unique symbol }>
export const Integer = Branded<Integer>()
export type Float = Branded<number, { readonly Float: unique symbol }>
export const Float = Branded<Float>()

// Number base categories
export type Negative = Branded<number, { readonly Negative: unique symbol }>
export const Negative = Branded<Negative>()
export type NonNegative = Branded<number, { readonly NonNegative: unique symbol }>
export const NonNegative = Branded<NonNegative>()
export type NonPositive = Branded<number, { readonly NonPositive: unique symbol }>
export const NonPositive = Branded<NonPositive>()
export type NonZero = Branded<number, { readonly NonZero: unique symbol }>
export const NonZero = Branded<NonZero>()
export type Positive = Branded<number, { readonly Positive: unique symbol }>
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
