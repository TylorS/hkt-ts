import type { Associative } from '../typeclasses/concrete/Associative'
import type { Identity } from '../typeclasses/concrete/Identity'

import { flow, identity } from './function'

export interface Endomorphism<A> {
  (a: A): A
}

export const makeAssociative = <A = never>(): Associative<Endomorphism<A>> => ({
  concat: flow,
})

export const makeIdentity = <A = never>(): Identity<Endomorphism<A>> => ({
  id: identity,
})
