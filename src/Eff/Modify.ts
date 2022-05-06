import { Identity } from '../Typeclass/Data/Identity'

import * as Eff from './Eff'
import { instr } from './Instruction'

export class Modify<S, A> extends instr('Modify')<(s: S) => readonly [S, A], A> {
  static is = <S, A, Y extends Eff.AnyTagged>(instr: Modify<S, A> | Y): instr is Modify<S, A> =>
    instr.tag === Modify.tag

  static with = <S>(initial: () => S) =>
    Modify.stateHandler(initial, (s, y: Modify<S, any>) => Eff.fromLazy(() => y.input(s)))
}

export const modify = <S, A>(f: (s: S) => readonly [S, A]) => new Modify(f)

export const get = <S>() => modify((s: S) => [s, s])

export const put = <S>(s: S) => modify(() => [s, s])

export const update = <S>(f: (s: S) => S) =>
  modify((s: S) => {
    const updated = f(s)

    return [updated, updated]
  })

export const makeModifyIdentity = <S, A>(I: Identity<A>): Identity<Eff.Eff<Modify<S, any>, A>> => ({
  ...Eff.makeAssociative(I),
  id: modify((s: S) => [s, I.id]),
})
