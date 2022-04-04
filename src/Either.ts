/**
 * A common disriminated union to represent the outcome of 2 separate
 * code paths. Very helpful for representing errors.
 */
export type Either<E, A> = Left<E> | Right<A>

/**
 * Determine if an Either<E, A> is a Left<E>
 */
export const isLeft = <A, B>(either: Either<A, B>): either is Left<A> => either.type === 'Left'

/**
 * Determine if an Either<E, A> is a Right<A>
 */
export const isRight = <A, B>(either: Either<A, B>): either is Right<B> => either.type === 'Right'

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
  readonly type: 'Left'
  readonly value: E
}

/**
 * Construct a Left instance.
 */
export const Left = <E>(value: E): Left<E> => ({
  type: 'Left',
  value,
})

export interface Right<A> {
  readonly type: 'Right'
  readonly value: A
}

/**
 * Construct a Right value.
 */
export const Right = <A>(value: A): Right<A> => ({
  type: 'Right',
  value,
})
