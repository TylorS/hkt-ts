import {
  Divariant,
  Divariant10,
  Divariant2,
  Divariant3,
  Divariant4,
  Divariant5,
  Divariant6,
  Divariant7,
  Divariant8,
  Divariant9,
} from './Divariant'
import {
  HKT10,
  HKT2,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
  Kind10,
  Kind2,
  Kind3,
  Kind4,
  Kind5,
  Kind6,
  Kind7,
  Kind8,
  Kind9,
} from './HKT'

export interface Strong<T extends HKT2> extends Divariant<T> {
  readonly first: <A, B, C>(kind: Kind2<T, A, B>) => Kind2<T, readonly [A, C], readonly [B, C]>
  readonly second: <A, B, C>(kind: Kind2<T, B, C>) => Kind2<T, readonly [A, B], readonly [A, C]>
}

export interface Strong2<T extends HKT2> extends Divariant2<T> {
  readonly first: <A, B, C>(kind: Kind2<T, A, B>) => Kind2<T, readonly [A, C], readonly [B, C]>
  readonly second: <A, B, C>(kind: Kind2<T, B, C>) => Kind2<T, readonly [A, B], readonly [A, C]>
}

export interface Strong3<T extends HKT3> extends Divariant3<T> {
  readonly first: <R, A, B, C>(
    kind: Kind3<T, R, A, B>,
  ) => Kind3<T, R, readonly [A, C], readonly [B, C]>
  readonly second: <R, A, B, C>(
    kind: Kind3<T, R, B, C>,
  ) => Kind3<T, R, readonly [A, B], readonly [A, C]>
}

export interface Strong4<T extends HKT4> extends Divariant4<T> {
  readonly first: <S, R, A, B, C>(
    kind: Kind4<T, S, R, A, B>,
  ) => Kind4<T, S, R, readonly [A, C], readonly [B, C]>
  readonly second: <S, R, A, B, C>(
    kind: Kind4<T, S, R, B, C>,
  ) => Kind4<T, S, R, readonly [A, B], readonly [A, C]>
}

export interface Strong5<T extends HKT5> extends Divariant5<T> {
  readonly first: <U, S, R, A, B, C>(
    kind: Kind5<T, U, S, R, A, B>,
  ) => Kind5<T, U, S, R, readonly [A, C], readonly [B, C]>
  readonly second: <U, S, R, A, B, C>(
    kind: Kind5<T, U, S, R, B, C>,
  ) => Kind5<T, U, S, R, readonly [A, B], readonly [A, C]>
}

export interface Strong6<T extends HKT6> extends Divariant6<T> {
  readonly first: <V, U, S, R, A, B, C>(
    kind: Kind6<T, V, U, S, R, A, B>,
  ) => Kind6<T, V, U, S, R, readonly [A, C], readonly [B, C]>
  readonly second: <V, U, S, R, A, B, C>(
    kind: Kind6<T, V, U, S, R, B, C>,
  ) => Kind6<T, V, U, S, R, readonly [A, B], readonly [A, C]>
}

export interface Strong7<T extends HKT7> extends Divariant7<T> {
  readonly first: <W, V, U, S, R, A, B, C>(
    kind: Kind7<T, W, V, U, S, R, A, B>,
  ) => Kind7<T, W, V, U, S, R, readonly [A, C], readonly [B, C]>
  readonly second: <W, V, U, S, R, A, B, C>(
    kind: Kind7<T, W, V, U, S, R, B, C>,
  ) => Kind7<T, W, V, U, S, R, readonly [A, B], readonly [A, C]>
}

export interface Strong8<T extends HKT8> extends Divariant8<T> {
  readonly first: <X, W, V, U, S, R, A, B, C>(
    kind: Kind8<T, X, W, V, U, S, R, A, B>,
  ) => Kind8<T, X, W, V, U, S, R, readonly [A, C], readonly [B, C]>
  readonly second: <X, W, V, U, S, R, A, B, C>(
    kind: Kind8<T, X, W, V, U, S, R, B, C>,
  ) => Kind8<T, X, W, V, U, S, R, readonly [A, B], readonly [A, C]>
}

export interface Strong9<T extends HKT9> extends Divariant9<T> {
  readonly first: <Y, X, W, V, U, S, R, A, B, C>(
    kind: Kind9<T, Y, X, W, V, U, S, R, A, B>,
  ) => Kind9<T, Y, X, W, V, U, S, R, readonly [A, C], readonly [B, C]>
  readonly second: <Y, X, W, V, U, S, R, A, B, C>(
    kind: Kind9<T, Y, X, W, V, U, S, R, B, C>,
  ) => Kind9<T, Y, X, W, V, U, S, R, readonly [A, B], readonly [A, C]>
}

export interface Strong10<T extends HKT10> extends Divariant10<T> {
  readonly first: <Z, Y, X, W, V, U, S, R, A, B, C>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, A, B>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, readonly [A, C], readonly [B, C]>
  readonly second: <Z, Y, X, W, V, U, S, R, A, B, C>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, B, C>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, readonly [A, B], readonly [A, C]>
}
