import { Types } from '../'
import { Applicative } from './Applicative'
import { Plus } from './Plus'

/**
 * @name Alternative
 * @laws
 * Distributivity: A.ap(A.alt(a, b), c) ≡ A.alt(A.ap(a, c), A.ap(b, c))
 * Annihilation: A.ap(A.zero(), a) ≡ A.zero()
 */
export interface Alternative<T extends Types> extends Applicative<T>, Plus<T> {}
