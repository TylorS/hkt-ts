import { HKT, Kind, Params } from '../HKT'
import { Associative } from '../Typeclass/Data/Associative'
import { Commutative } from '../Typeclass/Data/Commutative'
import { Debug } from '../Typeclass/Data/Debug'
import * as EQ from '../Typeclass/Data/Eq'
import { Identity } from '../Typeclass/Data/Identity'
import * as Ord from '../Typeclass/Data/Ord'
import * as AB from '../Typeclass/Effect/AssociativeBoth'
import * as AE from '../Typeclass/Effect/AssociativeEither'
import * as AF from '../Typeclass/Effect/AssociativeFlatten'
import { Bottom1 } from '../Typeclass/Effect/Bottom'
import * as C from '../Typeclass/Effect/Covariant'
import * as FM from '../Typeclass/Effect/FoldMap'
import * as FE from '../Typeclass/Effect/ForEach'
import * as IB from '../Typeclass/Effect/IdentityBoth'
import { IdentityEither1 } from '../Typeclass/Effect/IdentityEither'
import * as IF from '../Typeclass/Effect/IdentityFlatten'
import * as PM from '../Typeclass/Effect/PartitionMap'
import { Reduce1 } from '../Typeclass/Effect/Reduce'
import { ReduceRight1 } from '../Typeclass/Effect/ReduceRight'
import { Separate1 } from '../Typeclass/Effect/Separate'
import * as T from '../Typeclass/Effect/Top'
import { constant, flow, identity, pipe } from '../function/function'

import { Left, Right } from './Either'
import * as M from './Maybe'
import * as Progress from './Progress'
import { NonNegativeFloat } from './number'

export type Data<A> = NoData | Pending | Refreshing<A> | Replete<A>

export const isNoData = <A>(data: Data<A>): data is NoData => data.tag === 'NoData'
export const isPending = <A>(data: Data<A>): data is Pending => data.tag === 'Pending'
export const isRefreshing = <A>(data: Data<A>): data is Refreshing<A> => data.tag === 'Refreshing'
export const isReplete = <A>(data: Data<A>): data is Replete<A> => data.tag === 'Replete'

export type OutputOf<T> = [T] extends [Data<infer A>] ? A : never

export interface NoData {
  readonly tag: 'NoData'
}

export const NoData: NoData = {
  tag: 'NoData',
}

export interface Pending {
  readonly tag: 'Pending'
  readonly progress: M.Maybe<Progress.Progress>
}

export const Pending: Pending = {
  tag: 'Pending',
  progress: M.Nothing,
}

export const fromProgress = (progress: Progress.Progress): Pending => ({
  tag: 'Pending',
  progress: M.Just(progress),
})

export interface Refreshing<A> {
  readonly tag: 'Refreshing'
  readonly progress: M.Maybe<Progress.Progress>
  readonly value: A
}

export const Refreshing = <A>(
  value: A,
  progress: M.Maybe<Progress.Progress> = M.Nothing,
): Refreshing<A> => ({
  tag: 'Refreshing',
  progress,
  value,
})

export interface Replete<A> {
  readonly tag: 'Replete'
  readonly value: A
}

export const Replete = <A>(value: A): Replete<A> => ({
  tag: 'Replete',
  value,
})

export const match =
  <A, B, C, D, E>(
    onNoData: () => A,
    onPending: (progress: M.Maybe<Progress.Progress>) => B,
    onRefreshing: (value: C, progress: M.Maybe<Progress.Progress>) => D,
    onReplete: (value: C) => E,
  ) =>
  (data: Data<C>): A | B | D | E => {
    switch (data.tag) {
      case 'NoData':
        return onNoData()
      case 'Pending':
        return onPending(data.progress)
      case 'Refreshing':
        return onRefreshing(data.value, data.progress)
      case 'Replete':
        return onReplete(data.value)
    }
  }

export const fromOption = <A>(option: M.Maybe<A>): Data<A> =>
  pipe(
    option,
    M.match(() => NoData, Replete),
  )

export const toOption: <A>(data: Data<A>) => M.Maybe<A> = match(
  () => M.Nothing,
  () => M.Nothing,
  M.Just,
  M.Just,
)

export interface DataHKT extends HKT {
  readonly type: Data<this[Params.A]>
}

const { concat: concatProgress } = M.makeAssociative(Progress.Associative)

export const makeAssociative = <A>(A: Associative<A>): Associative<Data<A>> => {
  return {
    concat: (first, second) =>
      pipe(
        first,
        match(
          () => second,
          (progress) =>
            pipe(
              second,
              match(
                () => first,
                (progress2) =>
                  pipe(
                    concatProgress(progress, progress2),
                    M.map(fromProgress),
                    M.getOrElse(() => Pending),
                  ),
                (a2, progress2) => Refreshing(a2, concatProgress(progress, progress2)),
                (a2) => Refreshing(a2, progress),
              ),
            ),
          (a, progress) =>
            pipe(
              second,
              match(
                () => first,
                (progress2) => Refreshing(a, concatProgress(progress, progress2)),
                (a2, progress2) => Refreshing(A.concat(a, a2), concatProgress(progress, progress2)),
                (a2) => Refreshing(A.concat(a, a2), progress),
              ),
            ),
          (a) =>
            pipe(
              second,
              match(
                () => first,
                (progress2) => Refreshing(a, progress2),
                (a2, progress2) => Refreshing(A.concat(a, a2), progress2),
                (a2) => Replete(A.concat(a, a2)),
              ),
            ),
        ),
      ),
  }
}

export const makeCommutative = <A>(A: Commutative<A>): Commutative<Data<A>> => makeAssociative(A)

const maybeProgressDebug = M.makeDebug(Progress.Debug)

export const makeDebug = <A>(D: Debug<A>): Debug<Data<A>> => ({
  debug: match(
    constant(`NoData`),
    (p) => `Pending(${maybeProgressDebug.debug(p)})`,
    (a, progress) => `Refreshing(${D.debug(a)}, ${maybeProgressDebug.debug(progress)})`,
    (a) => `Replete(${D.debug(a)})`,
  ),
})

const pendingEq = pipe(
  Progress.Eq,
  M.makeEq,
  EQ.contramap((p: Pending) => p.progress),
)

export const makeEq = <A>(E: EQ.Eq<A>): EQ.Eq<Data<A>> =>
  EQ.sum<Data<A>>()('tag')({
    NoData: EQ.AlwaysEqual,
    Pending: pendingEq,
    Refreshing: pipe(
      Progress.Eq,
      M.makeEq,
      EQ.bothWith(E, (refreshing: Refreshing<A>) => [refreshing.progress, refreshing.value]),
    ),
    Replete: EQ.struct({ tag: EQ.string, value: E }),
  })

export const makeIdentity = <A>(I: Identity<A>): Identity<Data<A>> => ({
  ...makeAssociative(I),
  id: Replete(I.id),
})

const constZero = constant(0 as const)
const constOne = constant(1 as const)
const constNegativeOne = constant(-1 as const)

export const makeOrd = <A>(O: Ord.Ord<A>): Ord.Ord<Data<A>> => {
  const MaybeProgressOrd = M.makeOrd(Progress.Ord)
  const WithProgressOrd = Ord.both(MaybeProgressOrd)(O)

  const o: Ord.Ord<Data<A>> = Ord.fromCompare((first, second) =>
    pipe(
      first,
      match(
        () => pipe(second, match(constZero, constNegativeOne, constNegativeOne, constNegativeOne)),
        (p1) =>
          pipe(
            second,
            match(
              constOne,
              (p2) => MaybeProgressOrd.compare(p1, p2),
              constNegativeOne,
              constNegativeOne,
            ),
          ),
        (a, p1) =>
          pipe(
            second,
            match(
              constOne,
              constOne,
              (a2, p2) => WithProgressOrd.compare([a, p1], [a2, p2]),
              (a2) =>
                WithProgressOrd.compare(
                  [a, M.Just(Progress.Progress(NonNegativeFloat(0)))],
                  [a2, M.Nothing],
                ),
            ),
          ),
        (a) =>
          pipe(
            second,
            match(
              constOne,
              constOne,
              (a2, p2) => WithProgressOrd.compare([a, M.Nothing], [a2, p2]),
              (a2) =>
                WithProgressOrd.compare(
                  [a, M.Just(Progress.Progress(NonNegativeFloat(0)))],
                  [a2, M.Nothing],
                ),
            ),
          ),
      ),
    ),
  )

  return o
}

const constNoData = constant(NoData)
const constPending = constant(Pending)

export const Covariant: C.Covariant1<DataHKT> = {
  map: (f) =>
    match(
      constNoData,
      M.match(constPending, fromProgress),
      (value, progress) => Refreshing(f(value), progress),
      flow(f, Replete),
    ),
}

export const map = Covariant.map
export const bindTo = C.bindTo(Covariant)
export const flap = C.flap(Covariant)
export const mapTo = C.mapTo(Covariant)
export const tupled = C.tupled(Covariant)

export const AssociativeFlatten: AF.AssociativeFlatten1<DataHKT> = {
  flatten: match(
    constNoData,
    M.match(constPending, fromProgress),
    (data, p1) =>
      pipe(
        data,
        match(
          constNoData,
          M.match(
            () =>
              pipe(
                p1,
                // There's no way to know the total amount so remove it
                M.match(constPending, (p) => fromProgress(Progress.Progress(p.loaded))),
              ),
            (p2) => pipe(concatProgress(p1, M.Just(p2)), M.match(constPending, fromProgress)),
          ),
          (a, p2) => Refreshing(a, concatProgress(p1, p2)),
          Replete,
        ),
      ),
    identity,
  ),
}

export const flatten = AssociativeFlatten.flatten
export const flatMap = AF.flatMap<DataHKT>({ ...AssociativeFlatten, ...Covariant })

export const AssociativeBoth = AF.makeAssociativeBoth<DataHKT>({
  ...AssociativeFlatten,
  ...Covariant,
})

export const both = AssociativeBoth.both
export const zipLeft = AB.zipLeft<DataHKT>({ ...AssociativeBoth, ...Covariant })
export const zipRight = AB.zipRight<DataHKT>({ ...AssociativeBoth, ...Covariant })

export const Top: T.Top1<DataHKT> = {
  top: Replete([]),
}

export const top = Top.top
export const fromLazy = T.makeFromLazy<DataHKT>({ ...Top, ...Covariant })
export const fromValue = T.makeFromValue<DataHKT>({ ...Top, ...Covariant })

export const IdentityBoth: IB.IdentityBoth1<DataHKT> = {
  ...AssociativeBoth,
  ...Top,
}

export const tuple = IB.tuple<DataHKT>({ ...IdentityBoth, ...Covariant })
export const struct = IB.struct<DataHKT>({ ...IdentityBoth, ...Covariant })

export const IdentityFlatten: IF.IdentityFlatten1<DataHKT> = {
  ...AssociativeFlatten,
  ...Top,
}

export const Bottom: Bottom1<DataHKT> = {
  bottom: NoData,
}

export const bottom = Bottom.bottom

export const AssociativeEither: AE.AssociativeEither1<DataHKT> = {
  either: (s) => (f) =>
    isRefreshing(f) || isReplete(f) ? pipe(f, map(Left)) : isNoData(s) ? f : pipe(s, map(Right)),
}

export const either = AssociativeEither.either
export const orElse = AE.orElse<DataHKT>({ ...AssociativeEither, ...Covariant })

export const IdentityEither: IdentityEither1<DataHKT> = {
  ...Bottom,
  ...AssociativeEither,
}

export const ForEach: FE.ForEach1<DataHKT> = {
  map,
  forEach: <T2 extends HKT>(IB: IB.IdentityBoth<T2> & C.Covariant<T2>) => {
    const fromValue = T.makeFromValue(IB)

    return <A, B>(f: (a: A) => Kind<T2, B>) =>
      (kind: Data<A>): Kind<T2, Data<B>> =>
        pipe(
          kind,
          match(
            () => fromValue(NoData),
            M.match(() => fromValue(Pending), flow(fromProgress, fromValue)),
            (a, progress) =>
              pipe(
                a,
                f,
                IB.map((b) => Refreshing(b, progress)),
              ),
            flow(f, IB.map(Replete)),
          ),
        )
  },
}

export const forEach = ForEach.forEach
export const mapAccum = FE.mapAccum(ForEach)
export const sequence = FE.sequence(ForEach)

export const FoldMap: FM.FoldMap1<DataHKT> = {
  foldMap: (I) => (f) =>
    match(
      () => I.id,
      () => I.id,
      f,
      f,
    ),
}

export const foldMap = FoldMap.foldMap
export const foldLeft = FM.foldLeft(FoldMap)
export const contains = FM.contains(FoldMap)
export const count = FM.count(FoldMap)
export const every = FM.every(FoldMap)
export const some = FM.some(FoldMap)
export const exists = FM.exists(FoldMap)
export const find = FM.find(FoldMap)
export const groupBy = FM.groupBy(FoldMap)
export const intercalate = FM.intercalate(FoldMap)
export const partitionMap = FM.partitionMap<DataHKT>({
  ...FoldMap,
  ...IdentityEither,
  ...Top,
  ...Covariant,
})
export const reduce = FM.reduce(FoldMap)
export const reduceAssociative = FM.reduceAssociative(FoldMap)
export const reduceCommutative = FM.reduceCommutative(FoldMap)
export const reduceIdentity = FM.reduceIdentity(FoldMap)
export const reduceRight = FM.reduceRight<DataHKT>({ ...FoldMap, ...ForEach })
export const reverse = FM.reverse<DataHKT>({ ...FoldMap, ...ForEach })
export const size = FM.size(FoldMap)
export const toArray = FM.toArray(FoldMap)

export const PartitionMap: PM.PartitionMap1<DataHKT> = {
  partitionMap,
}

export const separate = PM.separate(PartitionMap)

export const Separate: Separate1<DataHKT> = {
  separate,
}

export const Reduce: Reduce1<DataHKT> = {
  reduce,
}

export const ReduceRight: ReduceRight1<DataHKT> = {
  reduceRight,
}
