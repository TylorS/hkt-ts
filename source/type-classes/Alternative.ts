import { Uris } from '../'
import { Applicative } from './Applicative'
import { Plus } from './Plus'

/**
 * @name Alternative
 * @laws
 * Distributivity: A.ap(A.alt(a, b), c) ≡ A.alt(A.ap(a, c), A.ap(b, c))
 * Annihilation: A.ap(A.zero(), a) ≡ A.zero()
 */
// @ts-expect-error Types is 'never' until extended externally
export interface Alternative<T extends Uris = any> extends Applicative<T>, Plus<T> {
  readonly URI: T
}
