import { HKT, Params } from './HKT.js'
import type { Associative } from './Typeclass/Associative.js'
import type { Identity } from './Typeclass/Identity.js'
import type * as I from './Typeclass/Invariant.js'
import { flow, identity } from './function.js'

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
