import { SignatureOverride, Type, Uris } from '../'
import { CommonOptions, GetLength } from '../common'

/**
 * @name Semigroup
 * @laws
 * Associativity: Semigroup.concat(Semigroup.concat(a, b), c) ≡ Semigroup.concat(a, Semigroup.concat(b, c))
 */
export interface Semigroup<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends SemigroupOptions = SemigroupOptions
> {
  readonly URI: T
  readonly concat: SignatureOverride<
    T,
    Options['concat'],
    GetLength<Options, T> extends 0
      ? (a: Type<T>, b: Type<T>) => Type<T>
      : <A extends Type<T>>(a: A, b: A) => A
  >
}

export type SemigroupOptions = CommonOptions & {
  readonly concat?: string
}
