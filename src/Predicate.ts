import { Associative } from './Associative'
import { AssociativeIdentity } from './AssociativeIdentity'
import { constFalse, flow, pipe } from './function'

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

export const makeAssociativeIdentityAny = <A = never>(): AssociativeIdentity<Predicate<A>> => ({
  concat: makeAssociativeAny<A>().concat,
  id: constFalse,
})

export const makeAssociativeAll = <A = never>(): Associative<Predicate<A>> => ({
  concat: (first, second) => pipe(first, and(second)),
})

export const makeAssociativeIdentityAll = <A = never>(): AssociativeIdentity<Predicate<A>> => ({
  concat: makeAssociativeAll<A>().concat,
  id: constFalse,
})

export const contramap =
  <B, A>(f: (b: B) => A) =>
  (predicate: Predicate<A>): Predicate<B> =>
    flow(f, predicate)
