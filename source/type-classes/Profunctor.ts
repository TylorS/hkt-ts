import { Type, TypeParams, Types } from '../'
import { Functor } from './Functor'

/**
 * @name Profunctor
 * @laws
 * Identity: P.promap(x => x, x => x, a) ≡ a
 * Composition: P.promap(x => f(g(x)), x => h(i(x)), a) ≡ P.promap(g, h, P.promap(f, i, a))
 */
// @ts-expect-error Types is 'never' until extended externally
export interface Profunctor<T extends Types = any> extends Functor<T> {
  readonly URI: T
  readonly promap: {
    2: <A, B, C, D>(
      ab: (a: A) => B,
      cd: (c: C) => D,
      profunctor: Type<T, [B, C]>,
    ) => Type<T, [A, D]>
    3: <A, B, C, D, E>(
      ab: (a: A) => B,
      cd: (c: C) => D,
      profunctor: Type<T, [E, B, C]>,
    ) => Type<T, [E, A, D]>
    4: <A, B, C, D, E, F>(
      ab: (a: A) => B,
      cd: (c: C) => D,
      profunctor: Type<T, [E, F, B, C]>,
    ) => Type<T, [E, F, A, D]>
    5: <A, B, C, D, E, F, G>(
      ab: (a: A) => B,
      cd: (c: C) => D,
      profunctor: Type<T, [E, F, G, B, C]>,
    ) => Type<T, [E, F, G, A, D]>
  }[TypeParams.Length<T>]
}
