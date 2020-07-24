import { Type, TypeParams, Types } from '../'

/**
 * @name Semigroupoid
 * @laws
 * Associativity: S.compose(S.compose(a, b), c) ≡ S.compose(a, S.compose(b, c))
 */
export interface Semigroupoid<T extends Types> {
  readonly compose: {
    2: <A, B, C>(ab: Type<T, [A, B]>, bc: Type<T, [B, C]>) => Type<T, [A, C]>
    3: <A, B, C, D>(ab: Type<T, [A, B, C]>, bc: Type<T, [A, C, D]>) => Type<T, [A, B, D]>
    4: <A, B, C, D, E>(
      ab: Type<T, [A, B, C, D]>,
      bc: Type<T, [A, B, D, E]>,
    ) => Type<T, [A, B, C, E]>
    5: <A, B, C, D, E, F>(
      ab: Type<T, [A, B, C, D, E]>,
      bc: Type<T, [A, B, C, E, F]>,
    ) => Type<T, [A, B, C, D, F]>
  }[TypeParams.Length<T>]
}
