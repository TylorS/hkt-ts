import deepEquals from 'fast-deep-equal/es6'
import type * as EqT from 'fp-ts/Eq'

export interface Eq<A> extends EqT.Eq<A> {}

export const DeepEquals: Eq<unknown> = {
  equals: (b) => (a) => deepEquals(a, b),
}
