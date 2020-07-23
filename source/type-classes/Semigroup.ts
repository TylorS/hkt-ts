import { PossibleValues, Type, Types } from '../Hkts'

/**
 * @name Semigroup
 * @laws
 * Associativity: Semigroup.concat(Semigroup.concat(a, b), c) ≡ Semigroup.concat(a, Semigroup.concat(b, c))
 */
export interface Semigroup<T extends Types> {
  readonly concat: <A extends Type<T, PossibleValues>>(a: A, b: A) => A
}
