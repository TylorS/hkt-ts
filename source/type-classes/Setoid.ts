import { PossibleValues, Type, Types } from '../Hkts'

/**
 * @name Setoid
 * @laws
 * Reflexivity: Setoid.equals(a, a) === true
 * Symmetry: Setoid.equals(a, b) === Setoid.equals(b, a)
 * Transitivity: if Setoid.equals(a, b) and Setoid.equals(b, c), then Setoid.equals(a, c)
 */
export interface Setoid<T extends Types> {
  readonly equals: <A extends Type<T, PossibleValues>>(a: A, b: A) => boolean
}
