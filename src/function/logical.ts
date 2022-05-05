import { Predicate } from './Predicate'
import { Refinement } from './Refinement'

export function ifElse<A, A1 extends A, B, C>(
  refinement: Refinement<A, A1>,
  ifF: (a: A1) => B,
  elseF: (a: A) => C,
): (value: A) => B | C

export function ifElse<A, B, C>(
  predicate: Predicate<A>,
  ifF: (a: A) => B,
  elseF: (a: A) => C,
): (value: A) => B | C

export function ifElse<A, B, C>(predicate: Predicate<A>, ifF: (a: A) => B, elseF: (a: A) => C) {
  return (value: A): B | C => (predicate(value) ? ifF(value) : elseF(value))
}
