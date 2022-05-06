import { Cast } from 'ts-toolbelt/out/Any/Cast'

import { HKT2, Params } from '../HKT'
import { Associative } from '../Typeclass/Data/Associative'
import { Identity } from '../Typeclass/Data/Identity'
import * as AB from '../Typeclass/effect/AssociativeBoth'
import { AssociativeFlatten2 } from '../Typeclass/effect/AssociativeFlatten'
import * as C from '../Typeclass/effect/Covariant'
import * as IB from '../Typeclass/effect/IdentityBoth'
import * as T from '../Typeclass/effect/Top'
import { Include } from '../common'
import { Lazy, Unary, identity, pipe } from '../function/function'

/**
 * Eff is a lightweight abstraction which preserves referential transparency of
 * a generator function and utilizes a tag to track the different effects performed.
 */
export interface Eff<Y extends AnyTagged = AnyTagged, R = any> {
  readonly [Symbol.iterator]: () => Generator<Y, R>
}

export type AnyTagged = { readonly tag: string }

export type Tagged<T extends string, A> = Cast<
  {
    readonly [K in keyof A | 'tag']: K extends keyof A ? A[K] : T
  },
  AnyTagged
>

export type Extract<E, Y> = Include<YieldOf<E>, Y>

export function Eff<Y extends AnyTagged, R>(f: () => Generator<Y, R>): Eff<Y, R> {
  return {
    [Symbol.iterator]: f,
  }
}

export const of = <A>(value: A) =>
  // eslint-disable-next-line require-yield
  Eff(function* () {
    return value
  })

export const fromLazy = <A>(lazy: Lazy<A>) =>
  // eslint-disable-next-line require-yield
  Eff(function* () {
    return lazy()
  })

export function map<A, B>(f: Unary<A, B>) {
  return <Y extends AnyTagged>(eff: Eff<Y, A>): Eff<Y, B> =>
    Eff(function* () {
      return f(yield* eff)
    })
}

export function flatMap<A, Y2 extends AnyTagged, B>(f: Unary<A, Eff<Y2, B>>) {
  return <Y extends AnyTagged>(eff: Eff<Y, A>): Eff<Y | Y2, B> =>
    Eff(function* () {
      return yield* f(yield* eff)
    })
}

export const flatten = <Y1 extends AnyTagged, Y2 extends AnyTagged, A>(eff: Eff<Y1, Eff<Y2, A>>) =>
  pipe(eff, flatMap(identity))

export const fromIterable =
  <A, Y extends AnyTagged, B>(f: (a: A) => Eff<Y, B>) =>
  (iterable: Iterable<A>): Eff<Y, ReadonlyArray<B>> =>
    Eff(function* () {
      const output: B[] = []

      for (const a of iterable) {
        output.push(yield* f(a))
      }

      return output
    })

export const lazy = <Y extends AnyTagged, A>(f: () => Eff<Y, A>): Eff<Y, A> => ({
  [Symbol.iterator]: () => f()[Symbol.iterator](),
})

export type YieldOf<T> = [T] extends [Eff<infer Y, any>] ? Y : never

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ReturnOf<T> = [T] extends [Eff<infer _, infer R>] ? R : never

export function iterator<Y extends AnyTagged, R>(eff: Eff<Y, R>): Generator<Y, R> {
  return eff[Symbol.iterator]()
}

export function run<R>(eff: Eff<never, R>): R {
  return iterator(eff).next().value
}

export const makeAssociative = <A, Y extends AnyTagged = AnyTagged>(
  A: Associative<A>,
): Associative<Eff<Y, A>> => ({
  concat: (f, s) =>
    Eff(function* () {
      return A.concat(yield* f, yield* s)
    }),
})

export const makeIdentity = <A, Y extends AnyTagged = AnyTagged>(
  A: Identity<A>,
): Identity<Eff<Y, A>> => ({
  ...makeAssociative(A),
  id: of(A.id),
})

export interface EffHKT extends HKT2 {
  readonly type: Eff<Cast<this[Params.E], AnyTagged>, this[Params.A]>
}

export const Covariant: C.Covariant2<EffHKT> = {
  map,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const AssociativeBoth: AB.AssociativeBoth2<EffHKT> = {
  both: (s) => (f) =>
    Eff(function* () {
      const a = yield* f
      const b = yield* s

      return [a, b]
    }),
}

export const both = AssociativeBoth.both

export const AssociativeFlatten: AssociativeFlatten2<EffHKT> = {
  flatten,
}

export const Top: T.Top2<EffHKT> = {
  top: of([]),
}

export const IdentityBoth: IB.IdentityBoth2<EffHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const tuple = IB.tuple<EffHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<EffHKT>({ ...IdentityBoth, ...Covariant })
