import { PossibleValues, Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'
import { Functor } from './Functor'

/**
 * @name Apply
 * @laws
 * Composition: A.ap(A.ap(A.map(f => g => x => f(g(x)), a), u), v) ≡ A.ap(a, A.ap(u, v))
 */
export interface Apply<T extends Types> extends Functor<T> {
  readonly ap: <A, B, F extends Type<T, [...PossibleValues, (a: A) => B]>>(
    f: F,
    value: Type<T, [...TypeParams.DropLast<F, 1>, A]>,
  ) => Type<T, [...TypeParams.DropLast<F, 1>, B]>
}
