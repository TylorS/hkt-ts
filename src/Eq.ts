import fastDeepEqual from 'fast-deep-equal'

import { Associative } from './Associative'
import { constFalse, constTrue } from './function'

export const fromEquals = <A>(equals: Eq<A>['equals']): Eq<A> => ({
  equals,
})

export interface Eq<A> {
  readonly equals: (a: A, b: A) => boolean
}

export const DeepEquals: Eq<unknown> = {
  equals: fastDeepEqual,
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
type Include<T, A> = T extends A ? T : never

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
