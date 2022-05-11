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

/* #region ReduceRight */
export interface ReduceRight<T extends HKT> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B
}

export interface ReduceRight1<T extends HKT> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B
}

export interface ReduceRight2<T extends HKT2> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind2<T, E, A>) => B
}

export interface ReduceRight2EC<T extends HKT2, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind2<T, E, A>) => B
}

export interface ReduceRight3<T extends HKT3> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRight3RC<T extends HKT3, R> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRight3REC<T extends HKT3, R, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRight3EC<T extends HKT3, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <R>(kind: Kind3<T, R, E, A>) => B
}

export interface ReduceRight4<T extends HKT4> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4SREC<T extends HKT4, S, R, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4SC<T extends HKT4, S> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4SRC<T extends HKT4, S, R> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4RC<T extends HKT4, R> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <S, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4SEC<T extends HKT4, S, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <R>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4REC<T extends HKT4, R, E> {
  readonly reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => <S>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight4EC<T extends HKT4, E> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <S, R>(kind: Kind4<T, S, R, E, A>) => B
}

export interface ReduceRight5<T extends HKT5> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B
}

export interface ReduceRight6<T extends HKT6> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B
}

export interface ReduceRight7<T extends HKT7> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B
}

export interface ReduceRight8<T extends HKT8> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B
}

export interface ReduceRight9<T extends HKT9> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B
}

export interface ReduceRight10<T extends HKT10> {
  readonly reduceRight: <B, A>(
    b: B,
    f: (a: A, b: B) => B,
  ) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B
}

/* #endregion */

export function reduceRight<F extends HKT10, G extends HKT10>(
  F: ReduceRight10<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
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

export function reduceRight<F extends HKT9, G extends HKT10>(
  F: ReduceRight9<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT10>(
  F: ReduceRight8<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT10>(
  F: ReduceRight7<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT6, G extends HKT10>(
  F: ReduceRight6<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT5, G extends HKT10>(
  F: ReduceRight5<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, E1, G extends HKT10>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT10>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT10>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, R1, G extends HKT10>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT10>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, G extends HKT10>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, G extends HKT10>(
  F: ReduceRight4<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, E1, G extends HKT10>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT10>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, R1, G extends HKT10>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, G extends HKT10>(
  F: ReduceRight3<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT2, E1, G extends HKT10>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT2, G extends HKT10>(
  F: ReduceRight2<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT, G extends HKT10>(
  F: ReduceRight1<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT, G extends HKT10>(
  F: ReduceRight<F>,
  G: ReduceRight10<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT9>(
  F: ReduceRight10<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT9>(
  F: ReduceRight9<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT9>(
  F: ReduceRight8<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT9>(
  F: ReduceRight7<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT6, G extends HKT9>(
  F: ReduceRight6<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT5, G extends HKT9>(
  F: ReduceRight5<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, E1, G extends HKT9>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT9>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT9>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, R1, G extends HKT9>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT9>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, G extends HKT9>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, G extends HKT9>(
  F: ReduceRight4<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, E1, G extends HKT9>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT9>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, R1, G extends HKT9>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, G extends HKT9>(
  F: ReduceRight3<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT2, E1, G extends HKT9>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT2, G extends HKT9>(
  F: ReduceRight2<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT, G extends HKT9>(
  F: ReduceRight1<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT, G extends HKT9>(
  F: ReduceRight<F>,
  G: ReduceRight9<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT8>(
  F: ReduceRight10<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT8>(
  F: ReduceRight9<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT8>(
  F: ReduceRight8<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT8>(
  F: ReduceRight7<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT6, G extends HKT8>(
  F: ReduceRight6<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT5, G extends HKT8>(
  F: ReduceRight5<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, E1, G extends HKT8>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT8>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT8>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, R1, G extends HKT8>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT8>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, G extends HKT8>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, G extends HKT8>(
  F: ReduceRight4<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, E1, G extends HKT8>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT8>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, R1, G extends HKT8>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, G extends HKT8>(
  F: ReduceRight3<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT2, E1, G extends HKT8>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT8>(
  F: ReduceRight2<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT, G extends HKT8>(
  F: ReduceRight1<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT8>(
  F: ReduceRight<F>,
  G: ReduceRight8<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT10, G extends HKT7>(
  F: ReduceRight10<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT7>(
  F: ReduceRight9<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT7>(
  F: ReduceRight8<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT7>(
  F: ReduceRight7<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT6, G extends HKT7>(
  F: ReduceRight6<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT5, G extends HKT7>(
  F: ReduceRight5<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, E1, G extends HKT7>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT7>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT7>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, R1, G extends HKT7>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT7>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, G extends HKT7>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, G extends HKT7>(
  F: ReduceRight4<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, E1, G extends HKT7>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT7>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, G extends HKT7>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT7>(
  F: ReduceRight3<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT2, E1, G extends HKT7>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT7>(
  F: ReduceRight2<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT7>(
  F: ReduceRight1<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT7>(
  F: ReduceRight<F>,
  G: ReduceRight7<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT10, G extends HKT6>(
  F: ReduceRight10<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT6>(
  F: ReduceRight9<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT6>(
  F: ReduceRight8<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT6>(
  F: ReduceRight7<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT6, G extends HKT6>(
  F: ReduceRight6<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT5, G extends HKT6>(
  F: ReduceRight5<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, E1, G extends HKT6>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT6>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT6>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, G extends HKT6>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT6>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, G extends HKT6>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, G extends HKT6>(
  F: ReduceRight4<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT3, E1, G extends HKT6>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT6>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, G extends HKT6>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT6>(
  F: ReduceRight3<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, E1, G extends HKT6>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT6>(
  F: ReduceRight2<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT6>(
  F: ReduceRight1<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT6>(
  F: ReduceRight<F>,
  G: ReduceRight6<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT10, G extends HKT5>(
  F: ReduceRight10<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT5>(
  F: ReduceRight9<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT5>(
  F: ReduceRight8<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT5>(
  F: ReduceRight7<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT6, G extends HKT5>(
  F: ReduceRight6<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT5, G extends HKT5>(
  F: ReduceRight5<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT4, E1, G extends HKT5>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT5>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT5>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, G extends HKT5>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT5>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, G extends HKT5>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, G extends HKT5>(
  F: ReduceRight4<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, E1, G extends HKT5>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT5>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, G extends HKT5>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT5>(
  F: ReduceRight3<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, E1, G extends HKT5>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U2, S2, R2, E2>(kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT5>(
  F: ReduceRight2<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT5>(
  F: ReduceRight1<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U2, S2, R2, E2>(kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT5>(
  F: ReduceRight<F>,
  G: ReduceRight5<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U2, S2, R2, E2>(kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT10, G extends HKT4, E2>(
  F: ReduceRight10<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT4, R2, E2>(
  F: ReduceRight10<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT4, S2, E2>(
  F: ReduceRight10<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT4, R2>(
  F: ReduceRight10<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT4, S2, R2>(
  F: ReduceRight10<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT4, S2>(
  F: ReduceRight10<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: ReduceRight10<F>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT4>(
  F: ReduceRight10<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT4, E2>(
  F: ReduceRight9<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT4, R2, E2>(
  F: ReduceRight9<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT4, S2, E2>(
  F: ReduceRight9<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT4, R2>(
  F: ReduceRight9<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT4, S2, R2>(
  F: ReduceRight9<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT4, S2>(
  F: ReduceRight9<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: ReduceRight9<F>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT4>(
  F: ReduceRight9<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT4, E2>(
  F: ReduceRight8<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT4, R2, E2>(
  F: ReduceRight8<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT4, S2, E2>(
  F: ReduceRight8<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT4, R2>(
  F: ReduceRight8<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT4, S2, R2>(
  F: ReduceRight8<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT4, S2>(
  F: ReduceRight8<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: ReduceRight8<F>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT4>(
  F: ReduceRight8<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT4, E2>(
  F: ReduceRight7<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT4, R2, E2>(
  F: ReduceRight7<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT4, S2, E2>(
  F: ReduceRight7<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT4, R2>(
  F: ReduceRight7<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT4, S2, R2>(
  F: ReduceRight7<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT4, S2>(
  F: ReduceRight7<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: ReduceRight7<F>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT7, G extends HKT4>(
  F: ReduceRight7<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT6, G extends HKT4, E2>(
  F: ReduceRight6<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, S2, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT4, R2, E2>(
  F: ReduceRight6<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, S2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT4, S2, E2>(
  F: ReduceRight6<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT4, R2>(
  F: ReduceRight6<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, S2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT4, S2, R2>(
  F: ReduceRight6<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT4, S2>(
  F: ReduceRight6<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: ReduceRight6<F>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT4>(
  F: ReduceRight6<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT5, G extends HKT4, E2>(
  F: ReduceRight5<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, S2, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT4, R2, E2>(
  F: ReduceRight5<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, S2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT4, S2, E2>(
  F: ReduceRight5<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT4, R2>(
  F: ReduceRight5<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, S2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT4, S2, R2>(
  F: ReduceRight5<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT4, S2>(
  F: ReduceRight5<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: ReduceRight5<F>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT4>(
  F: ReduceRight5<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, E1, G extends HKT4, E2>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, S2, R2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, S2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, R2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, G extends HKT4, R2>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, S2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, G extends HKT4, S2>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, G extends HKT4>(
  F: ReduceRight4<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT4, E2>(
  F: ReduceRight3<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, S2, R2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT4, R2, E2>(
  F: ReduceRight3<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, S2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT4, S2, E2>(
  F: ReduceRight3<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, R2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT4, R2>(
  F: ReduceRight3<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, S2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT4>(
  F: ReduceRight3<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT4, E2>(
  F: ReduceRight2<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, S2, R2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT4, R2, E2>(
  F: ReduceRight2<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1, S2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT4, S2, E2>(
  F: ReduceRight2<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1, R2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT4, R2>(
  F: ReduceRight2<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, S2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT4, S2, R2>(
  F: ReduceRight2<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT4, S2>(
  F: ReduceRight2<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, R2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT4>(
  F: ReduceRight2<F>,
  G: ReduceRight4<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, S2, R2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, E2>(
  F: ReduceRight1<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, R2, E2>(
  F: ReduceRight1<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, S2, E2>(
  F: ReduceRight1<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, R2>(
  F: ReduceRight1<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, S2, R2>(
  F: ReduceRight1<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, S2>(
  F: ReduceRight1<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: ReduceRight1<F>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4>(
  F: ReduceRight1<F>,
  G: ReduceRight4<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, E2>(
  F: ReduceRight<F>,
  G: ReduceRight4EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, R2, E2>(
  F: ReduceRight<F>,
  G: ReduceRight4REC<G, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, S2, E2>(
  F: ReduceRight<F>,
  G: ReduceRight4SEC<G, S2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, R2>(
  F: ReduceRight<F>,
  G: ReduceRight4RC<G, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, S2, R2>(
  F: ReduceRight<F>,
  G: ReduceRight4SRC<G, S2, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, S2>(
  F: ReduceRight<F>,
  G: ReduceRight4SC<G, S2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: ReduceRight<F>,
  G: ReduceRight4SREC<G, S2, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT4>(
  F: ReduceRight<F>,
  G: ReduceRight4<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function reduceRight<F extends HKT10, G extends HKT3, E2>(
  F: ReduceRight10<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT3, R2, E2>(
  F: ReduceRight10<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT3, R2>(
  F: ReduceRight10<F>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT3>(
  F: ReduceRight10<F>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT3, E2>(
  F: ReduceRight9<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT3, R2, E2>(
  F: ReduceRight9<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT3, R2>(
  F: ReduceRight9<F>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT3>(
  F: ReduceRight9<F>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT3, E2>(
  F: ReduceRight8<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT3, R2, E2>(
  F: ReduceRight8<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT3, R2>(
  F: ReduceRight8<F>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT3>(
  F: ReduceRight8<F>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT3, E2>(
  F: ReduceRight7<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, R2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT7, G extends HKT3, R2, E2>(
  F: ReduceRight7<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT7, G extends HKT3, R2>(
  F: ReduceRight7<F>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT7, G extends HKT3>(
  F: ReduceRight7<F>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function reduceRight<F extends HKT6, G extends HKT3, E2>(
  F: ReduceRight6<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT3, R2, E2>(
  F: ReduceRight6<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT3, R2>(
  F: ReduceRight6<F>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT3>(
  F: ReduceRight6<F>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT3, E2>(
  F: ReduceRight5<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT3, R2, E2>(
  F: ReduceRight5<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT3, R2>(
  F: ReduceRight5<F>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT3>(
  F: ReduceRight5<F>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, E1, G extends HKT3>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT3>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT3>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, G extends HKT3>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <E1, R2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT4, G extends HKT3>(
  F: ReduceRight4<F>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, E1, G extends HKT3, E2>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1, R2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, G extends HKT3, R2>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1, E2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT3>(
  F: ReduceRight3<F>,
  G: ReduceRight3<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, R2, E2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT3, E2>(
  F: ReduceRight2<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1, R2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT3, R2, E2>(
  F: ReduceRight2<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, E1, G extends HKT3, R2>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT3>(
  F: ReduceRight2<F>,
  G: ReduceRight3<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1, R2, E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT3, E2>(
  F: ReduceRight1<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT3, R2, E2>(
  F: ReduceRight1<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT3, R2>(
  F: ReduceRight1<F>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT3>(
  F: ReduceRight1<F>,
  G: ReduceRight3<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT3, E2>(
  F: ReduceRight<F>,
  G: ReduceRight3EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT3, R2, E2>(
  F: ReduceRight<F>,
  G: ReduceRight3REC<G, R2, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT3, R2>(
  F: ReduceRight<F>,
  G: ReduceRight3RC<G, R2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT3>(
  F: ReduceRight<F>,
  G: ReduceRight3<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function reduceRight<F extends HKT10, G extends HKT2, E2>(
  F: ReduceRight10<F>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduceRight<F extends HKT10, G extends HKT2>(
  F: ReduceRight10<F>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT2, E2>(
  F: ReduceRight9<F>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT2>(
  F: ReduceRight9<F>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT2, E2>(
  F: ReduceRight8<F>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT8, G extends HKT2>(
  F: ReduceRight8<F>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function reduceRight<F extends HKT7, G extends HKT2, E2>(
  F: ReduceRight7<F>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT7, G extends HKT2>(
  F: ReduceRight7<F>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT2, E2>(
  F: ReduceRight6<F>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT2>(
  F: ReduceRight6<F>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT2, E2>(
  F: ReduceRight5<F>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT2>(
  F: ReduceRight5<F>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT4, E1, G extends HKT2>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT2>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT2>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT4, R1, G extends HKT2>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT2>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, G extends HKT2>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <R1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT4, G extends HKT2>(
  F: ReduceRight4<F>,
  G: ReduceRight2<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <S1, R1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT3, E1, G extends HKT2>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT2>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT3, R1, G extends HKT2, E2>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT2>(
  F: ReduceRight3<F>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1, E1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT2, E1, G extends HKT2, E2>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind2<F, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT2>(
  F: ReduceRight2<F>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1, E2>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT2, E2>(
  F: ReduceRight1<F>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT2>(
  F: ReduceRight1<F>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT2, E2>(
  F: ReduceRight<F>,
  G: ReduceRight2EC<G, E2>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT, G extends HKT2>(
  F: ReduceRight<F>,
  G: ReduceRight2<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => B

export function reduceRight<F extends HKT10, G extends HKT>(
  F: ReduceRight10<F>,
  G: ReduceRight1<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT>(
  F: ReduceRight9<F>,
  G: ReduceRight1<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT>(
  F: ReduceRight8<F>,
  G: ReduceRight1<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT7, G extends HKT>(
  F: ReduceRight7<F>,
  G: ReduceRight1<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT>(
  F: ReduceRight6<F>,
  G: ReduceRight1<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT>(
  F: ReduceRight5<F>,
  G: ReduceRight1<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, E1, G extends HKT>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, R1, G extends HKT>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, S1, G extends HKT>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, G extends HKT>(
  F: ReduceRight4<F>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT3, E1, G extends HKT>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT3, R1, G extends HKT>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT>(
  F: ReduceRight3<F>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT2, E1, G extends HKT>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind2<F, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT>(
  F: ReduceRight2<F>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT, G extends HKT>(
  F: ReduceRight1<F>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function reduceRight<F extends HKT, G extends HKT>(
  F: ReduceRight<F>,
  G: ReduceRight1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function reduceRight<F extends HKT10, G extends HKT>(
  F: ReduceRight10<F>,
  G: ReduceRight<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function reduceRight<F extends HKT9, G extends HKT>(
  F: ReduceRight9<F>,
  G: ReduceRight<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function reduceRight<F extends HKT8, G extends HKT>(
  F: ReduceRight8<F>,
  G: ReduceRight<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT7, G extends HKT>(
  F: ReduceRight7<F>,
  G: ReduceRight<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT6, G extends HKT>(
  F: ReduceRight6<F>,
  G: ReduceRight<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT5, G extends HKT>(
  F: ReduceRight5<F>,
  G: ReduceRight<G>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, E1, G extends HKT>(
  F: ReduceRight4EC<F, E1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, R1, E1, G extends HKT>(
  F: ReduceRight4REC<F, R1, E1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, S1, E1, G extends HKT>(
  F: ReduceRight4SEC<F, S1, E1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, R1, G extends HKT>(
  F: ReduceRight4RC<F, R1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, G extends HKT>(
  F: ReduceRight4SRC<F, S1, R1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, S1, G extends HKT>(
  F: ReduceRight4SC<F, S1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: ReduceRight4SREC<F, S1, R1, E1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT4, G extends HKT>(
  F: ReduceRight4<F>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT3, E1, G extends HKT>(
  F: ReduceRight3EC<F, E1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT3, R1, E1, G extends HKT>(
  F: ReduceRight3REC<F, R1, E1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT3, R1, G extends HKT>(
  F: ReduceRight3RC<F, R1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT3, G extends HKT>(
  F: ReduceRight3<F>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT2, E1, G extends HKT>(
  F: ReduceRight2EC<F, E1>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind2<F, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT2, G extends HKT>(
  F: ReduceRight2<F>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => B

export function reduceRight<F extends HKT, G extends HKT>(
  F: ReduceRight1<F>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function reduceRight<F extends HKT, G extends HKT>(
  F: ReduceRight<F>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function reduceRight<F extends HKT, G extends HKT>(
  F: ReduceRight<F>,
  G: ReduceRight<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<F, Kind<G, A>>) => B {
  return <B, A>(b: B, f: (a: A, b: B) => B) => F.reduceRight(b, (k, b) => G.reduceRight(b, f)(k))
}
