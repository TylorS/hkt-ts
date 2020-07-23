import { Types } from '../Hkts'
import { Applicative } from './Applicative'
import { Chain } from './Chain'

/**
 * @name Monad
 * @laws
 * Left identity: M.chain(f, M.of(a)) ≡ f(a)
 * Right identity: M.chain(M.of, u) ≡ u
 */
export interface Monad<T extends Types> extends Applicative<T>, Chain<T> {}
