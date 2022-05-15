import { HKT, Params } from './HKT'
import * as C from './Typeclass/Covariant'
import * as A from './Array'
import * as Eq from './Typeclass/Eq'
import { Concat } from './Typeclass/Concat'
import * as AF from './Typeclass/AssociativeFlatten'
import * as T from './Typeclass/Top'
import * as IB from './Typeclass/IdentityBoth'
import * as AE from './Typeclass/AssociativeEither'
import { Left, Right } from './Either'
import { pipe } from './function'
import { Bottom1 } from './Typeclass/Bottom'
import { IdentityEither1 } from './Typeclass/IdentityEither'
import * as Ord from './Typeclass/Ord'
import { Debug } from './Typeclass/Debug'

export interface SetHKT extends HKT {
  readonly type: ReadonlySet<this[Params.A]>
}

export const difference =
  <A>(Eq: Eq.Eq<A>) =>
  (second: ReadonlySet<A>) =>
  (first: ReadonlySet<A>) =>
    new Set(A.difference(Eq)([...second])([...first]))

export const intersection =
  <A>(Eq: Eq.Eq<A>) =>
  (second: ReadonlySet<A>) =>
  (first: ReadonlySet<A>) =>
    new Set(A.intersection(Eq)([...second])([...first]))

export const union =
  <A>(C: Concat<A>) =>
  (second: ReadonlySet<A>) =>
  (first: ReadonlySet<A>) =>
    new Set(A.union(C)([...second])([...first]))

export const Covariant: C.Covariant1<SetHKT> = {
  map: (f) => (set) => new Set([...set].map(f)),
}

export const map = Covariant.map
export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const Flatten: AF.AssociativeFlatten1<SetHKT> = {
  flatten: (set) => new Set(Array.from(set).flatMap((s) => Array.from(s))),
}

export const flatten = Flatten.flatten
export const flatMap = AF.flatMap<SetHKT>({ ...Flatten, ...Covariant })
export const bind = AF.bind<SetHKT>({ ...Flatten, ...Covariant })

export const AssociativeBoth = AF.makeAssociativeBoth<SetHKT>({ ...Flatten, ...Covariant })
export const both = AssociativeBoth.both

export const Top: T.Top1<SetHKT> = {
  top: new Set([[]]),
}

export const top = Top.top
export const fromValue = T.makeFromValue<SetHKT>({ ...Top, ...Covariant })
export const fromLazy = T.makeFromValue<SetHKT>({ ...Top, ...Covariant })

export const IdentityBoth: IB.IdentityBoth1<SetHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const tuple = IB.tuple<SetHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<SetHKT>({ ...IdentityBoth, ...Covariant })

export const AssociativeEither: AE.AssociativeEither1<SetHKT> = {
  either: (second) => (first) =>
    first.size === 0 ? pipe(second, map(Right)) : pipe(first, map(Left)),
}

export const either = AssociativeEither.either

export const orElse = AE.orElse<SetHKT>({ ...AssociativeEither, ...Covariant })
export const race = AE.tuple<SetHKT>({ ...AssociativeEither, ...Covariant })

export const Bottom: Bottom1<SetHKT> = {
  bottom: new Set(),
}

export const bottom = Bottom.bottom

export const IdentityEither: IdentityEither1<SetHKT> = {
  ...AssociativeEither,
  ...Bottom,
}

export const makeEq = <A>(E: Eq.Eq<A>): Eq.Eq<ReadonlySet<A>> =>
  pipe(
    E,
    A.makeEq,
    Eq.contramap(Array.from<A>),
  )

export const makeOrd = <A>(O: Ord.Ord<A>): Ord.Ord<ReadonlySet<A>> => pipe(O, A.makeOrd, Ord.contramap(Array.from<A>))

export const makeDebug = <A>(D: Debug<A>): Debug<ReadonlySet<A>> => ({
  debug: (set) => `Set ${A.makeDebug(D).debug(Array.from(set))}`
})
