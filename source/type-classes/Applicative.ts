import { Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'
import { Apply } from './Apply'

/**
 * @name Applicative
 * @laws
 * Identity: A.ap(A.of(x => x), v) ≡ v
 * Homomorphism: A.ap(A.of(f), A.of(x)) ≡ A.of(f(x))
 * Interchange: A.ap(u, A.of(y)) ≡ A.ap(A.of(f => f(y)), u)
 */
export interface Applicative<T extends Types> extends Apply<T> {
  readonly of: {
    1: <A>(value: A) => Type<T, [A]>
    2: <A, B>(value: B) => Type<T, [A, B]>
    3: <A, B, C>(value: C) => Type<T, [A, B, C]>
    4: <A, B, C, D>(value: D) => Type<T, [A, B, C, D]>
    5: <A, B, C, D, E>(value: E) => Type<T, [A, B, C, D, E]>
  }[TypeParams.Length<T>]
}
