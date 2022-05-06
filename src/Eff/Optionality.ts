import * as Maybe from '../Data/Maybe'
import { flow } from '../function/function'

import * as Eff from './Eff'
import { instr } from './Instruction'

export class Optionality<A> extends instr('Optionality')<Maybe.Maybe<A>, A> {
  static is = <A, Y extends Eff.AnyTagged>(instr: Optionality<A> | Y): instr is Optionality<A> =>
    instr.tag === Optionality.tag

  static with = <E extends Eff.Eff>(
    eff: E,
  ): Eff.Eff<Exclude<Eff.YieldOf<E>, Optionality<any>>, Maybe.Maybe<Eff.ReturnOf<E>>> =>
    Optionality.returnHandler(
      eff,
      (instr: Optionality<any>, exit) =>
        Eff.fromLazy(() => {
          if (Maybe.isNothing(instr.input)) {
            return exit(Maybe.Nothing)
          }

          return instr.input.value
        }),
      flow(Maybe.Just, Eff.of),
    )
}

export const fromMaybe = <A>(maybe: Maybe.Maybe<A>) => new Optionality(maybe)
