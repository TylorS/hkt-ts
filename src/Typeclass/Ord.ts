import * as Either from '../Either'
import { HKT, Params } from '../HKT'
import { constant, pipe } from '../function'

import type { Associative } from './Associative'
import * as AB from './AssociativeBoth'
import * as AE from './AssociativeEither'
import { Bottom1 } from './Bottom'
import { Contravariant1 } from './Contravariant'
import type { Eq } from './Eq'
import type { Identity } from './Identity'
import * as IB from './IdentityBoth'
import * as IE from './IdentityEither'
import { Top1 } from './Top'

export interface Ord<A> extends Eq<A> {
  readonly compare: (first: A, second: A) => Ordering
}

export type ValueOf<T> = [T] extends [Ord<infer R>] ? R : never

export type Ordering = -1 | 0 | 1

export function fromCompare<A>(compare: Ord<A>['compare']): Ord<A> {
  return {
    equals: (a, b) => compare(a, b) === 0,
    // Attempt reference equality first for performance
    compare: (a, b) => (Object.is(a, b) ? 0 : compare(a, b)),
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

export interface OrdHKT extends HKT {
  readonly type: Ord<this[Params.A]>
}

export const Contravariant: Contravariant1<OrdHKT> = {
  contramap,
}

export const AssociativeEither: AE.AssociativeEither1<OrdHKT> = {
  either: (second) => (first) =>
    fromCompare((f, s) =>
      pipe(
        f,
        Either.match(
          (a1) =>
            pipe(
              s,
              Either.match(
                (a2) => first.compare(a1, a2),
                () => -1,
              ),
            ),
          (b1) =>
            pipe(
              s,
              Either.match(
                () => 1,
                (b2) => second.compare(b1, b2),
              ),
            ),
        ),
      ),
    ),
}

export const eitherWith = AE.eitherWith<OrdHKT>({ ...AssociativeEither, ...Contravariant })

export const either = AssociativeEither.either

const orElse = (second: () => Ordering) => (first: Ordering) => first === 0 ? second() : first

export const AssociativeBoth: AB.AssociativeBoth1<OrdHKT> = {
  both: (second) => (first) =>
    fromCompare(([a1, b1], [a2, b2]) =>
      pipe(
        first.compare(a1, a2),
        orElse(() => second.compare(b1, b2)),
      ),
    ),
}

export const bothWith = AB.bothWith<OrdHKT>({ ...AssociativeBoth, ...Contravariant })

export const both = AssociativeBoth.both

export const Top: Top1<OrdHKT> = {
  top: Static,
}

export const Bottom: Bottom1<OrdHKT> = {
  bottom: Static,
}

export const IdentityBoth: IB.IdentityBoth1<OrdHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const IdentityEither: IE.IdentityEither1<OrdHKT> = {
  ...AssociativeEither,
  ...Bottom,
}

export const makeMinAssociative = <A>(O: Ord<A>): Associative<A> => ({
  concat: min(O),
})

export const makeMaxAssociative = <A>(O: Ord<A>): Associative<A> => ({
  concat: max(O),
})
