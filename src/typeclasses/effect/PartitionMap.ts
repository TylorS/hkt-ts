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
import { Either } from '../../data/Either'

export interface PartitionMap<T extends HKT> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => (kind: Kind<T, A>) => readonly [Kind<T, B>, Kind<T, C>]
}

export interface PartitionMap1<T extends HKT> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => (kind: Kind<T, A>) => readonly [Kind<T, B>, Kind<T, C>]
}

export interface PartitionMap2<T extends HKT2> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <E>(kind: Kind2<T, E, A>) => readonly [Kind2<T, E, B>, Kind2<T, E, C>]
}

export interface PartitionMap3<T extends HKT3> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]
}

export interface PartitionMap4<T extends HKT4> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <S, R, E>(
    kind: Kind4<T, S, R, E, A>,
  ) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap5<T extends HKT5> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <U, S, R, E>(
    kind: Kind5<T, U, S, R, E, A>,
  ) => readonly [Kind5<T, U, S, R, E, B>, Kind5<T, U, S, R, E, C>]
}

export interface PartitionMap6<T extends HKT6> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <V, U, S, R, E>(
    kind: Kind6<T, V, U, S, R, E, A>,
  ) => readonly [Kind6<T, V, U, S, R, E, B>, Kind6<T, V, U, S, R, E, C>]
}

export interface PartitionMap7<T extends HKT7> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <W, V, U, S, R, E>(
    kind: Kind7<T, W, V, U, S, R, E, A>,
  ) => readonly [Kind7<T, W, V, U, S, R, E, B>, Kind7<T, W, V, U, S, R, E, C>]
}

export interface PartitionMap8<T extends HKT8> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => readonly [Kind8<T, X, W, V, U, S, R, E, B>, Kind8<T, X, W, V, U, S, R, E, C>]
}

export interface PartitionMap9<T extends HKT9> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => readonly [Kind9<T, Y, X, W, V, U, S, R, E, B>, Kind9<T, Y, X, W, V, U, S, R, E, C>]
}

export interface PartitionMap10<T extends HKT10> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<A, B>,
  ) => <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => readonly [Kind10<T, Z, Y, X, W, V, U, S, R, E, B>, Kind10<T, Z, Y, X, W, V, U, S, R, E, C>]
}
