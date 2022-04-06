import type { Associative } from './Associative'
import type { AssociativeIdentity } from './AssociativeIdentity'
import { flow, identity } from './function'

export interface Endomorphism<A> {
  (a: A): A
}

export const makeAssociative = <A = never>(): Associative<Endomorphism<A>> => ({
  concat: flow,
})

export const makeAssociativeIdentity = <A = never>(): AssociativeIdentity<Endomorphism<A>> => ({
  concat: flow,
  id: identity,
})
