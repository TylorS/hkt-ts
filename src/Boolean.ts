import * as B from 'fp-ts/boolean'

import { Refinement } from './Kind/Refinement.js'
import { Associative } from './Typeclass/Data/Associative.js'
import * as E from './Typeclass/Data/Eq.js'
import { Identity, fromMonoid } from './Typeclass/Data/Identity.js'
import * as O from './Typeclass/Data/Ord.js'

export const isBoolean: Refinement<unknown, boolean> = B.isBoolean
export const match = B.match

export const Eq: E.Eq<boolean> = B.Eq

export const AssociativeAll: Associative<boolean> = B.SemigroupAll

export const AssociativeAny: Associative<boolean> = B.SemigroupAny

export const IdentityAll: Identity<boolean> = fromMonoid(B.MonoidAll)

export const IdentityAny: Identity<boolean> = fromMonoid(B.MonoidAny)

export const Ord: O.Ord<boolean> = B.Ord
