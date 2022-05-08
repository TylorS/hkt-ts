import {
  HKT10,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
  Kind10,
  Kind3,
  Kind4,
  Kind5,
  Kind6,
  Kind7,
  Kind8,
  Kind9,
} from '../HKT'
import type { Unary } from '../Unary'
export interface Trivariant<T extends HKT3> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => (kind: Kind3<T, R2, E1, A1>) => Kind3<T, R1, E2, A2>
}

export interface Trivariant3<T extends HKT3> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => (kind: Kind3<T, R2, E1, A1>) => Kind3<T, R1, E2, A2>
}

export interface Trivariant4<T extends HKT4> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <S>(kind: Kind4<T, S, R2, E1, A1>) => Kind4<T, S, R1, E2, A2>
}

export interface Trivariant4SC<T extends HKT4, S> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => (kind: Kind4<T, S, R2, E1, A1>) => Kind4<T, S, R1, E2, A2>
}

export interface Trivariant5<T extends HKT5> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <U, S>(kind: Kind5<T, U, S, R2, E1, A1>) => Kind5<T, U, S, R1, E2, A2>
}

export interface Trivariant6<T extends HKT6> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <V, U, S>(kind: Kind6<T, V, U, S, R2, E1, A1>) => Kind6<T, V, U, S, R1, E2, A2>
}

export interface Trivariant7<T extends HKT7> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <W, V, U, S>(kind: Kind7<T, W, V, U, S, R2, E1, A1>) => Kind7<T, W, V, U, S, R1, E2, A2>
}

export interface Trivariant8<T extends HKT8> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <X, W, V, U, S>(
    kind: Kind8<T, X, W, V, U, S, R2, E1, A1>,
  ) => Kind8<T, X, W, V, U, S, R1, E2, A2>
}

export interface Trivariant9<T extends HKT9> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <Y, X, W, V, U, S>(
    kind: Kind9<T, Y, X, W, V, U, S, R2, E1, A1>,
  ) => Kind9<T, Y, X, W, V, U, S, R1, E2, A2>
}

export interface Trivariant10<T extends HKT10> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <Z, Y, X, W, V, U, S>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R2, E1, A1>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R1, E2, A2>
}
