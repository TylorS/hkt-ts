import { HKT, Params } from '../HKT'
import type { Associative } from '../typeclasses/concrete/Associative'
import type { Identity } from '../typeclasses/concrete/Identity'
import type * as I from '../typeclasses/effect/Invariant'

import { flow, identity } from './function'

export interface Endomorphism<A> {
  (a: A): A
}

export const makeAssociative = <A = never>(): Associative<Endomorphism<A>> => ({
  concat: flow,
})

export const makeIdentity = <A = never>(): Identity<Endomorphism<A>> => ({
  ...makeAssociative<A>(),
  id: identity,
})

export interface EndomorphismHKT extends HKT {
  readonly type: Endomorphism<this[Params.A]>
}

export const Invariant: I.Invariant<EndomorphismHKT> = {
  imap: (fo, fi) => (f) => flow(fi, f, fo),
}
