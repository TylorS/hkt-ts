import { Branded } from './Branded.js'
import type { Match } from './Match.js'
import type * as M from './Maybe.js'
import * as R from './Refinement.js'
import * as Associative from './Typeclass/Associative.js'
import type * as B from './Typeclass/Bounded.js'
import * as Commutative from './Typeclass/Commutative.js'
import { Concat } from './Typeclass/Concat.js'
import * as D from './Typeclass/Debug.js'
import type * as E from './Typeclass/Eq.js'
import { Identity } from './Typeclass/Identity.js'
import * as I from './Typeclass/Inverse.js'
import type * as O from './Typeclass/Ord.js'
import { pipe } from './function.js'

export const isNumber: R.Refinement<unknown, number> = (x: unknown): x is number =>
  typeof x === 'number'

export const isNan = Number.isNaN
export const isFinite = Number.isFinite
export const isSafeInteger = Number.isSafeInteger

const Nothing: M.Nothing = {
  tag: 'Nothing',
}

const Just = <A>(value: A): M.Just<A> => ({
  tag: 'Just',
  value,
})

export const parseInt: Match<string, number> = (s) => {
  const n = Number.parseInt(s, 10)

  return Number.isInteger(n) ? Just(n) : Nothing
}

export const parseFloat: Match<string, number> = (s) => {
  const n = Number.parseFloat(s)

  return isFinite(n) && !isNan(n) ? Just(n) : Nothing
}

export const Eq: E.Eq<number> = { equals: (x, y) => x === y }

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
export const INTEGER = Symbol('INTEGER')
export type INTEGER = typeof INTEGER

export type Integer = Branded<{ readonly [INTEGER]: INTEGER }, number>
export const Integer = Branded<Integer>()

export const FLOAT = Symbol('FLOAT')
export type FLOAT = typeof FLOAT

export type Float = Branded<{ readonly [FLOAT]: FLOAT }, number>
export const Float = Branded<Float>()

// Number base categories
export const NEGATIVE = Symbol('NEGATIVE')
export type NEGATIVE = typeof NEGATIVE

export type Negative = Branded<{ readonly [NEGATIVE]: NEGATIVE }, number>
export const Negative = Branded<Negative>()
export const NegativeAssociativeSum = Negative.makeAssociative(AssociativeSum)
export const NegativeAssociativeProduct = Negative.makeAssociative(AssociativeProduct)
export const NegativeBounded = Negative.makeBounded(Bounded)
export const NegativeCommutativeSum = Negative.makeCommutative(CommutativeSum)
export const NegativeConcatSub = Negative.makeConcat(ConcatSub)
export const NegativeEq = Negative.makeEq(Eq)
export const NegativeIdentitySum = Negative.makeIdentity(IdentitySum)
export const NegativeIdentityProduct = Negative.makeIdentity(IdentityProduct)
export const NegativeOrd = Negative.makeOrd(Ord)
export const NegativeInverse = Negative.makeInverse(Inverse)

export const NON_NEGATIVE = Symbol('NON_NEGATIVE')
export type NON_NEGATIVE = typeof NON_NEGATIVE

export type NonNegative = Branded<{ readonly [NON_NEGATIVE]: NON_NEGATIVE }, number>
export const NonNegative = Branded<NonNegative>()
export const NonNegativeAssociativeSum = NonNegative.makeAssociative(AssociativeSum)
export const NonNegativeAssociativeProduct = NonNegative.makeAssociative(AssociativeProduct)
export const NonNegativeBounded = NonNegative.makeBounded(Bounded)
export const NonNegativeCommutativeSum = NonNegative.makeCommutative(CommutativeSum)
export const NonNegativeConcatSub = NonNegative.makeConcat(ConcatSub)
export const NonNegativeEq = NonNegative.makeEq(Eq)
export const NonNegativeIdentitySum = NonNegative.makeIdentity(IdentitySum)
export const NonNegativeIdentityProduct = NonNegative.makeIdentity(IdentityProduct)
export const NonNegativeOrd = NonNegative.makeOrd(Ord)
export const NonNegativeInverse = NonNegative.makeInverse(Inverse)

export const NON_POSITIVE = Symbol('NON_POSITIVE')
export type NON_POSITIVE = typeof NON_POSITIVE

export type NonPositive = Branded<{ readonly [NON_POSITIVE]: NON_POSITIVE }, number>
export const NonPositive = Branded<NonPositive>()
export const NonPositiveAssociativeSum = NonPositive.makeAssociative(AssociativeSum)
export const NonPositiveAssociativeProduct = NonPositive.makeAssociative(AssociativeProduct)
export const NonPositiveBounded = NonPositive.makeBounded(Bounded)
export const NonPositiveCommutativeSum = NonPositive.makeCommutative(CommutativeSum)
export const NonPositiveConcatSub = NonPositive.makeConcat(ConcatSub)
export const NonPositiveEq = NonPositive.makeEq(Eq)
export const NonPositiveIdentitySum = NonPositive.makeIdentity(IdentitySum)
export const NonPositiveIdentityProduct = NonPositive.makeIdentity(IdentityProduct)
export const NonPositiveOrd = NonPositive.makeOrd(Ord)
export const NonPositiveInverse = NonPositive.makeInverse(Inverse)

export const NON_ZERO = Symbol('NON_ZERO')
export type NON_ZERO = typeof NON_ZERO

export type NonZero = Branded<{ readonly [NON_ZERO]: NON_ZERO }, number>
export const NonZero = Branded<NonZero>()
export const NonZeroAssociativeSum = NonZero.makeAssociative(AssociativeSum)
export const NonZeroAssociativeProduct = NonZero.makeAssociative(AssociativeProduct)
export const NonZeroBounded = NonZero.makeBounded(Bounded)
export const NonZeroCommutativeSum = NonZero.makeCommutative(CommutativeSum)
export const NonZeroConcatSub = NonZero.makeConcat(ConcatSub)
export const NonZeroEq = NonZero.makeEq(Eq)
export const NonZeroIdentitySum = NonZero.makeIdentity(IdentitySum)
export const NonZeroIdentityProduct = NonZero.makeIdentity(IdentityProduct)
export const NonZeroOrd = NonZero.makeOrd(Ord)
export const NonZeroInverse = NonZero.makeInverse(Inverse)

export const POSITIVE = Symbol('POSITIVE')
export type POSITIVE = typeof POSITIVE

export type Positive = Branded<{ readonly [POSITIVE]: POSITIVE }, number>
export const Positive = Branded<Positive>()
export const PositiveAssociativeSum = Positive.makeAssociative(AssociativeSum)
export const PositiveAssociativeProduct = Positive.makeAssociative(AssociativeProduct)
export const PositiveBounded = Positive.makeBounded(Bounded)
export const PositiveCommutativeSum = Positive.makeCommutative(CommutativeSum)
export const PositiveConcatSub = Positive.makeConcat(ConcatSub)
export const PositiveEq = Positive.makeEq(Eq)
export const PositiveIdentitySum = Positive.makeIdentity(IdentitySum)
export const PositiveIdentityProduct = Positive.makeIdentity(IdentityProduct)
export const PositiveOrd = Positive.makeOrd(Ord)
export const PositiveInverse = Positive.makeInverse(Inverse)

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
export const NegativeIntegerAssociativeSum = NegativeInteger.makeAssociative(AssociativeSum)
export const NegativeIntegerAssociativeProduct = NegativeInteger.makeAssociative(AssociativeProduct)
export const NegativeIntegerBounded = NegativeInteger.makeBounded(Bounded)
export const NegativeIntegerCommutativeSum = NegativeInteger.makeCommutative(CommutativeSum)
export const NegativeIntegerConcatSub = NegativeInteger.makeConcat(ConcatSub)
export const NegativeIntegerEq = NegativeInteger.makeEq(Eq)
export const NegativeIntegerIdentitySum = NegativeInteger.makeIdentity(IdentitySum)
export const NegativeIntegerIdentityProduct = NegativeInteger.makeIdentity(IdentityProduct)
export const NegativeIntegerOrd = NegativeInteger.makeOrd(Ord)
export const NegativeIntegerInverse = NegativeInteger.makeInverse(Inverse)

export type NegativeFloat = R.OutputOf<typeof isNegativeFloat>
export const NegativeFloat = Branded<NegativeFloat>()
export const NegativeFloatAssociativeSum = NegativeFloat.makeAssociative(AssociativeSum)
export const NegativeFloatAssociativeProduct = NegativeFloat.makeAssociative(AssociativeProduct)
export const NegativeFloatBounded = NegativeFloat.makeBounded(Bounded)
export const NegativeFloatCommutativeSum = NegativeFloat.makeCommutative(CommutativeSum)
export const NegativeFloatConcatSub = NegativeFloat.makeConcat(ConcatSub)
export const NegativeFloatEq = NegativeFloat.makeEq(Eq)
export const NegativeFloatIdentitySum = NegativeFloat.makeIdentity(IdentitySum)
export const NegativeFloatIdentityProduct = NegativeFloat.makeIdentity(IdentityProduct)
export const NegativeFloatOrd = NegativeFloat.makeOrd(Ord)
export const NegativeFloatInverse = NegativeFloat.makeInverse(Inverse)

export type NonNegativeInteger = R.OutputOf<typeof isNonNegativeInteger>
export const NonNegativeInteger = Branded<NonNegativeInteger>()
export const NonNegativeIntegerAssociativeSum = NonNegativeInteger.makeAssociative(AssociativeSum)
export const NonNegativeIntegerAssociativeProduct =
  NonNegativeInteger.makeAssociative(AssociativeProduct)
export const NonNegativeIntegerBounded = NonNegativeInteger.makeBounded(Bounded)
export const NonNegativeIntegerCommutativeSum = NonNegativeInteger.makeCommutative(CommutativeSum)
export const NonNegativeIntegerConcatSub = NonNegativeInteger.makeConcat(ConcatSub)
export const NonNegativeIntegerEq = NonNegativeInteger.makeEq(Eq)
export const NonNegativeIntegerIdentitySum = NonNegativeInteger.makeIdentity(IdentitySum)
export const NonNegativeIntegerIdentityProduct = NonNegativeInteger.makeIdentity(IdentityProduct)
export const NonNegativeIntegerOrd = NonNegativeInteger.makeOrd(Ord)
export const NonNegativeIntegerInverse = NonNegativeInteger.makeInverse(Inverse)

export type NonNegativeFloat = R.OutputOf<typeof isNonNegativeFloat>
export const NonNegativeFloat = Branded<NonNegativeFloat>()
export const NonNegativeFloatAssociativeSum = NonNegativeFloat.makeAssociative(AssociativeSum)
export const NonNegativeFloatAssociativeProduct =
  NonNegativeFloat.makeAssociative(AssociativeProduct)
export const NonNegativeFloatBounded = NonNegativeFloat.makeBounded(Bounded)
export const NonNegativeFloatCommutativeSum = NonNegativeFloat.makeCommutative(CommutativeSum)
export const NonNegativeFloatConcatSub = NonNegativeFloat.makeConcat(ConcatSub)
export const NonNegativeFloatEq = NonNegativeFloat.makeEq(Eq)
export const NonNegativeFloatIdentitySum = NonNegativeFloat.makeIdentity(IdentitySum)
export const NonNegativeFloatIdentityProduct = NonNegativeFloat.makeIdentity(IdentityProduct)
export const NonNegativeFloatOrd = NonNegativeFloat.makeOrd(Ord)
export const NonNegativeFloatInverse = NonNegativeFloat.makeInverse(Inverse)

export type NonPositiveInteger = R.OutputOf<typeof isNonPositiveInteger>
export const NonPositiveInteger = Branded<NonPositiveInteger>()
export const NonPositiveIntegerAssociativeSum = NonPositiveInteger.makeAssociative(AssociativeSum)
export const NonPositiveIntegerAssociativeProduct =
  NonPositiveInteger.makeAssociative(AssociativeProduct)
export const NonPositiveIntegerBounded = NonPositiveInteger.makeBounded(Bounded)
export const NonPositiveIntegerCommutativeSum = NonPositiveInteger.makeCommutative(CommutativeSum)
export const NonPositiveIntegerConcatSub = NonPositiveInteger.makeConcat(ConcatSub)
export const NonPositiveIntegerEq = NonPositiveInteger.makeEq(Eq)
export const NonPositiveIntegerIdentitySum = NonPositiveInteger.makeIdentity(IdentitySum)
export const NonPositiveIntegerIdentityProduct = NonPositiveInteger.makeIdentity(IdentityProduct)
export const NonPositiveIntegerOrd = NonPositiveInteger.makeOrd(Ord)
export const NonPositiveIntegerInverse = NonPositiveInteger.makeInverse(Inverse)

export type NonPositiveFloat = R.OutputOf<typeof isNonPositiveFloat>
export const NonPositiveFloat = Branded<NonPositiveFloat>()
export const NonPositiveFloatAssociativeSum = NonPositiveFloat.makeAssociative(AssociativeSum)
export const NonPositiveFloatAssociativeProduct =
  NonPositiveFloat.makeAssociative(AssociativeProduct)
export const NonPositiveFloatBounded = NonPositiveFloat.makeBounded(Bounded)
export const NonPositiveFloatCommutativeSum = NonPositiveFloat.makeCommutative(CommutativeSum)
export const NonPositiveFloatConcatSub = NonPositiveFloat.makeConcat(ConcatSub)
export const NonPositiveFloatEq = NonPositiveFloat.makeEq(Eq)
export const NonPositiveFloatIdentitySum = NonPositiveFloat.makeIdentity(IdentitySum)
export const NonPositiveFloatIdentityProduct = NonPositiveFloat.makeIdentity(IdentityProduct)
export const NonPositiveFloatOrd = NonPositiveFloat.makeOrd(Ord)
export const NonPositiveFloatInverse = NonPositiveFloat.makeInverse(Inverse)

export type NonZeroInteger = R.OutputOf<typeof isNonZeroInteger>
export const NonZeroInteger = Branded<NonZeroInteger>()
export const NonZeroIntegerAssociativeSum = NonZeroInteger.makeAssociative(AssociativeSum)
export const NonZeroIntegerAssociativeProduct = NonZeroInteger.makeAssociative(AssociativeProduct)
export const NonZeroIntegerBounded = NonZeroInteger.makeBounded(Bounded)
export const NonZeroIntegerCommutativeSum = NonZeroInteger.makeCommutative(CommutativeSum)
export const NonZeroIntegerConcatSub = NonZeroInteger.makeConcat(ConcatSub)
export const NonZeroIntegerEq = NonZeroInteger.makeEq(Eq)
export const NonZeroIntegerIdentitySum = NonZeroInteger.makeIdentity(IdentitySum)
export const NonZeroIntegerIdentityProduct = NonZeroInteger.makeIdentity(IdentityProduct)
export const NonZeroIntegerOrd = NonZeroInteger.makeOrd(Ord)
export const NonZeroIntegerInverse = NonZeroInteger.makeInverse(Inverse)

export type NonZeroFloat = R.OutputOf<typeof isNonZeroFloat>
export const NonZeroFloat = Branded<NonZeroFloat>()
export const NonZeroFloatAssociativeSum = NonZeroFloat.makeAssociative(AssociativeSum)
export const NonZeroFloatAssociativeProduct = NonZeroFloat.makeAssociative(AssociativeProduct)
export const NonZeroFloatBounded = NonZeroFloat.makeBounded(Bounded)
export const NonZeroFloatCommutativeSum = NonZeroFloat.makeCommutative(CommutativeSum)
export const NonZeroFloatConcatSub = NonZeroFloat.makeConcat(ConcatSub)
export const NonZeroFloatEq = NonZeroFloat.makeEq(Eq)
export const NonZeroFloatIdentitySum = NonZeroFloat.makeIdentity(IdentitySum)
export const NonZeroFloatIdentityProduct = NonZeroFloat.makeIdentity(IdentityProduct)
export const NonZeroFloatOrd = NonZeroFloat.makeOrd(Ord)
export const NonZeroFloatInverse = NonZeroFloat.makeInverse(Inverse)

export type PositiveInteger = R.OutputOf<typeof isPositiveInteger>
export const PositiveInteger = Branded<PositiveInteger>()
export const PositiveIntegerAssociativeSum = PositiveInteger.makeAssociative(AssociativeSum)
export const PositiveIntegerAssociativeProduct = PositiveInteger.makeAssociative(AssociativeProduct)
export const PositiveIntegerBounded = PositiveInteger.makeBounded(Bounded)
export const PositiveIntegerCommutativeSum = PositiveInteger.makeCommutative(CommutativeSum)
export const PositiveIntegerConcatSub = PositiveInteger.makeConcat(ConcatSub)
export const PositiveIntegerEq = PositiveInteger.makeEq(Eq)
export const PositiveIntegerIdentitySum = PositiveInteger.makeIdentity(IdentitySum)
export const PositiveIntegerIdentityProduct = PositiveInteger.makeIdentity(IdentityProduct)
export const PositiveIntegerOrd = PositiveInteger.makeOrd(Ord)
export const PositiveIntegerInverse = PositiveInteger.makeInverse(Inverse)

export type PositiveFloat = R.OutputOf<typeof isPositiveFloat>
export const PositiveFloat = Branded<PositiveFloat>()
export const PositiveFloatAssociativeSum = PositiveFloat.makeAssociative(AssociativeSum)
export const PositiveFloatAssociativeProduct = PositiveFloat.makeAssociative(AssociativeProduct)
export const PositiveFloatBounded = PositiveFloat.makeBounded(Bounded)
export const PositiveFloatCommutativeSum = PositiveFloat.makeCommutative(CommutativeSum)
export const PositiveFloatConcatSub = PositiveFloat.makeConcat(ConcatSub)
export const PositiveFloatEq = PositiveFloat.makeEq(Eq)
export const PositiveFloatIdentitySum = PositiveFloat.makeIdentity(IdentitySum)
export const PositiveFloatIdentityProduct = PositiveFloat.makeIdentity(IdentityProduct)
export const PositiveFloatOrd = PositiveFloat.makeOrd(Ord)
export const PositiveFloatInverse = PositiveFloat.makeInverse(Inverse)
