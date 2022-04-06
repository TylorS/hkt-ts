import * as Gen from './Gen'
import * as Maybe from './Maybe'
import { flow, pipe } from './function'

export interface Optionality<A> extends Gen.Gen<OptionalityInstruction<any>, A> {}

export interface OptionalityInstruction<A> {
  readonly tag: 'Optionality'
  readonly maybe: Maybe.Maybe<A>
}

export const Optionality = Gen.Gen as <G extends Generator<OptionalityInstruction<any>, any>>(
  f: () => G,
) => Optionality<Gen.ReturnOf<G>>

export const fromMaybe = <A>(maybe: Maybe.Maybe<A>) =>
  Optionality(function* () {
    return (yield { tag: 'Optionality', maybe }) as A
  })

export const Nothing: Optionality<never> = fromMaybe(Maybe.Nothing)
export const Just = flow(Maybe.Just, fromMaybe)

export const run = <A>(o: Optionality<A>): Maybe.Maybe<A> =>
  pipe(o, runWith, Gen.iterator).next().value

export function runWith<G extends Gen.Gen>(
  g: G,
): Gen.Gen<Exclude<Gen.YieldOf<G>, OptionalityInstruction<any>>, Maybe.Maybe<Gen.ReturnOf<G>>> {
  return Gen.Gen(function* () {
    const i = Gen.iterator(g)
    let result = i.next()

    while (!result.done) {
      const instr = result.value

      switch (instr.tag) {
        case 'Optionality': {
          const maybe = (instr as OptionalityInstruction<any>).maybe

          if (Maybe.isNothing(maybe)) {
            return Maybe.Nothing
          }

          result = i.next(maybe.value)

          break
        }
        default: {
          result = i.next(yield instr as any)
        }
      }
    }

    return Maybe.Just(result.value)
  })
}
