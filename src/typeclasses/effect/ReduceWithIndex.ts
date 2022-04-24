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

export interface ReduceWithIndex<T extends HKT, K> {
  readonly reduceWithIndex: <B, A>(b: B, f: (k: K, b: B, a: A) => B) => (kind: Kind<T, A>) => B
}

export interface ReduceWithIndex1<T extends HKT, K> {
  readonly reduceWithIndex: <B, A>(b: B, f: (k: K, b: B, a: A) => B) => (kind: Kind<T, A>) => B
}

export interface ReduceWithIndex2<T extends HKT2, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <E>(kind: Kind2<T, E, A>) => B
}

export interface ReduceWithIndex3<T extends HKT3, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => B
}

export interface ReduceWithIndex4<T extends HKT4, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceWithIndex5<T extends HKT5, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B
}

export interface ReduceWithIndex6<T extends HKT6, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B
}

export interface ReduceWithIndex7<T extends HKT7, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B
}

export interface ReduceWithIndex8<T extends HKT8, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B
}

export interface ReduceWithIndex9<T extends HKT9, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B
}

export interface ReduceWithIndex10<T extends HKT10, K> {
  readonly reduceWithIndex: <B, A>(
    b: B,
    f: (k: K, b: B, a: A) => B,
  ) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B
}
