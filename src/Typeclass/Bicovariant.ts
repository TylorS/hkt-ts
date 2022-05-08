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
import type { Unary } from '../Unary'
import { identity } from '../function'

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
} from './Covariant'

/* #region Bicovariant */
export interface Bicovariant<T extends HKT2> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind2<T, A, C>) => Kind2<T, B, D>
}

export interface Bicovariant2<T extends HKT2> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind2<T, A, C>) => Kind2<T, B, D>
}

export interface Bicovariant3<T extends HKT3> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <R>(kind: Kind3<T, R, A, C>) => Kind3<T, R, B, D>
}

export interface Bicovariant3RC<T extends HKT3, R> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind3<T, R, A, C>) => Kind3<T, R, B, D>
}

export interface Bicovariant4<T extends HKT4> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <S, R>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, D>
}

export interface Bicovariant4SC<T extends HKT4, S> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <R>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, D>
}

export interface Bicovariant4SRC<T extends HKT4, S, R> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => (kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, D>
}

export interface Bicovariant4RC<T extends HKT4, R> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <S>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, D>
}

export interface Bicovariant5<T extends HKT5> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <U, S, R>(kind: Kind5<T, U, S, R, A, C>) => Kind5<T, U, S, R, B, D>
}

export interface Bicovariant6<T extends HKT6> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <V, U, S, R>(kind: Kind6<T, V, U, S, R, A, C>) => Kind6<T, V, U, S, R, B, D>
}

export interface Bicovariant7<T extends HKT7> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <W, V, U, S, R>(kind: Kind7<T, W, V, U, S, R, A, C>) => Kind7<T, W, V, U, S, R, B, D>
}

export interface Bicovariant8<T extends HKT8> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <X, W, V, U, S, R>(
    kind: Kind8<T, X, W, V, U, S, R, A, C>,
  ) => Kind8<T, X, W, V, U, S, R, B, D>
}

export interface Bicovariant9<T extends HKT9> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <Y, X, W, V, U, S, R>(
    kind: Kind9<T, Y, X, W, V, U, S, R, A, C>,
  ) => Kind9<T, Y, X, W, V, U, S, R, B, D>
}

export interface Bicovariant10<T extends HKT10> {
  readonly bimap: <A, B, C, D>(
    f: Unary<A, B>,
    g: Unary<C, D>,
  ) => <Z, Y, X, W, V, U, S, R>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, A, C>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, B, D>
}
/* #endregion */

/* #region map */
export function map<T extends HKT10>(
  B: Bicovariant10<T>,
): <A, B>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, R, C>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, C, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, C, B>

export function map<T extends HKT9>(
  B: Bicovariant9<T>,
): <A, B>(
  f: (a: A) => B,
) => <Y, X, W, V, U, S, R, C>(
  kind: Kind9<T, Y, X, W, V, U, S, R, C, A>,
) => Kind9<T, Y, X, W, V, U, S, R, C, B>

export function map<T extends HKT8>(
  B: Bicovariant8<T>,
): <A, B>(
  f: (a: A) => B,
) => <X, W, V, U, S, R, C>(
  kind: Kind8<T, X, W, V, U, S, R, C, A>,
) => Kind8<T, X, W, V, U, S, R, C, B>

export function map<T extends HKT7>(
  B: Bicovariant7<T>,
): <A, B>(
  f: (a: A) => B,
) => <W, V, U, S, R, C>(kind: Kind7<T, W, V, U, S, R, C, A>) => Kind7<T, W, V, U, S, R, C, B>

export function map<T extends HKT6>(
  B: Bicovariant6<T>,
): <A, B>(
  f: (a: A) => B,
) => <V, U, S, R, C>(kind: Kind6<T, V, U, S, R, C, A>) => Kind6<T, V, U, S, R, C, B>

export function map<T extends HKT5>(
  B: Bicovariant5<T>,
): <A, B>(f: (a: A) => B) => <U, S, R, C>(kind: Kind5<T, U, S, R, C, A>) => Kind5<T, U, S, R, C, B>

export function map<T extends HKT4, R>(
  B: Bicovariant4RC<T, R>,
): <A, B>(f: (a: A) => B) => <S, C>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, C, B>

export function map<T extends HKT4, S, R>(
  B: Bicovariant4SRC<T, S, R>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, C, B>

export function map<T extends HKT4, S>(
  B: Bicovariant4SC<T, S>,
): <A, B>(f: (a: A) => B) => <R, C>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, C, B>

export function map<T extends HKT4>(
  B: Bicovariant4<T>,
): <A, B>(f: (a: A) => B) => <S, R, C>(kind: Kind4<T, S, R, C, A>) => Kind4<T, S, R, C, B>

export function map<T extends HKT3, R>(
  B: Bicovariant3RC<T, R>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind3<T, R, C, A>) => Kind3<T, R, C, B>

export function map<T extends HKT3>(
  B: Bicovariant3<T>,
): <A, B>(f: (a: A) => B) => <R, C>(kind: Kind3<T, R, C, A>) => Kind3<T, R, C, B>

export function map<T extends HKT2>(
  B: Bicovariant2<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, C, A>) => Kind2<T, C, B>

export function map<T extends HKT2>(
  B: Bicovariant<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, C, A>) => Kind2<T, C, B>

export function map<T extends HKT2>(
  B: Bicovariant<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, C, A>) => Kind2<T, C, B> {
  return (f) => B.bimap(identity, f)
}
/* #endregion */

/* #region mapLeft */
export function mapLeft<T extends HKT10>(
  B: Bicovariant10<T>,
): <A, B>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, R, C>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, A, C>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, B, C>

export function mapLeft<T extends HKT9>(
  B: Bicovariant9<T>,
): <A, B>(
  f: (a: A) => B,
) => <Y, X, W, V, U, S, R, C>(
  kind: Kind9<T, Y, X, W, V, U, S, R, A, C>,
) => Kind9<T, Y, X, W, V, U, S, R, B, C>

export function mapLeft<T extends HKT8>(
  B: Bicovariant8<T>,
): <A, B>(
  f: (a: A) => B,
) => <X, W, V, U, S, R, C>(
  kind: Kind8<T, X, W, V, U, S, R, A, C>,
) => Kind8<T, X, W, V, U, S, R, B, C>

export function mapLeft<T extends HKT7>(
  B: Bicovariant7<T>,
): <A, B>(
  f: (a: A) => B,
) => <W, V, U, S, R, C>(kind: Kind7<T, W, V, U, S, R, A, C>) => Kind7<T, W, V, U, S, R, B, C>

export function mapLeft<T extends HKT6>(
  B: Bicovariant6<T>,
): <A, B>(
  f: (a: A) => B,
) => <V, U, S, R, C>(kind: Kind6<T, V, U, S, R, A, C>) => Kind6<T, V, U, S, R, B, C>

export function mapLeft<T extends HKT5>(
  B: Bicovariant5<T>,
): <A, B>(f: (a: A) => B) => <U, S, R, C>(kind: Kind5<T, U, S, R, A, C>) => Kind5<T, U, S, R, B, C>

export function mapLeft<T extends HKT4, R>(
  B: Bicovariant4RC<T, R>,
): <A, B>(f: (a: A) => B) => <S, C>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, C>

export function mapLeft<T extends HKT4, S, R>(
  B: Bicovariant4SRC<T, S, R>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, C>

export function mapLeft<T extends HKT4, S>(
  B: Bicovariant4SC<T, S>,
): <A, B>(f: (a: A) => B) => <R, C>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, C>

export function mapLeft<T extends HKT4>(
  B: Bicovariant4<T>,
): <A, B>(f: (a: A) => B) => <S, R, C>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, C>

export function mapLeft<T extends HKT3, R>(
  B: Bicovariant3RC<T, R>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind3<T, R, A, C>) => Kind3<T, R, B, C>

export function mapLeft<T extends HKT3>(
  B: Bicovariant3<T>,
): <A, B>(f: (a: A) => B) => <R, C>(kind: Kind3<T, R, A, C>) => Kind3<T, R, B, C>

export function mapLeft<T extends HKT2>(
  B: Bicovariant2<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, A, C>) => Kind2<T, B, C>

export function mapLeft<T extends HKT2>(
  B: Bicovariant<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, A, C>) => Kind2<T, B, C>

export function mapLeft<T extends HKT2>(
  B: Bicovariant<T>,
): <A, B>(f: (a: A) => B) => <C>(kind: Kind2<T, A, C>) => Kind2<T, B, C> {
  return (f) => B.bimap(f, identity)
}

/* #endregion */

/* #region bimap */
export function bimap<F extends HKT10, G extends HKT10>(
  F: Covariant10<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
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
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT10>(
  F: Covariant9<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT10>(
  F: Covariant8<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT10>(
  F: Covariant7<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT10>(
  F: Covariant6<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT10>(
  F: Covariant5<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT10>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT10>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT10>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT10>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT10>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT10>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, G extends HKT10>(
  F: Covariant4<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT10>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT10>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT10>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, G extends HKT10>(
  F: Covariant3<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT10>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT10>(
  F: Covariant2<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT10>(
  F: Covariant1<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT10>(
  F: Covariant<F>,
  G: Bicovariant10<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT9>(
  F: Covariant10<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT9>(
  F: Covariant9<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT9>(
  F: Covariant8<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT9>(
  F: Covariant7<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT9>(
  F: Covariant6<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT9>(
  F: Covariant5<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT9>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT9>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT9>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT9>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT9>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT9>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, G extends HKT9>(
  F: Covariant4<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT9>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT9>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT9>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, G extends HKT9>(
  F: Covariant3<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT9>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT9>(
  F: Covariant2<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT9>(
  F: Covariant1<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT9>(
  F: Covariant<F>,
  G: Bicovariant9<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y2, X2, W2, V2, U2, S2, R2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT8>(
  F: Covariant10<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT8>(
  F: Covariant9<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT8>(
  F: Covariant8<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT8>(
  F: Covariant7<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT8>(
  F: Covariant6<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT8>(
  F: Covariant5<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT8>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT8>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT8>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT8>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT8>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT8>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, G extends HKT8>(
  F: Covariant4<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT8>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT8>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT8>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, G extends HKT8>(
  F: Covariant3<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT8>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X2, W2, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT8>(
  F: Covariant2<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, X2, W2, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT8>(
  F: Covariant1<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X2, W2, V2, U2, S2, R2>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT8>(
  F: Covariant<F>,
  G: Bicovariant8<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X2, W2, V2, U2, S2, R2>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT7>(
  F: Covariant10<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT7>(
  F: Covariant9<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT7>(
  F: Covariant8<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT7>(
  F: Covariant7<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT7>(
  F: Covariant6<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT7>(
  F: Covariant5<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT7>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT7>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT7>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT7>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT7>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT7>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, G extends HKT7>(
  F: Covariant4<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT7>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT7>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT7>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, G extends HKT7>(
  F: Covariant3<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, W2, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT7>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W2, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT7>(
  F: Covariant2<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, W2, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT7>(
  F: Covariant1<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W2, V2, U2, S2, R2>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT7>(
  F: Covariant<F>,
  G: Bicovariant7<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W2, V2, U2, S2, R2>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT6>(
  F: Covariant10<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT6>(
  F: Covariant9<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT6>(
  F: Covariant8<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT6>(
  F: Covariant7<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT6>(
  F: Covariant6<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, V2, U2, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT6>(
  F: Covariant5<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, V2, U2, S2, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT6>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT6>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT6>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT6>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT6>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT6>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, G extends HKT6>(
  F: Covariant4<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1, V2, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT6>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT6>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT6>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, G extends HKT6>(
  F: Covariant3<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, V2, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT6>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT6>(
  F: Covariant2<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, V2, U2, S2, R2>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT6>(
  F: Covariant1<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V2, U2, S2, R2>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT6>(
  F: Covariant<F>,
  G: Bicovariant6<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V2, U2, S2, R2>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, A, C>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT5>(
  F: Covariant10<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT5>(
  F: Covariant9<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT5>(
  F: Covariant8<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT5>(
  F: Covariant7<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, U2, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT5>(
  F: Covariant6<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, U2, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT5>(
  F: Covariant5<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, U2, S2, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT5>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT5>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT5>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT5>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT5>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT5>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT4, G extends HKT5>(
  F: Covariant4<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1, U2, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT5>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT5>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT5>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT3, G extends HKT5>(
  F: Covariant3<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, U2, S2, R2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT5>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U2, S2, R2>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT5>(
  F: Covariant2<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, U2, S2, R2>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, A, C>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT5>(
  F: Covariant1<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U2, S2, R2>(kind: Kind<F, Kind5<G, U2, S2, R2, A, C>>) => Kind<F, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT5>(
  F: Covariant<F>,
  G: Bicovariant5<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U2, S2, R2>(kind: Kind<F, Kind5<G, U2, S2, R2, A, C>>) => Kind<F, Kind5<G, U2, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT4, R2>(
  F: Covariant10<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT4, S2, R2>(
  F: Covariant10<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT4, S2>(
  F: Covariant10<F>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT4>(
  F: Covariant10<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT4, R2>(
  F: Covariant9<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT4, S2, R2>(
  F: Covariant9<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT4, S2>(
  F: Covariant9<F>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT4>(
  F: Covariant9<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT4, R2>(
  F: Covariant8<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT4, S2, R2>(
  F: Covariant8<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT4, S2>(
  F: Covariant8<F>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT4>(
  F: Covariant8<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT4, R2>(
  F: Covariant7<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT4, S2, R2>(
  F: Covariant7<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT4, S2>(
  F: Covariant7<F>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT4>(
  F: Covariant7<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT4, R2>(
  F: Covariant6<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, S2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT4, S2, R2>(
  F: Covariant6<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT4, S2>(
  F: Covariant6<F>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT4>(
  F: Covariant6<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT4, R2>(
  F: Covariant5<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, S2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT4, S2, R2>(
  F: Covariant5<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT4, S2>(
  F: Covariant5<F>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT4>(
  F: Covariant5<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, S2, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT4>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT4>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT4>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT4>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT4, R2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, S2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT4, S2, R2>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT4, S2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT4, G extends HKT4>(
  F: Covariant4<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT4, R2>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, S2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT4, S2, R2>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind3<F, R1, E1, Kind4<G, S2, R2, A, C>>) => Kind3<F, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT4, S2>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, R2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT3, G extends HKT4>(
  F: Covariant3<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, S2, R2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, A, C>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT4, R2>(
  F: Covariant2<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, S2>(kind: Kind2<F, E1, Kind4<G, S2, R2, A, C>>) => Kind2<F, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT4, S2, R2>(
  F: Covariant2<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1>(kind: Kind2<F, E1, Kind4<G, S2, R2, A, C>>) => Kind2<F, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT4, S2>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R2>(kind: Kind2<F, E1, Kind4<G, S2, R2, A, C>>) => Kind2<F, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT4>(
  F: Covariant2<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, S2, R2>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, A, C>>,
) => Kind2<F, E1, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT4, R2>(
  F: Covariant1<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S2>(kind: Kind<F, Kind4<G, S2, R2, A, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant1<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind4<G, S2, R2, A, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT4, S2>(
  F: Covariant1<F>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R2>(kind: Kind<F, Kind4<G, S2, R2, A, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT4>(
  F: Covariant1<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, A, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT4, R2>(
  F: Covariant<F>,
  G: Bicovariant4RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S2>(kind: Kind<F, Kind4<G, S2, R2, A, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant<F>,
  G: Bicovariant4SRC<G, S2, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind4<G, S2, R2, A, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT4, S2>(
  F: Covariant<F>,
  G: Bicovariant4SC<G, S2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R2>(kind: Kind<F, Kind4<G, S2, R2, A, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT, G extends HKT4>(
  F: Covariant<F>,
  G: Bicovariant4<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, A, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT3, R2>(
  F: Covariant10<F>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT3>(
  F: Covariant10<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT3, R2>(
  F: Covariant9<F>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT9, G extends HKT3>(
  F: Covariant9<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT3, R2>(
  F: Covariant8<F>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT8, G extends HKT3>(
  F: Covariant8<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT3, R2>(
  F: Covariant7<F>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT7, G extends HKT3>(
  F: Covariant7<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT3, R2>(
  F: Covariant6<F>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT6, G extends HKT3>(
  F: Covariant6<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT3, R2>(
  F: Covariant5<F>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT5, G extends HKT3>(
  F: Covariant5<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT3>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT3>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT3>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT3>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT3>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT3>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind4<F, S1, R1, E1, Kind3<G, R2, A, C>>) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT4, G extends HKT3>(
  F: Covariant4<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, A, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT3>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, R2>(kind: Kind3<F, R1, E1, Kind3<G, R2, A, C>>) => Kind3<F, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT3>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R2>(kind: Kind3<F, R1, E1, Kind3<G, R2, A, C>>) => Kind3<F, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT3, R2>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1>(kind: Kind3<F, R1, E1, Kind3<G, R2, A, C>>) => Kind3<F, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT3, G extends HKT3>(
  F: Covariant3<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1, R2>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, A, C>>,
) => Kind3<F, R1, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT3, R2>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind2<F, E1, Kind3<G, R2, A, C>>) => Kind2<F, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT2, G extends HKT3>(
  F: Covariant2<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1, R2>(kind: Kind2<F, E1, Kind3<G, R2, A, C>>) => Kind2<F, E1, Kind3<G, R2, B, D>>

export function bimap<F extends HKT, G extends HKT3, R2>(
  F: Covariant1<F>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind3<G, R2, A, C>>) => Kind<F, Kind3<G, R2, B, D>>

export function bimap<F extends HKT, G extends HKT3>(
  F: Covariant1<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R2>(kind: Kind<F, Kind3<G, R2, A, C>>) => Kind<F, Kind3<G, R2, B, D>>

export function bimap<F extends HKT, G extends HKT3, R2>(
  F: Covariant<F>,
  G: Bicovariant3RC<G, R2>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind3<G, R2, A, C>>) => Kind<F, Kind3<G, R2, B, D>>

export function bimap<F extends HKT, G extends HKT3>(
  F: Covariant<F>,
  G: Bicovariant3<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R2>(kind: Kind<F, Kind3<G, R2, A, C>>) => Kind<F, Kind3<G, R2, B, D>>

export function bimap<F extends HKT10, G extends HKT2>(
  F: Covariant10<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT9, G extends HKT2>(
  F: Covariant9<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT8, G extends HKT2>(
  F: Covariant8<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT7, G extends HKT2>(
  F: Covariant7<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT6, G extends HKT2>(
  F: Covariant6<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT5, G extends HKT2>(
  F: Covariant5<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT2>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT2>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT2>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT2>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT2>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, G extends HKT2>(
  F: Covariant4<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>,
) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT2>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1>(kind: Kind3<F, R1, E1, Kind2<G, A, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT2>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind3<F, R1, E1, Kind2<G, A, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT2>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1>(kind: Kind3<F, R1, E1, Kind2<G, A, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT3, G extends HKT2>(
  F: Covariant3<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1>(kind: Kind3<F, R1, E1, Kind2<G, A, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT2>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind2<F, E1, Kind2<G, A, C>>) => Kind2<F, E1, Kind2<G, B, D>>

export function bimap<F extends HKT2, G extends HKT2>(
  F: Covariant2<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1>(kind: Kind2<F, E1, Kind2<G, A, C>>) => Kind2<F, E1, Kind2<G, B, D>>

export function bimap<F extends HKT, G extends HKT2>(
  F: Covariant1<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind2<G, A, C>>) => Kind<F, Kind2<G, B, D>>

export function bimap<F extends HKT, G extends HKT2>(
  F: Covariant<F>,
  G: Bicovariant2<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind2<G, A, C>>) => Kind<F, Kind2<G, B, D>>

export function bimap<F extends HKT10, G extends HKT2>(
  F: Covariant10<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT9, G extends HKT2>(
  F: Covariant9<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT8, G extends HKT2>(
  F: Covariant8<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT7, G extends HKT2>(
  F: Covariant7<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT6, G extends HKT2>(
  F: Covariant6<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT5, G extends HKT2>(
  F: Covariant5<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, A, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, E1, G extends HKT2>(
  F: Covariant4EC<F, E1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, R1, E1, G extends HKT2>(
  F: Covariant4REC<F, R1, E1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, S1, E1, G extends HKT2>(
  F: Covariant4SEC<F, S1, E1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, R1, G extends HKT2>(
  F: Covariant4RC<F, R1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, S1, R1, G extends HKT2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, S1, G extends HKT2>(
  F: Covariant4SC<F, S1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, S1, R1, E1, G extends HKT2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT4, G extends HKT2>(
  F: Covariant4<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <S1, R1, E1>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, A, C>>,
) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT3, E1, G extends HKT2>(
  F: Covariant3EC<F, E1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1>(kind: Kind3<F, R1, E1, Kind2<G, A, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT3, R1, E1, G extends HKT2>(
  F: Covariant3REC<F, R1, E1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind3<F, R1, E1, Kind2<G, A, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT3, R1, G extends HKT2>(
  F: Covariant3RC<F, R1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1>(kind: Kind3<F, R1, E1, Kind2<G, A, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT3, G extends HKT2>(
  F: Covariant3<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <R1, E1>(kind: Kind3<F, R1, E1, Kind2<G, A, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function bimap<F extends HKT2, E1, G extends HKT2>(
  F: Covariant2EC<F, E1>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind2<F, E1, Kind2<G, A, C>>) => Kind2<F, E1, Kind2<G, B, D>>

export function bimap<F extends HKT2, G extends HKT2>(
  F: Covariant2<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => <E1>(kind: Kind2<F, E1, Kind2<G, A, C>>) => Kind2<F, E1, Kind2<G, B, D>>

export function bimap<F extends HKT, G extends HKT2>(
  F: Covariant1<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind2<G, A, C>>) => Kind<F, Kind2<G, B, D>>

export function bimap<F extends HKT, G extends HKT2>(
  F: Covariant<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind2<G, A, C>>) => Kind<F, Kind2<G, B, D>>

export function bimap<F extends HKT, G extends HKT2>(
  F: Covariant<F>,
  G: Bicovariant<G>,
): <A, B, C, D>(
  f: Unary<A, B>,
  g: Unary<C, D>,
) => (kind: Kind<F, Kind2<G, A, B>>) => Kind<F, Kind2<G, B, D>> {
  return <A, B, C, D>(f: Unary<A, B>, g: Unary<C, D>) => F.map(G.bimap(f, g))
}
/* #endregion */
