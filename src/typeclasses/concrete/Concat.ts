import { Lazy, identity, second } from '../../function'

// Concat represents a concatenation that does NOT have any associated laws.
export interface Concat<A> {
  readonly concat: (first: A, second: A) => A
}

export const First: Concat<any> = { concat: identity }
export const Second: Concat<any> = { concat: second }

export const concatAll =
  <A>(M: Concat<A>) =>
  (startWith: A) =>
  (as: ReadonlyArray<A>): A =>
    as.reduce(M.concat, startWith)

export const reverse = <A>(M: Concat<A>): Concat<A> => ({
  concat: (f, s) => M.concat(s, f),
})

export const fromLazy = <A>(f: Lazy<A>): Concat<A> => ({
  concat: f,
})
