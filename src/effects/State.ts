import * as Eff from './Eff'
import { Lazy } from '../function'

export interface State<S, A> extends Eff.Eff<Modify<S, any>, A> {}

export type StateOf<T> = [Eff.Extract<T, Modify<any, any>>] extends [Modify<infer L, any>]
  ? L
  : never

export type OutputOf<T> = Eff.ReturnOf<T>

export class Modify<S, A> extends Eff.instr('State/Modify')<(s: S) => StateTuple<S, A>, A> {}

export function modify<S, A>(f: (s: S) => StateTuple<S, A>): State<S, A> {
  return new Modify(f)
}

export function update<S>(f: (s: S) => S): State<S, S> {
  return modify((s) => {
    const s2 = f(s)

    return [s2, s2]
  })
}

export function get<S>(): State<S, S> {
  return modify((s) => [s, s])
}

export type StateTuple<S, A> = readonly [updated: S, computed: A]

export function runWith<S>(initial: Lazy<S>) {
  return Modify.stateHandler(initial, (current: S, instr: Modify<S, any>) =>
    Eff.fromLazy(() => instr.input(current)),
  )
}
