import { Type, Types } from '../'
import { Functor } from './Functor'

/**
 * @name Alt
 * @laws
 * Associativity: A.alt(A.alt(a, b), c) ≡ A.alt(a, A.alt(b, c))
 * Distributivity: A.map(f, A.alt(a, b)) ≡ A.alt(A.map(f, a), A.map(f, b))
 */
// @ts-expect-error Types is 'never' until extended externally
export interface Alt<T extends Types = any> extends Functor<T> {
  readonly URI: T
  readonly alt: <A extends Type<T>, B extends Type<T>>(a: A, b: B) => A | B
}
