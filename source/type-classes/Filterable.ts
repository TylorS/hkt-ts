import { PossibleValues, Type, Types } from '../Hkts'

/**
 * @name Filterable
 * @laws
 * Distributivity: F.filter(x => f(x) && g(x), a) ≡ F.filter(g, F.filter(f, a))
 * Identity: F.filter(x => true, a) ≡ a
 * Annihilation: F.filter(x => false, a) ≡ F.filter(x => false, b)
 */
export interface Filterable<T extends Types> {
  readonly filter: <A, F extends Type<T, [...PossibleValues, A]>>(
    predicate: (a: A) => boolean,
    f: F,
  ) => F
}
