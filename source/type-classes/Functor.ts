import { Type, TypeParams, Types } from '../'

/**
 * @name Functor
 * @laws
 * Identity: F.map(x => x, a) ≡ a
 * Composition: F.map(x => f(g(x)), a) ≡ F.map(f, F.map(g, a))
 */
export interface Functor<T extends Types> {
  readonly map: {
    1: <A, B>(f: (a: A) => B, functor: Type<T, [A]>) => Type<T, [B]>
    2: <A, B, C>(f: (a: A) => B, functor: Type<T, [C, A]>) => Type<T, [C, B]>
    3: <A, B, C, D>(f: (a: A) => B, functor: Type<T, [C, D, A]>) => Type<T, [C, D, B]>
    4: <A, B, C, D, E>(f: (a: A) => B, functor: Type<T, [C, D, E, A]>) => Type<T, [C, D, E, B]>
    5: <A, B, C, D, E, F>(
      f: (a: A) => B,
      functor: Type<T, [C, D, E, F, A]>,
    ) => Type<T, [C, D, E, F, B]>
  }[TypeParams.Length<T>]
}
