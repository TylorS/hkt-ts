import { Type, TypeParams, Uris } from '../'

/**
 * @name Foldable
 * @laws
 * F.reduce ≡ (f, x, u) => F.reduce((acc, y) => acc.concat([y]), [], u).reduce(f, x)
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Foldable<T extends Uris = any> {
  readonly URI: T
  readonly reduce: {
    1: <A, B>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [B]>) => A
    2: <A, B, C>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, B]>) => A
    3: <A, B, C, D>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, B]>) => A
    4: <A, B, C, D, E>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, E, B]>) => A
    5: <A, B, C, D, E, F>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, E, F, B]>) => A
  }[TypeParams.Length<T>]
}
