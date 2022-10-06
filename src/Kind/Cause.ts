import { Trace } from '../Trace.js'

export type Cause<E> =
  | Empty
  | Interrupted
  | Unexpected
  | Expected<E>
  | Sequential<E>
  | Parallel<E>
  | Traced<E>

export interface Empty {
  readonly tag: 'Empty'
}

export const Empty: Empty = {
  tag: 'Empty',
}

export interface Interrupted {
  readonly tag: 'Interrupted'
  readonly by: string
}

export const Interrupted = (by: string): Interrupted => ({
  tag: 'Interrupted',
  by,
})

export interface Unexpected {
  readonly tag: 'Unexpected'
  readonly error: unknown
}

export function Unexpected(error: unknown): Unexpected {
  return {
    tag: 'Unexpected',
    error,
  }
}

export interface Expected<E> {
  readonly tag: 'Expected'
  readonly error: E
}

export function Expected<E>(error: E): Expected<E> {
  return {
    tag: 'Expected',
    error,
  }
}

export interface Sequential<E> {
  readonly tag: 'Sequential'
  readonly left: Cause<E>
  readonly right: Cause<E>
}

export function Sequential<E, E2>(left: Cause<E>, right: Cause<E2>): Sequential<E | E2> {
  return {
    tag: 'Sequential',
    left,
    right,
  }
}

export interface Parallel<E> {
  readonly tag: 'Parallel'
  readonly left: Cause<E>
  readonly right: Cause<E>
}

export function Parallel<E, E2>(left: Cause<E>, right: Cause<E2>): Parallel<E | E2> {
  return {
    tag: 'Parallel',
    left,
    right,
  }
}

export interface Traced<E> {
  readonly tag: 'Traced'
  readonly cause: Cause<E>
  readonly trace: Trace
}
