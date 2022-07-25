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
import type { Unary } from '../Unary.js'
import { identity, pipe } from '../function.js'

import {
  Covariant,
  Covariant1,
  Covariant10,
  Covariant2,
  Covariant2EC,
  Covariant3,
  Covariant3EC,
  Covariant3RC,
  Covariant3REC,
  Covariant4,
  Covariant4EC,
  Covariant4RC,
  Covariant4REC,
  Covariant4SC,
  Covariant4SEC,
  Covariant4SRC,
  Covariant4SREC,
  Covariant5,
  Covariant6,
  Covariant7,
  Covariant8,
  Covariant9,
} from './Covariant.js'

/* #region Divariant */
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

export interface Divariant3RC<T extends HKT3, R> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind3<T, R, B, C>) => Kind3<T, R, A, D>
}

export interface Divariant4<T extends HKT4> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <S, R>(kind: Kind4<T, S, R, B, C>) => Kind4<T, S, R, A, D>
}

export interface Divariant4SC<T extends HKT4, S> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <R>(kind: Kind4<T, S, R, B, C>) => Kind4<T, S, R, A, D>
}

export interface Divariant4SRC<T extends HKT4, S, R> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind4<T, S, R, B, C>) => Kind4<T, S, R, A, D>
}

export interface Divariant4RC<T extends HKT4, R> {
  readonly dimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <S>(kind: Kind4<T, S, R, B, C>) => Kind4<T, S, R, A, D>
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

/* #endregion */

/* #region contramap */
export function contramap<T extends HKT10>(
  D: Divariant10<T>,
): <B, C>(
  f: (b: B) => C,
) => <Z, Y, X, W, V, U, S, R, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, C, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, B, A>

export function contramap<T extends HKT9>(
  D: Divariant9<T>,
): <B, C>(
  f: (b: B) => C,
) => <Y, X, W, V, U, S, R, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, C, A>,
) => Kind9<T, Y, X, W, V, U, S, R, B, A>

export function contramap<T extends HKT8>(
  D: Divariant8<T>,
): <B, C>(
  f: (b: B) => C,
) => <X, W, V, U, S, R, A>(
  kind: Kind8<T, X, W, V, U, S, R, C, A>,
) => Kind8<T, X, W, V, U, S, R, B, A>

export function contramap<T extends HKT7>(
  D: Divariant7<T>,
): <B, C>(
  f: (b: B) => C,
) => <W, V, U, S, R, A>(kind: Kind7<T, W, V, U, S, R, C, A>) => Kind7<T, W, V, U, S, R, B, A>

export function contramap<T extends HKT6>(
  D: Divariant6<T>,
): <B, C>(
  f: (b: B) => C,
) => <V, U, S, R, A>(kind: Kind6<T, V, U, S, R, C, A>) => Kind6<T, V, U, S, R, B, A>

export function contramap<T extends HKT5>(
  D: Divariant5<T>,
): <B, C>(f: (b: B) => C) => <U, S, R, A>(kind: Kind5<T, U, S, R, C, A>) => Kind5<T, U, S, R, B, A>

export function contramap<T extends HKT4, R>(
  D: Divariant4RC<T, R>,
): <B, C>(f: (b: B) => C) => <S, A>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, B, A>

export function contramap<T extends HKT4, S, R>(
  D: Divariant4SRC<T, S, R>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, B, A>

export function contramap<T extends HKT4, S>(
  D: Divariant4SC<T, S>,
): <B, C>(f: (b: B) => C) => <R, A>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, B, A>

export function contramap<T extends HKT4>(
  D: Divariant4<T>,
): <B, C>(f: (b: B) => C) => <S, R, A>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, B, A>

export function contramap<T extends HKT3, R>(
  D: Divariant3RC<T, R>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind3<T, R, C, A>) => Kind3<T, R, B, A>

export function contramap<T extends HKT3>(
  D: Divariant3<T>,
): <B, C>(f: (b: B) => C) => <R, A>(kind: Kind3<T, R, C, A>) => Kind3<T, R, B, A>

export function contramap<T extends HKT2>(
  D: Divariant2<T>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind2<T, C, A>) => Kind2<T, B, A>

export function contramap<T extends HKT2>(
  D: Divariant<T>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind2<T, C, A>) => Kind2<T, B, A> {
  return <B, C>(f: (b: B) => C) => D.dimap(f, identity)
}

/* #endregion */

/* #region map */
export function map<T extends HKT10>(
  D: Divariant10<T>,
): <B, C>(
  f: (b: B) => C,
) => <Z, Y, X, W, V, U, S, R, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, A, B>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, A, C>

export function map<T extends HKT9>(
  D: Divariant9<T>,
): <B, C>(
  f: (b: B) => C,
) => <Y, X, W, V, U, S, R, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, A, B>,
) => Kind9<T, Y, X, W, V, U, S, R, A, C>

export function map<T extends HKT8>(
  D: Divariant8<T>,
): <B, C>(
  f: (b: B) => C,
) => <X, W, V, U, S, R, A>(
  kind: Kind8<T, X, W, V, U, S, R, A, B>,
) => Kind8<T, X, W, V, U, S, R, A, C>

export function map<T extends HKT7>(
  D: Divariant7<T>,
): <B, C>(
  f: (b: B) => C,
) => <W, V, U, S, R, A>(kind: Kind7<T, W, V, U, S, R, A, B>) => Kind7<T, W, V, U, S, R, A, C>

export function map<T extends HKT6>(
  D: Divariant6<T>,
): <B, C>(
  f: (b: B) => C,
) => <V, U, S, R, A>(kind: Kind6<T, V, U, S, R, A, B>) => Kind6<T, V, U, S, R, A, C>

export function map<T extends HKT5>(
  D: Divariant5<T>,
): <B, C>(f: (b: B) => C) => <U, S, R, A>(kind: Kind5<T, U, S, R, A, B>) => Kind5<T, U, S, R, A, C>

export function map<T extends HKT4, R>(
  D: Divariant4RC<T, R>,
): <B, C>(f: (b: B) => C) => <S, A>(kind: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, C>

export function map<T extends HKT4, S, R>(
  D: Divariant4SRC<T, S, R>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, C>

export function map<T extends HKT4, S>(
  D: Divariant4SC<T, S>,
): <B, C>(f: (b: B) => C) => <R, A>(kind: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, C>

export function map<T extends HKT4>(
  D: Divariant4<T>,
): <B, C>(f: (b: B) => C) => <S, R, A>(kind: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, C>

export function map<T extends HKT3, R>(
  D: Divariant3RC<T, R>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind3<T, R, A, B>) => Kind3<T, R, A, C>

export function map<T extends HKT3>(
  D: Divariant3<T>,
): <B, C>(f: (b: B) => C) => <R, A>(kind: Kind3<T, R, A, B>) => Kind3<T, R, A, C>

export function map<T extends HKT2>(
  D: Divariant2<T>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind2<T, A, B>) => Kind2<T, A, C>

export function map<T extends HKT2>(
  D: Divariant<T>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind2<T, A, B>) => Kind2<T, A, C>

export function map<T extends HKT2>(
  D: Divariant<T>,
): <B, C>(f: (b: B) => C) => <A>(kind: Kind2<T, A, B>) => Kind2<T, A, C> {
  return <B, C>(f: (b: B) => C) => D.dimap(identity, f)
}

/* #endregion */

export function dimap<F extends HKT10, G extends HKT10>(
  F: Divariant10<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<
    F,
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    B,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT10>(
  F: Divariant9<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT10>(
  F: Divariant8<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT10>(
  F: Divariant7<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT10>(
  F: Divariant6<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT10>(
  F: Divariant5<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT10>(
  F: Divariant4RC<F, R1>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT10>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT10>(
  F: Divariant4SC<F, S1>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT10>(
  F: Divariant4<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT10>(
  F: Divariant3RC<F, R1>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT10>(
  F: Divariant3<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT10>(
  F: Divariant2<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT10>(
  F: Divariant<F>,
  G: Covariant10<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT9>(
  F: Divariant10<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT9>(
  F: Divariant9<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT9>(
  F: Divariant8<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT9>(
  F: Divariant7<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT9>(
  F: Divariant6<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT9>(
  F: Divariant5<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT9>(
  F: Divariant4RC<F, R1>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT9>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT9>(
  F: Divariant4SC<F, S1>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT9>(
  F: Divariant4<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT9>(
  F: Divariant3RC<F, R1>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT9>(
  F: Divariant3<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT9>(
  F: Divariant2<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT9>(
  F: Divariant<F>,
  G: Covariant9<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT8>(
  F: Divariant10<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT8>(
  F: Divariant9<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT8>(
  F: Divariant8<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT8>(
  F: Divariant7<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT8>(
  F: Divariant6<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT8>(
  F: Divariant5<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT8>(
  F: Divariant4RC<F, R1>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT8>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT8>(
  F: Divariant4SC<F, S1>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT8>(
  F: Divariant4<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT8>(
  F: Divariant3RC<F, R1>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT8>(
  F: Divariant3<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT8>(
  F: Divariant2<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT8>(
  F: Divariant<F>,
  G: Covariant8<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind8<G, X2, W2, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind8<G, X2, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT7>(
  F: Divariant10<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT7>(
  F: Divariant9<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT7>(
  F: Divariant8<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT7>(
  F: Divariant7<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT7>(
  F: Divariant6<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT7>(
  F: Divariant5<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT7>(
  F: Divariant4RC<F, R1>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT7>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT7>(
  F: Divariant4SC<F, S1>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT7>(
  F: Divariant4<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT7>(
  F: Divariant3RC<F, R1>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT7>(
  F: Divariant3<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT7>(
  F: Divariant2<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT7>(
  F: Divariant<F>,
  G: Covariant7<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind7<G, W2, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind7<G, W2, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT6>(
  F: Divariant10<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT6>(
  F: Divariant9<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT6>(
  F: Divariant8<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT6>(
  F: Divariant7<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT6>(
  F: Divariant6<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT6>(
  F: Divariant5<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT6>(
  F: Divariant4RC<F, R1>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT6>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT6>(
  F: Divariant4SC<F, S1>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT6>(
  F: Divariant4<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT6>(
  F: Divariant3RC<F, R1>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT6>(
  F: Divariant3<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT6>(
  F: Divariant2<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT6>(
  F: Divariant<F>,
  G: Covariant6<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V2, U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind6<G, V2, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind6<G, V2, U2, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT5>(
  F: Divariant10<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT5>(
  F: Divariant9<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT5>(
  F: Divariant8<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT5>(
  F: Divariant7<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT5>(
  F: Divariant6<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT5>(
  F: Divariant5<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT5>(
  F: Divariant4RC<F, R1>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT5>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT5>(
  F: Divariant4SC<F, S1>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT5>(
  F: Divariant4<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT5>(
  F: Divariant3RC<F, R1>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT5>(
  F: Divariant3<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, U2, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT5>(
  F: Divariant2<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT5>(
  F: Divariant<F>,
  G: Covariant5<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U2, S2, R2, E2>(
  kind: Kind2<F, B, Kind5<G, U2, S2, R2, E2, C>>,
) => Kind2<F, A, Kind5<G, U2, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT4, E2>(
  F: Divariant10<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT4, R2, E2>(
  F: Divariant10<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, S2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT4, S2, E2>(
  F: Divariant10<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT4, R2>(
  F: Divariant10<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, S2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT4, S2, R2>(
  F: Divariant10<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT4, S2>(
  F: Divariant10<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Divariant10<F>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT4>(
  F: Divariant10<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT4, E2>(
  F: Divariant9<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT4, R2, E2>(
  F: Divariant9<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, S2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT4, S2, E2>(
  F: Divariant9<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT4, R2>(
  F: Divariant9<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, S2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT4, S2, R2>(
  F: Divariant9<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT4, S2>(
  F: Divariant9<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Divariant9<F>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT4>(
  F: Divariant9<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT4, E2>(
  F: Divariant8<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT4, R2, E2>(
  F: Divariant8<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, S2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT4, S2, E2>(
  F: Divariant8<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT4, R2>(
  F: Divariant8<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, S2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT4, S2, R2>(
  F: Divariant8<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT4, S2>(
  F: Divariant8<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Divariant8<F>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT4>(
  F: Divariant8<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT4, E2>(
  F: Divariant7<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT4, R2, E2>(
  F: Divariant7<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, S2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT4, S2, E2>(
  F: Divariant7<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT4, R2>(
  F: Divariant7<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, S2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT4, S2, R2>(
  F: Divariant7<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT4, S2>(
  F: Divariant7<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Divariant7<F>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT4>(
  F: Divariant7<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT4, E2>(
  F: Divariant6<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT4, R2, E2>(
  F: Divariant6<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, S2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT4, S2, E2>(
  F: Divariant6<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, R2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT4, R2>(
  F: Divariant6<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, S2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT4, S2, R2>(
  F: Divariant6<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT4, S2>(
  F: Divariant6<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Divariant6<F>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT4>(
  F: Divariant6<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT4, E2>(
  F: Divariant5<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, S2, R2>(
  kind: Kind5<F, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT4, R2, E2>(
  F: Divariant5<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, S2>(
  kind: Kind5<F, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT4, S2, E2>(
  F: Divariant5<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, R2>(
  kind: Kind5<F, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT4, R2>(
  F: Divariant5<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, S2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT4, S2, R2>(
  F: Divariant5<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT4, S2>(
  F: Divariant5<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Divariant5<F>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1>(
  kind: Kind5<F, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT4>(
  F: Divariant5<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT4, E2>(
  F: Divariant4<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, S2, R2>(
  kind: Kind4<F, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT4, R2, E2>(
  F: Divariant4<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, S2>(
  kind: Kind4<F, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT4, S2, E2>(
  F: Divariant4<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, R2>(
  kind: Kind4<F, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT4, R2>(
  F: Divariant4<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, S2, E2>(
  kind: Kind4<F, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT4, S2, R2>(
  F: Divariant4RC<F, R1>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, E2>(
  kind: Kind4<F, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT4, S2>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT4, S2, R2, E2>(
  F: Divariant4SC<F, S1>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1>(
  kind: Kind4<F, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT4>(
  F: Divariant4<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, S2, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT4, E2>(
  F: Divariant3<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, S2, R2>(
  kind: Kind3<F, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT4, R2, E2>(
  F: Divariant3<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, S2>(
  kind: Kind3<F, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT4, S2, E2>(
  F: Divariant3<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, R2>(
  kind: Kind3<F, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT4, R2>(
  F: Divariant3<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, S2, E2>(
  kind: Kind3<F, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT4, S2, R2>(
  F: Divariant3<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, E2>(
  kind: Kind3<F, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT4, S2>(
  F: Divariant3<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, R2, E2>(
  kind: Kind3<F, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Divariant3RC<F, R1>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind3<F, R1, B, Kind4<G, S2, R2, E2, C>>) => Kind3<F, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT4>(
  F: Divariant3<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, S2, R2, E2>(
  kind: Kind3<F, R1, B, Kind4<G, S2, R2, E2, C>>,
) => Kind3<F, R1, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, E2>(
  F: Divariant2<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S2, R2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, R2, E2>(
  F: Divariant2<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, S2, E2>(
  F: Divariant2<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, R2>(
  F: Divariant2<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S2, E2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, S2, R2>(
  F: Divariant2<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <E2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, S2>(
  F: Divariant2<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2, E2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, S2, R2, E2>(
  F: Divariant2<F>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4>(
  F: Divariant2<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S2, R2, E2>(
  kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>,
) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, E2>(
  F: Divariant<F>,
  G: Covariant4EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S2, R2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, R2, E2>(
  F: Divariant<F>,
  G: Covariant4REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, S2, E2>(
  F: Divariant<F>,
  G: Covariant4SEC<G, S2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, R2>(
  F: Divariant<F>,
  G: Covariant4RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S2, E2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, S2, R2>(
  F: Divariant<F>,
  G: Covariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <E2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, S2>(
  F: Divariant<F>,
  G: Covariant4SC<G, S2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2, E2>(kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4, S2, R2, E2>(
  F: Divariant<F>,
  G: Covariant4SREC<G, S2, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT4>(
  F: Divariant<F>,
  G: Covariant4<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S2, R2, E2>(
  kind: Kind2<F, B, Kind4<G, S2, R2, E2, C>>,
) => Kind2<F, A, Kind4<G, S2, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT3, E2>(
  F: Divariant10<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT3, R2, E2>(
  F: Divariant10<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT3, R2>(
  F: Divariant10<F>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT3>(
  F: Divariant10<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT3, E2>(
  F: Divariant9<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT3, R2, E2>(
  F: Divariant9<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT3, R2>(
  F: Divariant9<F>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT9, G extends HKT3>(
  F: Divariant9<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT3, E2>(
  F: Divariant8<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT3, R2, E2>(
  F: Divariant8<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT3, R2>(
  F: Divariant8<F>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT8, G extends HKT3>(
  F: Divariant8<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT3, E2>(
  F: Divariant7<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT3, R2, E2>(
  F: Divariant7<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT3, R2>(
  F: Divariant7<F>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT7, G extends HKT3>(
  F: Divariant7<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT3, E2>(
  F: Divariant6<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, R2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT3, R2, E2>(
  F: Divariant6<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT3, R2>(
  F: Divariant6<F>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT6, G extends HKT3>(
  F: Divariant6<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT3, E2>(
  F: Divariant5<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, R2>(
  kind: Kind5<F, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT3, R2, E2>(
  F: Divariant5<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1>(
  kind: Kind5<F, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT3, R2>(
  F: Divariant5<F>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT5, G extends HKT3>(
  F: Divariant5<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, R2, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT3, E2>(
  F: Divariant4RC<F, R1>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R2>(
  kind: Kind4<F, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT3, R2, E2>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind4<F, S1, R1, B, Kind3<G, R2, E2, C>>) => Kind4<F, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT3, R2>(
  F: Divariant4SC<F, S1>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, E2>(
  kind: Kind4<F, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT4, G extends HKT3>(
  F: Divariant4<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, R2, E2>(
  kind: Kind4<F, S1, R1, B, Kind3<G, R2, E2, C>>,
) => Kind4<F, S1, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT3, E2>(
  F: Divariant3<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, R2>(kind: Kind3<F, R1, B, Kind3<G, R2, E2, C>>) => Kind3<F, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT3, R2, E2>(
  F: Divariant3<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1>(kind: Kind3<F, R1, B, Kind3<G, R2, E2, C>>) => Kind3<F, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT3, R2>(
  F: Divariant3RC<F, R1>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <E2>(kind: Kind3<F, R1, B, Kind3<G, R2, E2, C>>) => Kind3<F, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT3, G extends HKT3>(
  F: Divariant3<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, R2, E2>(
  kind: Kind3<F, R1, B, Kind3<G, R2, E2, C>>,
) => Kind3<F, R1, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT3, E2>(
  F: Divariant2<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2>(kind: Kind2<F, B, Kind3<G, R2, E2, C>>) => Kind2<F, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT3, R2, E2>(
  F: Divariant2<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind3<G, R2, E2, C>>) => Kind2<F, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT3, R2>(
  F: Divariant2<F>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <E2>(kind: Kind2<F, B, Kind3<G, R2, E2, C>>) => Kind2<F, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT3>(
  F: Divariant2<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2, E2>(kind: Kind2<F, B, Kind3<G, R2, E2, C>>) => Kind2<F, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT3, E2>(
  F: Divariant<F>,
  G: Covariant3EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2>(kind: Kind2<F, B, Kind3<G, R2, E2, C>>) => Kind2<F, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT3, R2, E2>(
  F: Divariant<F>,
  G: Covariant3REC<G, R2, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind3<G, R2, E2, C>>) => Kind2<F, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT3, R2>(
  F: Divariant<F>,
  G: Covariant3RC<G, R2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <E2>(kind: Kind2<F, B, Kind3<G, R2, E2, C>>) => Kind2<F, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT2, G extends HKT3>(
  F: Divariant<F>,
  G: Covariant3<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R2, E2>(kind: Kind2<F, B, Kind3<G, R2, E2, C>>) => Kind2<F, A, Kind3<G, R2, E2, D>>

export function dimap<F extends HKT10, G extends HKT2, E2>(
  F: Divariant10<F>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT10, G extends HKT2>(
  F: Divariant10<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT9, G extends HKT2, E2>(
  F: Divariant9<F>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT9, G extends HKT2>(
  F: Divariant9<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT8, G extends HKT2, E2>(
  F: Divariant8<F>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT8, G extends HKT2>(
  F: Divariant8<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT7, G extends HKT2, E2>(
  F: Divariant7<F>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT7, G extends HKT2>(
  F: Divariant7<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT6, G extends HKT2, E2>(
  F: Divariant6<F>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT6, G extends HKT2>(
  F: Divariant6<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1, E2>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT5, G extends HKT2, E2>(
  F: Divariant5<F>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1>(
  kind: Kind5<F, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT5, G extends HKT2>(
  F: Divariant5<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1, E2>(
  kind: Kind5<F, U1, S1, R1, B, Kind2<G, E2, C>>,
) => Kind5<F, U1, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT4, R1, G extends HKT2>(
  F: Divariant4RC<F, R1>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, E2>(kind: Kind4<F, S1, R1, B, Kind2<G, E2, C>>) => Kind4<F, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT2>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <E2>(kind: Kind4<F, S1, R1, B, Kind2<G, E2, C>>) => Kind4<F, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT4, S1, G extends HKT2, E2>(
  F: Divariant4SC<F, S1>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1>(kind: Kind4<F, S1, R1, B, Kind2<G, E2, C>>) => Kind4<F, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT4, G extends HKT2>(
  F: Divariant4<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1, E2>(
  kind: Kind4<F, S1, R1, B, Kind2<G, E2, C>>,
) => Kind4<F, S1, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT3, R1, G extends HKT2, E2>(
  F: Divariant3RC<F, R1>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind3<F, R1, B, Kind2<G, E2, C>>) => Kind3<F, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT3, G extends HKT2>(
  F: Divariant3<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1, E2>(kind: Kind3<F, R1, B, Kind2<G, E2, C>>) => Kind3<F, R1, A, Kind2<G, E2, D>>

export function dimap<F extends HKT2, G extends HKT2, E2>(
  F: Divariant2<F>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind2<G, E2, C>>) => Kind2<F, A, Kind2<G, E2, D>>

export function dimap<F extends HKT2, G extends HKT2>(
  F: Divariant2<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <E2>(kind: Kind2<F, B, Kind2<G, E2, C>>) => Kind2<F, A, Kind2<G, E2, D>>

export function dimap<F extends HKT2, G extends HKT2, E2>(
  F: Divariant<F>,
  G: Covariant2EC<G, E2>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind2<G, E2, C>>) => Kind2<F, A, Kind2<G, E2, D>>

export function dimap<F extends HKT2, G extends HKT2>(
  F: Divariant<F>,
  G: Covariant2<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <E2>(kind: Kind2<F, B, Kind2<G, E2, C>>) => Kind2<F, A, Kind2<G, E2, D>>

export function dimap<F extends HKT10, G extends HKT>(
  F: Divariant10<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT9, G extends HKT>(
  F: Divariant9<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT8, G extends HKT>(
  F: Divariant8<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT7, G extends HKT>(
  F: Divariant7<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT6, G extends HKT>(
  F: Divariant6<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT5, G extends HKT>(
  F: Divariant5<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1>(kind: Kind5<F, U1, S1, R1, B, Kind<G, C>>) => Kind5<F, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT4, R1, G extends HKT>(
  F: Divariant4RC<F, R1>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1>(kind: Kind4<F, S1, R1, B, Kind<G, C>>) => Kind4<F, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind4<F, S1, R1, B, Kind<G, C>>) => Kind4<F, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT4, S1, G extends HKT>(
  F: Divariant4SC<F, S1>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1>(kind: Kind4<F, S1, R1, B, Kind<G, C>>) => Kind4<F, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT4, G extends HKT>(
  F: Divariant4<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1>(kind: Kind4<F, S1, R1, B, Kind<G, C>>) => Kind4<F, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT3, R1, G extends HKT>(
  F: Divariant3RC<F, R1>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind3<F, R1, B, Kind<G, C>>) => Kind3<F, R1, A, Kind<G, D>>

export function dimap<F extends HKT3, G extends HKT>(
  F: Divariant3<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1>(kind: Kind3<F, R1, B, Kind<G, C>>) => Kind3<F, R1, A, Kind<G, D>>

export function dimap<F extends HKT2, G extends HKT>(
  F: Divariant2<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind<G, C>>) => Kind2<F, A, Kind<G, D>>

export function dimap<F extends HKT2, G extends HKT>(
  F: Divariant<F>,
  G: Covariant1<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind<G, C>>) => Kind2<F, A, Kind<G, D>>

export function dimap<F extends HKT10, G extends HKT>(
  F: Divariant10<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT9, G extends HKT>(
  F: Divariant9<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y1, X1, W1, V1, U1, S1, R1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT8, G extends HKT>(
  F: Divariant8<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X1, W1, V1, U1, S1, R1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT7, G extends HKT>(
  F: Divariant7<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W1, V1, U1, S1, R1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT6, G extends HKT>(
  F: Divariant6<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V1, U1, S1, R1>(
  kind: Kind6<F, V1, U1, S1, R1, B, Kind<G, C>>,
) => Kind6<F, V1, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT5, G extends HKT>(
  F: Divariant5<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U1, S1, R1>(kind: Kind5<F, U1, S1, R1, B, Kind<G, C>>) => Kind5<F, U1, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT4, R1, G extends HKT>(
  F: Divariant4RC<F, R1>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1>(kind: Kind4<F, S1, R1, B, Kind<G, C>>) => Kind4<F, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT4, S1, R1, G extends HKT>(
  F: Divariant4SRC<F, S1, R1>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind4<F, S1, R1, B, Kind<G, C>>) => Kind4<F, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT4, S1, G extends HKT>(
  F: Divariant4SC<F, S1>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1>(kind: Kind4<F, S1, R1, B, Kind<G, C>>) => Kind4<F, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT4, G extends HKT>(
  F: Divariant4<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S1, R1>(kind: Kind4<F, S1, R1, B, Kind<G, C>>) => Kind4<F, S1, R1, A, Kind<G, D>>

export function dimap<F extends HKT3, R1, G extends HKT>(
  F: Divariant3RC<F, R1>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind3<F, R1, B, Kind<G, C>>) => Kind3<F, R1, A, Kind<G, D>>

export function dimap<F extends HKT3, G extends HKT>(
  F: Divariant3<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R1>(kind: Kind3<F, R1, B, Kind<G, C>>) => Kind3<F, R1, A, Kind<G, D>>

export function dimap<F extends HKT2, G extends HKT>(
  F: Divariant2<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind<G, C>>) => Kind2<F, A, Kind<G, D>>

export function dimap<F extends HKT2, G extends HKT>(
  F: Divariant<F>,
  G: Covariant<G>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => (kind: Kind2<F, B, Kind<G, C>>) => Kind2<F, A, Kind<G, D>>

export function dimap<F extends HKT2, G extends HKT2>(F: Divariant<F>, G: Covariant<G>) {
  return <A, B, C, D>(f: Unary<A, B>, g: Unary<C, D>) =>
    (kind: Kind2<F, B, Kind<G, C>>): Kind2<F, A, Kind<G, D>> =>
      pipe(kind, F.dimap(f, G.map(g)))
}
