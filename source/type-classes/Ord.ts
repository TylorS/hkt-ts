import { Type, Types } from '../'
import { Setoid } from './Setoid'

/**
 * @name Ord
 * @laws
 * Totality: Ord.lte(a, b) or Ord.lte(b, a)
 * Antisymmetry: if Ord.lte(a, b) and Ord.lte(b, a), then Ord.equals(a, b)
 * Transitivity: if Ord.lte(a, b) and Ord.lte(b, c), then Ord.lte(a, c)
 */
export interface Ord<T extends Types> extends Setoid<T> {
  readonly lte: <A extends Type<T>>(a: A, b: A) => boolean
}
