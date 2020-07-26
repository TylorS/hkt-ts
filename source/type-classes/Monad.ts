import { Uris } from '../'
import { Applicative, ApplicativeOptions } from './Applicative'
import { Chain, ChainOptions } from './Chain'

/**
 * @name Monad
 * @laws
 * Left identity: M.chain(f, M.of(a)) ≡ f(a)
 * Right identity: M.chain(M.of, u) ≡ u
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Monad<T extends Uris = any, Options extends MonadOptions = MonadOptions>
  extends Applicative<T, Options>,
    Chain<T, Options> {
  readonly URI: T
}

export type MonadOptions = ApplicativeOptions & ChainOptions
