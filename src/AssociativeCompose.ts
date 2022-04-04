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

export interface AssociativeCompose<T extends HKT2> {
  readonly compose: <B, C>(second: Kind2<T, B, C>) => <A>(first: Kind2<T, A, B>) => Kind2<T, A, B>
}

export interface AssociativeCompose2<T extends HKT2> {
  readonly compose: <B, C>(second: Kind2<T, B, C>) => <A>(first: Kind2<T, A, B>) => Kind2<T, A, B>
}

export interface AssociativeCompose3<T extends HKT3> {
  readonly compose: <R, B, C>(
    second: Kind3<T, R, B, C>,
  ) => <A>(first: Kind3<T, R, A, B>) => Kind3<T, R, A, B>
}

export interface AssociativeCompose4<T extends HKT4> {
  readonly compose: <S, R, B, C>(
    second: Kind4<T, S, R, B, C>,
  ) => <A>(first: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, B>
}

export interface AssociativeCompose5<T extends HKT5> {
  readonly compose: <U, S, R, B, C>(
    second: Kind5<T, U, S, R, B, C>,
  ) => <A>(first: Kind5<T, U, S, R, A, B>) => Kind5<T, U, S, R, A, B>
}

export interface AssociativeCompose6<T extends HKT6> {
  readonly compose: <V, U, S, R, B, C>(
    second: Kind6<T, V, U, S, R, B, C>,
  ) => <A>(first: Kind6<T, V, U, S, R, A, B>) => Kind6<T, V, U, S, R, A, B>
}

export interface AssociativeCompose7<T extends HKT7> {
  readonly compose: <W, V, U, S, R, B, C>(
    second: Kind7<T, W, V, U, S, R, B, C>,
  ) => <A>(first: Kind7<T, W, V, U, S, R, A, B>) => Kind7<T, W, V, U, S, R, A, B>
}

export interface AssociativeCompose8<T extends HKT8> {
  readonly compose: <X, W, V, U, S, R, B, C>(
    second: Kind8<T, X, W, V, U, S, R, B, C>,
  ) => <A>(first: Kind8<T, X, W, V, U, S, R, A, B>) => Kind8<T, X, W, V, U, S, R, A, B>
}

export interface AssociativeCompose9<T extends HKT9> {
  readonly compose: <Y, X, W, V, U, S, R, B, C>(
    second: Kind9<T, Y, X, W, V, U, S, R, B, C>,
  ) => <A>(first: Kind9<T, Y, X, W, V, U, S, R, A, B>) => Kind9<T, Y, X, W, V, U, S, R, A, B>
}

export interface AssociativeCompose10<T extends HKT10> {
  readonly compose: <Z, Y, X, W, V, U, S, R, B, C>(
    second: Kind10<T, Z, Y, X, W, V, U, S, R, B, C>,
  ) => <A>(
    first: Kind10<T, Z, Y, X, W, V, U, S, R, A, B>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, A, B>
}
