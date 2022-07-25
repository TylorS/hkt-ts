import { Either } from '../Either.js'
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
import { identity } from '../function.js'

/* #region PartitionMap */
export interface PartitionMap<T extends HKT> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => (kind: Kind<T, A>) => readonly [Kind<T, B>, Kind<T, C>]
}

export interface PartitionMap1<T extends HKT> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => (kind: Kind<T, A>) => readonly [Kind<T, B>, Kind<T, C>]
}

export interface PartitionMap2<T extends HKT2> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <E>(kind: Kind2<T, E, A>) => readonly [Kind2<T, E, B>, Kind2<T, E, C>]
}

export interface PartitionMap2EC<T extends HKT2, E> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => (kind: Kind2<T, E, A>) => readonly [Kind2<T, E, B>, Kind2<T, E, C>]
}

export interface PartitionMap3<T extends HKT3> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]
}

export interface PartitionMap3RC<T extends HKT3, R> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <E>(kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]
}

export interface PartitionMap3REC<T extends HKT3, R, E> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => (kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]
}

export interface PartitionMap3EC<T extends HKT3, E> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <R>(kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]
}

export interface PartitionMap4<T extends HKT4> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <S, R, E>(
    kind: Kind4<T, S, R, E, A>,
  ) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap4SREC<T extends HKT4, S, R, E> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => (kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap4SC<T extends HKT4, S> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <R, E>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap4SRC<T extends HKT4, S, R> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <E>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap4RC<T extends HKT4, R> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <S, E>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap4SEC<T extends HKT4, S, E> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <R>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap4REC<T extends HKT4, R, E> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <S>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap4EC<T extends HKT4, E> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <S, R>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]
}

export interface PartitionMap5<T extends HKT5> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <U, S, R, E>(
    kind: Kind5<T, U, S, R, E, A>,
  ) => readonly [Kind5<T, U, S, R, E, B>, Kind5<T, U, S, R, E, C>]
}

export interface PartitionMap6<T extends HKT6> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <V, U, S, R, E>(
    kind: Kind6<T, V, U, S, R, E, A>,
  ) => readonly [Kind6<T, V, U, S, R, E, B>, Kind6<T, V, U, S, R, E, C>]
}

export interface PartitionMap7<T extends HKT7> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <W, V, U, S, R, E>(
    kind: Kind7<T, W, V, U, S, R, E, A>,
  ) => readonly [Kind7<T, W, V, U, S, R, E, B>, Kind7<T, W, V, U, S, R, E, C>]
}

export interface PartitionMap8<T extends HKT8> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => readonly [Kind8<T, X, W, V, U, S, R, E, B>, Kind8<T, X, W, V, U, S, R, E, C>]
}

export interface PartitionMap9<T extends HKT9> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => readonly [Kind9<T, Y, X, W, V, U, S, R, E, B>, Kind9<T, Y, X, W, V, U, S, R, E, C>]
}

export interface PartitionMap10<T extends HKT10> {
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => readonly [Kind10<T, Z, Y, X, W, V, U, S, R, E, B>, Kind10<T, Z, Y, X, W, V, U, S, R, E, C>]
}
/* #endregion */

/* #region separate */
export function separate<T extends HKT10>(
  PM: PartitionMap10<T>,
): <Z, Y, X, W, V, U, S, R, E, A, B>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, Either<A, B>>,
) => readonly [Kind10<T, Z, Y, X, W, V, U, S, R, E, A>, Kind10<T, Z, Y, X, W, V, U, S, R, E, B>]

export function separate<T extends HKT9>(
  PM: PartitionMap9<T>,
): <Y, X, W, V, U, S, R, E, A, B>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, Either<A, B>>,
) => readonly [Kind9<T, Y, X, W, V, U, S, R, E, A>, Kind9<T, Y, X, W, V, U, S, R, E, B>]

export function separate<T extends HKT8>(
  PM: PartitionMap8<T>,
): <X, W, V, U, S, R, E, A, B>(
  kind: Kind8<T, X, W, V, U, S, R, E, Either<A, B>>,
) => readonly [Kind8<T, X, W, V, U, S, R, E, A>, Kind8<T, X, W, V, U, S, R, E, B>]

export function separate<T extends HKT7>(
  PM: PartitionMap7<T>,
): <W, V, U, S, R, E, A, B>(
  kind: Kind7<T, W, V, U, S, R, E, Either<A, B>>,
) => readonly [Kind7<T, W, V, U, S, R, E, A>, Kind7<T, W, V, U, S, R, E, B>]

export function separate<T extends HKT6>(
  PM: PartitionMap6<T>,
): <V, U, S, R, E, A, B>(
  kind: Kind6<T, V, U, S, R, E, Either<A, B>>,
) => readonly [Kind6<T, V, U, S, R, E, A>, Kind6<T, V, U, S, R, E, B>]

export function separate<T extends HKT5>(
  PM: PartitionMap5<T>,
): <U, S, R, E, A, B>(
  kind: Kind5<T, U, S, R, E, Either<A, B>>,
) => readonly [Kind5<T, U, S, R, E, A>, Kind5<T, U, S, R, E, B>]

export function separate<T extends HKT4, E>(
  PM: PartitionMap4EC<T, E>,
): <S, R, A, B>(
  kind: Kind4<T, S, R, E, Either<A, B>>,
) => readonly [Kind4<T, S, R, E, A>, Kind4<T, S, R, E, B>]

export function separate<T extends HKT4, R, E>(
  PM: PartitionMap4REC<T, R, E>,
): <S, A, B>(
  kind: Kind4<T, S, R, E, Either<A, B>>,
) => readonly [Kind4<T, S, R, E, A>, Kind4<T, S, R, E, B>]

export function separate<T extends HKT4, S, E>(
  PM: PartitionMap4SEC<T, S, E>,
): <R, A, B>(
  kind: Kind4<T, S, R, E, Either<A, B>>,
) => readonly [Kind4<T, S, R, E, A>, Kind4<T, S, R, E, B>]

export function separate<T extends HKT4, R>(
  PM: PartitionMap4RC<T, R>,
): <S, E, A, B>(
  kind: Kind4<T, S, R, E, Either<A, B>>,
) => readonly [Kind4<T, S, R, E, A>, Kind4<T, S, R, E, B>]

export function separate<T extends HKT4, S, R>(
  PM: PartitionMap4SRC<T, S, R>,
): <E, A, B>(
  kind: Kind4<T, S, R, E, Either<A, B>>,
) => readonly [Kind4<T, S, R, E, A>, Kind4<T, S, R, E, B>]

export function separate<T extends HKT4, S>(
  PM: PartitionMap4SC<T, S>,
): <R, E, A, B>(
  kind: Kind4<T, S, R, E, Either<A, B>>,
) => readonly [Kind4<T, S, R, E, A>, Kind4<T, S, R, E, B>]

export function separate<T extends HKT4, S, R, E>(
  PM: PartitionMap4SREC<T, S, R, E>,
): <A, B>(
  kind: Kind4<T, S, R, E, Either<A, B>>,
) => readonly [Kind4<T, S, R, E, A>, Kind4<T, S, R, E, B>]

export function separate<T extends HKT4>(
  PM: PartitionMap4<T>,
): <S, R, E, A, B>(
  kind: Kind4<T, S, R, E, Either<A, B>>,
) => readonly [Kind4<T, S, R, E, A>, Kind4<T, S, R, E, B>]

export function separate<T extends HKT3, E>(
  PM: PartitionMap3EC<T, E>,
): <R, A, B>(kind: Kind3<T, R, E, Either<A, B>>) => readonly [Kind3<T, R, E, A>, Kind3<T, R, E, B>]

export function separate<T extends HKT3, R, E>(
  PM: PartitionMap3REC<T, R, E>,
): <A, B>(kind: Kind3<T, R, E, Either<A, B>>) => readonly [Kind3<T, R, E, A>, Kind3<T, R, E, B>]

export function separate<T extends HKT3, R>(
  PM: PartitionMap3RC<T, R>,
): <E, A, B>(kind: Kind3<T, R, E, Either<A, B>>) => readonly [Kind3<T, R, E, A>, Kind3<T, R, E, B>]

export function separate<T extends HKT3>(
  PM: PartitionMap3<T>,
): <R, E, A, B>(
  kind: Kind3<T, R, E, Either<A, B>>,
) => readonly [Kind3<T, R, E, A>, Kind3<T, R, E, B>]

export function separate<T extends HKT2, E>(
  PM: PartitionMap2EC<T, E>,
): <A, B>(kind: Kind2<T, E, Either<A, B>>) => readonly [Kind2<T, E, A>, Kind2<T, E, B>]

export function separate<T extends HKT2>(
  PM: PartitionMap2<T>,
): <E, A, B>(kind: Kind2<T, E, Either<A, B>>) => readonly [Kind2<T, E, A>, Kind2<T, E, B>]

export function separate<T extends HKT>(
  PM: PartitionMap1<T>,
): <A, B>(kind: Kind<T, Either<A, B>>) => readonly [Kind<T, A>, Kind<T, B>]

export function separate<T extends HKT>(
  PM: PartitionMap<T>,
): <A, B>(kind: Kind<T, Either<A, B>>) => readonly [Kind<T, A>, Kind<T, B>]

export function separate<T extends HKT>(
  PM: PartitionMap<T>,
): <A, B>(kind: Kind<T, Either<A, B>>) => readonly [Kind<T, A>, Kind<T, B>] {
  return PM.partitionMap(identity)
}

/* #endregion */
