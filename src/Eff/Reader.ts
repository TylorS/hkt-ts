import { identity } from '../function'

import * as Eff from './Eff'

export interface Reader<R, A> extends Eff.Eff<Asks<R, any>, A> {}

export type RequirementsOf<T> = [Eff.Extract<T, Asks<any, any>>] extends [Asks<infer R, any>]
  ? R
  : never

export class Asks<R, A> extends Eff.instr('Reader/Asks')<(r: R) => A, A> {}

export function asks<R, A>(asks: (r: R) => A): Reader<R, A> {
  return new Asks(asks)
}

export function runWith<R>(resources: R) {
  return Asks.handler((instr: Asks<R, any>) => Eff.fromLazy(() => instr.input(resources)))
}

const ask_ = asks(identity)

export const ask = <R>(): Reader<R, R> => ask_ as Reader<R, R>
