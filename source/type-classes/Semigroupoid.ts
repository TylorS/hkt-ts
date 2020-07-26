import { SignatureOverride, Type, Uris } from '../'
import { CommonOptions, GetLength } from '../common'

/**
 * @name Semigroupoid
 * @laws
 * Associativity: S.compose(S.compose(a, b), c) ≡ S.compose(a, S.compose(b, c))
 */
export interface Semigroupoid<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends SemigroupoidOptions = SemigroupoidOptions
> {
  readonly URI: T
  readonly compose: SignatureOverride<
    T,
    Options['compose'],
    {
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
    }[GetLength<Options, T>]
  >
}

export type SemigroupoidOptions = CommonOptions & {
  readonly compose?: string
}
