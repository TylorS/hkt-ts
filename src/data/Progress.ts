import * as A from '../Typeclass/concrete/Associative'
import * as C from '../Typeclass/concrete/Commutative'
import * as D from '../Typeclass/concrete/Debug'
import * as EQ from '../Typeclass/concrete/Eq'
import * as I from '../Typeclass/concrete/Identity'
import * as O from '../Typeclass/concrete/Ord'
import { pipe } from '../function/function'

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

export const Associative: A.Associative<Progress> = A.struct({
  loaded: N.NonNegativeFloatAssociativeSum,
  total: M.makeFailFastAssociative(N.NonNegativeFloatAssociativeSum),
})

export const Identity: I.Identity<Progress> = {
  ...Associative,
  id: Progress(N.NonNegativeIdentitySum.id, M.Just(N.NonNegativeIdentitySum.id)),
}

export const Commutative: C.Commutative<Progress> = Associative

export const Debug: D.Debug<Progress> = {
  debug: (progress) =>
    `Progress(${pipe(
      progress.total,
      M.match(
        () => progress.loaded,
        (t) => `${progress.loaded}/${t}`,
      ),
    )})`,
}

const maybeN = M.makeEq(N.Eq)

export const Eq: EQ.Eq<Progress> = {
  equals: (a, b) => a.loaded === b.loaded && maybeN.equals(a.total, b.total),
}

export const Ord: O.Ord<Progress> = pipe(
  N.Ord,
  M.makeOrd,
  O.bothWith(N.Ord, (p: Progress) => [p.total, p.loaded]),
)
