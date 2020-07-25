import { Uris } from '../'
import { Applicative, ApplicativeOptions, ApplicativeOptionsDefault } from './Applicative'
import { Plus, PlusOptions, PlusOptionsDefault } from './Plus'

/**
 * @name Alternative
 * @laws
 * Distributivity: A.ap(A.alt(a, b), c) ≡ A.alt(A.ap(a, c), A.ap(b, c))
 * Annihilation: A.ap(A.zero(), a) ≡ A.zero()
 */
export interface Alternative<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends AlternativeOptions = AlternativeOptionsDefault
> extends Applicative<T, Options>, Plus<T, Options> {
  readonly URI: T
}

export type AlternativeOptions = ApplicativeOptions & PlusOptions
export type AlternativeOptionsDefault = ApplicativeOptionsDefault & PlusOptionsDefault
