import { HKT2, Params } from '../HKT'
import { Associative } from '../Typeclass/Data/Associative'
import { Identity } from '../Typeclass/Data/Identity'
import { AssociativeBoth2 } from '../Typeclass/Effect/AssociativeBoth'
import { AssociativeFlatten2 } from '../Typeclass/Effect/AssociativeFlatten'
import { Covariant2 } from '../Typeclass/Effect/Covariant'
import { IdentityBoth2 } from '../Typeclass/Effect/IdentityBoth'
import { Lazy } from '../function/function'

import * as Eff from './Eff'

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

export function runWith<S>(
  initial: Lazy<S>,
): <Y extends Eff.AnyTagged, R>(
  eff: Eff.Eff<Modify<S, any> | Y, R>,
) => Eff.Eff<Exclude<Y, Modify<S, any>>, readonly [S, R]> {
  return Modify.stateHandler(initial, (current: S, instr: Modify<S, any>) =>
    Eff.fromLazy(() => instr.input(current)),
  )
}

export function makeAssociative<S, A>(A: Associative<A>): Associative<State<S, A>> {
  return {
    concat: (f, s) =>
      Eff.Eff(function* () {
        return A.concat(yield* f, yield* s)
      }),
  }
}

export const makeIdentity = <S, A>(I: Identity<A>): Identity<State<S, A>> => ({
  ...makeAssociative<S, A>(I),
  id: modify((s) => [s, I.id]),
})

export interface StateHKT extends HKT2 {
  readonly type: State<this[Params.E], this[Params.A]>
}

export const Covariant = Eff.Covariant as Covariant2<StateHKT>
export const AssociativeBoth = Eff.AssociativeBoth as AssociativeBoth2<StateHKT>
export const AssociativeFlatten = Eff.AssociativeFlatten as AssociativeFlatten2<StateHKT>

export const IdentityBoth: IdentityBoth2<StateHKT> = {
  ...AssociativeBoth,
  top: get(),
}
