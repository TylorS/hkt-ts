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
export interface Reduce<T extends HKT> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => (kind: Kind<T, A>) => B
}

export interface Reduce1<T extends HKT> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => (kind: Kind<T, A>) => B
}

export interface Reduce2<T extends HKT2> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <E>(kind: Kind2<T, E, A>) => B
}

export interface Reduce2EC<T extends HKT2, E> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => (kind: Kind2<T, E, A>) => B
}

export interface Reduce3<T extends HKT3> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B
}

export interface Reduce3RC<T extends HKT3, R> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <E>(kind: Kind3<T, R, E, A>) => B
}

export interface Reduce3REC<T extends HKT3, R, E> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => (kind: Kind3<T, R, E, A>) => B
}

export interface Reduce3EC<T extends HKT3, E> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <R>(kind: Kind3<T, R, E, A>) => B
}

export interface Reduce4<T extends HKT4> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface Reduce4SREC<T extends HKT4, S, R, E> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => (kind: Kind4<T, S, R, E, A>) => B
}

export interface Reduce4SC<T extends HKT4, S> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface Reduce4SRC<T extends HKT4, S, R> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface Reduce4RC<T extends HKT4, R> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <S, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface Reduce4SEC<T extends HKT4, S, E> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <R>(kind: Kind4<T, S, R, E, A>) => B
}

export interface Reduce4REC<T extends HKT4, R, E> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <S>(kind: Kind4<T, S, R, E, A>) => B
}

export interface Reduce4EC<T extends HKT4, E> {
  readonly reduce: <B, A>(b: B, f: (b: B, a: A) => B) => <S, R>(kind: Kind4<T, S, R, E, A>) => B
}

export interface Reduce5<T extends HKT5> {
  readonly reduce: <B, A>(
    b: B,
    f: (b: B, a: A) => B,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B
}

export interface Reduce6<T extends HKT6> {
  readonly reduce: <B, A>(
    b: B,
    f: (b: B, a: A) => B,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B
}

export interface Reduce7<T extends HKT7> {
  readonly reduce: <B, A>(
    b: B,
    f: (b: B, a: A) => B,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B
}

export interface Reduce8<T extends HKT8> {
  readonly reduce: <B, A>(
    b: B,
    f: (b: B, a: A) => B,
  ) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B
}

export interface Reduce9<T extends HKT9> {
  readonly reduce: <B, A>(
    b: B,
    f: (b: B, a: A) => B,
  ) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B
}

export interface Reduce10<T extends HKT10> {
  readonly reduce: <B, A>(
    b: B,
    f: (b: B, a: A) => B,
  ) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B
}
