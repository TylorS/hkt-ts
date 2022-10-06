import { getMonoid, getSemigroup } from 'fp-ts/Function'

import { Associative } from './Typeclass/Data/Associative.js'
import { Identity, fromMonoid, toMonoid } from './Typeclass/Data/Identity.js'

export {
  absurd,
  apply,
  constant,
  constFalse,
  constNull,
  constTrue,
  constUndefined,
  constVoid,
  decrement,
  flip,
  flow,
  identity,
  identity as first,
  increment,
  pipe,
  tupled,
  unsafeCoerce,
  untupled,
  hole,
  SK,
  SK as second,
} from 'fp-ts/Function'

export type { LazyArg, FunctionN } from 'fp-ts/Function'

export const getAssociative =
  <A>(A: Associative<A>) =>
  <B = never>(): Associative<(b: B) => A> =>
    getSemigroup(A)<B>()

export const getIdentity =
  <A>(I: Identity<A>) =>
  <B = never>(): Identity<(b: B) => A> =>
    fromMonoid(getMonoid(toMonoid(I))<B>())
