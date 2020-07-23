import { PossibleValues, Type, Types } from '../Hkts'
import { Semigroup } from './Semigroup'

/**
 * @name Monoid
 * @laws
 * Right identity: M.concat(a, M.empty()) ≡ a
 * Left identity: M.concat(M.empty(), a) ≡ a
 */
export interface Monoid<T extends Types> extends Semigroup<T> {
  readonly empty: <A extends PossibleValues>() => Type<T, A>
}
