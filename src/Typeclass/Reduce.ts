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
import { pipe } from '../function.js'

/* #region Reduce */
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

/* #endregion */
/* #region reduce */
export function reduce<F extends HKT10, G extends HKT10>(
  F: Reduce10<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
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
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
  >,
) => B

export function reduce<F extends HKT9, G extends HKT10>(
  F: Reduce9<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT10>(
  F: Reduce8<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT10>(
  F: Reduce7<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT6, G extends HKT10>(
  F: Reduce6<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT5, G extends HKT10>(
  F: Reduce5<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, E1, G extends HKT10>(
  F: Reduce4EC<F, E1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT10>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT10>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, R1, G extends HKT10>(
  F: Reduce4RC<F, R1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT10>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, G extends HKT10>(
  F: Reduce4SC<F, S1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, G extends HKT10>(
  F: Reduce4<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, E1, G extends HKT10>(
  F: Reduce3EC<F, E1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT10>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, R1, G extends HKT10>(
  F: Reduce3RC<F, R1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, G extends HKT10>(
  F: Reduce3<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT2, E1, G extends HKT10>(
  F: Reduce2EC<F, E1>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT2, G extends HKT10>(
  F: Reduce2<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT, G extends HKT10>(
  F: Reduce1<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT, G extends HKT10>(
  F: Reduce<F>,
  G: Reduce10<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT9>(
  F: Reduce10<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT9>(
  F: Reduce9<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT9>(
  F: Reduce8<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT9>(
  F: Reduce7<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT6, G extends HKT9>(
  F: Reduce6<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT5, G extends HKT9>(
  F: Reduce5<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, E1, G extends HKT9>(
  F: Reduce4EC<F, E1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT9>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT9>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, R1, G extends HKT9>(
  F: Reduce4RC<F, R1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT9>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, G extends HKT9>(
  F: Reduce4SC<F, S1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, G extends HKT9>(
  F: Reduce4<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, E1, G extends HKT9>(
  F: Reduce3EC<F, E1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT9>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, R1, G extends HKT9>(
  F: Reduce3RC<F, R1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, G extends HKT9>(
  F: Reduce3<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT2, E1, G extends HKT9>(
  F: Reduce2EC<F, E1>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT2, G extends HKT9>(
  F: Reduce2<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT, G extends HKT9>(
  F: Reduce1<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT, G extends HKT9>(
  F: Reduce<F>,
  G: Reduce9<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT8>(
  F: Reduce10<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT8>(
  F: Reduce9<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT8>(
  F: Reduce8<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT8>(
  F: Reduce7<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT6, G extends HKT8>(
  F: Reduce6<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT5, G extends HKT8>(
  F: Reduce5<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, E1, G extends HKT8>(
  F: Reduce4EC<F, E1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT8>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT8>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, R1, G extends HKT8>(
  F: Reduce4RC<F, R1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT8>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, G extends HKT8>(
  F: Reduce4SC<F, S1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, G extends HKT8>(
  F: Reduce4<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, E1, G extends HKT8>(
  F: Reduce3EC<F, E1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT8>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, R1, G extends HKT8>(
  F: Reduce3RC<F, R1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, G extends HKT8>(
  F: Reduce3<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT2, E1, G extends HKT8>(
  F: Reduce2EC<F, E1>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT8>(
  F: Reduce2<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT, G extends HKT8>(
  F: Reduce1<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT8>(
  F: Reduce<F>,
  G: Reduce8<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT10, G extends HKT7>(
  F: Reduce10<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT7>(
  F: Reduce9<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT7>(
  F: Reduce8<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT7>(
  F: Reduce7<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT6, G extends HKT7>(
  F: Reduce6<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT5, G extends HKT7>(
  F: Reduce5<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, E1, G extends HKT7>(
  F: Reduce4EC<F, E1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT7>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT7>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, R1, G extends HKT7>(
  F: Reduce4RC<F, R1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT7>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, G extends HKT7>(
  F: Reduce4SC<F, S1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, G extends HKT7>(
  F: Reduce4<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, E1, G extends HKT7>(
  F: Reduce3EC<F, E1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT7>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, G extends HKT7>(
  F: Reduce3RC<F, R1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT7>(
  F: Reduce3<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT2, E1, G extends HKT7>(
  F: Reduce2EC<F, E1>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT7>(
  F: Reduce2<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT7>(
  F: Reduce1<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT7>(
  F: Reduce<F>,
  G: Reduce7<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT10, G extends HKT6>(
  F: Reduce10<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT6>(
  F: Reduce9<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT6>(
  F: Reduce8<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT6>(
  F: Reduce7<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT6, G extends HKT6>(
  F: Reduce6<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT5, G extends HKT6>(
  F: Reduce5<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, E1, G extends HKT6>(
  F: Reduce4EC<F, E1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT6>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT6>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, R1, G extends HKT6>(
  F: Reduce4RC<F, R1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT6>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, G extends HKT6>(
  F: Reduce4SC<F, S1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, G extends HKT6>(
  F: Reduce4<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT3, E1, G extends HKT6>(
  F: Reduce3EC<F, E1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT6>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, G extends HKT6>(
  F: Reduce3RC<F, R1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT6>(
  F: Reduce3<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, E1, G extends HKT6>(
  F: Reduce2EC<F, E1>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT6>(
  F: Reduce2<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT6>(
  F: Reduce1<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT6>(
  F: Reduce<F>,
  G: Reduce6<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT10, G extends HKT5>(
  F: Reduce10<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT5>(
  F: Reduce9<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT5>(
  F: Reduce8<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT5>(
  F: Reduce7<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT6, G extends HKT5>(
  F: Reduce6<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT5, G extends HKT5>(
  F: Reduce5<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT4, E1, G extends HKT5>(
  F: Reduce4EC<F, E1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT5>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT5>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, R1, G extends HKT5>(
  F: Reduce4RC<F, R1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT5>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, G extends HKT5>(
  F: Reduce4SC<F, S1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, G extends HKT5>(
  F: Reduce4<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, E1, G extends HKT5>(
  F: Reduce3EC<F, E1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT5>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, G extends HKT5>(
  F: Reduce3RC<F, R1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT5>(
  F: Reduce3<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, E1, G extends HKT5>(
  F: Reduce2EC<F, E1>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U2, S2, R2, E2>(kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT5>(
  F: Reduce2<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT5>(
  F: Reduce1<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U2, S2, R2, E2>(kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT5>(
  F: Reduce<F>,
  G: Reduce5<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U2, S2, R2, E2>(kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduce<F extends HKT10, G extends HKT4, E2>(
  F: Reduce10<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT4, R2, E2>(
  F: Reduce10<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT4, S2, E2>(
  F: Reduce10<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT4, R2>(
  F: Reduce10<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT4, S2, R2>(
  F: Reduce10<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT4, S2>(
  F: Reduce10<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Reduce10<F>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT4>(
  F: Reduce10<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT4, E2>(
  F: Reduce9<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT4, R2, E2>(
  F: Reduce9<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT4, S2, E2>(
  F: Reduce9<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT4, R2>(
  F: Reduce9<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT4, S2, R2>(
  F: Reduce9<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT4, S2>(
  F: Reduce9<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Reduce9<F>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT4>(
  F: Reduce9<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT4, E2>(
  F: Reduce8<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT4, R2, E2>(
  F: Reduce8<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT4, S2, E2>(
  F: Reduce8<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT4, R2>(
  F: Reduce8<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT4, S2, R2>(
  F: Reduce8<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT4, S2>(
  F: Reduce8<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Reduce8<F>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT4>(
  F: Reduce8<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT4, E2>(
  F: Reduce7<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT4, R2, E2>(
  F: Reduce7<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT4, S2, E2>(
  F: Reduce7<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT4, R2>(
  F: Reduce7<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT4, S2, R2>(
  F: Reduce7<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT4, S2>(
  F: Reduce7<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Reduce7<F>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT7, G extends HKT4>(
  F: Reduce7<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT6, G extends HKT4, E2>(
  F: Reduce6<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, S2, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT4, R2, E2>(
  F: Reduce6<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, S2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT4, S2, E2>(
  F: Reduce6<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT4, R2>(
  F: Reduce6<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, S2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT4, S2, R2>(
  F: Reduce6<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT4, S2>(
  F: Reduce6<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Reduce6<F>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT4>(
  F: Reduce6<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduce<F extends HKT5, G extends HKT4, E2>(
  F: Reduce5<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, S2, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT4, R2, E2>(
  F: Reduce5<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, S2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT4, S2, E2>(
  F: Reduce5<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT4, R2>(
  F: Reduce5<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, S2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT4, S2, R2>(
  F: Reduce5<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT4, S2>(
  F: Reduce5<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Reduce5<F>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT4>(
  F: Reduce5<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, E1, G extends HKT4, E2>(
  F: Reduce4EC<F, E1>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, S2, R2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, S2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, R2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, R1, G extends HKT4, R2>(
  F: Reduce4RC<F, R1>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, S2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, G extends HKT4, S2>(
  F: Reduce4SC<F, S1>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => (kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT4, G extends HKT4>(
  F: Reduce4<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT4, E2>(
  F: Reduce3<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, S2, R2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT4, R2, E2>(
  F: Reduce3<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, S2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT4, S2, E2>(
  F: Reduce3<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, R2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT4, R2>(
  F: Reduce3<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, S2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: Reduce3EC<F, E1>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Reduce3RC<F, R1>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT4>(
  F: Reduce3<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT4, E2>(
  F: Reduce2<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, S2, R2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT4, R2, E2>(
  F: Reduce2<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, S2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT4, S2, E2>(
  F: Reduce2<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, R2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT4, R2>(
  F: Reduce2<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, S2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT4, S2, R2>(
  F: Reduce2<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT4, S2>(
  F: Reduce2<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, R2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: Reduce2EC<F, E1>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT4>(
  F: Reduce2<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, S2, R2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, E2>(
  F: Reduce1<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, R2, E2>(
  F: Reduce1<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, S2, E2>(
  F: Reduce1<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, R2>(
  F: Reduce1<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, S2, R2>(
  F: Reduce1<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, S2>(
  F: Reduce1<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Reduce1<F>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4>(
  F: Reduce1<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, E2>(
  F: Reduce<F>,
  G: Reduce4EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, R2, E2>(
  F: Reduce<F>,
  G: Reduce4REC<G, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, S2, E2>(
  F: Reduce<F>,
  G: Reduce4SEC<G, S2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, R2>(
  F: Reduce<F>,
  G: Reduce4RC<G, R2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, S2, R2>(
  F: Reduce<F>,
  G: Reduce4SRC<G, S2, R2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, S2>(
  F: Reduce<F>,
  G: Reduce4SC<G, S2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Reduce<F>,
  G: Reduce4SREC<G, S2, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT4>(
  F: Reduce<F>,
  G: Reduce4<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduce<F extends HKT10, G extends HKT3, E2>(
  F: Reduce10<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT3, R2, E2>(
  F: Reduce10<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT3, R2>(
  F: Reduce10<F>,
  G: Reduce3RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT3>(
  F: Reduce10<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT3, E2>(
  F: Reduce9<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT3, R2, E2>(
  F: Reduce9<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT3, R2>(
  F: Reduce9<F>,
  G: Reduce3RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT3>(
  F: Reduce9<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT3, E2>(
  F: Reduce8<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT3, R2, E2>(
  F: Reduce8<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT3, R2>(
  F: Reduce8<F>,
  G: Reduce3RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT3>(
  F: Reduce8<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT3, E2>(
  F: Reduce7<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, R2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT7, G extends HKT3, R2, E2>(
  F: Reduce7<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT7, G extends HKT3, R2>(
  F: Reduce7<F>,
  G: Reduce3RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT7, G extends HKT3>(
  F: Reduce7<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduce<F extends HKT6, G extends HKT3, E2>(
  F: Reduce6<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT3, R2, E2>(
  F: Reduce6<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT3, R2>(
  F: Reduce6<F>,
  G: Reduce3RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT3>(
  F: Reduce6<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT3, E2>(
  F: Reduce5<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT3, R2, E2>(
  F: Reduce5<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT3, R2>(
  F: Reduce5<F>,
  G: Reduce3RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT3>(
  F: Reduce5<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT4, E1, G extends HKT3>(
  F: Reduce4EC<F, E1>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT3>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT3>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT4, R1, G extends HKT3>(
  F: Reduce4RC<F, R1>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce3EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, R2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: Reduce4SC<F, S1>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce3RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT4, G extends HKT3>(
  F: Reduce4<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT3, E1, G extends HKT3, E2>(
  F: Reduce3EC<F, E1>,
  G: Reduce3EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, R2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT3, R1, G extends HKT3, R2>(
  F: Reduce3RC<F, R1>,
  G: Reduce3RC<G, R2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, E2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT3>(
  F: Reduce3<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, R2, E2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT3, E2>(
  F: Reduce2<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1, R2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT3, R2, E2>(
  F: Reduce2<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT2, E1, G extends HKT3, R2>(
  F: Reduce2EC<F, E1>,
  G: Reduce3RC<G, R2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT3>(
  F: Reduce2<F>,
  G: Reduce3<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, R2, E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT3, E2>(
  F: Reduce1<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT3, R2, E2>(
  F: Reduce1<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT3, R2>(
  F: Reduce1<F>,
  G: Reduce3RC<G, R2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT3>(
  F: Reduce1<F>,
  G: Reduce3<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT3, E2>(
  F: Reduce<F>,
  G: Reduce3EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT3, R2, E2>(
  F: Reduce<F>,
  G: Reduce3REC<G, R2, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT3, R2>(
  F: Reduce<F>,
  G: Reduce3RC<G, R2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT3>(
  F: Reduce<F>,
  G: Reduce3<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduce<F extends HKT10, G extends HKT2, E2>(
  F: Reduce10<F>,
  G: Reduce2EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduce<F extends HKT10, G extends HKT2>(
  F: Reduce10<F>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT2, E2>(
  F: Reduce9<F>,
  G: Reduce2EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT2>(
  F: Reduce9<F>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT2, E2>(
  F: Reduce8<F>,
  G: Reduce2EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT8, G extends HKT2>(
  F: Reduce8<F>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduce<F extends HKT7, G extends HKT2, E2>(
  F: Reduce7<F>,
  G: Reduce2EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT7, G extends HKT2>(
  F: Reduce7<F>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT2, E2>(
  F: Reduce6<F>,
  G: Reduce2EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT6, G extends HKT2>(
  F: Reduce6<F>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT2, E2>(
  F: Reduce5<F>,
  G: Reduce2EC<G, E2>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT5, G extends HKT2>(
  F: Reduce5<F>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT4, E1, G extends HKT2>(
  F: Reduce4EC<F, E1>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT2>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT2>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT4, R1, G extends HKT2>(
  F: Reduce4RC<F, R1>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT2>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT4, S1, G extends HKT2>(
  F: Reduce4SC<F, S1>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce2EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT4, G extends HKT2>(
  F: Reduce4<F>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT3, E1, G extends HKT2>(
  F: Reduce3EC<F, E1>,
  G: Reduce2<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT2>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce2<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT3, R1, G extends HKT2, E2>(
  F: Reduce3RC<F, R1>,
  G: Reduce2EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT3, G extends HKT2>(
  F: Reduce3<F>,
  G: Reduce2<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <R1, E1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT2, E1, G extends HKT2, E2>(
  F: Reduce2EC<F, E1>,
  G: Reduce2EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind2<F, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT2, G extends HKT2>(
  F: Reduce2<F>,
  G: Reduce2<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1, E2>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT2, E2>(
  F: Reduce1<F>,
  G: Reduce2EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT2>(
  F: Reduce1<F>,
  G: Reduce2<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT2, E2>(
  F: Reduce<F>,
  G: Reduce2EC<G, E2>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT, G extends HKT2>(
  F: Reduce<F>,
  G: Reduce2<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => B

export function reduce<F extends HKT10, G extends HKT>(
  F: Reduce10<F>,
  G: Reduce1<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT>(
  F: Reduce9<F>,
  G: Reduce1<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT>(
  F: Reduce8<F>,
  G: Reduce1<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT7, G extends HKT>(
  F: Reduce7<F>,
  G: Reduce1<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT6, G extends HKT>(
  F: Reduce6<F>,
  G: Reduce1<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT5, G extends HKT>(
  F: Reduce5<F>,
  G: Reduce1<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, E1, G extends HKT>(
  F: Reduce4EC<F, E1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, R1, G extends HKT>(
  F: Reduce4RC<F, R1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, S1, G extends HKT>(
  F: Reduce4SC<F, S1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, G extends HKT>(
  F: Reduce4<F>,
  G: Reduce1<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT3, E1, G extends HKT>(
  F: Reduce3EC<F, E1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT3, R1, G extends HKT>(
  F: Reduce3RC<F, R1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT3, G extends HKT>(
  F: Reduce3<F>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT2, E1, G extends HKT>(
  F: Reduce2EC<F, E1>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind2<F, E1, Kind<G, A>>) => B

export function reduce<F extends HKT2, G extends HKT>(
  F: Reduce2<F>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => B

export function reduce<F extends HKT, G extends HKT>(
  F: Reduce1<F>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function reduce<F extends HKT, G extends HKT>(
  F: Reduce<F>,
  G: Reduce1<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function reduce<F extends HKT10, G extends HKT>(
  F: Reduce10<F>,
  G: Reduce<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function reduce<F extends HKT9, G extends HKT>(
  F: Reduce9<F>,
  G: Reduce<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function reduce<F extends HKT8, G extends HKT>(
  F: Reduce8<F>,
  G: Reduce<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT7, G extends HKT>(
  F: Reduce7<F>,
  G: Reduce<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT6, G extends HKT>(
  F: Reduce6<F>,
  G: Reduce<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT5, G extends HKT>(
  F: Reduce5<F>,
  G: Reduce<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, E1, G extends HKT>(
  F: Reduce4EC<F, E1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, R1, E1, G extends HKT>(
  F: Reduce4REC<F, R1, E1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, S1, E1, G extends HKT>(
  F: Reduce4SEC<F, S1, E1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, R1, G extends HKT>(
  F: Reduce4RC<F, R1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, S1, R1, G extends HKT>(
  F: Reduce4SRC<F, S1, R1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, S1, G extends HKT>(
  F: Reduce4SC<F, S1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Reduce4SREC<F, S1, R1, E1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT4, G extends HKT>(
  F: Reduce4<F>,
  G: Reduce<G>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT3, E1, G extends HKT>(
  F: Reduce3EC<F, E1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT3, R1, E1, G extends HKT>(
  F: Reduce3REC<F, R1, E1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT3, R1, G extends HKT>(
  F: Reduce3RC<F, R1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT3, G extends HKT>(
  F: Reduce3<F>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduce<F extends HKT2, E1, G extends HKT>(
  F: Reduce2EC<F, E1>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind2<F, E1, Kind<G, A>>) => B

export function reduce<F extends HKT2, G extends HKT>(
  F: Reduce2<F>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => B

export function reduce<F extends HKT, G extends HKT>(
  F: Reduce1<F>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function reduce<F extends HKT, G extends HKT>(
  F: Reduce<F>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function reduce<F extends HKT, G extends HKT>(
  F: Reduce<F>,
  G: Reduce<G>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B {
  return <B, A>(seed: B, f: (b: B, a: A) => B) =>
    (kind: Kind<F, Kind<G, A>>) =>
      pipe(
        kind,
        F.reduce(seed, (b, k) => pipe(k, G.reduce(b, f))),
      )
}

/* #endregion */
