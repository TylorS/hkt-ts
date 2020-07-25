import { SignatureOverride, Type, TypeParams, Uris } from '../'
import { Extend, ExtendOptions, ExtendOptionsDefault } from './Extend'

/**
 * @name Comonad
 * @laws
 * Left identity: C.extend(C.extract, w) ≡ w
 * Right identity: C.extract(C.extend(f, w)) ≡ f(w)
 */
export interface Comonad<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends ComonadOptions = ComonadOptionsDefault
> extends Extend<T, Options> {
  readonly URI: T
  readonly extract: SignatureOverride<
    T,
    Options['extract'],
    <A extends Type<T>>(comonad: A) => TypeParams.First<TypeParams.Of<A>>
  >
}

export type ComonadOptions = ExtendOptions & {
  readonly extract: string
}

export type ComonadOptionsDefault = ExtendOptionsDefault & {
  readonly extract: 'extract'
}
