import { Type, TypeDefinition, Uris } from '../'
import { Monoid, MonoidOptions, MonoidOptionsDefault } from './Monoid'

/**
 * @name Group
 * @laws
 * Right inverse: G.concat(a, G.invert(a)) ≡ G.empty()
 * Left inverse: G.concat(G.invert(a), a) ≡ G.empty()
 */
// @ts-expect-error Uris is 'never' until extended externally
export interface Group<T extends Uris = any, Options extends GroupOptions = GroupOptionsDefault>
  extends Monoid<T, Options> {
  readonly URI: T
  readonly invert: TypeDefinition<T, Options['invert'], <A extends Type<T>>(a: A) => A>
}

export type GroupOptions = MonoidOptions & {
  readonly invert: string
}

export type GroupOptionsDefault = MonoidOptionsDefault & {
  readonly invert: 'invert'
}
