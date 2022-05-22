import * as D from '../Data'
import * as DE from '../DataEither'
import * as E from '../Either'
import { HKT, Params } from '../HKT'
import * as M from '../Maybe'
import { NonEmptyArray } from '../NonEmptyArray'
import { Predicate } from '../Predicate'
import * as P from '../Progress'
import * as RT from '../RoseTree'
import * as TH from '../These'
import * as TR from '../Tree'
import * as AF from '../Typeclass/AssociativeFlatten'
import * as C from '../Typeclass/Covariant'
import * as IB from '../Typeclass/IdentityBoth'
import * as T from '../Typeclass/Top'
import { pipe } from '../function'
import * as N from '../number'

export interface Arbitrary<A> {
  readonly arbitrary: (fc: typeof import('fast-check')) => import('fast-check').Arbitrary<A>
}

export type Property<A> = SyncProperty<A> | AsyncProperty<A>

export interface SyncProperty<A> {
  readonly property: (
    fc: typeof import('fast-check'),
  ) => import('fast-check').IPropertyWithHooks<[A]>
}

export interface AsyncProperty<A> {
  readonly property: (
    fc: typeof import('fast-check'),
  ) => import('fast-check').IAsyncPropertyWithHooks<[A]>
}

export type OutputOf<T> = [T] extends [Arbitrary<infer R>] ? R : never

export const Arbitrary = <A>(
  arbitrary: (fc: typeof import('fast-check')) => import('fast-check').Arbitrary<A>,
): Arbitrary<A> => ({
  arbitrary,
})

export const toAsyncProperty =
  <A>(predicate: (a: A) => Promise<boolean>) =>
  (a: Arbitrary<A>): AsyncProperty<A> => ({
    property: (fc) => fc.asyncProperty(a.arbitrary(fc), predicate),
  })

export const toProperty =
  <A>(predicate: Predicate<A>) =>
  (a: Arbitrary<A>): SyncProperty<A> => ({
    property: (fc) => fc.property(a.arbitrary(fc), predicate),
  })

export function assert<A>(
  property: Property<A>,
  params?: import('fast-check').Parameters<[A]> | undefined,
) {
  return (fc: typeof import('fast-check')) => fc.assert(property.property(fc), params)
}

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

export const tuple = IB.tuple<ArbitraryHKT>({ ...IdentityBoth, ...Covariant }) as <
  A extends ReadonlyArray<any>,
>(
  ...values: {
    readonly [K in keyof A]: Arbitrary<A[K]>
  }
) => Arbitrary<Readonly<A>>

export const struct = IB.struct<ArbitraryHKT>({ ...IdentityBoth, ...Covariant }) as <A>(values: {
  readonly [K in keyof A]: Arbitrary<A[K]>
}) => Arbitrary<A>

// Implementations

export const number = (params?: import('fast-check').IntegerConstraints) =>
  Arbitrary((fc) => (params ? fc.integer(params) : fc.integer()))

export const string = (params?: import('fast-check').StringSharedConstraints) =>
  Arbitrary((fc) => (params ? fc.string(params) : fc.string()))

export const boolean = Arbitrary((fc) => fc.boolean())
export const constant = <A>(value: A) => Arbitrary((fc) => fc.constant(value))

export const union = <A extends ReadonlyArray<Arbitrary<any>>>(
  ...arbs: A
): Arbitrary<OutputOf<A[number]>> =>
  Arbitrary((fc) => fc.oneof(...arbs.map((a) => a.arbitrary(fc))))

export const json = (params?: import('fast-check').JsonSharedConstraints) =>
  Arbitrary((fc) => (params ? fc.unicodeJson(params) : fc.unicodeJson()))

export const array = <A>(A: Arbitrary<A>): Arbitrary<ReadonlyArray<A>> =>
  Arbitrary((fc) => fc.array(A.arbitrary(fc)))

export const nonEmptyArray = <A>(A: Arbitrary<A>): Arbitrary<NonEmptyArray<A>> =>
  Arbitrary((fc) => fc.array(A.arbitrary(fc), { minLength: 1 })) as any

export const record = <A>(codomain: Arbitrary<A>): Arbitrary<Readonly<Record<string, A>>> =>
  Arbitrary((fc) =>
    fc
      .integer()
      .chain((n) => fc.tuple(...Array.from({ length: n }, () => fc.unicodeString())))
      .chain((keys) => fc.record(Object.fromEntries(keys.map((k) => [k, codomain.arbitrary(fc)])))),
  )

export const Nothing = Arbitrary((fc) => fc.record<M.Nothing>({ tag: fc.constant('Nothing') }))
export const Just = <A>(A: Arbitrary<A>): Arbitrary<M.Just<A>> =>
  struct({ tag: constant('Just' as const), value: A })

export const Maybe = <A>(A: Arbitrary<A>) => union(Nothing, Just(A))

export const NoData = Arbitrary((fc) => fc.record<D.NoData>({ tag: fc.constant('NoData') }))

export const Progress = pipe(
  number() as Arbitrary<N.NonNegativeFloat>,
  flatMap((loaded) =>
    pipe(
      // Total must be larger than loaded
      number({ min: loaded }) as Arbitrary<N.NonNegativeFloat>,
      flatMap((total) =>
        struct<P.Progress>({
          loaded: constant(loaded),
          total: Maybe(constant(total)),
        }),
      ),
    ),
  ),
)

export const Pending = struct<D.Pending>({
  tag: constant('Pending'),
  progress: Maybe(Progress),
})

export const Refreshing = <A>(value: Arbitrary<A>) =>
  struct<D.Refreshing<A>>({
    tag: constant('Refreshing'),
    value,
    progress: Maybe(Progress),
  })

export const Replete = <A>(value: Arbitrary<A>) =>
  struct<D.Replete<A>>({
    tag: constant('Replete'),
    value,
  })

export const Data = <A>(value: Arbitrary<A>): Arbitrary<D.Data<A>> =>
  union(NoData, Pending, Refreshing(value), Replete(value))

export const Left = <E>(E: Arbitrary<E>): Arbitrary<E.Left<E>> =>
  struct({
    tag: constant('Left'),
    left: E,
  })

export const Right = <A>(A: Arbitrary<A>): Arbitrary<E.Right<A>> =>
  struct({
    tag: constant('Right'),
    right: A,
  })

export const Either = <E, A>(E: Arbitrary<E>, A: Arbitrary<A>): Arbitrary<E.Either<E, A>> =>
  union(Left(E), Right(A))

export const DataEither = <E, A>(
  E: Arbitrary<E>,
  A: Arbitrary<A>,
): Arbitrary<DE.DataEither<E, A>> => Data(Either(E, A))

export const Map = <K, A>(K: Arbitrary<K>, A: Arbitrary<A>): Arbitrary<ReadonlyMap<K, A>> =>
  pipe(
    struct({
      keys: array(K),
      values: array(A),
    }),
    map(
      ({ keys, values }) =>
        new globalThis.Map<K, A>(keys.flatMap((k, i) => (i in values ? [[k, values[i]]] : []))),
    ),
  )

export const Set = <A>(A: Arbitrary<A>): Arbitrary<ReadonlySet<A>> =>
  pipe(
    array(A),
    map((values) => new globalThis.Set(values)),
  )

export const Both = <E, A>(E: Arbitrary<E>, A: Arbitrary<A>): Arbitrary<TH.Both<E, A>> =>
  struct({
    tag: constant('Both'),
    left: E,
    right: A,
  })

export const These = <E, A>(E: Arbitrary<E>, A: Arbitrary<A>): Arbitrary<TH.These<E, A>> =>
  union(Left(E), Right(A), Both(E, A))

export const lazy = <A>(f: () => Arbitrary<A>): Arbitrary<A> => {
  let memoed: Arbitrary<A> | null = null

  const get = () => {
    if (!memoed) {
      memoed = f()
    }

    return memoed
  }

  return Arbitrary((fc) => get().arbitrary(fc))
}

export const Parent = <P, C>(P: Arbitrary<P>, C: Arbitrary<C>): Arbitrary<TR.ParentNode<P, C>> =>
  struct({
    tag: constant('Parent'),
    value: P,
    forest: array(lazy(() => Tree(P, C))),
  })

export const Leaf = <C>(C: Arbitrary<C>): Arbitrary<TR.LeafNode<C>> =>
  struct({
    tag: constant('Leaf'),
    value: C,
  })

export const Tree = <P, C>(P: Arbitrary<P>, C: Arbitrary<C>): Arbitrary<TR.Tree<P, C>> =>
  union(Parent(P, C), Leaf(C))

export const RoseTree = <A>(A: Arbitrary<A>): Arbitrary<RT.RoseTree<A>> => Tree(A, A)
