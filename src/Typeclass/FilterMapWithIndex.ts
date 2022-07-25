import {
  HKT,
  HKT10,
  HKT2,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
  Kind,
  Kind10,
  Kind2,
  Kind3,
  Kind4,
  Kind5,
  Kind6,
  Kind7,
  Kind8,
  Kind9,
} from '../HKT.js'
import { Maybe } from '../Maybe.js'

/* #region FilterMapWithIndex */
export interface FilterMapWithIndex<T extends HKT, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface FilterMapWithIndex1<T extends HKT, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface FilterMapWithIndex2<T extends HKT2, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface FilterMapWithIndex2EC<T extends HKT2, K, E> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface FilterMapWithIndex3<T extends HKT3, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMapWithIndex3RC<T extends HKT3, K, R> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMapWithIndex3REC<T extends HKT3, K, R, E> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMapWithIndex3EC<T extends HKT3, K, E> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMapWithIndex4<T extends HKT4, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMapWithIndex4SREC<T extends HKT4, K, S, R, E> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMapWithIndex4SC<T extends HKT4, K, S> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMapWithIndex4SRC<T extends HKT4, K, S, R> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMapWithIndex4RC<T extends HKT4, K, R> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <S, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMapWithIndex4SEC<T extends HKT4, K, S, E> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMapWithIndex4REC<T extends HKT4, K, R, E> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <S>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMapWithIndex4EC<T extends HKT4, K, E> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <S, R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMapWithIndex5<T extends HKT5, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>
}

export interface FilterMapWithIndex6<T extends HKT6, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>
}

export interface FilterMapWithIndex7<T extends HKT7, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>
}

export interface FilterMapWithIndex8<T extends HKT8, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, B>
}

export interface FilterMapWithIndex9<T extends HKT9, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, B>
}

export interface FilterMapWithIndex10<T extends HKT10, K> {
  readonly filterMapWithIndex: <A, B>(
    f: (k: K, a: A) => Maybe<B>,
  ) => <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
}

/* #endregion */

/* #region filterMap */
export function filterMap<T extends HKT10, K>(
  FMWI: FilterMapWithIndex10<T, K>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z, Y, X, W, V, U, S, R, E>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>

export function filterMap<T extends HKT9, K>(
  FMWI: FilterMapWithIndex9<T, K>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y, X, W, V, U, S, R, E>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, B>

export function filterMap<T extends HKT8, K>(
  FMWI: FilterMapWithIndex8<T, K>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X, W, V, U, S, R, E>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, B>

export function filterMap<T extends HKT7, K>(
  FMWI: FilterMapWithIndex7<T, K>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>

export function filterMap<T extends HKT6, K>(
  FMWI: FilterMapWithIndex6<T, K>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>

export function filterMap<T extends HKT5, K>(
  FMWI: FilterMapWithIndex5<T, K>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>

export function filterMap<T extends HKT4, K, E>(
  FMWI: FilterMapWithIndex4EC<T, K, E>,
): <A, B>(f: (a: A) => Maybe<B>) => <S, R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function filterMap<T extends HKT4, K, R, E>(
  FMWI: FilterMapWithIndex4REC<T, K, R, E>,
): <A, B>(f: (a: A) => Maybe<B>) => <S>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function filterMap<T extends HKT4, K, S, E>(
  FMWI: FilterMapWithIndex4SEC<T, K, S, E>,
): <A, B>(f: (a: A) => Maybe<B>) => <R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function filterMap<T extends HKT4, K, R>(
  FMWI: FilterMapWithIndex4RC<T, K, R>,
): <A, B>(f: (a: A) => Maybe<B>) => <S, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function filterMap<T extends HKT4, K, S, R>(
  FMWI: FilterMapWithIndex4SRC<T, K, S, R>,
): <A, B>(f: (a: A) => Maybe<B>) => <E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function filterMap<T extends HKT4, K, S>(
  FMWI: FilterMapWithIndex4SC<T, K, S>,
): <A, B>(f: (a: A) => Maybe<B>) => <R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function filterMap<T extends HKT4, K, S, R, E>(
  FMWI: FilterMapWithIndex4SREC<T, K, S, R, E>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function filterMap<T extends HKT4, K>(
  FMWI: FilterMapWithIndex4<T, K>,
): <A, B>(f: (a: A) => Maybe<B>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function filterMap<T extends HKT3, K, E>(
  FMWI: FilterMapWithIndex3EC<T, K, E>,
): <A, B>(f: (a: A) => Maybe<B>) => <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function filterMap<T extends HKT3, K, R, E>(
  FMWI: FilterMapWithIndex3REC<T, K, R, E>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function filterMap<T extends HKT3, K, R>(
  FMWI: FilterMapWithIndex3RC<T, K, R>,
): <A, B>(f: (a: A) => Maybe<B>) => <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function filterMap<T extends HKT3, K>(
  FMWI: FilterMapWithIndex3<T, K>,
): <A, B>(f: (a: A) => Maybe<B>) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function filterMap<T extends HKT2, K, E>(
  FMWI: FilterMapWithIndex2EC<T, K, E>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function filterMap<T extends HKT2, K>(
  FMWI: FilterMapWithIndex2<T, K>,
): <A, B>(f: (a: A) => Maybe<B>) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function filterMap<T extends HKT, K>(
  FMWI: FilterMapWithIndex1<T, K>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<T, A>) => Kind<T, B>

export function filterMap<T extends HKT, K>(
  FMWI: FilterMapWithIndex<T, K>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<T, A>) => Kind<T, B>

export function filterMap<T extends HKT, K>(
  FMWI: FilterMapWithIndex<T, K>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<T, A>) => Kind<T, B> {
  return <A, B>(f: (a: A) => Maybe<B>) => FMWI.filterMapWithIndex((_, a: A) => f(a))
}

/* #endregion */
