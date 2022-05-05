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
export interface ReduceRightWithIndex<T extends HKT, K> {
  readonly reduceRightWithIndex: <B, A>(b: B, f: (k: K, a: A, b: B) => B) => (kind: Kind<T, A>) => B
}

export interface ReduceRightWithIndex1<T extends HKT, K> {
  readonly reduceRightWithIndex: <B, A>(b: B, f: (k: K, a: A, b: B) => B) => (kind: Kind<T, A>) => B
}

export interface ReduceRightWithIndex2<T extends HKT2, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <E>(kind: Kind2<T, E, A>) => B
}

export interface ReduceRightWithIndex3<T extends HKT3, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRightWithIndex4<T extends HKT4, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRightWithIndex5<T extends HKT5, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B
}

export interface ReduceRightWithIndex6<T extends HKT6, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B
}

export interface ReduceRightWithIndex7<T extends HKT7, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B
}

export interface ReduceRightWithIndex8<T extends HKT8, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B
}

export interface ReduceRightWithIndex9<T extends HKT9, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B
}

export interface ReduceRightWithIndex10<T extends HKT10, K> {
  readonly reduceRightWithIndex: <B, A>(
    b: B,
    f: (k: K, a: A, b: B) => B,
  ) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B
}

/* #endregion */

/* #region reduceRight */
export function reduceRight<T extends HKT10, K>(
  RRI: ReduceRightWithIndex10<T, K>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT9, K>(
  RRI: ReduceRightWithIndex9<T, K>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT8, K>(
  RRI: ReduceRightWithIndex8<T, K>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT7, K>(
  RRI: ReduceRightWithIndex7<T, K>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT6, K>(
  RRI: ReduceRightWithIndex6<T, K>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT5, K>(
  RRI: ReduceRightWithIndex5<T, K>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B

export function reduceRight<T extends HKT4, K>(
  RRI: ReduceRightWithIndex4<T, K>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT3, K>(
  RRI: ReduceRightWithIndex3<T, K>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B

export function reduceRight<T extends HKT2, K>(
  RRI: ReduceRightWithIndex2<T, K>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind2<T, E, A>) => B

export function reduceRight<T extends HKT, K>(
  RRI: ReduceRightWithIndex1<T, K>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B

export function reduceRight<T extends HKT, K>(
  RRI: ReduceRightWithIndex<T, K>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B

export function reduceRight<T extends HKT, K>(
  RRI: ReduceRightWithIndex<T, K>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B {
  return <B, A>(b: B, f: (a: A, b: B) => B) =>
    RRI.reduceRightWithIndex(b, (_, a: A, b: B) => f(a, b))
}

/* #endregion */
