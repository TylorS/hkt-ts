import { Associative } from './Associative'
import * as Either from './Either'
import { NonEmptyArray } from './NonEmptyArray'
import { constFalse, constTrue, flow, pipe } from './function'

/**
 * These is a data structure for representing an either-or relationship or the possibility of
 * having both values. This can be especially useful for handling optional errors.
 */
export type These<E, A> = Either.Either<E, A> | Both<E, A>

export type ErrorOf<T> = [T] extends [These<infer E, any>] ? E : never

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type OutputOf<T> = [T] extends [These<infer _, infer A>] ? A : never

export const Left = Either.Left
export type Left<E> = Either.Left<E>
export const Right = Either.Right
export type Right<A> = Either.Right<A>

/**
 * Both is a data structure for representing the possibility of having 2 values.
 */
export interface Both<E, A> {
  readonly tag: 'Both'
  readonly left: E
  readonly right: A
}

/**
 * Construct a Both
 */
export const Both = <E, A>(left: E, right: A): Both<E, A> => ({
  tag: 'Both',
  left,
  right,
})

export const match =
  <E, R1, A, R2, R3>(onLeft: (e: E) => R1, onRight: (a: A) => R2, onBoth: (e: E, a: A) => R3) =>
  (these: These<E, A>): R1 | R2 | R3 => {
    switch (these.tag) {
      case 'Left':
        return onLeft(these.left)
      case 'Right':
        return onRight(these.right)
      case 'Both':
        return onBoth(these.left, these.right)
    }
  }

export const isLeft = match(constTrue, constFalse, constFalse) as <E, A>(
  these: These<E, A>,
) => these is Left<E>
export const isRight = match(constFalse, constTrue, constFalse) as <E, A>(
  these: These<E, A>,
) => these is Right<A>
export const isBoth = match(constFalse, constFalse, constTrue) as <E, A>(
  these: These<E, A>,
) => these is Both<E, A>

export function absolveWhen<E>(predicate: (e: E) => boolean) {
  return <A>(these: These<E, A>): These<E, A> =>
    pipe(
      these,
      match(Left, Right, (e, a) => (predicate(e) ? Right(a) : Both(e, a))),
    )
}

export function condemnWhen<E>(predicate: (e: E) => boolean) {
  return <A>(these: These<E, A>): These<E, A> =>
    pipe(
      these,
      match(Left, Right, (e, a) => (predicate(e) ? Left(e) : Both(e, a))),
    )
}

export const makeFlatMap =
  <E>(ASSOC: Associative<E>) =>
  <A, B>(f: (a: A) => These<E, B>) =>
  (these: These<E, A>): These<E, B> =>
    pipe(
      these,
      match(
        Left,
        (a) =>
          pipe(
            a,
            f,
            match(
              (e2) => Left(e2),
              (b) => Right(b),
              (e2, b) => Both(e2, b),
            ),
          ),
        (e, a) =>
          pipe(
            a,
            f,
            match(
              (e2) => Left(ASSOC.concat(e, e2)),
              (b) => Both(e, b),
              (e2, b) => Both(ASSOC.concat(e, e2), b),
            ),
          ),
      ),
    )

/**
 * Apply a transformation to the success value contained within a These
 */
export const map =
  <A, B>(f: (a: A) => B) =>
  <E>(these: These<E, A>): These<E, B> =>
    pipe(
      these,
      match(Left, flow(f, Right), (e, a) => Both(e, f(a))),
    )

/**
 * Apply a transformation to the errors of a These.
 */
export const mapLeft =
  <E1, E2>(f: (e: E1) => E2) =>
  <A>(these: These<E1, A>): These<E2, A> =>
    pipe(
      these,
      match(flow(f, Left), Right, (e, a) => Both(f(e), a)),
    )

/**
 * Compute a new These from any failures
 */
export const orElse =
  <E1, E2, B>(f: (e: E1) => These<E2, B>) =>
  <A>(these: These<E1, A>): These<E2, A | B> =>
    pipe(these, match(f, Right, f))

export const struct = <TS extends Readonly<Record<string, These<any, any>>>>(
  datas: TS,
): These<
  NonEmptyArray<{ readonly [K in keyof TS]: ErrorOf<TS[K]> }[keyof TS]>,
  { readonly [K in keyof TS]: OutputOf<TS[K]> }
> => {
  const entries = Object.entries(datas)

  return pipe(
    tuple(
      ...entries.map(([k, data]) =>
        pipe(
          data,
          map((a) => [k, a] as const),
        ),
      ),
    ),
    map(Object.fromEntries),
  )
}

export const tupled = <E, A>(these: These<E, A>): These<E, readonly [A]> =>
  pipe(
    these,
    map((a) => [a]),
  )

export const tuple = <TS extends ReadonlyArray<These<any, any>>>(...theses: TS) =>
  theses.length === 0
    ? Right([])
    : theses.slice(1).reduce(
        combine,
        pipe(
          theses[0],
          tupled,
          mapLeft((e) => [e] as const),
        ),
      )

function combine<E1, A extends readonly any[], E2, B>(
  left: These<NonEmptyArray<E1>, A>,
  right: These<E2, B>,
): These<NonEmptyArray<E1 | E2>, readonly [...A, B]> {
  return pipe(
    left,
    match(
      (e1) =>
        pipe(
          right,
          match(
            (e2) => Left([...e1, e2]),
            () => Left(e1),
            (e2) => Left([...e1, e2]),
          ),
        ),
      (a) =>
        pipe(
          right,
          match(
            (e2) => Left([e2]),
            (b) => Right([...a, b]),
            (e2, b) => Both([e2], [...a, b]),
          ),
        ),
      (e1, a) =>
        pipe(
          right,
          match(
            (e2) => Left([...e1, e2]),
            (b) => Both(e1, [...a, b]),
            (e2, b) => Both([...e1, e2], [...a, b]),
          ),
        ),
    ),
  )
}
