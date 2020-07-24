import { Type, Uris } from '../'

/**
 * @name Setoid
 * @laws
 * Reflexivity: Setoid.equals(a, a) === true
 * Symmetry: Setoid.equals(a, b) === Setoid.equals(b, a)
 * Transitivity: if Setoid.equals(a, b) and Setoid.equals(b, c), then Setoid.equals(a, c)
 */
// @ts-expect-error Types is 'never' until extended externally
export interface Setoid<T extends Uris = any> {
  readonly URI: T
  readonly equals: <A extends Type<T>>(a: A, b: A) => boolean
}
