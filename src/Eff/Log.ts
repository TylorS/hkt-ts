import { pipe } from '../function/function'

import * as Eff from './Eff'
import { instr } from './Instruction'

export class Log<A> extends instr('Log')<A, void> {
  static is = <A, Y extends Eff.AnyTagged>(instr: Log<A> | Y): instr is Log<A> =>
    instr.tag === Log.tag

  static with = <A, Y extends Eff.AnyTagged, R>(
    eff: Eff.Eff<Log<A> | Y, R>,
  ): Eff.Eff<Y, readonly [readonly A[], R]> =>
    pipe(
      eff,
      Log.stateHandler(
        (): readonly A[] => [],
        (logs, y: Log<A>) => Eff.fromLazy(() => [[...logs, y.input], undefined] as const),
      ),
    )
}

export type LogsOf<T> = [Eff.Extract<T, Log<any>>] extends [Log<infer R>] ? R : never

export const log = <A>(log: A) => new Log(log)
