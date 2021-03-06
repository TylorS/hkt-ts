import { SignatureOverride, Type, Uris } from '../'
import { CommonOptions, GetLength } from '../common'
import { Functor } from './Functor'

/**
 * @name Extend
 * @laws
 * Associativity: E.extend(f, E.extend(g, w)) ≡ E.extend(_w => f(E.extend(g, _w)), w)
 */
export interface Extend<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends ExtendOptions = ExtendOptions
> extends Functor<T> {
  readonly URI: T
  readonly extend: SignatureOverride<
    T,
    Options['extend'],
    {
      1: <A, B>(f: (a: Type<T, [A]>) => B, extend: Type<T, [A]>) => Type<T, [B]>
      2: <A, B, C>(f: (a: Type<T, [A, B]>) => C, extend: Type<T, [A, B]>) => Type<T, [A, C]>
      3: <A, B, C, D>(
        f: (a: Type<T, [A, B, C]>) => D,
        extend: Type<T, [A, B, C]>,
      ) => Type<T, [A, B, D]>
      4: <A, B, C, D, E>(
        f: (a: Type<T, [A, B, C, D]>) => E,
        extend: Type<T, [A, B, C, D]>,
      ) => Type<T, [A, B, C, E]>
      5: <A, B, C, D, E, F>(
        f: (a: Type<T, [A, B, C, D, E]>) => F,
        extend: Type<T, [A, B, C, D, E]>,
      ) => Type<T, [A, B, C, D, F]>
    }[GetLength<Options, T>]
  >
}

export type ExtendOptions = CommonOptions & {
  readonly extend?: string
}
