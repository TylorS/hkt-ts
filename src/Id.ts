import { HKT, Params } from './HKT.js'
import { AssociativeBoth1 } from './Typeclass/AssociativeBoth.js'
import { Covariant1 } from './Typeclass/Covariant.js'
import { IdentityBoth1 } from './Typeclass/IdentityBoth.js'
import { Top1 } from './Typeclass/Top.js'

export type Id<A> = A

export interface IdHKT extends HKT {
  readonly type: Id<this[Params.A]>
}

export const AssociativeBoth: AssociativeBoth1<IdHKT> = {
  both: (s) => (f) => [f, s],
}

export const Covariant: Covariant1<IdHKT> = {
  map: (f) => (a) => f(a),
}

export const Top: Top1<IdHKT> = {
  top: [],
}

export const IdentityBoth: IdentityBoth1<IdHKT> = {
  ...AssociativeBoth,
  ...Top,
}
