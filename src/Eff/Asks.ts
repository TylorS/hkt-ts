import * as Eff from './Eff'
import { instr } from './Instruction'

export class Asks<R, A> extends instr('Asks')<(r: R) => A, A> {
  static is = <R, A, Y extends Eff.AnyTagged>(instr: Asks<R, A> | Y): instr is Asks<R, A> =>
    instr.tag === Asks.tag

  static with = <R>(resources: R) =>
    Asks.handler((y: Asks<R, any>) => Eff.fromLazy(() => y.input(resources)))
}

export type RequirementsOf<T> = [Eff.Extract<T, Asks<any, any>>] extends [Asks<infer R, any>]
  ? R
  : never

export const asks = <R, A>(f: (r: R) => A) => new Asks(f)

export const ask = <R>() => new Asks((r: R) => r)

export const asksEff = <R, Y extends Eff.AnyTagged, A>(f: (r: R) => Eff.Eff<Y, A>) =>
  Eff.Eff(function* () {
    return yield* yield* asks(f)
  })
