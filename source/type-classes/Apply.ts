import { SignatureOverride, Type, TypeParams, Uris } from '../'
import { Functor, FunctorOptions, FunctorOptionsDefault } from './Functor'

/**
 * @name Apply
 * @laws
 * Composition: A.ap(A.ap(A.map(f => g => x => f(g(x)), a), u), v) ≡ A.ap(a, A.ap(u, v))
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Apply<T extends Uris = any, Options extends ApplyOptions = ApplyOptionsDefault>
  extends Functor<T, ApplyOptions> {
  readonly URI: T
  readonly ap: SignatureOverride<
    T,
    Options['ap'],
    {
      1: <A, B>(fn: Type<T, [(a: A) => B]>, value: Type<T, [A]>) => Type<T, [B]>
      2: <C, A, B>(fn: Type<T, [C, (a: A) => B]>, value: Type<T, [C, A]>) => Type<T, [C, B]>
      3: <C, D, A, B>(
        fn: Type<T, [C, D, (a: A) => B]>,
        value: Type<T, [C, D, A]>,
      ) => Type<T, [C, D, B]>
      4: <C, D, E, A, B>(
        fn: Type<T, [C, D, E, (a: A) => B]>,
        value: Type<T, [C, D, E, A]>,
      ) => Type<T, [C, D, E, B]>
      5: <C, D, E, F, A, B>(
        fn: Type<T, [C, D, E, F, (a: A) => B]>,
        value: Type<T, [C, D, E, F, A]>,
      ) => Type<T, [C, D, E, F, B]>
    }[TypeParams.Length<T>]
  >
}

export type ApplyOptions = FunctorOptions & {
  readonly ap: string
}

export type ApplyOptionsDefault = FunctorOptionsDefault & {
  readonly ap: 'ap'
}
