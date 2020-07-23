import { PossibleValues, Type, Types } from '../Hkts'
import { Monoid } from './Monoid'

/**
 * @name Group
 * @laws
 * Right inverse: G.concat(a, G.invert(a)) ≡ G.empty()
 * Left inverse: G.concat(G.invert(a), a) ≡ G.empty()
 */
export interface Group<T extends Types> extends Monoid<T> {
  readonly invert: <A extends Type<T, PossibleValues>>(a: A) => A
}
