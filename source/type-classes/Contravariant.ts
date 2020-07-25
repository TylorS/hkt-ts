import { Type, TypeDefinition, TypeParams, Uris } from '../'

/**
 * @name Contravariant
 * @laws
 * Identity: F.contramap(x => x, a) ≡ a
 * Composition: F.contramap(x => f(g(x)), a) ≡ F.contramap(g, F.contramap(f, a))
 */
export interface Contravariant<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends ContravariantOptions = ContravariantOptionsDefault
> {
  readonly URI: T
  readonly contramap: TypeDefinition<
    T,
    Options['contramap'],
    {
      1: <A, B>(f: (a: A) => B, type: Type<T, [A]>) => Type<T, [B]>
      2: <A, B, C>(f: (a: A) => B, type: Type<T, [C, A]>) => Type<T, [C, B]>
      3: <A, B, C, D>(f: (a: A) => B, type: Type<T, [C, D, A]>) => Type<T, [C, D, B]>
      4: <A, B, C, D, E>(f: (a: A) => B, type: Type<T, [C, D, E, A]>) => Type<T, [C, D, E, B]>
      5: <A, B, C, D, E, F>(
        f: (a: A) => B,
        type: Type<T, [C, D, E, F, A]>,
      ) => Type<T, [C, D, E, F, B]>
    }[TypeParams.Length<T>]
  >
}

export type ContravariantOptions = {
  readonly contramap: string
}

export type ContravariantOptionsDefault = {
  readonly contramap: 'contramap'
}
