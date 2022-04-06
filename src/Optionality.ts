import * as Eff from './Eff'
import * as Maybe from './Maybe'
import { flow } from './function'

export interface Optionality<A> extends Eff.Eff<OptionalityInstruction<any>, A> {}

export class OptionalityInstruction<A> extends Eff.instr('Optionality')<Maybe.Maybe<A>, A> {}

export const Optionality = Eff.Eff as <G extends Generator<OptionalityInstruction<any>, any>>(
  f: () => G,
) => Optionality<Eff.ReturnOf<G>>

export const fromMaybe = <A>(maybe: Maybe.Maybe<A>) => new OptionalityInstruction(maybe)

export const Nothing: Optionality<never> = fromMaybe<never>(Maybe.Nothing)
export const Just = flow(Maybe.Just, fromMaybe)

export function runWith<G extends Eff.Eff>(
  g: G,
): Eff.Eff<Exclude<Eff.YieldOf<G>, OptionalityInstruction<any>>, Maybe.Maybe<Eff.ReturnOf<G>>> {
  return Eff.returnHandler(
    'Optionality',
    g,
    (instr, exit) =>
      Eff.fromLazy(() => {
        if (Maybe.isNothing(instr.input)) {
          return exit(Maybe.Nothing)
        }

        return instr.input.value
      }),
    (a) => Eff.of(Maybe.Just(a)),
  )
}
