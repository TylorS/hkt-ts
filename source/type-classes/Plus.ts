import { Type, TypeDefinition, TypeParams, Uris } from '../'

/**
 * @name Plus
 * @laws
 * Right identity: P.alt(a, P.zero()) ≡ a
 * Left identity: P.alt(P.zero(), a) ≡ a
 * Annihilation: P.map(f, P.zero()) ≡ P.zero()
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Plus<T extends Uris = any, Options extends PlusOptions = PlusOptionsDefault> {
  readonly URI: T
  readonly zero: TypeDefinition<
    T,
    Options['zero'],
    {
      1: <A>() => Type<T, [A]>
      2: <A, B>() => Type<T, [A, B]>
      3: <A, B, C>() => Type<T, [A, B, C]>
      4: <A, B, C, D>() => Type<T, [A, B, C, D]>
      5: <A, B, C, D, E>() => Type<T, [A, B, C, D, E]>
    }[TypeParams.Length<T>]
  >
}

export type PlusOptions = {
  readonly zero: string
}

export type PlusOptionsDefault = {
  readonly zero: 'zero'
}
