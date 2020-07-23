import { PossibleValues, Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'
import { Functor } from './Functor'

/**
 * @name Bifunctor
 * @laws
 * Identity: B.bimap(x => x, x => x, a) ≡ a
 * Composition: B.bimap(x => f(g(x)), x => h(i(x)), a) ≡ B.bimap(f, h, B.bimap(g, i, a))
 */
export interface Bifunctor<T extends Types> extends Functor<T> {
  readonly bimap: <A, B, C, D, BF extends Type<T, [...PossibleValues, A, C]>>(
    f: (a: A) => B,
    g: (c: C) => D,
    bifunctor: BF,
  ) => Type<T, [...TypeParams.DropLast<BF, 2>, B, D]>
}
