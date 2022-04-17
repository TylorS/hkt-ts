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
} from '../../HKT'
import { Unary } from '../../function'

export interface Divariant<T extends HKT2> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind2<T, B, C>) => Kind2<T, A, D>
}

export interface Divariant2<T extends HKT2> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind2<T, B, C>) => Kind2<T, A, D>
}

export interface Divariant3<T extends HKT3> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <R>(kind: Kind3<T, R, B, C>) => Kind3<T, R, A, D>
}

export interface Divariant4<T extends HKT4> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <S, R>(kind: Kind4<T, S, R, B, C>) => Kind4<T, S, R, A, D>
}

export interface Divariant5<T extends HKT5> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <U, S, R>(kind: Kind5<T, U, S, R, B, C>) => Kind5<T, U, S, R, A, D>
}

export interface Divariant6<T extends HKT6> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <V, U, S, R>(kind: Kind6<T, V, U, S, R, B, C>) => Kind6<T, V, U, S, R, A, D>
}

export interface Divariant7<T extends HKT7> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <W, V, U, S, R>(kind: Kind7<T, W, V, U, S, R, B, C>) => Kind7<T, W, V, U, S, R, A, D>
}

export interface Divariant8<T extends HKT8> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <X, W, V, U, S, R>(
    kind: Kind8<T, X, W, V, U, S, R, B, C>,
  ) => Kind8<T, X, W, V, U, S, R, A, D>
}

export interface Divariant9<T extends HKT9> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <Y, X, W, V, U, S, R>(
    kind: Kind9<T, Y, X, W, V, U, S, R, B, C>,
  ) => Kind9<T, Y, X, W, V, U, S, R, A, D>
}

export interface Divariant10<T extends HKT10> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <Z, Y, X, W, V, U, S, R>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, B, C>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, A, D>
}
