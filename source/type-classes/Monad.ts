import { Uris } from '../'
import { Applicative } from './Applicative'
import { Chain } from './Chain'

/**
 * @name Monad
 * @laws
 * Left identity: M.chain(f, M.of(a)) ≡ f(a)
 * Right identity: M.chain(M.of, u) ≡ u
 */
// @ts-expect-error Types is 'never' until extended externally
export interface Monad<T extends Uris = any> extends Applicative<T>, Chain<T> {
  readonly URI: T
}
