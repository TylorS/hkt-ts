import { Uris } from '../'
import { Applicative, ApplicativeOptions, ApplicativeOptionsDefault } from './Applicative'
import { Chain, ChainOptions, ChainOptionsDefault } from './Chain'

/**
 * @name Monad
 * @laws
 * Left identity: M.chain(f, M.of(a)) ≡ f(a)
 * Right identity: M.chain(M.of, u) ≡ u
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Monad<T extends Uris = any, Options extends MonadOptions = MonadOptionsDefault>
  extends Applicative<T, Options>,
    Chain<T, Options> {
  readonly URI: T
}

export type MonadOptions = ApplicativeOptions & ChainOptions
export type MonadOptionsDefault = ApplicativeOptionsDefault & ChainOptionsDefault
