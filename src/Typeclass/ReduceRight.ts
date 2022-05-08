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
} from '../HKT'
export interface ReduceRight<T extends HKT> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B
}

export interface ReduceRight1<T extends HKT> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B
}

export interface ReduceRight2<T extends HKT2> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind2<T, E, A>) => B
}

export interface ReduceRight2EC<T extends HKT2, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind2<T, E, A>) => B
}

export interface ReduceRight3<T extends HKT3> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRight3RC<T extends HKT3, R> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRight3REC<T extends HKT3, R, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRight3EC<T extends HKT3, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <R>(kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRight4<T extends HKT4> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4SREC<T extends HKT4, S, R, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4SC<T extends HKT4, S> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4SRC<T extends HKT4, S, R> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4RC<T extends HKT4, R> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <S, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4SEC<T extends HKT4, S, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <R>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4REC<T extends HKT4, R, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <S>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4EC<T extends HKT4, E> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <S, R>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight5<T extends HKT5> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B
}

export interface ReduceRight6<T extends HKT6> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B
}

export interface ReduceRight7<T extends HKT7> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B
}

export interface ReduceRight8<T extends HKT8> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B
}

export interface ReduceRight9<T extends HKT9> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B
}

export interface ReduceRight10<T extends HKT10> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B
}
