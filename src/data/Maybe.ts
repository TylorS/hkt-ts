import { HKT, Kind, Params } from '../HKT'
import { Predicate } from '../function/Predicate'
import type { Refinement } from '../function/Refinement'
import { constant, flow, identity, pipe } from '../function/function'
import { Associative, reverse } from '../typeclasses/concrete/Associative'
import { Commutative } from '../typeclasses/concrete/Commutative'
import * as Debug from '../typeclasses/concrete/Debug'
import * as Eq from '../typeclasses/concrete/Eq'
import * as I from '../typeclasses/concrete/Identity'
import * as Ord from '../typeclasses/concrete/Ord'
import * as AB from '../typeclasses/effect/AssociativeBoth'
import * as AE from '../typeclasses/effect/AssociativeEither'
import * as AF from '../typeclasses/effect/AssociativeFlatten'
import * as B from '../typeclasses/effect/Bottom'
import * as C from '../typeclasses/effect/Covariant'
import type { ForEach1 } from '../typeclasses/effect/ForEach'
import * as IB from '../typeclasses/effect/IdentityBoth'
import * as IE from '../typeclasses/effect/IdentityEither'
import * as IF from '../typeclasses/effect/IdentityFlatten'
import { Top1, makeFromValue } from '../typeclasses/effect/Top'

import * as Either from './Either'

export type Maybe<A> = Nothing | Just<A>

export type OutputOf<T> = [T] extends [Maybe<infer R>] ? R : never

export interface Nothing {
  readonly tag: 'Nothing'
}
export const Nothing: Nothing = { tag: 'Nothing' }

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

export function fromJust<A>(just: Just<A>): A {
  return just.value
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

export const makeAssociative = <A>(A: Associative<A>): Associative<Maybe<A>> => ({
  concat: (f, s) => (isJust(f) && isJust(s) ? Just(A.concat(f.value, s.value)) : isJust(f) ? f : s),
})

export const makeFirstAssociative = <A>(): Associative<Maybe<A>> => ({
  concat: (f, s) => (isJust(f) ? f : s),
})

export const makeSecondAssociative = <A>(): Associative<Maybe<A>> => reverse(makeFirstAssociative())

export const makeCommutative = makeAssociative as <A>(A: Commutative<A>) => Commutative<Maybe<A>>

export const makeFailFastAssociative = <A>(A: Associative<A>): Associative<Maybe<A>> => ({
  concat: (f, s) => (isJust(f) && isJust(s) ? Just(A.concat(f.value, s.value)) : Nothing),
})

export const makeIdentity = <A>(ID: I.Identity<A>): I.Identity<Maybe<A>> => ({
  ...makeAssociative(ID),
  id: Just(ID.id),
})

export const makeAssociativeIdentity = <A>(A: Associative<A>): I.Identity<Maybe<A>> => ({
  ...makeAssociative(A),
  id: Nothing,
})

export const makeDebug = <A>(D: Debug.Debug<A>): Debug.Debug<Maybe<A>> => ({
  debug: match(
    () => `Nothing`,
    (a) => `Just(${D.debug(a)})`,
  ),
})

export const makeEq = <A>(E: Eq.Eq<A>): Eq.Eq<Maybe<A>> => ({
  equals: (a, b) =>
    a.tag === b.tag ? (a.tag === 'Just' ? E.equals(a.value, (b as Just<A>).value) : true) : false,
})

export const makeOrd = <A>(O: Ord.Ord<A>): Ord.Ord<Maybe<A>> =>
  Ord.fromCompare((f, s) => {
    const fx = isJust(f)
    const sx = isJust(s)

    if (fx && sx) {
      return O.compare(f.value, s.value)
    }

    if (fx) {
      return -1
    }

    return 1
  })

export interface MaybeHKT extends HKT {
  readonly type: Maybe<this[Params.A]>
}

export const Covariant: C.Covariant1<MaybeHKT> = {
  map,
}

export const AssociativeBoth: AB.AssociativeBoth1<MaybeHKT> = {
  both: (s) => (f) => isJust(f) && isJust(s) ? Just([f.value, s.value]) : Nothing,
}

export const AssociativeEither: AE.AssociativeEither1<MaybeHKT> = {
  either: (s) => (f) =>
    isJust(f) ? Just(Either.Left(f.value)) : isJust(s) ? Just(Either.Right(s.value)) : Nothing,
}

export const AssociativeFlatten: AF.AssociativeFlatten1<MaybeHKT> = {
  flatten: (k) => (isJust(k) ? k.value : Nothing),
}

export const Bottom: B.Bottom1<MaybeHKT> = {
  bottom: Nothing,
}

export const Top: Top1<MaybeHKT> = {
  top: Just({}),
}

export const IdentityBoth: IB.IdentityBoth1<MaybeHKT> = {
  ...Top,
  ...AssociativeBoth,
}

export const tuple = IB.tuple<MaybeHKT>({ ...IdentityBoth, ...Covariant })

export const IdentityEither: IE.IdentityEither1<MaybeHKT> = {
  ...Bottom,
  ...AssociativeEither,
}

export const IdentityFlatten: IF.IdentityFlatten1<MaybeHKT> = {
  ...Top,
  ...AssociativeFlatten,
}

export const ForEach: ForEach1<MaybeHKT> = {
  map,
  forEach: <T2 extends HKT>(IBC: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const fromValue = makeFromValue(IBC)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      (kind: Maybe<A>): Kind<T2, Maybe<B>> =>
        pipe(
          kind,
          match(() => fromValue(Nothing), flow(f, IBC.map(Just))),
        )
  },
}
