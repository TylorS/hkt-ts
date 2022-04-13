import { Associative } from './Associative'
import type * as Either from './Either'
import { Predicate } from './Predicate'
import type { Refinement } from './Refinement'
import { constant, flow, identity, pipe } from './function'

export type Maybe<A> = Nothing | Just<A>

export type OutputOf<T> = [T] extends [Maybe<infer R>] ? R : never

export const Nothing = {
  tag: 'Nothing',
} as const
export type Nothing = typeof Nothing

export interface Just<A> {
  readonly tag: typeof JUST_TYPE
  readonly value: A
}

const JUST_TYPE = 'Just'

export const Just = <A>(value: A): Just<A> => ({
  tag: JUST_TYPE,
  value,
})

export function isJust<A>(maybe: Maybe<A>): maybe is Just<A> {
  return maybe.tag === 'Just'
}

export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
  return maybe.tag === 'Nothing'
}

/**
 * Pattern match over the 2 states of an Maybe.
 */
export const match =
  <A, B, C>(onNothing: () => A, onJust: (value: B) => C) =>
  (maybe: Maybe<B>): A | C =>
    isNothing(maybe) ? onNothing() : onJust(maybe.value)

const constNone = constant(Nothing)

/**
 * Perform a Maybe-returning function utilizing the resulting type of a previous Maybe.
 * Allows chaining together a sequence of Maybes one after another.
 *
 * @example
 * ```
 * import * as O from 'hkt-ts/Maybe'
 * import { pipe } from 'hkt-ts/function'
 *
 * const example: O.Maybe<C> = pipe(
 *  MaybeA,
 *  O.flatMap(a => aToMaybeB(a)),
 *  O.flatMap(b => bToMaybeC(b)),
 * )
 * ```
 */
export const flatMap = <A, B>(f: (a: A) => Maybe<B>): ((Maybe: Maybe<A>) => Maybe<B>) =>
  match(constNone, f)

export const map = <A, B>(f: (a: A) => B): ((maybe: Maybe<A>) => Maybe<B>) => flatMap(flow(f, Just))

export function filter<A, B extends A>(refinement: Refinement<A, B>): (maybe: Maybe<A>) => Maybe<B>
export function filter<A>(predicate: Predicate<A>): (Maybe: Maybe<A>) => Maybe<A>

export function filter<A>(predicate: Predicate<A>) {
  return flatMap((a: A) => (predicate(a) ? Just(a) : Nothing))
}

export function fromEither<E, A>(either: Either.Either<E, A>): Maybe<A> {
  return either.tag === 'Left' ? Nothing : Just(either.right)
}

export function fromNullable<A>(value: A | undefined | null | void): Maybe<A> {
  return value === null || value === undefined ? Nothing : Just(value)
}

export const fromPredicate =
  <A>(predicate: Predicate<A>): ((a: A) => Maybe<A>) =>
  (a) =>
    predicate(a) ? Just(a) : Nothing

export const fromRefinement =
  <A, B extends A>(refinement: Refinement<A, B>): ((a: A) => Maybe<B>) =>
  (a) =>
    refinement(a) ? Just(a) : Nothing

/**
 * Get the value of an Maybe or the result of the provided fallback.
 */
export const getOrElse = <B>(f: () => B): (<A>(Maybe: Maybe<A>) => A | B) => match(f, identity)

/**
 * Replace a None with another Maybe.
 */
export const orElse =
  <A>(f: () => Maybe<A>) =>
  <B>(Maybe: Maybe<B>): Maybe<A | B> =>
    pipe(Maybe, match(f, Just))

/**
 * Apply a reducer to the value within an Option, or return the seed value
 * if the Option is a None.
 */
export const reduce =
  <A, B>(seed: A, f: (acc: A, value: B) => A) =>
  (maybe: Maybe<B>): A =>
    pipe(
      maybe,
      match(
        () => seed,
        (b) => f(seed, b),
      ),
    )

/**
 * Construct a Option that will output a homogenous Record given the
 * input of a Record of Options.
 * @example
 * ```typescript
 * import * as O from 'hkt-ts/Option'
 * import { pipe } from 'hkt-ts/function'
 *
 * const example: O.Option<{a: number, b: number}> = O.struct({
 *   a: O.Some(1),
 *   b: O.Some(2),
 * })
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const struct = <A extends Readonly<Record<string, Maybe<any>>>>(
  maybes: A,
): Maybe<{ readonly [K in keyof A]: OutputOf<A[K]> }> => {
  const values = Object.entries(maybes)
  const nothings = values.filter((x) => isNothing(x[1]))

  if (nothings.length === 0) {
    return Nothing
  }

  const entries = values.map(([k, l]) => [k, (l as Just<any>).value])

  return Just(Object.fromEntries(entries))
}

export function toNull<A>(maybe: Maybe<A>): A | null {
  return isNothing(maybe) ? null : maybe.value
}

export function toUndefined<A>(maybe: Maybe<A>): A | undefined {
  return isNothing(maybe) ? undefined : maybe.value
}

/**
 * Construct a Option that will output a homogenous Tuple given the
 * input of a Tuple of Options.
 * @example
 * ```typescript
 * import * as O from 'hkt-ts/Option'
 * import { pipe } from 'hkt-ts/function'
 *
 * const example: O.Option<[number, b: number]> = O.tuple(
 *   O.Some(1),
 *   O.Some(2),
 * )
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tuple = <A extends ReadonlyArray<Maybe<any>>>(
  ...maybes: A
): Maybe<{ readonly [K in keyof A]: OutputOf<A[K]> }> => {
  if (maybes.length === 0) {
    return Nothing
  }

  const values = Object.values(maybes)
  const nones = values.filter(isNothing)

  if (nones.length === 0) {
    return Nothing
  }

  const tuple = values.filter(isJust).map((l) => l.value)

  return Just(tuple as unknown as { readonly [K in keyof A]: OutputOf<A[K]> })
}

export const makeAssociative = <A>(A: Associative<A>): Associative<Maybe<A>> => ({
  concat: (f, s) => (isJust(f) && isJust(s) ? Just(A.concat(f.value, s.value)) : Nothing),
})
