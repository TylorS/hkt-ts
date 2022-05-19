import { HKT, Params } from '../HKT'
import { Predicate } from '../Predicate'
import * as AF from '../Typeclass/AssociativeFlatten'
import * as C from '../Typeclass/Covariant'
import * as IB from '../Typeclass/IdentityBoth'
import * as T from '../Typeclass/Top'

export interface Arbitrary<A> {
  readonly arbitrary: (fc: typeof import('fast-check')) => import('fast-check').Arbitrary<A>
}

export type OutputOf<T> = [T] extends [Arbitrary<infer R>] ? R : never

export const Arbitrary = <A>(
  arbitrary: (fc: typeof import('fast-check')) => import('fast-check').Arbitrary<A>,
): Arbitrary<A> => ({
  arbitrary,
})

export const number = (params?: import('fast-check').IntegerConstraints) =>
  Arbitrary((fc) => (params ? fc.integer(params) : fc.integer()))

export const string = (params?: import('fast-check').StringSharedConstraints) =>
  Arbitrary((fc) => (params ? fc.string(params) : fc.string()))

export const boolean = Arbitrary((fc) => fc.boolean())
export const constant = <A>(value: A) => Arbitrary((fc) => fc.constant(value))

export const oneOf = <A extends ReadonlyArray<Arbitrary<any>>>(
  ...arbs: A
): Arbitrary<OutputOf<A[number]>> =>
  Arbitrary((fc) => fc.oneof(...arbs.map((a) => a.arbitrary(fc))))

export const json = (params?: import('fast-check').JsonSharedConstraints) =>
  Arbitrary((fc) => (params ? fc.unicodeJson(params) : fc.unicodeJson()))

export const array = <A>(A: Arbitrary<A>): Arbitrary<ReadonlyArray<A>> =>
  Arbitrary((fc) => fc.array(A.arbitrary(fc)))

export const record = <A>(codomain: Arbitrary<A>): Arbitrary<Readonly<Record<string, A>>> =>
  Arbitrary((fc) =>
    fc
      .integer()
      .chain((n) => fc.tuple(...Array.from({ length: n }, () => fc.unicodeString())))
      .chain((keys) => fc.record(Object.fromEntries(keys.map((k) => [k, codomain.arbitrary(fc)])))),
  )

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

export const top = Top.top
export const fromValue = T.makeFromValue<ArbitraryHKT>({ ...Top, ...Covariant })
export const fromLazy = T.makeFromLazy<ArbitraryHKT>({ ...Top, ...Covariant })

export const IdentityBoth: IB.IdentityBoth1<ArbitraryHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const tuple = IB.tuple<ArbitraryHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<ArbitraryHKT>({ ...IdentityBoth, ...Covariant })
