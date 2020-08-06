import { SignatureOverride, Type, Uris } from '../'
import { CommonOptions, GetLength } from '../common'

/**
 * @name Setoid
 * @laws
 * Reflexivity: Setoid.equals(a, a) === true
 * Symmetry: Setoid.equals(a, b) === Setoid.equals(b, a)
 * Transitivity: if Setoid.equals(a, b) and Setoid.equals(b, c), then Setoid.equals(a, c)
 */
export interface Setoid<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends SetoidOptions = SetoidOptions
> {
  readonly URI: T
  readonly equals: SignatureOverride<
    T,
    Options['equals'],
    GetLength<Options, T> extends 0
      ? (a: Type<T>, b: Type<T>) => boolean
      : <A extends Type<T>>(a: A, b: A) => boolean
  >
}

export type SetoidOptions = CommonOptions & {
  readonly equals?: string
}
