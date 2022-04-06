import { Associative } from './Associative'
import { AssociativeIdentity } from './AssociativeIdentity'
import * as D from './Debug'
import * as E from './Eq'
import * as O from './Ord'
import { Refinement } from './Refinement'
import { Lazy } from './function'

export const isBoolean: Refinement<unknown, boolean> = (u: unknown): u is boolean =>
  typeof u === 'boolean'

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
 * `boolean` AssociativeIdentity under conjunction.
 *
 * The `empty` value is `true`.
 *
 * @example
 * import { AssociativeIdentityAll } from 'hkt-ts/boolean'
 *
 * assert.deepStrictEqual(AssociativeIdentityAll.concat(true, true), true)
 * assert.deepStrictEqual(AssociativeIdentityAll.concat(true, false), false)
 *
 * @category instances
 */
export const AssociativeIdentityAll: AssociativeIdentity<boolean> = {
  concat: AssociativeAll.concat,
  id: true,
}

/**
 * `boolean` AssociativeIdentity under disjunction.
 *
 * The `empty` value is `false`.
 *
 * @example
 * import { AssociativeIdentityAny } from 'hkt-ts/boolean'
 *
 * assert.deepStrictEqual(AssociativeIdentityAny.concat(true, true), true)
 * assert.deepStrictEqual(AssociativeIdentityAny.concat(true, false), true)
 * assert.deepStrictEqual(AssociativeIdentityAny.concat(false, false), false)
 *
 * @category instances
 */
export const AssociativeIdentityAny: AssociativeIdentity<boolean> = {
  concat: AssociativeAny.concat,
  id: false,
}

export const Ord: O.Ord<boolean> = O.fromCompare((first, second) =>
  first < second ? -1 : first > second ? 1 : 0,
)

export const Debug: D.Debug<boolean> = {
  debug: (b) => JSON.stringify(b),
}
