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
} from '../../HKT'

/* #region Typeclass */
export interface CovariantWithIndex<T extends HKT, K> {
  readonly mapWithIndex: <A, B>(f: (index: K, a: A) => B) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface CovariantWithIndex1<T extends HKT, K> {
  readonly mapWithIndex: <A, B>(f: (index: K, a: A) => B) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface CovariantWithIndex2<T extends HKT2, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface CovariantWithIndex3<T extends HKT3, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface CovariantWithIndex4<T extends HKT4, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface CovariantWithIndex5<T extends HKT5, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>
}

export interface CovariantWithIndex6<T extends HKT6, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>
}

export interface CovariantWithIndex7<T extends HKT7, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>
}

export interface CovariantWithIndex8<T extends HKT8, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, B>
}

export interface CovariantWithIndex9<T extends HKT9, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, B>
}

export interface CovariantWithIndex10<T extends HKT10, K> {
  readonly mapWithIndex: <A, B>(
    f: (index: K, a: A) => B,
  ) => <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
}

/* #endregion */

/* #region map */

export function map<T extends HKT10, K>(
  CI: CovariantWithIndex10<T, K>,
): <A, B>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, R, E>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>

export function map<T extends HKT9, K>(
  CI: CovariantWithIndex9<T, K>,
): <A, B>(
  f: (a: A) => B,
) => <Y, X, W, V, U, S, R, E>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, B>

export function map<T extends HKT8, K>(
  CI: CovariantWithIndex8<T, K>,
): <A, B>(
  f: (a: A) => B,
) => <X, W, V, U, S, R, E>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, B>

export function map<T extends HKT7, K>(
  CI: CovariantWithIndex7<T, K>,
): <A, B>(
  f: (a: A) => B,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>

export function map<T extends HKT6, K>(
  CI: CovariantWithIndex6<T, K>,
): <A, B>(
  f: (a: A) => B,
) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>

export function map<T extends HKT5, K>(
  CI: CovariantWithIndex5<T, K>,
): <A, B>(f: (a: A) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>

export function map<T extends HKT4, K>(
  CI: CovariantWithIndex4<T, K>,
): <A, B>(f: (a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT3, K>(
  CI: CovariantWithIndex3<T, K>,
): <A, B>(f: (a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT2, K>(
  CI: CovariantWithIndex2<T, K>,
): <A, B>(f: (a: A) => B) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function map<T extends HKT, K>(
  CI: CovariantWithIndex1<T, K>,
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B>

export function map<T extends HKT, K>(
  CI: CovariantWithIndex<T, K>,
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B>

export function map<T extends HKT, K>(
  CI: CovariantWithIndex<T, K>,
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B> {
  return <A, B>(f: (a: A) => B) => CI.mapWithIndex((_, a: A) => f(a))
}

/* #endregion */
