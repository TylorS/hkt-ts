import { Type, TypeParams, Uris } from '../'
import { Semigroup } from './Semigroup'

/**
 * @name Monoid
 * @laws
 * Right identity: M.concat(a, M.empty()) ≡ a
 * Left identity: M.concat(M.empty(), a) ≡ a
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Monoid<T extends Uris = any> extends Semigroup<T> {
  readonly URI: T
  readonly empty: {
    1: <A>() => Type<T, [A]>
    2: <A, B>() => Type<T, [A, B]>
    3: <A, B, C>() => Type<T, [A, B, C]>
    4: <A, B, C, D>() => Type<T, [A, B, C, D]>
    5: <A, B, C, D, E>() => Type<T, [A, B, C, D, E]>
  }[TypeParams.Length<T>]
}
