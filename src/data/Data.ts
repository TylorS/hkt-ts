import { HKT, Params } from '../HKT'
import { constant, pipe } from '../function/function'
import { Associative } from '../typeclasses/concrete/Associative'
import { Commutative } from '../typeclasses/concrete/Commutative'
import { Debug } from '../typeclasses/concrete/Debug'
import * as EQ from '../typeclasses/concrete/Eq'
import { Identity } from '../typeclasses/concrete/Identity'
import * as Ord from '../typeclasses/concrete/Ord'

import { brand } from './Branded'
import * as M from './Maybe'
import * as Progress from './Progress'

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

export const makeAssociative = <A>(A: Associative<A>): Associative<Data<A>> => {
  const { concat: concatProgress } = M.makeAssociative(Progress.Associative)

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

export const makeOrd = <A>(O: Ord.Ord<A>): Ord.Ord<Data<A>> => {
  const MaybeProgressOrd = M.makeOrd(Progress.Ord)
  const WithProgressOrd = Ord.both(MaybeProgressOrd)(O)

  const o: Ord.Ord<Data<A>> = Ord.fromCompare((first, second) =>
    pipe(
      first,
      match(
        () => pipe(second, match(constant(0), constant(-1), constant(-1), constant(-1))),
        (progress) =>
          pipe(
            second,
            match(
              constant(1),
              (p2) => MaybeProgressOrd.compare(progress, p2),
              constant(-1),
              constant(-1),
            ),
          ),
        (a, progress) =>
          pipe(
            second,
            match(
              constant(1),
              constant(1),
              (a2, p2) => WithProgressOrd.compare([a, progress], [a2, p2]),
              (a2) =>
                WithProgressOrd.compare([a, M.Just(Progress.Progress(brand(0)))], [a2, M.Nothing]),
            ),
          ),
        (a) =>
          pipe(
            second,
            match(
              constant(1),
              constant(1),
              (a2, p2) => WithProgressOrd.compare([a, M.Nothing], [a2, p2]),
              (a2) =>
                WithProgressOrd.compare([a, M.Just(Progress.Progress(brand(0)))], [a2, M.Nothing]),
            ),
          ),
      ),
    ),
  )

  return o
}
