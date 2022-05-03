import EQ from 'fast-deep-equal'

import { HKT, Params } from '../../HKT'
import { Include } from '../../common'
import * as E from '../../data/Either'
import { constFalse, constTrue, pipe } from '../../function/function'
import * as AB from '../effect/AssociativeBoth'
import * as AE from '../effect/AssociativeEither'
import { Contravariant1 } from '../effect/Contravariant'

import { Associative } from './Associative'

export const fromEquals = <A>(equals: Eq<A>['equals']): Eq<A> => ({
  equals,
})

export interface Eq<A> {
  readonly equals: (a: A, b: A) => boolean
}

export const DeepEquals: Eq<unknown> = {
  equals: EQ,
}

export const Strict: Eq<unknown> = {
  equals: Object.is,
}

export const AlwaysEqual: Eq<unknown> = {
  equals: constTrue,
}

export const NeverEquals: Eq<unknown> = {
  equals: constFalse,
}

export const tuple = <A extends ReadonlyArray<any>>(
  ...eqs: { readonly [K in keyof A]: Eq<A[K]> }
): Eq<A> =>
  fromEquals(
    (a, b) =>
      a.length === b.length &&
      a.length === eqs.length &&
      a.every((ax, i) => eqs[i].equals(ax, b[i])),
  )

export const struct = <A extends Readonly<Record<string, any>>>(eqs: {
  readonly [K in keyof A]: Eq<A[K]>
}): Eq<A> => fromEquals((a, b) => Object.entries(a).every(([k, v]) => eqs[k].equals(v, b[k])))

export const contramap =
  <B, A>(f: (b: B) => A) =>
  (eq: Eq<A>): Eq<B> =>
    fromEquals((a, b) => eq.equals(f(a), f(b)))

export const makeAssociative = <A>(): Associative<Eq<A>> => ({
  concat: (x, y) => fromEquals((a, b) => x.equals(a, b) && y.equals(a, b)),
})

export const sum =
  <A extends Readonly<Record<PropertyKey, any>>>() =>
  <T extends keyof A>(tag: T) =>
  (eqs: SumEqs<A, T>): Eq<A> => ({
    equals: (a, b) => (a[tag] === b[tag] ? (eqs as any)[tag](a, b) : false),
  })

export type SumEqs<A extends Readonly<Record<PropertyKey, any>>, T extends keyof A> = {
  readonly [K in KeysOf<A, T>]: Eq<FindType<A, T, K>>
}

type KeysOf<A, T extends keyof A> = A[T] extends PropertyKey ? A[T] : never

type FindType<A, T extends keyof A, K> = Include<A, { readonly [_ in T]: K }>

export const lazy = <A>(f: () => Eq<A>): Eq<A> => {
  let eq: Eq<A>
  return {
    equals: (a, b) => {
      const e = eq ?? (eq = f())

      return e.equals(a, b)
    },
  }
}

export const nullable = <A>(eq: Eq<A>): Eq<A | null> => ({
  equals: (a, b) => {
    if (a === null || b === null) {
      return a === b
    }

    return eq.equals(a, b)
  },
})

export const optional = <A>(eq: Eq<A>): Eq<A | undefined> => ({
  equals: (a, b) => {
    if (a === undefined || b === undefined) {
      return a === b
    }

    return eq.equals(a, b)
  },
})

export const string = Strict as Eq<string>
export const number = Strict as Eq<number>
export const boolean = Strict as Eq<boolean>

export interface EqHKT extends HKT {
  readonly type: Eq<this[Params.A]>
}

export const Contravariant: Contravariant1<EqHKT> = {
  contramap,
}

export const AssociativeBoth: AB.AssociativeBoth1<EqHKT> = {
  both: (second) => (first) =>
    fromEquals(([a1, b1], [a2, b2]) => first.equals(a1, a2) && second.equals(b1, b2)),
}

export const bothWith = AB.bothWith<EqHKT>({ ...AssociativeBoth, ...Contravariant })
export const both = AssociativeBoth.both

export const AssociativeEither: AE.AssociativeEither1<EqHKT> = {
  either: (EB) => (EA) =>
    fromEquals((first, second) =>
      pipe(
        first,
        E.match(
          (a1) =>
            pipe(
              second,
              E.match((a2) => EA.equals(a1, a2), constFalse),
            ),
          (b1) =>
            pipe(
              second,
              E.match(constFalse, (b2) => EB.equals(b1, b2)),
            ),
        ),
      ),
    ),
}

export const eitherWith = AE.eitherWith<EqHKT>({ ...AssociativeEither, ...Contravariant })
export const either = AssociativeEither.either

export const not = <A>(E: Eq<A>): Eq<A> => ({
  equals: (a, b) => !E.equals(a, b),
})
