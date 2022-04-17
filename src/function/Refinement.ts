/* eslint-disable @typescript-eslint/no-unused-vars */
import { Cast } from 'ts-toolbelt/out/Any/Cast'

import type { Branded, Combine } from '../data/Branded'
import { Either, isRight } from '../data/Either'
import { Maybe, isJust } from '../data/Maybe'

export interface Refinement<A, B extends A> {
  (a: A): a is B
}

export type InputOf<T> = [T] extends [Refinement<infer I, infer _>] ? I : never
export type OutputOf<T> = [T] extends [Refinement<infer _, infer O>] ? O : never

export const fromMaybeK = <A, B extends A>(getOption: (a: A) => Maybe<B>): Refinement<A, B> => {
  return (a: A): a is B => isJust(getOption(a))
}

export const fromEitherK = <A, E, B extends A>(
  getEither: (a: A) => Either<E, B>,
): Refinement<A, B> => {
  return (a: A): a is B => isRight(getEither(a))
}

export const id = <A>(): Refinement<A, A> => {
  return (_): _ is A => true
}

export const not =
  <A, B extends A>(refinement: Refinement<A, B>): Refinement<A, Exclude<A, B>> =>
  (a): a is Exclude<A, B> =>
    !refinement(a)

export const or =
  <A, C extends A>(second: Refinement<A, C>) =>
  <B extends A>(first: Refinement<A, B>): Refinement<A, B | C> =>
  (a): a is B | C =>
    first(a) || second(a)

export const and =
  <A, C extends A>(second: Refinement<A, C>) =>
  <B extends A>(first: Refinement<A, B>): Refinement<A, Cast<CombineRefinment<B, C>, A>> =>
  (a): a is Cast<CombineRefinment<B, C>, A> =>
    first(a) && second(a)

type CombineRefinment<A, B> = A extends Branded<any, any>
  ? B extends Branded<any, any>
    ? Combine<A, B>
    : A & B
  : A & B

export const zero = <A, B extends A = A>(): Refinement<A, B> => {
  return (_): _ is B => false
}

export const compose =
  <A, B extends A, C extends B>(bc: Refinement<B, C>) =>
  (ab: Refinement<A, B>): Refinement<A, C> => {
    return (i): i is C => ab(i) && bc(i)
  }
