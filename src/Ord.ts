import type { Associative } from './Associative'
import type { Eq } from './Eq'
import type { Monoid } from './Monoid'
import { constant } from './function'

export interface Ord<A> {
  readonly compare: (first: A, second: A) => Ordering
}

export type ValueOf<T> = [T] extends [Ord<infer R>] ? R : never

export type Ordering = -1 | 0 | 1

export function fromCompare<A>(compare: Ord<A>['compare']): Ord<A> {
  return {
    compare,
  }
}

export function makeEq<A>(O: Ord<A>): Eq<A> {
  return {
    equals: (a, b) => O.compare(a, b) === 0,
  }
}

export const Static: Ord<unknown> = fromCompare(constant(0))

export const tuple = <A extends ReadonlyArray<unknown>>(
  ...ords: { readonly [K in keyof A]: Ord<A[K]> }
): Ord<Readonly<A>> =>
  fromCompare((first, second) => {
    let i = 0
    for (; i < ords.length - 1; i++) {
      const r = ords[i].compare(first[i], second[i])
      if (r !== 0) {
        return r
      }
    }

    return ords[i].compare(first[i], second[i])
  })

export const reverse = <A>(O: Ord<A>): Ord<A> =>
  fromCompare((first, second) => O.compare(second, first))

export const contramap =
  <A, B>(f: (a: A) => B) =>
  (ord: Ord<B>): Ord<A> =>
    fromCompare((first, second) => ord.compare(f(first), f(second)))

export const makeAssociative = <A = never>(): Associative<Ord<A>> => ({
  concat: (first, second) =>
    fromCompare((a1, a2) => {
      const ox = first.compare(a1, a2)

      return ox !== 0 ? ox : second.compare(a1, a2)
    }),
})

export const makeMonoid = <A = never>(): Monoid<Ord<A>> => ({
  concat: makeAssociative<A>().concat,
  id: Static,
})

export const lt =
  <A>(O: Ord<A>) =>
  (first: A, second: A): boolean =>
    O.compare(first, second) === -1

export const gt =
  <A>(O: Ord<A>) =>
  (first: A, second: A): boolean =>
    O.compare(first, second) === 1

export const leq =
  <A>(O: Ord<A>) =>
  (first: A, second: A): boolean =>
    O.compare(first, second) !== 1

export const geq =
  <A>(O: Ord<A>) =>
  (first: A, second: A): boolean =>
    O.compare(first, second) !== -1

export const min =
  <A>(O: Ord<A>) =>
  (first: A, second: A): A =>
    first === second || O.compare(first, second) < 1 ? first : second

export const max =
  <A>(O: Ord<A>) =>
  (first: A, second: A): A =>
    first === second || O.compare(first, second) > -1 ? first : second

export const clamp = <A>(O: Ord<A>): ((low: A, hi: A) => (a: A) => A) => {
  const minO = min(O)
  const maxO = max(O)

  return (low, hi) => (a) => maxO(minO(a, hi), low)
}

export const between = <A>(O: Ord<A>): ((low: A, hi: A) => (a: A) => boolean) => {
  const ltO = lt(O)
  const gtO = gt(O)
  return (low, hi) => (a) => ltO(a, low) || gtO(a, hi) ? false : true
}
