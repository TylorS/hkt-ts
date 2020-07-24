import { Type, Types } from '../'
import { Monoid } from './Monoid'

/**
 * @name Group
 * @laws
 * Right inverse: G.concat(a, G.invert(a)) ≡ G.empty()
 * Left inverse: G.concat(G.invert(a), a) ≡ G.empty()
 */
// @ts-expect-error Types is 'never' until extended externally
export interface Group<T extends Types = any> extends Monoid<T> {
  readonly URI: T
  readonly invert: <A extends Type<T>>(a: A) => A
}
