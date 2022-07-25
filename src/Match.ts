import * as M from './Maybe.js'
import { flow, pipe } from './function.js'

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
