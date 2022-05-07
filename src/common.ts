import type { HKT2, Params } from './HKT'
import type { Covariant2 } from './Typeclass/Covariant'
import type { Identity } from './Typeclass/Identity'
import type { IdentityBoth2 } from './Typeclass/IdentityBoth'

export type Include<A, B> = A extends B ? A : never

export type State<S, A> = (s: S) => readonly [S, A]

export interface StateHKT extends HKT2 {
  readonly type: State<this[Params.E], this[Params.A]>
}

export const makeStateIdentity = <S, A>(ID: Identity<A>): Identity<State<S, A>> => ({
  id: (s) => [s, ID.id],
  concat: (first, second) => (s) => {
    const [s2, a1] = first(s)
    const [s3, a2] = second(s2)

    return [s3, ID.concat(a1, a2)]
  },
})

export const IdentityBothState: IdentityBoth2<StateHKT> = {
  top: (s) => [s, []],
  both: (second) => (first) => (s) => {
    const [s2, b1] = first(s)
    const [s3, b2] = second(s2)

    return [s3, [b1, b2]] as const
  },
}

export const CovariantState: Covariant2<StateHKT> = {
  map: (f) => (state) => (s) => {
    const [s2, a] = state(s)

    return [s2, f(a)]
  },
}
