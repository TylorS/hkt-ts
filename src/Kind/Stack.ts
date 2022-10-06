import { InvariantUnary } from './InvariantUnary.js'
import { None, Option, Some, isSome } from './Option.js'
import { Predicate } from './Predicate.js'

export interface Stack<A> extends Iterable<A> {
  readonly value: A
  readonly previous: Option<Stack<A>>
}

export function Stack<A>(value: A, previous: Option<Stack<A>> = None): Stack<A> {
  return {
    value,
    previous,
    *[Symbol.iterator]() {
      yield value

      while (isSome(previous)) {
        yield* previous.value
      }
    },
  }
}

export function push<A>(value: A) {
  return (stack: Stack<A>): Stack<A> => Stack(value, Some(stack))
}

export function pop<A>(stack: Stack<A>): Option<Stack<A>> {
  return stack.previous
}

export function replace<A>(value: A) {
  return (stack: Stack<A>) => Stack(value, stack.previous)
}

export function modify<A>(f: InvariantUnary<A>) {
  return (stack: Stack<A>) => Stack(f(stack.value), stack.previous)
}

export function popWhile<A>(predicate: Predicate<A>) {
  return (stack: Stack<A>): Option<Stack<A>> => {
    let current = Some(stack)

    while (isSome(current) && predicate(current.value.value)) {
      current = pop(current.value)
    }

    return current
  }
}
