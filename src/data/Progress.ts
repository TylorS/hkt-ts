import * as A from '../typeclasses/concrete/Associative'
import * as C from '../typeclasses/concrete/Commutative'
import * as I from '../typeclasses/concrete/Identity'

import * as M from './Maybe'
import * as N from './number'

export interface Progress {
  readonly loaded: N.NonNegativeFloat
  readonly total: M.Maybe<N.NonNegativeFloat>
}

export function Progress(
  loaded: N.NonNegativeFloat,
  total: M.Maybe<N.NonNegativeFloat> = M.Nothing,
): Progress {
  return {
    loaded,
    total,
  }
}

const NonNegativeFloatAssociativeSum = N.NonNegativeFloat.makeAssociative(N.AssociativeSum)
const NonNegativeId = N.NonNegativeFloat.makeIdentity(N.IdentitySum).id

export const Associative: A.Associative<Progress> = A.struct({
  loaded: NonNegativeFloatAssociativeSum,
  total: M.makeAssociative(NonNegativeFloatAssociativeSum),
})

export const Identity: I.Identity<Progress> = {
  ...Associative,
  id: Progress(NonNegativeId, M.Just(NonNegativeId)),
}

export const Commutative: C.Commutative<Progress> = Associative
