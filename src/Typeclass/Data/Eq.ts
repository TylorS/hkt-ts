import deepEquals from 'fast-deep-equal/es6'
import * as E from 'fp-ts/Eq'

export interface Eq<A> extends E.Eq<A> {}

export const DeepEquals: Eq<unknown> = {
  equals: (b) => (a) => deepEquals(a, b),
}

export const Strict = E.EqStrict
