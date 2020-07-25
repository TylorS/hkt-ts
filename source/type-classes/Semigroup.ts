import { Type, TypeDefinition, Uris } from '../'

/**
 * @name Semigroup
 * @laws
 * Associativity: Semigroup.concat(Semigroup.concat(a, b), c) ≡ Semigroup.concat(a, Semigroup.concat(b, c))
 */
export interface Semigroup<
  // @ts-expect-error Uris is 'never' until extended externally
  T extends Uris = any,
  Options extends SemigroupOptions = SemigroupOptionsDefault
> {
  readonly URI: T
  readonly concat: TypeDefinition<T, Options['concat'], <A extends Type<T>>(a: A, b: A) => A>
}

export type SemigroupOptions = {
  readonly concat: string
}

export type SemigroupOptionsDefault = {
  readonly concat: 'concat'
}
