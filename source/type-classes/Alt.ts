import { SignatureOverride, Type, Uris } from '../'
import { Functor, FunctorOptions } from './Functor'

/**
 * @name Alt
 * @laws
 * Associativity: A.alt(A.alt(a, b), c) ≡ A.alt(a, A.alt(b, c))
 * Distributivity: A.map(f, A.alt(a, b)) ≡ A.alt(A.map(f, a), A.map(f, b))
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Alt<T extends Uris = any, Options extends AltOptions = AltOptions>
  extends Functor<T, Options> {
  readonly URI: T
  readonly alt: SignatureOverride<T, Options['alt'], <A extends Type<T>>(a: A, b: A) => A>
}

export type AltOptions = FunctorOptions & {
  readonly alt?: string
}
