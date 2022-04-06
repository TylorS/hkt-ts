import type { Maybe } from './Maybe'
import type * as NEA from './NonEmptyArray'
import { Lazy, pipe } from './function'

/**
 * A common disriminated union to represent the outcome of 2 separate
 * code paths. Very helpful for representing errors.
 */
export type Either<E, A> = Left<E> | Right<A>

/**
 * Determine if an Either<E, A> is a Left<E>
 */
export const isLeft = <A, B>(either: Either<A, B>): either is Left<A> => either.tag === 'Left'

/**
 * Determine if an Either<E, A> is a Right<A>
 */
export const isRight = <A, B>(either: Either<A, B>): either is Right<B> => either.tag === 'Right'

/**
 * Type-level helper for extracting the Left value from an Either
 */
export type LeftOf<A> = [A] extends [Either<infer L, any>] ? L : never

/**
 * Type-level helper for extracting the Right value from an Either
 */
export type RightOf<A> = [A] extends [Either<any, infer R>] ? R : never

/**
 * Abstraction for the "Left" of an Either. Usually used to represent errors.
 */
export interface Left<E> {
  readonly tag: 'Left'
  readonly value: E
}

/**
 * Construct a Left instance.
 */
export const Left = <E>(value: E): Left<E> => ({
  tag: 'Left',
  value,
})

export interface Right<A> {
  readonly tag: 'Right'
  readonly value: A
}

/**
 * Construct a Right value.
 */
export const Right = <A>(value: A): Right<A> => ({
  tag: 'Right',
  value,
})

/**
 * Combinator for sequencing another Either after the succes, or Right, of
 * a previous Either. Provides the ability to sequence many branches of logic without
 * utilizing many nested if/else-if/else statements.
 */
export const flatMap =
  <A, E1, B>(f: (value: A) => Either<E1, B>) =>
  <E2>(either: Either<E2, A>): Either<E1 | E2, B> =>
    isLeft(either) ? either : f(either.value)

/**
 * Converts an Option<A> into an Either<E, A>
 */
export function fromMaybe<E>(f: () => E) {
  return <A>(maybe: Maybe<A>): Either<E, A> =>
    maybe.tag === 'Nothing' ? Left(f()) : Right(maybe.value)
}

/**
 * Get the Right value of an Either, or return the result of the provided function.
 */
export const getOrElse =
  <A>(f: () => A) =>
  <E, B>(either: Either<E, B>): A | B =>
    isLeft(either) ? f() : either.value

/**
 * Apply a function to the Right-hand value of an Either. If the Either is a Left,
 * it will return that Left as-is.
 */
export const map =
  <A, B>(f: (value: A) => B) =>
  <E>(either: Either<E, A>): Either<E, B> =>
    isLeft(either) ? either : Right(f(either.value))

/**
 * Apply a function to the Left-hand value of an Either. If the Either is a Right,
 * it will return that Right as-is.
 */
export const mapLeft =
  <E1, E2>(f: (value: E1) => E2) =>
  <A>(either: Either<E1, A>): Either<E2, A> =>
    isLeft(either) ? Left(f(either.value)) : either

/**
 * Pattern match on the 2 cases of an Either using functions.
 */
export const match =
  <E, B, A, C>(onLeft: (value: E) => B, onRight: (value: A) => C) =>
  (either: Either<E, A>): B | C =>
    isLeft(either) ? onLeft(either.value) : onRight(either.value)

/**
 * Combinator for sequencing another Either after its Failure, or Left, of
 * a previous Either. Provides the ability to sequence many branches of logic without
 * utilizing many nested if/else-if/else statements.
 */
export const orElse =
  <E1, E2, B>(f: (value: E1) => Either<E2, B>) =>
  <A>(either: Either<E1, A>): Either<E1 | E2, A | B> => {
    if (isLeft(either)) {
      return f(either.value)
    }

    return either
  }

/**
 * Apply a reducer function to the Right value of an Either, otherwise
 * return the seed value.
 */
export const reduce =
  <A, B>(seed: A, f: (acc: A, value: B) => A) =>
  <E>(either: Either<E, B>): A =>
    pipe(
      either,
      match(
        () => seed,
        (b) => f(seed, b),
      ),
    )

/**
 * Construct a Either that will output a homogenous Record given the
 * input of a Record of Eithers. All failures, or Lefts, will be collected into
 * a NonEmptyArray.
 * @example
 * ```typescript
 * import * as E from 'hkt-ts/Either'
 * import { NonEmptyArray } from 'hkt-ts/NonEmptyArray'
 * import { pipe } from 'hkt-ts/function'
 *
 * declare const eitherA: E.Either<'a', string>
 * declare const eitherB: E.Either<'b', number>
 *
 * const example: E.Either<NonEmptyArray<'a' | 'b'>, {  a: string, b: number }> = E.struct({
 *   a: eitherA,
 *   b: eitherB,
 * })
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const struct = <A extends Readonly<Record<string, Either<any, any>>>>(
  eithers: A,
): Either<NEA.NonEmptyArray<LeftOf<A[keyof A]>>, { readonly [K in keyof A]: RightOf<A[K]> }> => {
  const entries = Object.entries(eithers)
  const lefts = entries.filter((e): e is [string, Left<LeftOf<A[keyof A]>>] => isLeft(e[1]))

  if (lefts.length > 0) {
    return pipe(
      lefts.map((l) => l[1].value),
      Left,
    ) as any
  }

  const rights = entries
    .filter((e): e is [string, Right<RightOf<A[keyof A]>>] => isRight(e[1]))
    .map(([k, v]) => [k, v.value] as const)

  return Right(Object.fromEntries(rights) as { readonly [K in keyof A]: RightOf<A[K]> })
}

/**
 * Swap a Left for a Right, or a Right for a Left.
 */
export const swap: <A, B>(either: Either<A, B>) => Either<B, A> = match(Right, Left)

export const tryCatch = <A>(f: Lazy<A>): Either<unknown, A> => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

export const tryCatchF =
  <Args extends ReadonlyArray<any>, A>(
    f: (...args: Args) => A,
  ): ((...args: Args) => Either<unknown, A>) =>
  (...args) => {
    try {
      return Right(f(...args))
    } catch (e) {
      return Left(e)
    }
  }

/**
 * Construct a Either that will output a homogenous Record given the
 * input of a Record of Eithers. All failures, or Lefts, will be collected into
 * a NonEmptyArray.
 * @example
 * ```typescript
 * import * as E from 'hkt-ts/Either'
 * import { NonEmptyArray } from 'hkt-ts/NonEmptyArray'
 * import { pipe } from 'hkt-ts/function'
 *
 * declare const eitherA: E.Either<'a', string>
 * declare const eitherB: E.Either<'b', number>
 *
 * const example: E.Either<NonEmptyArray<'a' | 'b'>, [string, number]> = E.tuple(
 *   eitherA,
 *   eitherB,
 * })
 * ```
 */
export const tuple = <A extends ReadonlyArray<Either<any, any>>>(
  ...eithers: A
): Either<NEA.NonEmptyArray<LeftOf<A[number]>>, { readonly [K in keyof A]: RightOf<A[K]> }> => {
  const values = Object.values(eithers)
  const lefts = values.filter(isLeft)

  if (lefts.length > 0) {
    return pipe(
      lefts.map((l) => l.value),
      Left,
    ) as any
  }

  const rights = values.filter(isRight).map((l) => l.value)

  return Right(rights as unknown as { readonly [K in keyof A]: RightOf<A[K]> })
}
