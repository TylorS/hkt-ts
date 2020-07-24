import { Type, TypeParams, Types } from '../'
import { Extend } from './Extend'

/**
 * @name Comonad
 * @laws
 * Left identity: C.extend(C.extract, w) ≡ w
 * Right identity: C.extract(C.extend(f, w)) ≡ f(w)
 */
export interface Comonad<T extends Types> extends Extend<T> {
  readonly extract: <A extends Type<T>>(comonad: A) => TypeParams.First<TypeParams.Of<A>>
}
