import { Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'

/**
 * @name Foldable
 * @laws
 * F.reduce ≡ (f, x, u) => F.reduce((acc, y) => acc.concat([y]), [], u).reduce(f, x)
 */
export interface Foldable<T extends Types> {
  readonly reduce: {
    1: <A, B>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [B]>) => A
    2: <A, B, C>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, B]>) => A
    3: <A, B, C, D>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, B]>) => A
    4: <A, B, C, D, E>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, E, B]>) => A
    5: <A, B, C, D, E, F>(f: (a: A, b: B) => A, seed: A, foldable: Type<T, [C, D, E, F, B]>) => A
  }[TypeParams.Length<T>]
}
