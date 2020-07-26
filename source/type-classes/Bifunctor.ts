import { SignatureOverride, Type, Uris } from '../'
import { GetLength } from '../common'
import { Functor, FunctorOptions } from './Functor'

/**
 * @name Bifunctor
 * @laws
 * Identity: B.bimap(x => x, x => x, a) ≡ a
 * Composition: B.bimap(x => f(g(x)), x => h(i(x)), a) ≡ B.bimap(f, h, B.bimap(g, i, a))
 */
export interface Bifunctor<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends BifunctorOptions = BifunctorOptions
> extends Functor<T, Options> {
  readonly URI: T
  readonly bimap: SignatureOverride<
    T,
    Options['bimap'],
    {
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
    }[GetLength<Options, T>]
  >
}

export type BifunctorOptions = FunctorOptions & {
  readonly bimap?: string
}
