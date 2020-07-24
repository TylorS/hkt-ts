import { Type, Types } from '../'

/**
 * @name Semigroup
 * @laws
 * Associativity: Semigroup.concat(Semigroup.concat(a, b), c) ≡ Semigroup.concat(a, Semigroup.concat(b, c))
 */
export interface Semigroup<T extends Types> {
  readonly concat: <A extends Type<T>>(a: A, b: A) => A
}
