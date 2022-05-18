import { HKT, Params } from '../HKT'
import { Predicate } from '../Predicate'
import * as AF from '../Typeclass/AssociativeFlatten'
import * as C from '../Typeclass/Covariant'
import * as IB from '../Typeclass/IdentityBoth'
import * as T from '../Typeclass/Top'

export interface Arbitrary<A> {
  readonly arbitrary: (fc: typeof import('fast-check')) => import('fast-check').Arbitrary<A>
}

export const Arbitrary = <A>(
  arbitrary: (fc: typeof import('fast-check')) => import('fast-check').Arbitrary<A>,
): Arbitrary<A> => ({
  arbitrary,
})

export const toProperty =
  <A>(predicate: Predicate<A>) =>
  (a: Arbitrary<A>) =>
  (fc: typeof import('fast-check')): import('fast-check').IPropertyWithHooks<[A]> =>
    fc.property(a.arbitrary(fc), predicate)

export const assert =
  <A>(predicate: Predicate<A>, params?: import('fast-check').Parameters<[A]>) =>
  (a: Arbitrary<A>) =>
  (fc: typeof import('fast-check')) =>
    fc.assert(fc.property(a.arbitrary(fc), predicate), params)

export interface ArbitraryHKT extends HKT {
  readonly type: Arbitrary<this[Params.A]>
}

export const Covariant: C.Covariant1<ArbitraryHKT> = {
  map: (f) => (kind) => Arbitrary((fc) => kind.arbitrary(fc).map(f)),
}

export const map = Covariant.map

export const Flatten: AF.AssociativeFlatten1<ArbitraryHKT> = {
  flatten: (kind) => Arbitrary((fc) => kind.arbitrary(fc).chain((a) => a.arbitrary(fc))),
}

export const flatten = Flatten.flatten
export const flatMap = AF.flatMap<ArbitraryHKT>({ ...Flatten, ...Covariant })
export const bind = AF.bind<ArbitraryHKT>({ ...Flatten, ...Covariant })

export const AssociativeBoth = AF.makeAssociativeBoth<ArbitraryHKT>({ ...Flatten, ...Covariant })
export const both = AssociativeBoth.both

export const Top: T.Top1<ArbitraryHKT> = {
  top: Arbitrary((fc) => fc.anything()),
}

export const fromValue = T.makeFromValue<ArbitraryHKT>({ ...Top, ...Covariant })
export const fromLazy = T.makeFromLazy<ArbitraryHKT>({ ...Top, ...Covariant })

export const IdentityBoth: IB.IdentityBoth1<ArbitraryHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const tuple = IB.tuple<ArbitraryHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<ArbitraryHKT>({ ...IdentityBoth, ...Covariant })
