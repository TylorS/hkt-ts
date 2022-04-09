import * as M from './Maybe'
import { flow, identity, pipe } from './function'

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
  readonly progress: M.Maybe<Progress>
}

export const Pending: Pending = {
  tag: 'Pending',
  progress: M.Nothing,
}

export const fromProgress = (progress: Progress): Pending => ({
  tag: 'Pending',
  progress: M.Just(progress),
})

export interface Refreshing<A> {
  readonly tag: 'Refreshing'
  readonly progress: M.Maybe<Progress>
  readonly value: A
}

export const Refreshing = <A>(
  value: A,
  progress: M.Maybe<Progress> = M.Nothing,
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

export interface Progress {
  readonly loaded: number
  readonly total: M.Maybe<number>
}

export const Progress = (loaded: number, total: M.Maybe<number> = M.Nothing): Progress => ({
  loaded,
  total,
})

export const match =
  <A, B, C, D, E>(
    onNoData: () => A,
    onPending: (progress: M.Maybe<Progress>) => B,
    onRefreshing: (value: C, progress: M.Maybe<Progress>) => D,
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

export const map = <A, B>(f: (a: A) => B): ((data: Data<A>) => Data<B>) =>
  match(
    () => NoData,
    M.match(() => Pending, fromProgress),
    (a, progress) => Refreshing(f(a), progress),
    flow(f, Replete),
  )

export const mapWithProgress = <A, B>(
  f: (a: A, progress: M.Maybe<Progress>) => B,
): ((data: Data<A>) => Data<B>) =>
  match(
    () => NoData,
    M.match(() => Pending, fromProgress),
    (a, progress) => Refreshing(f(a, progress), progress),
    (a) => Replete(f(a, M.Nothing)),
  )

export const flatMap = <A, B>(f: (a: A) => Data<B>): ((data: Data<A>) => Data<B>) =>
  match(
    () => NoData,
    M.match(() => Pending, fromProgress),
    f,
    f,
  )

export const flatMapWithProgress = <A, B>(
  f: (a: A, progress: M.Maybe<Progress>) => Data<B>,
): ((data: Data<A>) => Data<B>) =>
  match(
    () => NoData,
    M.match(() => Pending, fromProgress),
    f,
    (a) => f(a, M.Nothing),
  )

export const getOrElse = <B>(orElse: () => B): (<A>(data: Data<A>) => A | B) =>
  match(orElse, orElse, identity, identity)

export const toPending = <A>(data: Data<A>): Data<A> =>
  pipe(
    data,
    match(
      () => Pending,
      M.match(() => Pending, fromProgress),
      Refreshing,
      Refreshing,
    ),
  )

export const tupled = map(<A>(a: A) => [a] as const)

export const tuple = <D extends ReadonlyArray<Data<any>>>(
  ...datas: D
): Data<{ readonly [K in keyof D]: OutputOf<D[K]> }> =>
  datas.length === 0 ? NoData : datas.slice(1).reduce(combine, tupled(datas[0]))

export const struct = <A extends Readonly<Record<string, Data<any>>>>(
  datas: A,
): Data<{ readonly [K in keyof A]: OutputOf<A[K]> }> => {
  const entries = Object.entries(datas)

  return pipe(
    tuple(
      ...entries.map(([k, data]) =>
        pipe(
          data,
          map((a) => [k, a] as const),
        ),
      ),
    ),
    map(Object.fromEntries),
  )
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

// Internal
function combine<A extends readonly any[], B>(
  first: Data<A>,
  second: Data<B>,
): Data<readonly [...A, B]> {
  return pipe(
    first,
    flatMapWithProgress((a, progressA) =>
      pipe(
        second,
        flatMapWithProgress((b, progressB) =>
          pipe(
            combineProgress(progressA, progressB),
            M.match(
              () => Replete([...a, b]),
              (progress) => Refreshing([...a, b], M.Just(progress)),
            ),
          ),
        ),
      ),
    ),
  )
}

function combineProgress(first: M.Maybe<Progress>, second: M.Maybe<Progress>): M.Maybe<Progress> {
  return pipe(
    first,
    M.match(
      () => second,
      (f) =>
        pipe(
          second,
          M.match(
            () => M.Just(f),
            (g) =>
              M.Just({
                loaded: f.loaded + g.loaded,
                total: pipe(
                  f.total,
                  M.flatMap((ft) =>
                    pipe(
                      g.total,
                      M.map((gt) => ft + gt),
                    ),
                  ),
                ),
              }),
          ),
        ),
    ),
  )
}
