import { PossibleValues, Type, Types } from '../Hkts'
import { Semigroupoid } from './Semigroupoid'

/**
 * @name Category
 * @laws
 * Right identity: M.compose(a, M.id()) ≡ a
 * Left identity: M.compose(M.id(), a) ≡ a
 */
export interface Category<T extends Types> extends Semigroupoid<T> {
  readonly id: <A, B, C extends PossibleValues = []>() => Type<T, [...C, A, B]>
}
