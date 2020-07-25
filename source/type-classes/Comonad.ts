import { Type, TypeParams, Uris } from '../'
import { Extend } from './Extend'

/**
 * @name Comonad
 * @laws
 * Left identity: C.extend(C.extract, w) ≡ w
 * Right identity: C.extract(C.extend(f, w)) ≡ f(w)
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Comonad<T extends Uris = any> extends Extend<T> {
  readonly URI: T
  readonly extract: <A extends Type<T>>(comonad: A) => TypeParams.First<TypeParams.Of<A>>
}
