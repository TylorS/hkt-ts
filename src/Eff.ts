import { Cast } from 'ts-toolbelt/out/Any/Cast'

import { Just, Maybe, Nothing, isJust, isNothing } from './Maybe'
import { Include } from './common'
import { Lazy } from './function'

/**
 * Eff is a lightweight abstraction which preserves referential transparency of
 * a generator function and utilizes a tag to track the different effects performed.
 */
export interface Eff<Y extends AnyTagged = AnyTagged, R = any> {
  readonly [Symbol.iterator]: () => Generator<Y, R>
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

export type YieldOf<T> = [T] extends [Eff<infer Y, any>] ? Y : never

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ReturnOf<T> = [T] extends [Eff<infer _, infer R>] ? R : never

export function iterator<Y extends AnyTagged, R>(gen: Eff<Y, R>): Generator<Y, R> {
  return gen[Symbol.iterator]()
}

export function run<R>(gen: Eff<never, R>): R {
  return iterator(gen).next().value
}

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
  }

export type Extract<E, Y> = Include<YieldOf<E>, Y>

export function handler<T extends string, Y1 extends Tagged<T, any>, Y2 extends AnyTagged>(
  tag: T,
  f: (y: Y1) => Eff<Y2>,
) {
  return <Y extends AnyTagged, R>(gen: Eff<Y | Y1, R>): Eff<Exclude<Y | Y2, Y1>, R> =>
    Eff(function* () {
      const i = iterator(gen)
      let result = i.next()

      while (!result.done) {
        const instr = result.value

        if (instr.tag === tag) {
          result = i.next(yield* f(result.value as Y1))
        } else {
          result = i.next((yield instr as any) as any)
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
  ): Eff<Exclude<Y | Y2, EffInstruction<T, I, O>>, R> =>
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

      return result.value
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

export function* withInstructions<Y, R, Y2, R2>(
  stepper: Stepper<Y, R>,
  predicate: (y: Y) => boolean,
  onYield: (y: Y2) => unknown,
  onReturn: (r: R) => R2,
): Generator<Exclude<Y, Y2>, R2> {
  while (!stepper.done) {
    if (predicate(stepper.instr)) {
      stepper.next(onYield(stepper.instr as any))
    } else {
      stepper.next(yield stepper.instr as any)
    }
  }

  return onReturn(stepper.value)
}