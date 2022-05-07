import type { HKT2, Params } from './HKT'
import type * as t from './Typeclass'
import type { Bottom2 } from './Typeclass/Bottom'
import type { Covariant2 } from './Typeclass/Covariant'
import type { Top2 } from './Typeclass/Top'
import { absurd, flow, identity } from './function'

export type Unary<A, B> = (a: A) => B

export interface UnaryHKT extends HKT2 {
  readonly type: Unary<this[Params.E], this[Params.A]>
}

export const Covariant: Covariant2<UnaryHKT> = {
  map: flow,
}

export const Top: Top2<UnaryHKT> = {
  top: identity,
}

export const Bottom: Bottom2<UnaryHKT> = {
  bottom: absurd,
}

export const AssociativeBoth: t.AssociativeBoth.AssociativeBoth2<UnaryHKT> = {
  both: (s) => (f) => (e) => [f(e), s(e)],
}

export const AssociativeCompose: t.AssociativeCompose.AssociativeCompose2<UnaryHKT> = {
  compose: flow,
}

export const AssociativeFlatten: t.AssociativeFlatten.AssociativeFlatten2<UnaryHKT> = {
  flatten: (f) => (e) => f(e)(e),
}

export const Divariant: t.Divariant.Divariant2<UnaryHKT> = {
  dimap: (fi, fo) => (f) => flow(fi, f, fo),
}

export const CommutativeBoth: t.CommutativeBoth.CommutativeBoth2<UnaryHKT> = AssociativeBoth

export const IdentityBoth: t.IdentityBoth.IdentityBoth2<UnaryHKT> = {
  ...CommutativeBoth,
  ...Top,
}
