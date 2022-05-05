import { Associative } from '../Typeclass/concrete/Associative'
import { Commutative } from '../Typeclass/concrete/Commutative'
import * as D from '../Typeclass/concrete/Debug'
import * as E from '../Typeclass/concrete/Eq'
import { Identity } from '../Typeclass/concrete/Identity'
import * as I from '../Typeclass/concrete/Inverse'
import * as O from '../Typeclass/concrete/Ord'
import { Refinement as B } from '../function/Refinement'
import { Lazy } from '../function/function'

export const isBoolean: B<unknown, boolean> = (u: unknown): u is boolean => typeof u === 'boolean'

/**
 * Defines the fold over a boolean value.
 * Takes two thunks `onTrue`, `onFalse` and a `boolean` value.
 * If `value` is false, `onFalse()` is returned, otherwise `onTrue()`.
 */
export const match =
  <A, B>(onFalse: Lazy<A>, onTrue: Lazy<B>) =>
  (value: boolean): A | B =>
    value ? onTrue() : onFalse()

export const Eq: E.Eq<boolean> = {
  equals: (first, second) => first === second,
}

/**
 * `boolean` Associative under conjunction.
 *
 * @example
 * import { AssociativeAll } from 'hkt-ts/boolean'
 *
 * assert.deepStrictEqual(AssociativeAll.concat(true, true), true)
 * assert.deepStrictEqual(AssociativeAll.concat(true, false), false)
 *
 * @category instances
 */
export const AssociativeAll: Associative<boolean> = {
  concat: (first, second) => first && second,
}

export const CommutativeAll: Commutative<boolean> = AssociativeAll

/**
 * `boolean` Associative under disjunction.
 *
 * @example
 * import { AssociativeAny } from 'hkt-ts/boolean'
 *
 * assert.deepStrictEqual(AssociativeAny.concat(true, true), true)
 * assert.deepStrictEqual(AssociativeAny.concat(true, false), true)
 * assert.deepStrictEqual(AssociativeAny.concat(false, false), false)
 *
 * @category instances
 */
export const AssociativeAny: Associative<boolean> = {
  concat: (first, second) => first || second,
}

/**
 * `boolean` Identity
 *
 * The `id` value is `true`.
 * @category instances
 */
export const All: Identity<boolean> = {
  ...AssociativeAll,
  id: true,
}

/**
 * `boolean` AssociativeIdentity under disjunction.
 *
 * The `id` value is `false`.
 * @category instances
 */
export const Any: Identity<boolean> = {
  ...AssociativeAny,
  id: false,
}

export const Ord: O.Ord<boolean> = O.fromCompare((first, second) =>
  first < second ? -1 : first > second ? 1 : 0,
)

export const Debug: D.Debug<boolean> = {
  debug: (b) => JSON.stringify(b),
}

export const InverseAny: I.Inverse<boolean> = {
  ...Any,
  inverse: (a, b) => (a ? !b : b),
}

export const InverseAll: I.Inverse<boolean> = {
  ...All,
  inverse: (a, b) => (a ? !b : b),
}
