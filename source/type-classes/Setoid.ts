import { Type, TypeDefinition, Uris } from '../'

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
  Options extends SetoidOptions = SetoidOptionsDefault
> {
  readonly URI: T
  readonly equals: TypeDefinition<T, Options['equals'], <A extends Type<T>>(a: A, b: A) => boolean>
}

export type SetoidOptions = {
  readonly equals: string
}

export type SetoidOptionsDefault = {
  readonly equals: 'equals'
}
