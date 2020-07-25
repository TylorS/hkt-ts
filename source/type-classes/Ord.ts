import { SignatureOverride, Type, Uris } from '../'
import { Setoid, SetoidOptions, SetoidOptionsDefault } from './Setoid'

/**
 * @name Ord
 * @laws
 * Totality: Ord.lte(a, b) or Ord.lte(b, a)
 * Antisymmetry: if Ord.lte(a, b) and Ord.lte(b, a), then Ord.equals(a, b)
 * Transitivity: if Ord.lte(a, b) and Ord.lte(b, c), then Ord.lte(a, c)
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Ord<T extends Uris = any, Options extends OrdOptions = OrdOptionsDefault>
  extends Setoid<T, Options> {
  readonly URI: T
  readonly lte: SignatureOverride<T, Options['lte'], <A extends Type<T>>(a: A, b: A) => boolean>
}

export type OrdOptions = SetoidOptions & {
  readonly lte: string
}

export type OrdOptionsDefault = SetoidOptionsDefault & {
  readonly lte: string
}
