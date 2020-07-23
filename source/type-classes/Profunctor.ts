import { PossibleValues, Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'
import { Functor } from './Functor'

/**
 * @name Profunctor
 * @laws
 * Identity: P.promap(x => x, x => x, a) ≡ a
 * Composition: P.promap(x => f(g(x)), x => h(i(x)), a) ≡ P.promap(g, h, P.promap(f, i, a))
 */
export interface Profunctor<T extends Types> extends Functor<T> {
  readonly promap: <A, B, C, D, F extends Type<T, [...PossibleValues, B, C]>>(
    f: (a: A) => B,
    g: (c: C) => D,
    profunctor: F,
  ) => Type<T, [...TypeParams.DropLast<F, 2>, A, D]>
}
