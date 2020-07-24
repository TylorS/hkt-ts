import { Type, TypeParams, Types } from '../'
import { Functor } from './Functor'

/**
 * @name Bifunctor
 * @laws
 * Identity: B.bimap(x => x, x => x, a) ≡ a
 * Composition: B.bimap(x => f(g(x)), x => h(i(x)), a) ≡ B.bimap(f, h, B.bimap(g, i, a))
 */
export interface Bifunctor<T extends Types> extends Functor<T> {
  readonly bimap: {
    2: <A, B, C, D>(f: (a: A) => B, g: (c: C) => D, bifunctor: Type<T, [A, C]>) => Type<T, [B, D]>
    3: <A, B, C, D, E>(
      f: (a: A) => B,
      g: (c: C) => D,
      bifunctor: Type<T, [E, A, C]>,
    ) => Type<T, [E, B, D]>
    4: <A, B, C, D, E, F>(
      f: (a: A) => B,
      g: (c: C) => D,
      bifunctor: Type<T, [E, F, A, C]>,
    ) => Type<T, [E, F, B, D]>
    5: <A, B, C, D, E, F, G>(
      f: (a: A) => B,
      g: (c: C) => D,
      bifunctor: Type<T, [E, F, G, A, C]>,
    ) => Type<T, [E, F, G, B, D]>
  }[TypeParams.Length<T>]
}
