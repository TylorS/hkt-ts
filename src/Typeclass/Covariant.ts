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
import { constant, flow } from '../function'

/* #region Typeclass */
export interface Covariant<T extends HKT> {
  readonly map: <A, B>(f: Unary<A, B>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface Covariant1<T extends HKT> {
  readonly map: <A, B>(f: Unary<A, B>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface Covariant2<T extends HKT2> {
  readonly map: <A, B>(f: Unary<A, B>) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface Covariant3<T extends HKT3> {
  readonly map: <A, B>(f: Unary<A, B>) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Covariant4<T extends HKT4> {
  readonly map: <A, B>(
    f: Unary<A, B>,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Covariant5<T extends HKT5> {
  readonly map: <A, B>(
    f: Unary<A, B>,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>
}

export interface Covariant6<T extends HKT6> {
  readonly map: <A, B>(
    f: Unary<A, B>,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>
}

export interface Covariant7<T extends HKT7> {
  readonly map: <A, B>(
    f: Unary<A, B>,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>
}

export interface Covariant8<T extends HKT8> {
  readonly map: <A, B>(
    f: Unary<A, B>,
  ) => <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, B>
}

export interface Covariant9<T extends HKT9> {
  readonly map: <A, B>(
    f: Unary<A, B>,
  ) => <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, B>
}

export interface Covariant10<T extends HKT10> {
  readonly map: <A, B>(
    f: Unary<A, B>,
  ) => <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
}
/* #endregion */

/* #region Composition */

export function map<F extends HKT10, G extends HKT10>(
  F: Covariant10<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
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
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT9, G extends HKT10>(
  F: Covariant9<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT8, G extends HKT10>(
  F: Covariant8<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT7, G extends HKT10>(
  F: Covariant7<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT6, G extends HKT10>(
  F: Covariant6<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT5, G extends HKT10>(
  F: Covariant5<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT4, G extends HKT10>(
  F: Covariant4<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT3, G extends HKT10>(
  F: Covariant3<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT2, G extends HKT10>(
  F: Covariant2<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT10>(
  F: Covariant1<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT10>(
  F: Covariant<F>,
  G: Covariant10<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT10, G extends HKT9>(
  F: Covariant10<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT9, G extends HKT9>(
  F: Covariant9<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT8, G extends HKT9>(
  F: Covariant8<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT7, G extends HKT9>(
  F: Covariant7<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT6, G extends HKT9>(
  F: Covariant6<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT5, G extends HKT9>(
  F: Covariant5<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT4, G extends HKT9>(
  F: Covariant4<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT3, G extends HKT9>(
  F: Covariant3<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT2, G extends HKT9>(
  F: Covariant2<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT9>(
  F: Covariant1<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT9>(
  F: Covariant<F>,
  G: Covariant9<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT10, G extends HKT8>(
  F: Covariant10<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT9, G extends HKT8>(
  F: Covariant9<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT8, G extends HKT8>(
  F: Covariant8<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT7, G extends HKT8>(
  F: Covariant7<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT6, G extends HKT8>(
  F: Covariant6<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT5, G extends HKT8>(
  F: Covariant5<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT4, G extends HKT8>(
  F: Covariant4<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT3, G extends HKT8>(
  F: Covariant3<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT2, G extends HKT8>(
  F: Covariant2<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT8>(
  F: Covariant1<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT8>(
  F: Covariant<F>,
  G: Covariant8<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT10, G extends HKT7>(
  F: Covariant10<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT9, G extends HKT7>(
  F: Covariant9<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT8, G extends HKT7>(
  F: Covariant8<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT7, G extends HKT7>(
  F: Covariant7<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT6, G extends HKT7>(
  F: Covariant6<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT5, G extends HKT7>(
  F: Covariant5<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT4, G extends HKT7>(
  F: Covariant4<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT3, G extends HKT7>(
  F: Covariant3<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT2, G extends HKT7>(
  F: Covariant2<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT7>(
  F: Covariant1<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT7>(
  F: Covariant<F>,
  G: Covariant7<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT10, G extends HKT6>(
  F: Covariant10<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT9, G extends HKT6>(
  F: Covariant9<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT8, G extends HKT6>(
  F: Covariant8<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT7, G extends HKT6>(
  F: Covariant7<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT6, G extends HKT6>(
  F: Covariant6<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT5, G extends HKT6>(
  F: Covariant5<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT4, G extends HKT6>(
  F: Covariant4<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT3, G extends HKT6>(
  F: Covariant3<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT2, G extends HKT6>(
  F: Covariant2<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT6>(
  F: Covariant1<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT6>(
  F: Covariant<F>,
  G: Covariant6<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>

export function map<F extends HKT10, G extends HKT5>(
  F: Covariant10<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT9, G extends HKT5>(
  F: Covariant9<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT8, G extends HKT5>(
  F: Covariant8<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT7, G extends HKT5>(
  F: Covariant7<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT6, G extends HKT5>(
  F: Covariant6<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT5, G extends HKT5>(
  F: Covariant5<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT4, G extends HKT5>(
  F: Covariant4<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT3, G extends HKT5>(
  F: Covariant3<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT2, G extends HKT5>(
  F: Covariant2<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT5>(
  F: Covariant1<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U2, S2, R2, E2>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT5>(
  F: Covariant<F>,
  G: Covariant5<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U2, S2, R2, E2>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, B>>

export function map<F extends HKT10, G extends HKT4>(
  F: Covariant10<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT9, G extends HKT4>(
  F: Covariant9<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT8, G extends HKT4>(
  F: Covariant8<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT7, G extends HKT4>(
  F: Covariant7<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT6, G extends HKT4>(
  F: Covariant6<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT5, G extends HKT4>(
  F: Covariant5<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT4, G extends HKT4>(
  F: Covariant4<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT3, G extends HKT4>(
  F: Covariant3<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT2, G extends HKT4>(
  F: Covariant2<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, S2, R2, E2>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT4>(
  F: Covariant1<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT, G extends HKT4>(
  F: Covariant<F>,
  G: Covariant4<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function map<F extends HKT10, G extends HKT3>(
  F: Covariant10<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT9, G extends HKT3>(
  F: Covariant9<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT8, G extends HKT3>(
  F: Covariant8<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT7, G extends HKT3>(
  F: Covariant7<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT6, G extends HKT3>(
  F: Covariant6<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT5, G extends HKT3>(
  F: Covariant5<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT4, G extends HKT3>(
  F: Covariant4<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT3, G extends HKT3>(
  F: Covariant3<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, R2, E2>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT2, G extends HKT3>(
  F: Covariant2<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, R2, E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function map<F extends HKT, G extends HKT3>(
  F: Covariant1<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function map<F extends HKT, G extends HKT3>(
  F: Covariant<F>,
  G: Covariant3<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function map<F extends HKT10, G extends HKT2>(
  F: Covariant10<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function map<F extends HKT9, G extends HKT2>(
  F: Covariant9<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function map<F extends HKT8, G extends HKT2>(
  F: Covariant8<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function map<F extends HKT7, G extends HKT2>(
  F: Covariant7<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function map<F extends HKT6, G extends HKT2>(
  F: Covariant6<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function map<F extends HKT5, G extends HKT2>(
  F: Covariant5<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>

export function map<F extends HKT4, G extends HKT2>(
  F: Covariant4<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1, E2>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function map<F extends HKT3, G extends HKT2>(
  F: Covariant3<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function map<F extends HKT2, G extends HKT2>(
  F: Covariant2<F>,
  G: Covariant2<G>,
): <A, B>(
  f: Unary<A, B>,
) => <E1, E2>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, B>>

export function map<F extends HKT, G extends HKT2>(
  F: Covariant1<F>,
  G: Covariant2<G>,
): <A, B>(f: Unary<A, B>) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function map<F extends HKT, G extends HKT2>(
  F: Covariant<F>,
  G: Covariant2<G>,
): <A, B>(f: Unary<A, B>) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function map<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: Covariant1<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: Covariant1<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: Covariant1<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: Covariant1<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: Covariant1<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: Covariant1<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: Covariant1<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: Covariant1<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function map<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: Covariant1<G>,
): <A, B>(f: Unary<A, B>) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function map<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: Covariant1<G>,
): <A, B>(f: Unary<A, B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function map<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Covariant1<G>,
): <A, B>(f: Unary<A, B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function map<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: Covariant<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: Covariant<G>,
): <A, B>(
  f: Unary<A, B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: Covariant<G>,
): <A, B>(
  f: Unary<A, B>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: Covariant<G>,
): <A, B>(
  f: Unary<A, B>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: Covariant<G>,
): <A, B>(
  f: Unary<A, B>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: Covariant<G>,
): <A, B>(
  f: Unary<A, B>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: Covariant<G>,
): <A, B>(
  f: Unary<A, B>,
) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function map<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: Covariant<G>,
): <A, B>(
  f: Unary<A, B>,
) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function map<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: Covariant<G>,
): <A, B>(f: Unary<A, B>) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function map<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: Covariant<G>,
): <A, B>(f: Unary<A, B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function map<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Covariant<G>,
): <A, B>(f: Unary<A, B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function map<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Covariant<G>,
): <A, B>(f: Unary<A, B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>> {
  return (f) => F.map(G.map(f))
}
/* #endregion */

/* #region bindTo */
export function bindTo<T extends HKT10>(
  C: Covariant10<T>,
): <N extends string>(
  name: N,
) => <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<
  T,
  Z,
  Y,
  X,
  W,
  V,
  U,
  S,
  R,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT9>(
  C: Covariant9<T>,
): <N extends string>(
  name: N,
) => <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<
  T,
  Y,
  X,
  W,
  V,
  U,
  S,
  R,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT8>(
  C: Covariant8<T>,
): <N extends string>(
  name: N,
) => <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<
  T,
  X,
  W,
  V,
  U,
  S,
  R,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT7>(
  C: Covariant7<T>,
): <N extends string>(
  name: N,
) => <W, V, U, S, R, E, A>(
  kind: Kind7<T, W, V, U, S, R, E, A>,
) => Kind7<
  T,
  W,
  V,
  U,
  S,
  R,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT6>(
  C: Covariant6<T>,
): <N extends string>(
  name: N,
) => <V, U, S, R, E, A>(
  kind: Kind6<T, V, U, S, R, E, A>,
) => Kind6<
  T,
  V,
  U,
  S,
  R,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT5>(
  C: Covariant5<T>,
): <N extends string>(
  name: N,
) => <U, S, R, E, A>(
  kind: Kind5<T, U, S, R, E, A>,
) => Kind5<
  T,
  U,
  S,
  R,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT4>(
  C: Covariant4<T>,
): <N extends string>(
  name: N,
) => <S, R, E, A>(
  kind: Kind4<T, S, R, E, A>,
) => Kind4<
  T,
  S,
  R,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT3>(
  C: Covariant3<T>,
): <N extends string>(
  name: N,
) => <R, E, A>(
  kind: Kind3<T, R, E, A>,
) => Kind3<
  T,
  R,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT2>(
  C: Covariant2<T>,
): <N extends string>(
  name: N,
) => <E, A>(
  kind: Kind2<T, E, A>,
) => Kind2<
  T,
  E,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT>(
  C: Covariant1<T>,
): <N extends string>(
  name: N,
) => <A>(kind: Kind<T, A>) => Kind<
  T,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT>(
  C: Covariant<T>,
): <N extends string>(
  name: N,
) => <A>(kind: Kind<T, A>) => Kind<
  T,
  {
    readonly [K in N]: A
  }
>

export function bindTo<T extends HKT>(
  C: Covariant<T>,
): <N extends string>(
  name: N,
) => <A>(kind: Kind<T, A>) => Kind<
  T,
  {
    readonly [K in N]: A
  }
> {
  return (name) => C.map((a) => ({ [name]: a }))
}
/* #endregion */

/* #region flap */
export function flap<T extends HKT10>(
  C: Covariant10<T>,
): <A>(
  a: A,
) => <Z, Y, X, W, V, U, S, R, E, B>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, (a: A) => B>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>

export function flap<T extends HKT9>(
  C: Covariant9<T>,
): <A>(
  a: A,
) => <Y, X, W, V, U, S, R, E, B>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, (a: A) => B>,
) => Kind9<T, Y, X, W, V, U, S, R, E, B>

export function flap<T extends HKT8>(
  C: Covariant8<T>,
): <A>(
  a: A,
) => <X, W, V, U, S, R, E, B>(
  kind: Kind8<T, X, W, V, U, S, R, E, (a: A) => B>,
) => Kind8<T, X, W, V, U, S, R, E, B>

export function flap<T extends HKT7>(
  C: Covariant7<T>,
): <A>(
  a: A,
) => <W, V, U, S, R, E, B>(
  kind: Kind7<T, W, V, U, S, R, E, (a: A) => B>,
) => Kind7<T, W, V, U, S, R, E, B>

export function flap<T extends HKT6>(
  C: Covariant6<T>,
): <A>(
  a: A,
) => <V, U, S, R, E, B>(kind: Kind6<T, V, U, S, R, E, (a: A) => B>) => Kind6<T, V, U, S, R, E, B>

export function flap<T extends HKT5>(
  C: Covariant5<T>,
): <A>(a: A) => <U, S, R, E, B>(kind: Kind5<T, U, S, R, E, (a: A) => B>) => Kind5<T, U, S, R, E, B>

export function flap<T extends HKT4>(
  C: Covariant4<T>,
): <A>(a: A) => <S, R, E, B>(kind: Kind4<T, S, R, E, (a: A) => B>) => Kind4<T, S, R, E, B>

export function flap<T extends HKT3>(
  C: Covariant3<T>,
): <A>(a: A) => <R, E, B>(kind: Kind3<T, R, E, (a: A) => B>) => Kind3<T, R, E, B>

export function flap<T extends HKT2>(
  C: Covariant2<T>,
): <A>(a: A) => <E, B>(kind: Kind2<T, E, (a: A) => B>) => Kind2<T, E, B>

export function flap<T extends HKT>(
  C: Covariant1<T>,
): <A>(a: A) => <B>(kind: Kind<T, (a: A) => B>) => Kind<T, B>

export function flap<T extends HKT>(
  C: Covariant<T>,
): <A>(a: A) => <B>(kind: Kind<T, (a: A) => B>) => Kind<T, B>

export function flap<T extends HKT>(
  C: Covariant<T>,
): <A>(a: A) => <B>(kind: Kind<T, (a: A) => B>) => Kind<T, B> {
  return (a) => C.map((f) => f(a))
}

/* #endregion */

/* #region tupled */
export function tupled<T extends HKT10>(
  C: Covariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, readonly [A]>

export function tupled<T extends HKT9>(
  C: Covariant9<T>,
): <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, readonly [A]>

export function tupled<T extends HKT8>(
  C: Covariant8<T>,
): <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, readonly [A]>

export function tupled<T extends HKT7>(
  C: Covariant7<T>,
): <W, V, U, S, R, E, A>(
  kind: Kind7<T, W, V, U, S, R, E, A>,
) => Kind7<T, W, V, U, S, R, E, readonly [A]>

export function tupled<T extends HKT6>(
  C: Covariant6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, readonly [A]>

export function tupled<T extends HKT5>(
  C: Covariant5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, readonly [A]>

export function tupled<T extends HKT4>(
  C: Covariant4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A]>

export function tupled<T extends HKT3>(
  C: Covariant3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, readonly [A]>

export function tupled<T extends HKT2>(
  C: Covariant2<T>,
): <E, A>(kind: Kind2<T, E, A>) => Kind2<T, E, readonly [A]>

export function tupled<T extends HKT>(
  C: Covariant1<T>,
): <A>(kind: Kind<T, A>) => Kind<T, readonly [A]>

export function tupled<T extends HKT>(
  C: Covariant<T>,
): <A>(kind: Kind<T, A>) => Kind<T, readonly [A]>

export function tupled<T extends HKT>(
  C: Covariant<T>,
): <A>(kind: Kind<T, A>) => Kind<T, readonly [A]> {
  return C.map((a) => [a])
}
/* #endregion */

/* #region mapTo */
export function mapTo<T extends HKT10>(
  C: Covariant10<T>,
): <B>(
  b: B,
) => <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>

export function mapTo<T extends HKT9>(
  C: Covariant9<T>,
): <B>(
  b: B,
) => <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, B>

export function mapTo<T extends HKT8>(
  C: Covariant8<T>,
): <B>(
  b: B,
) => <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, B>

export function mapTo<T extends HKT7>(
  C: Covariant7<T>,
): <B>(
  b: B,
) => <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>

export function mapTo<T extends HKT6>(
  C: Covariant6<T>,
): <B>(b: B) => <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>

export function mapTo<T extends HKT5>(
  C: Covariant5<T>,
): <B>(b: B) => <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>

export function mapTo<T extends HKT4>(
  C: Covariant4<T>,
): <B>(b: B) => <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function mapTo<T extends HKT3>(
  C: Covariant3<T>,
): <B>(b: B) => <R, E, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function mapTo<T extends HKT2>(
  C: Covariant2<T>,
): <B>(b: B) => <E, A>(kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function mapTo<T extends HKT>(
  C: Covariant1<T>,
): <B>(b: B) => <A>(kind: Kind<T, A>) => Kind<T, B>

export function mapTo<T extends HKT>(
  C: Covariant<T>,
): <B>(b: B) => <A>(kind: Kind<T, A>) => Kind<T, B>

export function mapTo<T extends HKT>(
  C: Covariant<T>,
): <B>(b: B) => <A>(kind: Kind<T, A>) => Kind<T, B> {
  return flow(constant, C.map)
}

/* #endregion */
