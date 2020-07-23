import { PossibleValues, Type, Types } from '../Hkts'
import { Functor } from './Functor'

/**
 * @name Alt
 * @laws
 * Associativity: A.alt(A.alt(a, b), c) ≡ A.alt(a, A.alt(b, c))
 * Distributivity: A.map(f, A.alt(a, b)) ≡ A.alt(A.map(f, a), A.map(f, b))
 */
export interface Alt<T extends Types> extends Functor<T> {
  readonly alt: <A extends Type<T, PossibleValues>, B extends Type<T, PossibleValues>>(
    a: A,
    b: B,
  ) => A | B
}
