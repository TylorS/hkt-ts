import { Either, match } from '../../data/Either'
import { constant, identity, pipe } from '../../function/function'
import type { Identity } from '../../typeclasses/concrete/Identity'

import type { Associative } from './Associative'
import type { Eq } from './Eq'

export interface Ord<A> extends Eq<A> {
  readonly compare: (first: A, second: A) => Ordering
}

export type ValueOf<T> = [T] extends [Ord<infer R>] ? R : never

export type Ordering = -1 | 0 | 1

export function fromCompare<A>(compare: Ord<A>['compare']): Ord<A> {
  return {
    equals: (a, b) => compare(a, b) === 0,
    compare,
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

export const makeIdentity = <A = never>(): Identity<Ord<A>> => ({
  ...makeAssociative<A>(),
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

export const bothWith =
  <A, B>(A: Ord<A>, B: Ord<B>) =>
  <C>(f: (c: C) => readonly [A, B]): Ord<C> =>
    pipe(tuple(A, B), contramap(f))

export const both = <A, B>(A: Ord<A>, B: Ord<B>): Ord<readonly [A, B]> => bothWith(A, B)(identity)

export const eitherWith =
  <A, B>(A: Ord<A>, B: Ord<B>) =>
  <C>(f: (c: C) => Either<A, B>): Ord<C> =>
    fromCompare((a, b) =>
      pipe(
        a,
        f,
        match(
          (a1) =>
            pipe(
              b,
              f,
              match(
                (a2) => A.compare(a1, a2),
                () => 1,
              ),
            ),
          (b1) =>
            pipe(
              b,
              f,
              match(
                () => -1,
                (b2) => B.compare(b1, b2),
              ),
            ),
        ),
      ),
    )

export const either = <A, B>(A: Ord<A>, B: Ord<B>): Ord<Either<A, B>> => eitherWith(A, B)(identity)
