import * as Either from '../Either.js'
import { HKT, Params } from '../HKT.js'
import { Include } from '../common.js'
import { constant, pipe } from '../function.js'

import type { Associative } from './Associative.js'
import * as AB from './AssociativeBoth.js'
import * as AE from './AssociativeEither.js'
import { Bottom1 } from './Bottom.js'
import { Contravariant1 } from './Contravariant.js'
import type { Eq } from './Eq.js'
import type { Identity } from './Identity.js'
import * as IB from './IdentityBoth.js'
import * as IE from './IdentityEither.js'
import { Top1 } from './Top.js'

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

export const array = <A>(ord: Ord<A>): Ord<ReadonlyArray<A>> =>
  fromCompare((first, second) => {
    // Fast Path: First compare based on lengths
    const fl = first.length
    const sl = second.length

    if (fl < sl) {
      return -1
    }

    if (fl > sl) {
      return 1
    }

    // Slow path: for array of the same length
    // ollect a sum by comparing the values at each
    // index and adding them together
    const sum = first
      .map((a, i) => ord.compare(a, second[i]))
      .reduce((x: number, y: number) => x + y, 0)

    // If they're considered equal, return 0
    if (sum === 0) {
      return 0
    }

    // If we're more negative return -1, otherwise 1
    return sum < 0 ? -1 : 1
  })

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

export const struct =
  <A>(ords: {
    readonly [K in keyof A]: Ord<A[K]>
  }) =>
  (K: Ord<keyof A>): Ord<Readonly<A>> =>
    fromCompare((first, second) => {
      let i = 0
      const keys = (Object.keys(ords) as Array<keyof A>).sort(K.compare)
      for (; i < keys.length - 1; i++) {
        const k = keys[i]
        const r = ords[k].compare(first[k], second[k])
        if (r !== 0) {
          return r
        }
      }

      const k = keys[i]

      return ords[k].compare(first[k], second[k])
    })

export const sum =
  <A extends Readonly<Record<string, any>>>() =>
  <T extends keyof A>(tag: T) =>
  (tagOrd: Ord<A[T]>) =>
  (ords: SumOrds<A, T>): Ord<A> =>
    fromCompare((x, y) => {
      if (x[tag] !== y[tag]) {
        return tagOrd.compare(x[tag], y[tag])
      }

      return ords[x[tag] as keyof SumOrds<A, T>].compare(x as any, y as any)
    })

export const lazy = <A>(f: () => Ord<A>): Ord<A> => {
  let memoed: Ord<A> | null = null

  const get = () => {
    if (!memoed) {
      memoed = f()
    }

    return memoed
  }

  return {
    equals: (a, b) => get().equals(a, b),
    compare: (a, b) => get().compare(a, b),
  }
}

export type SumOrds<A extends Readonly<Record<PropertyKey, any>>, T extends keyof A> = {
  readonly [K in KeysOf<A, T>]: Ord<FindType<A, T, K>>
}

type KeysOf<A, T extends keyof A> = A[T] extends PropertyKey ? A[T] : never

type FindType<A, T extends keyof A, K> = Include<A, { readonly [_ in T]: K }>

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
