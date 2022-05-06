import { HKT, Params } from './HKT'
import * as C from './Typeclass/Covariant'

export interface SetHKT extends HKT {
  readonly type: ReadonlySet<this[Params.A]>
}

export const Covariant: C.Covariant1<SetHKT> = {
  map: (f) => (set) => new Set([...set].map(f)),
}

export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)
