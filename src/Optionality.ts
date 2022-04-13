import * as Eff from './Eff'
import * as Maybe from './Maybe'
import { flow } from './function'

export interface Optionality<A> extends Eff.Eff<OptionalityInstruction<any>, A> {}

export class OptionalityInstruction<A> extends Eff.instr('Optionality')<Maybe.Maybe<A>, A> {}

export const fromMaybe = <A>(maybe: Maybe.Maybe<A>) => new OptionalityInstruction(maybe)

export const Nothing: Optionality<never> = fromMaybe<never>(Maybe.Nothing)
export const Just = flow(Maybe.Just, fromMaybe)

export function runWith<G extends Eff.Eff>(
  g: G,
): Eff.Eff<Exclude<Eff.YieldOf<G>, OptionalityInstruction<any>>, Maybe.Maybe<Eff.ReturnOf<G>>> {
  return OptionalityInstruction.returnHandler(
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
