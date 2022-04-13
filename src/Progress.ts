import * as A from './Associative'
import * as AI from './AssociativeIdentity'
import * as C from './Commutative'
import * as CI from './CommutativeIdentity'
import * as I from './Identity'
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

export const Identity: I.Identity<Progress> = {
  id: Progress(NonNegativeId, M.Just(NonNegativeId)),
}

export const Associative: A.Associative<Progress> = A.struct({
  loaded: NonNegativeFloatAssociativeSum,
  total: M.makeAssociative(NonNegativeFloatAssociativeSum),
})

export const Commutative: C.Commutative<Progress> = {
  ...Associative,
  commute: Associative.concat,
}

export const AssociativeIdentity: AI.AssociativeIdentity<Progress> = {
  ...Identity,
  ...Associative,
}

export const CommutativeIdentity: CI.CommutativeIdentity<Progress> = {
  ...Identity,
  ...Commutative,
}
