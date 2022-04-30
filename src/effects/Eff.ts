import { Cast } from 'ts-toolbelt/out/Any/Cast'

import { HKT2, Params } from '../HKT'
import { Include } from '../common'
import { lookup } from '../data/Map'
import { Just, Maybe, Nothing, isJust, isNothing } from '../data/Maybe'
import { Lazy, Unary, identity, pipe } from '../function/function'
import { Associative } from '../typeclasses/concrete/Associative'
import { Eq } from '../typeclasses/concrete/Eq'
import { Identity } from '../typeclasses/concrete/Identity'
import * as AB from '../typeclasses/effect/AssociativeBoth'
import { AssociativeFlatten2 } from '../typeclasses/effect/AssociativeFlatten'
import { Covariant2 } from '../typeclasses/effect/Covariant'

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

/* #region Instructions + Handlers */
export interface EffInstruction<T extends string, I, O> {
  readonly tag: T
  readonly input: I
  readonly [Symbol.iterator]: () => Generator<this, O, O>
}

export const instr = <T extends string>(tag: T) =>
  class Instr<I, O> implements EffInstruction<T, I, O> {
    static tag: T = tag
    readonly tag: T = tag

    constructor(readonly input: I) {}

    *[Symbol.iterator](): Generator<this, O, O> {
      return yield this
    }

    static handler = <I, O, Y2 extends AnyTagged>(f: (y: EffInstruction<T, I, O>) => Eff<Y2>) =>
      handler(tag, f)

    static stateHandler = <S, I, O, Y2 extends AnyTagged>(
      initialize: () => S,
      f: (state: S, y: EffInstruction<T, I, O>) => Eff<Y2, readonly [S, unknown]>,
    ) => stateHandler(tag, initialize, f)

    static returnHandler = <E extends Eff, I, O, Y2 extends AnyTagged, Y3 extends AnyTagged, R2>(
      eff: E,
      f: (y: EffInstruction<T, I, O>, exit: (r: R2) => never) => Eff<Y2>,
      onReturn: (r: ReturnOf<E>) => Eff<Y3, R2>,
    ): Eff<Exclude<YieldOf<E> | Y2 | Y3, EffInstruction<T, I, O>>, R2> =>
      returnHandler(tag, eff, f, onReturn)
  }

export type Extract<E, Y> = Include<YieldOf<E>, Y>

export function handler<T extends string, Y1 extends Tagged<T, any>, Y2 extends AnyTagged>(
  tag: T,
  f: (y: Y1) => Eff<Y2>,
) {
  return <Y extends AnyTagged, R>(eff: Eff<Y | Y1, R>): Eff<Exclude<Y | Y2, Y1>, R> =>
    Eff(function* () {
      const i = iterator(eff)
      let result = i.next()

      while (!result.done) {
        const instr = result.value

        if (instr.tag === tag) {
          result = i.next(yield* f(result.value as Y1))
        } else {
          result = i.next((yield instr as any) as Exclude<Y | Y2, Y1>)
        }
      }

      return result.value
    })
}

export const returnHandler = <
  T extends string,
  E extends Eff,
  I,
  O,
  Y2 extends AnyTagged,
  Y3 extends AnyTagged,
  R2,
>(
  tag: T,
  eff: E,
  f: (y: EffInstruction<T, I, O>, exit: (r: R2) => never) => Eff<Y2>,
  onReturn: (r: ReturnOf<E>) => Eff<Y3, R2>,
): Eff<Exclude<YieldOf<E> | Y2 | Y3, EffInstruction<T, I, O>>, R2> =>
  Eff(function* () {
    const i = iterator(eff)
    let result = i.next()
    let value = Nothing as Maybe<R2>
    const exit = (r: R2) => {
      value = Just(r)
    }

    while (!result.done && isNothing(value)) {
      const instr = result.value

      if (instr.tag === tag) {
        const n = yield* f(result.value as any, exit as (r: R2) => never)

        if (isJust(value)) {
          break
        }

        result = i.next(n)
      } else {
        result = i.next((yield instr as any) as any)
      }
    }

    return isNothing(value)
      ? yield* onReturn((result as IteratorReturnResult<ReturnOf<E>>).value)
      : value.value
  })

export const stateHandler =
  <T extends string, S, I, O, Y2 extends AnyTagged>(
    tag: T,
    initialize: () => S,
    f: (state: S, y: EffInstruction<T, I, O>) => Eff<Y2, readonly [S, any]>,
  ) =>
  <Y extends AnyTagged, R>(
    eff: Eff<Y | EffInstruction<T, I, O>, R>,
  ): Eff<Exclude<Y | Y2, EffInstruction<T, I, O>>, readonly [S, R]> =>
    Eff(function* () {
      const i = iterator(eff)
      let result = i.next()
      let current = initialize()

      while (!result.done) {
        const instr = result.value

        if (instr.tag === tag) {
          const [s, a] = yield* f(current, result.value as any)

          current = s
          result = i.next(a)
        } else {
          result = i.next((yield instr as any) as any)
        }
      }

      return [current, result.value]
    })

export function handleWith<E extends Eff, Y2 extends AnyTagged, R2>(
  eff: E,
  handler: (stepper: Stepper<YieldOf<E>, ReturnOf<E>>) => Generator<Y2, R2>,
) {
  return Eff(function* () {
    return yield* handler(makeStepper(eff))
  })
}

export type Stepper<Y, R> = NextStepper<Y> | DoneStepper<R>

export interface NextStepper<Y> {
  readonly done: false
  readonly instr: Y
  readonly next: (n: unknown) => void
}

export interface DoneStepper<R> {
  readonly done: true
  readonly value: R
}

export function makeStepper<E extends Eff>(eff: E): Stepper<YieldOf<E>, ReturnOf<E>> {
  const i = iterator(eff)
  let result = i.next()

  const stepper = {
    get done() {
      return result.done
    },
    get instr() {
      return result.value as YieldOf<E>
    },
    next(n?: unknown) {
      result = i.next(n)
    },
    get value() {
      return result.value as ReturnOf<E>
    },
  }

  return stepper as Stepper<YieldOf<E>, ReturnOf<E>>
}

export function* withInstructions<Y, R, Y2, Y3 extends AnyTagged, Y4 extends AnyTagged, R2>(
  stepper: Stepper<Y, R>,
  predicate: (y: Y) => boolean,
  onYield: (y: Y2) => Eff<Y3, unknown>,
  onReturn: (r: R) => Eff<Y4, R2>,
): Generator<Exclude<Y, Y2> | Y3 | Y4, R2> {
  while (!stepper.done) {
    if (predicate(stepper.instr)) {
      stepper.next(yield* onYield(stepper.instr as any))
    } else {
      stepper.next(yield stepper.instr as any)
    }
  }

  return yield* onReturn(stepper.value)
}

/* #endregion */

export const memoize =
  <A extends ReadonlyArray<any>>(E: Eq<A>) =>
  <Y extends AnyTagged, R>(f: (...args: A) => Eff<Y, R>): ((...args: A) => Eff<Y, R>) => {
    const map = new Map<A, R>()
    const lookupE = lookup(E)
    const find = (args: A) => lookupE(args)(map)

    return (...args: A) =>
      Eff(function* () {
        const m = find(args)

        if (isJust(m)) {
          return m.value
        }

        const r = yield* f(...args)

        map.set(args, r)

        return r
      })
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

export const Covariant: Covariant2<EffHKT> = {
  map,
}

export const AssociativeBoth: AB.AssociativeBoth2<EffHKT> = {
  both: (s) => (f) =>
    Eff(function* () {
      const a = yield* f
      const b = yield* s

      return [a, b]
    }),
}

export const both = AssociativeBoth.both
export const tuple = AB.tuple<EffHKT>({ ...AssociativeBoth, ...Covariant })

export const AssociativeFlatten: AssociativeFlatten2<EffHKT> = {
  flatten,
}
