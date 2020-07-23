import { PossibleValues, Type, Types } from '../Hkts'
import { Apply } from './Apply'

/**
 * @name Applicative
 * @laws
 * Identity: A.ap(A.of(x => x), v) ≡ v
 * Homomorphism: A.ap(A.of(f), A.of(x)) ≡ A.of(f(x))
 * Interchange: A.ap(u, A.of(y)) ≡ A.ap(A.of(f => f(y)), u)
 */
export interface Applicative<T extends Types> extends Apply<T> {
  readonly of: <A extends PossibleValues>(...values: A) => Type<T, A>
}
