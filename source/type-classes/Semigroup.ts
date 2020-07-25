import { Type, Uris } from '../'

/**
 * @name Semigroup
 * @laws
 * Associativity: Semigroup.concat(Semigroup.concat(a, b), c) ≡ Semigroup.concat(a, Semigroup.concat(b, c))
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Semigroup<T extends Uris = any> {
  readonly URI: T
  readonly concat: <A extends Type<T>>(a: A, b: A) => A
}
