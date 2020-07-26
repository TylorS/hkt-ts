import { SignatureOverride, Type, Uris } from '../'
import { CommonOptions, GetLength } from '../common'

/**
 * @name Foldable
 * @laws
 * F.reduce ≡ (f, x, u) => F.reduce((acc, y) => acc.concat([y]), [], u).reduce(f, x)
 */
export interface Foldable<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends FoldableOptions = FoldableOptions
> {
  readonly URI: T
  readonly reduce: SignatureOverride<
    T,
    Options['reduce'],
    {
      1: <A, B>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [B]>) => A
      2: <A, B, C>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, B]>) => A
      3: <A, B, C, D>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, B]>) => A
      4: <A, B, C, D, E>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, E, B]>) => A
      5: <A, B, C, D, E, F>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, E, F, B]>) => A
    }[GetLength<Options, T>]
  >
}

export type FoldableOptions = CommonOptions & {
  readonly reduce?: string
}
