import { SignatureOverride, Type, Uris } from '../'
import { CommonOptions, GetLength } from '../common'

/**
 * @name Contravariant
 * @laws
 * Identity: F.contramap(x => x, a) ≡ a
 * Composition: F.contramap(x => f(g(x)), a) ≡ F.contramap(g, F.contramap(f, a))
 */
export interface Contravariant<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends ContravariantOptions = ContravariantOptions
> {
  readonly URI: T
  readonly contramap: SignatureOverride<
    T,
    Options['contramap'],
    {
      1: <A, B>(f: (a: A) => B, type: Type<T, [B]>) => Type<T, [A]>
      2: <A, B, C>(f: (a: A) => B, type: Type<T, [C, B]>) => Type<T, [C, A]>
      3: <A, B, C, D>(f: (a: A) => B, type: Type<T, [C, D, B]>) => Type<T, [C, D, A]>
      4: <A, B, C, D, E>(f: (a: A) => B, type: Type<T, [C, D, E, B]>) => Type<T, [C, D, E, A]>
      5: <A, B, C, D, E, F>(
        f: (a: A) => B,
        type: Type<T, [C, D, E, F, B]>,
      ) => Type<T, [C, D, E, F, A]>
    }[GetLength<Options, T>]
  >
}

export type ContravariantOptions = CommonOptions & {
  readonly contramap?: string
}
