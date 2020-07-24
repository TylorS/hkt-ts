import { Type, TypeParams, Uris } from '../'

/**
 * @name Plus
 * @laws
 * Right identity: P.alt(a, P.zero()) ≡ a
 * Left identity: P.alt(P.zero(), a) ≡ a
 * Annihilation: P.map(f, P.zero()) ≡ P.zero()
 */
// @ts-expect-error Types is 'never' until extended externally
export interface Plus<T extends Uris = any> {
  readonly URI: T
  readonly zero: {
    1: <A>() => Type<T, [A]>
    2: <A, B>() => Type<T, [A, B]>
    3: <A, B, C>() => Type<T, [A, B, C]>
    4: <A, B, C, D>() => Type<T, [A, B, C, D]>
    5: <A, B, C, D, E>() => Type<T, [A, B, C, D, E]>
  }[TypeParams.Length<T>]
}
