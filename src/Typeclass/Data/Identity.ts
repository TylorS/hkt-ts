import { Monoid } from 'fp-ts/Monoid'

import { Associative } from './Associative.js'

export interface Identity<A> extends Associative<A> {
  readonly id: A
}

export function fromMonoid<A>(monoid: Monoid<A>): Identity<A> {
  return {
    combine: monoid.combine,
    id: monoid.empty,
  }
}

export function toMonoid<A>(identity: Identity<A>): Monoid<A> {
  return {
    combine: identity.combine,
    empty: identity.id,
  }
}
