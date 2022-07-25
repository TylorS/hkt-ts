import type { HKT2, Params } from './HKT.js'
import * as AB from './Typeclass/AssociativeBoth.js'
import * as AC from './Typeclass/AssociativeCompose.js'
import * as AF from './Typeclass/AssociativeFlatten.js'
import * as C from './Typeclass/Covariant.js'
import * as D from './Typeclass/Divariant.js'
import * as IB from './Typeclass/IdentityBoth.js'
import * as T from './Typeclass/Top.js'
import { flow, identity } from './function.js'

export type Unary<A, B> = (a: A) => B

export interface UnaryHKT extends HKT2 {
  readonly type: Unary<this[Params.E], this[Params.A]>
}

export const Covariant: C.Covariant2<UnaryHKT> = {
  map: flow,
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const Top: T.Top2<UnaryHKT> = {
  top: identity,
}

export const top = Top.top
export const fromLazy = T.makeFromLazy<UnaryHKT>({ ...Top, ...Covariant })
export const fromValue = T.makeFromValue<UnaryHKT>({ ...Top, ...Covariant })

export const AssociativeBoth: AB.AssociativeBoth2<UnaryHKT> = {
  both: (s) => (f) => (e) => [f(e), s(e)],
}

export const both = AssociativeBoth.both
export const zipLeft = AB.zipLeft<UnaryHKT>({ ...AssociativeBoth, ...Covariant })
export const zipRight = AB.zipRight<UnaryHKT>({ ...AssociativeBoth, ...Covariant })

export const AssociativeCompose: AC.AssociativeCompose2<UnaryHKT> = {
  compose: flow,
}

export const compose = AC.compose

export const Flatten: AF.AssociativeFlatten2<UnaryHKT> = {
  flatten: (f) => (e) => f(e)(e),
}

export const flatten = AF.flatten
export const flatMap = AF.flatMap<UnaryHKT>({ ...Flatten, ...Covariant })
export const bind = AF.bind<UnaryHKT>({ ...Flatten, ...Covariant })

export const Divariant: D.Divariant2<UnaryHKT> = {
  dimap: (fi, fo) => (f) => flow(fi, f, fo),
}

export const dimap = D.dimap

export const IdentityBoth: IB.IdentityBoth2<UnaryHKT> = {
  ...AssociativeBoth,
  ...Top,
}
