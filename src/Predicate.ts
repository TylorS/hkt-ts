import { HKT, Params } from './HKT.js'
import type { Associative } from './Typeclass/Associative.js'
import * as AB from './Typeclass/AssociativeBoth.js'
import * as AE from './Typeclass/AssociativeEither.js'
import * as Contra from './Typeclass/Contravariant.js'
import type { Identity } from './Typeclass/Identity.js'
import { constFalse, constTrue, flow, pipe } from './function.js'

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

export interface PredicateHKT extends HKT {
  readonly type: Predicate<this[Params.A]>
}

export const Contravariant: Contra.Contravariant1<PredicateHKT> = {
  contramap,
}

export const AssociativeBoth: AB.AssociativeBoth1<PredicateHKT> = {
  both:
    (s) =>
    (f) =>
    ([a, b]) =>
      f(a) && s(b),
}

export const bothWith = AB.bothWith<PredicateHKT>({ ...Contravariant, ...AssociativeBoth })

export const AssociativeEither: AE.AssociativeEither1<PredicateHKT> = {
  either: (s) => (f) => (either) => either.tag === 'Left' ? f(either.left) : s(either.right),
}

export const eitherWith = AE.eitherWith<PredicateHKT>({ ...Contravariant, ...AssociativeEither })
