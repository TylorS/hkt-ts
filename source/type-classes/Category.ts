import { SignatureOverride, Type, Uris } from '../'
import { GetLength } from '../common'
import { Semigroupoid, SemigroupoidOptions } from './Semigroupoid'

/**
 * @name Category
 * @laws
 * Right identity: M.compose(a, M.id()) ≡ a
 * Left identity: M.compose(M.id(), a) ≡ a
 */
export interface Category<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends CategoryOptions = CategoryOptions
> extends Semigroupoid<T, Options> {
  readonly URI: T
  readonly id: SignatureOverride<
    T,
    Options['id'],
    {
      2: <A>() => Type<T, [A, A]>
      3: <A, B>() => Type<T, [A, B, B]>
      4: <A, B, C>() => Type<T, [A, B, C, C]>
      5: <A, B, C, D>() => Type<T, [A, B, C, D, D]>
    }[GetLength<Options, T>]
  >
}

export type CategoryOptions = SemigroupoidOptions & {
  readonly id?: string
}
