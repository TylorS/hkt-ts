import * as M from '../Data/Maybe'

import { flow, pipe, unsafeCoerce } from './function'

export interface Match<A, B> {
  (a: A): M.Maybe<B>
}

export const map =
  <A, B>(f: (a: A) => B) =>
  <I>(match: Match<I, A>): Match<I, B> =>
    flow(match, M.map(f))

export const mapMaybe =
  <A, B>(f: (a: A) => M.Maybe<B>) =>
  <I>(match: Match<I, A>): Match<I, B> =>
    flow(match, M.flatMap(f))

export const flatMap =
  <A, I2, B>(f: (a: A) => Match<I2, B>) =>
  <I>(match: Match<I, A>): Match<I & I2, B> =>
  (i) =>
    pipe(
      i,
      match,
      M.flatMap((a) => f(a)(i)),
    )

export const getOrElse =
  <B>(orElse: () => B) =>
  <I, A>(match: Match<I, A>) =>
    flow(match, M.getOrElse(orElse))

const PARTIAL_PLACEHOLDER = Symbol('PartialPlaceholder')

const miss = <A>(): A => unsafeCoerce(PARTIAL_PLACEHOLDER)

export function partial<A, B>(f: (miss: () => never) => (input: A) => B): Match<A, B> {
  return (a) => {
    const b = f(miss)(a)

    if ((b as any) === PARTIAL_PLACEHOLDER) {
      return M.Nothing
    }

    return M.Just(b)
  }
}
