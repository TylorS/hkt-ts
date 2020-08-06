import { SignatureOverride, Type, Uris } from '../'
import { GetLength } from '../common'
import { Semigroup, SemigroupOptions } from './Semigroup'

/**
 * @name Monoid
 * @laws
 * Right identity: M.concat(a, M.empty()) ≡ a
 * Left identity: M.concat(M.empty(), a) ≡ a
 */
export interface Monoid<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends MonoidOptions = MonoidOptions
> extends Semigroup<T, Options> {
  readonly URI: T
  readonly empty: SignatureOverride<
    T,
    Options['empty'],
    {
      0: () => Type<T>
      1: <A>() => Type<T, [A]>
      2: <A, B>() => Type<T, [A, B]>
      3: <A, B, C>() => Type<T, [A, B, C]>
      4: <A, B, C, D>() => Type<T, [A, B, C, D]>
      5: <A, B, C, D, E>() => Type<T, [A, B, C, D, E]>
    }[GetLength<Options, T>]
  >
}

export type MonoidOptions = SemigroupOptions & {
  readonly empty?: string
}
