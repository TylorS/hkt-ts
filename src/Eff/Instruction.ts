import { Just, Maybe, Nothing, isJust, isNothing } from '../Data/Maybe'

import { AnyTagged, Eff, ReturnOf, Tagged, YieldOf, iterator } from './Eff'

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

    static withInstructions = <
      Y extends AnyTagged,
      R,
      I,
      O,
      Y2 extends AnyTagged,
      Y3 extends AnyTagged,
      R2,
    >(
      stepper: Stepper<Y, R>,
      onYield: (y: EffInstruction<T, I, O>) => Eff<Y2, unknown>,
      onReturn: (r: R) => Eff<Y3, R2>,
    ): Eff<Exclude<Y, EffInstruction<T, I, O>> | Y2 | Y3, R2> =>
      Eff(function* () {
        return yield* withInstructions(stepper, (y) => y.tag === tag, onYield, onReturn)
      })
  }

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
