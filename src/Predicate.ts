import type { Associative } from './Typeclass/Associative'
import type { Identity } from './Typeclass/Identity'
import { constFalse, constTrue, flow, pipe } from './function'

export interface Predicate<A> {
  (a: A): boolean
}

export const not =
  <A>(predicate: Predicate<A>): Predicate<A> =>
  (a) =>
    !predicate(a)

export const or =
  <A>(second: Predicate<A>) =>
  (first: Predicate<A>): Predicate<A> =>
  (a) =>
    first(a) || second(a)

export const and =
  <A>(second: Predicate<A>) =>
  (first: Predicate<A>): Predicate<A> =>
  (a) =>
    first(a) && second(a)

export const makeAssociativeAny = <A = never>(): Associative<Predicate<A>> => ({
  concat: (first, second) => pipe(first, or(second)),
})

export const makeIdentityAny = <A = never>(): Identity<Predicate<A>> => ({
  ...makeAssociativeAny<A>(),
  id: constFalse,
})

export const makeAssociativeAll = <A = never>(): Associative<Predicate<A>> => ({
  concat: (first, second) => pipe(first, and(second)),
})

export const makeIdentityAll = <A = never>(): Identity<Predicate<A>> => ({
  ...makeAssociativeAll<A>(),
  id: constTrue,
})

export const contramap =
  <B, A>(f: (b: B) => A) =>
  (predicate: Predicate<A>): Predicate<B> =>
    flow(f, predicate)
