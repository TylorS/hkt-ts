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
import { flow } from '../function.js'

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

/* #region Contravariant */
export interface Contravariant<T extends HKT> {
  readonly contramap: <B, A>(f: Unary<B, A>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface Contravariant1<T extends HKT> {
  readonly contramap: <B, A>(f: Unary<B, A>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface Contravariant2<T extends HKT2> {
  readonly contramap: <B, A>(f: Unary<B, A>) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface Contravariant2EC<T extends HKT2, E> {
  readonly contramap: <B, A>(f: Unary<B, A>) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface Contravariant3<T extends HKT3> {
  readonly contramap: <B, A>(f: Unary<B, A>) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Contravariant3RC<T extends HKT3, R> {
  readonly contramap: <B, A>(f: Unary<B, A>) => <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Contravariant3REC<T extends HKT3, R, E> {
  readonly contramap: <B, A>(f: Unary<B, A>) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Contravariant3EC<T extends HKT3, E> {
  readonly contramap: <B, A>(f: Unary<B, A>) => <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface Contravariant4<T extends HKT4> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Contravariant4SREC<T extends HKT4, S, R, E> {
  readonly contramap: <B, A>(f: Unary<B, A>) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Contravariant4SC<T extends HKT4, S> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Contravariant4SRC<T extends HKT4, S, R> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Contravariant4RC<T extends HKT4, R> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <S, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Contravariant4SEC<T extends HKT4, S, E> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Contravariant4REC<T extends HKT4, R, E> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <S>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Contravariant4EC<T extends HKT4, E> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <S, R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface Contravariant5<T extends HKT5> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>
}

export interface Contravariant6<T extends HKT6> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>
}

export interface Contravariant7<T extends HKT7> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>
}

export interface Contravariant8<T extends HKT8> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, B>
}

export interface Contravariant9<T extends HKT9> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, B>
}

export interface Contravariant10<T extends HKT10> {
  readonly contramap: <B, A>(
    f: Unary<B, A>,
  ) => <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
}
/* #endregion */

/* #region contramap */
export function contramap<F extends HKT10, G extends HKT10>(
  F: Contravariant10<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
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

export function contramap<F extends HKT9, G extends HKT10>(
  F: Contravariant9<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT10>(
  F: Contravariant8<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT10>(
  F: Contravariant7<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT10>(
  F: Contravariant6<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT10>(
  F: Contravariant5<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT10>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT10>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT10>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT10>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT10>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT10>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, G extends HKT10>(
  F: Contravariant4<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT10>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT10>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT10>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT10>(
  F: Contravariant3<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT10>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT10>(
  F: Contravariant2<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT10>(
  F: Contravariant1<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT10>(
  F: Contravariant<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT9>(
  F: Contravariant10<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT9>(
  F: Contravariant9<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT9>(
  F: Contravariant8<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT9>(
  F: Contravariant7<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT9>(
  F: Contravariant6<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT9>(
  F: Contravariant5<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT9>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT9>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT9>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT9>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT9>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT9>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, G extends HKT9>(
  F: Contravariant4<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT9>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT9>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT9>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT9>(
  F: Contravariant3<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT9>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT9>(
  F: Contravariant2<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT9>(
  F: Contravariant1<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT9>(
  F: Contravariant<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT8>(
  F: Contravariant10<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT8>(
  F: Contravariant9<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT8>(
  F: Contravariant8<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT8>(
  F: Contravariant7<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT8>(
  F: Contravariant6<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT8>(
  F: Contravariant5<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT8>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT8>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT8>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT8>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT8>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT8>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, G extends HKT8>(
  F: Contravariant4<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT8>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT8>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT8>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT8>(
  F: Contravariant3<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT8>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT8>(
  F: Contravariant2<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT8>(
  F: Contravariant1<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT8>(
  F: Contravariant<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT7>(
  F: Contravariant10<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT7>(
  F: Contravariant9<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT7>(
  F: Contravariant8<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT7>(
  F: Contravariant7<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT7>(
  F: Contravariant6<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT7>(
  F: Contravariant5<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT7>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT7>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT7>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT7>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT7>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT7>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, G extends HKT7>(
  F: Contravariant4<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT7>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT7>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT7>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT7>(
  F: Contravariant3<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT7>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT7>(
  F: Contravariant2<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT7>(
  F: Contravariant1<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT7>(
  F: Contravariant<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT6>(
  F: Contravariant10<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT6>(
  F: Contravariant9<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT6>(
  F: Contravariant8<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT6>(
  F: Contravariant7<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT6>(
  F: Contravariant6<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT6>(
  F: Contravariant5<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT6>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT6>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT6>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT6>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT6>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT6>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, G extends HKT6>(
  F: Contravariant4<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT6>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT6>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT6>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT6>(
  F: Contravariant3<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT6>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT6>(
  F: Contravariant2<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT6>(
  F: Contravariant1<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT6>(
  F: Contravariant<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT5>(
  F: Contravariant10<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT5>(
  F: Contravariant9<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT5>(
  F: Contravariant8<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT5>(
  F: Contravariant7<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT5>(
  F: Contravariant6<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT5>(
  F: Contravariant5<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT5>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT5>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT5>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT5>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT5>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT5>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT4, G extends HKT5>(
  F: Contravariant4<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT5>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT5>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT5>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT5>(
  F: Contravariant3<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT5>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT5>(
  F: Contravariant2<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT5>(
  F: Contravariant1<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT5>(
  F: Contravariant<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT4, E2>(
  F: Contravariant10<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT4, R2, E2>(
  F: Contravariant10<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT4, S2, E2>(
  F: Contravariant10<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT4, R2>(
  F: Contravariant10<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT4, S2, R2>(
  F: Contravariant10<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT4, S2>(
  F: Contravariant10<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Contravariant10<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT4>(
  F: Contravariant10<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT4, E2>(
  F: Contravariant9<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT4, R2, E2>(
  F: Contravariant9<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT4, S2, E2>(
  F: Contravariant9<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT4, R2>(
  F: Contravariant9<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT4, S2, R2>(
  F: Contravariant9<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT4, S2>(
  F: Contravariant9<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Contravariant9<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT4>(
  F: Contravariant9<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT4, E2>(
  F: Contravariant8<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT4, R2, E2>(
  F: Contravariant8<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT4, S2, E2>(
  F: Contravariant8<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT4, R2>(
  F: Contravariant8<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT4, S2, R2>(
  F: Contravariant8<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT4, S2>(
  F: Contravariant8<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Contravariant8<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT4>(
  F: Contravariant8<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT4, E2>(
  F: Contravariant7<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT4, R2, E2>(
  F: Contravariant7<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT4, S2, E2>(
  F: Contravariant7<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT4, R2>(
  F: Contravariant7<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT4, S2, R2>(
  F: Contravariant7<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT4, S2>(
  F: Contravariant7<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Contravariant7<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT4>(
  F: Contravariant7<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT4, E2>(
  F: Contravariant6<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT4, R2, E2>(
  F: Contravariant6<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, S2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT4, S2, E2>(
  F: Contravariant6<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT4, R2>(
  F: Contravariant6<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT4, S2, R2>(
  F: Contravariant6<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT4, S2>(
  F: Contravariant6<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Contravariant6<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT4>(
  F: Contravariant6<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT4, E2>(
  F: Contravariant5<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, S2, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT4, R2, E2>(
  F: Contravariant5<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, S2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT4, S2, E2>(
  F: Contravariant5<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT4, R2>(
  F: Contravariant5<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, S2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT4, S2, R2>(
  F: Contravariant5<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT4, S2>(
  F: Contravariant5<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Contravariant5<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT4>(
  F: Contravariant5<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT4, E2>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, S2, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S1, S2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT4, R2>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, S2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT4, S2>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT4, G extends HKT4>(
  F: Contravariant4<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT4, E2>(
  F: Contravariant3<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, S2, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT4, R2, E2>(
  F: Contravariant3<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, S2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT4, S2, E2>(
  F: Contravariant3<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT4, R2>(
  F: Contravariant3<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, S2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT4>(
  F: Contravariant3<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT4, E2>(
  F: Contravariant2<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, S2, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT4, R2, E2>(
  F: Contravariant2<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, S2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT4, S2, E2>(
  F: Contravariant2<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT4, R2>(
  F: Contravariant2<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, S2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT4, S2, R2>(
  F: Contravariant2<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT4, S2>(
  F: Contravariant2<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT4>(
  F: Contravariant2<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, E2>(
  F: Contravariant1<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, R2, E2>(
  F: Contravariant1<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, S2, E2>(
  F: Contravariant1<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, R2>(
  F: Contravariant1<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, S2, R2>(
  F: Contravariant1<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, S2>(
  F: Contravariant1<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Contravariant1<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4>(
  F: Contravariant1<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <S2, R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, E2>(
  F: Contravariant<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, R2, E2>(
  F: Contravariant<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, S2, E2>(
  F: Contravariant<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, R2>(
  F: Contravariant<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, S2, R2>(
  F: Contravariant<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, S2>(
  F: Contravariant<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Contravariant<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT4>(
  F: Contravariant<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <S2, R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT3, E2>(
  F: Contravariant10<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT3, R2, E2>(
  F: Contravariant10<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT3, R2>(
  F: Contravariant10<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT3>(
  F: Contravariant10<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT3, E2>(
  F: Contravariant9<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT3, R2, E2>(
  F: Contravariant9<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT3, R2>(
  F: Contravariant9<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT9, G extends HKT3>(
  F: Contravariant9<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT3, E2>(
  F: Contravariant8<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT3, R2, E2>(
  F: Contravariant8<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT3, R2>(
  F: Contravariant8<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT8, G extends HKT3>(
  F: Contravariant8<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT3, E2>(
  F: Contravariant7<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT3, R2, E2>(
  F: Contravariant7<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT3, R2>(
  F: Contravariant7<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT7, G extends HKT3>(
  F: Contravariant7<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT3, E2>(
  F: Contravariant6<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT3, R2, E2>(
  F: Contravariant6<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT3, R2>(
  F: Contravariant6<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT6, G extends HKT3>(
  F: Contravariant6<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT3, E2>(
  F: Contravariant5<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT3, R2, E2>(
  F: Contravariant5<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT3, R2>(
  F: Contravariant5<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT5, G extends HKT3>(
  F: Contravariant5<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT3>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT3>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT3>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT3>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT4, G extends HKT3>(
  F: Contravariant4<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT3, E2>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, R2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT3, R2>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT3, G extends HKT3>(
  F: Contravariant3<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT3, E2>(
  F: Contravariant2<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT3, R2, E2>(
  F: Contravariant2<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT3, R2>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT2, G extends HKT3>(
  F: Contravariant2<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, E2, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT3, E2>(
  F: Contravariant1<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT3, R2, E2>(
  F: Contravariant1<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT3, R2>(
  F: Contravariant1<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT3>(
  F: Contravariant1<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT3, E2>(
  F: Contravariant<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT3, R2, E2>(
  F: Contravariant<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT3, R2>(
  F: Contravariant<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT, G extends HKT3>(
  F: Contravariant<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramap<F extends HKT10, G extends HKT2, E2>(
  F: Contravariant10<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT10, G extends HKT2>(
  F: Contravariant10<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT9, G extends HKT2, E2>(
  F: Contravariant9<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT9, G extends HKT2>(
  F: Contravariant9<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT8, G extends HKT2, E2>(
  F: Contravariant8<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT8, G extends HKT2>(
  F: Contravariant8<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT7, G extends HKT2, E2>(
  F: Contravariant7<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT7, G extends HKT2>(
  F: Contravariant7<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT6, G extends HKT2, E2>(
  F: Contravariant6<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT6, G extends HKT2>(
  F: Contravariant6<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT5, G extends HKT2, E2>(
  F: Contravariant5<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT5, G extends HKT2>(
  F: Contravariant5<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT4, E1, G extends HKT2>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT2>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT2>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT4, R1, G extends HKT2>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT2>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT4, S1, G extends HKT2>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT4, G extends HKT2>(
  F: Contravariant4<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT3, E1, G extends HKT2>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E2, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT2>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT3, R1, G extends HKT2, E2>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT3, G extends HKT2>(
  F: Contravariant3<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, E2, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT2, E1, G extends HKT2, E2>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT2, G extends HKT2>(
  F: Contravariant2<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, B>>

export function contramap<F extends HKT, G extends HKT2, E2>(
  F: Contravariant1<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function contramap<F extends HKT, G extends HKT2>(
  F: Contravariant1<F>,
  G: Contravariant2<G>,
): <B, A>(f: (b: B) => A) => <E2, A>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function contramap<F extends HKT, G extends HKT2, E2>(
  F: Contravariant<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function contramap<F extends HKT, G extends HKT2>(
  F: Contravariant<F>,
  G: Contravariant2<G>,
): <B, A>(f: (b: B) => A) => <E2, A>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function contramap<F extends HKT10, G extends HKT>(
  F: Contravariant10<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT9, G extends HKT>(
  F: Contravariant9<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT8, G extends HKT>(
  F: Contravariant8<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT7, G extends HKT>(
  F: Contravariant7<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT6, G extends HKT>(
  F: Contravariant6<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT5, G extends HKT>(
  F: Contravariant5<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, E1, G extends HKT>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, R1, G extends HKT>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, S1, G extends HKT>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, G extends HKT>(
  F: Contravariant4<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT3, E1, G extends HKT>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramap<F extends HKT3, R1, G extends HKT>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramap<F extends HKT3, G extends HKT>(
  F: Contravariant3<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramap<F extends HKT2, E1, G extends HKT>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function contramap<F extends HKT2, G extends HKT>(
  F: Contravariant2<F>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <E1, A>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function contramap<F extends HKT, G extends HKT>(
  F: Contravariant1<F>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function contramap<F extends HKT, G extends HKT>(
  F: Contravariant<F>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function contramap<F extends HKT10, G extends HKT>(
  F: Contravariant10<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT9, G extends HKT>(
  F: Contravariant9<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT8, G extends HKT>(
  F: Contravariant8<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT7, G extends HKT>(
  F: Contravariant7<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT6, G extends HKT>(
  F: Contravariant6<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT5, G extends HKT>(
  F: Contravariant5<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, E1, G extends HKT>(
  F: Contravariant4EC<F, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, R1, E1, G extends HKT>(
  F: Contravariant4REC<F, R1, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, S1, E1, G extends HKT>(
  F: Contravariant4SEC<F, S1, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, R1, G extends HKT>(
  F: Contravariant4RC<F, R1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, S1, R1, G extends HKT>(
  F: Contravariant4SRC<F, S1, R1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, S1, G extends HKT>(
  F: Contravariant4SC<F, S1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Contravariant4SREC<F, S1, R1, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT4, G extends HKT>(
  F: Contravariant4<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramap<F extends HKT3, E1, G extends HKT>(
  F: Contravariant3EC<F, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramap<F extends HKT3, R1, E1, G extends HKT>(
  F: Contravariant3REC<F, R1, E1>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramap<F extends HKT3, R1, G extends HKT>(
  F: Contravariant3RC<F, R1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramap<F extends HKT3, G extends HKT>(
  F: Contravariant3<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramap<F extends HKT2, E1, G extends HKT>(
  F: Contravariant2EC<F, E1>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function contramap<F extends HKT2, G extends HKT>(
  F: Contravariant2<F>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <E1, A>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function contramap<F extends HKT, G extends HKT>(
  F: Contravariant1<F>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function contramap<F extends HKT, G extends HKT>(
  F: Contravariant<F>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function contramap<F extends HKT, G extends HKT>(F: Contravariant<F>, G: Contravariant<G>) {
  return flow(G.contramap, F.contramap)
}
/* #endregion */

export function contramapC<F extends HKT10, G extends HKT10>(
  F: Covariant10<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
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

export function contramapC<F extends HKT9, G extends HKT10>(
  F: Covariant9<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT10>(
  F: Covariant8<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT10>(
  F: Covariant7<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT10>(
  F: Covariant6<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT10>(
  F: Covariant5<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT10>(
  F: Covariant4EC<F, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT10>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT10>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT10>(
  F: Covariant4RC<F, R1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT10>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT10>(
  F: Covariant4SC<F, S1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, G extends HKT10>(
  F: Covariant4<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT10>(
  F: Covariant3EC<F, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT10>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT10>(
  F: Covariant3RC<F, R1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT10>(
  F: Covariant3<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT10>(
  F: Covariant2EC<F, E1>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT10>(
  F: Covariant2<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT10>(
  F: Covariant1<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT10>(
  F: Covariant<F>,
  G: Contravariant10<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT9>(
  F: Covariant10<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT9>(
  F: Covariant9<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT9>(
  F: Covariant8<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT9>(
  F: Covariant7<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT9>(
  F: Covariant6<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT9>(
  F: Covariant5<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT9>(
  F: Covariant4EC<F, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT9>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT9>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT9>(
  F: Covariant4RC<F, R1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT9>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT9>(
  F: Covariant4SC<F, S1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, G extends HKT9>(
  F: Covariant4<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT9>(
  F: Covariant3EC<F, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT9>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT9>(
  F: Covariant3RC<F, R1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT9>(
  F: Covariant3<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT9>(
  F: Covariant2EC<F, E1>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT9>(
  F: Covariant2<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT9>(
  F: Covariant1<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT9>(
  F: Covariant<F>,
  G: Contravariant9<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT8>(
  F: Covariant10<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT8>(
  F: Covariant9<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT8>(
  F: Covariant8<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT8>(
  F: Covariant7<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT8>(
  F: Covariant6<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT8>(
  F: Covariant5<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT8>(
  F: Covariant4EC<F, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT8>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT8>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT8>(
  F: Covariant4RC<F, R1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT8>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT8>(
  F: Covariant4SC<F, S1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, G extends HKT8>(
  F: Covariant4<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT8>(
  F: Covariant3EC<F, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT8>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT8>(
  F: Covariant3RC<F, R1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT8>(
  F: Covariant3<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT8>(
  F: Covariant2EC<F, E1>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT8>(
  F: Covariant2<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT8>(
  F: Covariant1<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT8>(
  F: Covariant<F>,
  G: Contravariant8<G>,
): <B, A>(
  f: (b: B) => A,
) => <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT7>(
  F: Covariant10<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT7>(
  F: Covariant9<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT7>(
  F: Covariant8<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT7>(
  F: Covariant7<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT7>(
  F: Covariant6<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT7>(
  F: Covariant5<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT7>(
  F: Covariant4EC<F, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT7>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT7>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT7>(
  F: Covariant4RC<F, R1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT7>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT7>(
  F: Covariant4SC<F, S1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, G extends HKT7>(
  F: Covariant4<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT7>(
  F: Covariant3EC<F, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT7>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT7>(
  F: Covariant3RC<F, R1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT7>(
  F: Covariant3<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT7>(
  F: Covariant2EC<F, E1>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT7>(
  F: Covariant2<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT7>(
  F: Covariant1<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT7>(
  F: Covariant<F>,
  G: Contravariant7<G>,
): <B, A>(
  f: (b: B) => A,
) => <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT6>(
  F: Covariant10<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT6>(
  F: Covariant9<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT6>(
  F: Covariant8<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT6>(
  F: Covariant7<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT6>(
  F: Covariant6<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT6>(
  F: Covariant5<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT6>(
  F: Covariant4EC<F, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT6>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT6>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT6>(
  F: Covariant4RC<F, R1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT6>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT6>(
  F: Covariant4SC<F, S1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, G extends HKT6>(
  F: Covariant4<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT6>(
  F: Covariant3EC<F, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT6>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT6>(
  F: Covariant3RC<F, R1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT6>(
  F: Covariant3<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT6>(
  F: Covariant2EC<F, E1>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT6>(
  F: Covariant2<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT6>(
  F: Covariant1<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT6>(
  F: Covariant<F>,
  G: Contravariant6<G>,
): <B, A>(
  f: (b: B) => A,
) => <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT5>(
  F: Covariant10<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT5>(
  F: Covariant9<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT5>(
  F: Covariant8<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT5>(
  F: Covariant7<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT5>(
  F: Covariant6<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT5>(
  F: Covariant5<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT5>(
  F: Covariant4EC<F, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT5>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT5>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT5>(
  F: Covariant4RC<F, R1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT5>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT5>(
  F: Covariant4SC<F, S1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT4, G extends HKT5>(
  F: Covariant4<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT5>(
  F: Covariant3EC<F, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT5>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT5>(
  F: Covariant3RC<F, R1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT5>(
  F: Covariant3<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT5>(
  F: Covariant2EC<F, E1>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT5>(
  F: Covariant2<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT5>(
  F: Covariant1<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT5>(
  F: Covariant<F>,
  G: Contravariant5<G>,
): <B, A>(
  f: (b: B) => A,
) => <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT4, E2>(
  F: Covariant10<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT4, R2, E2>(
  F: Covariant10<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT4, S2, E2>(
  F: Covariant10<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT4, R2>(
  F: Covariant10<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT4, S2, R2>(
  F: Covariant10<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT4, S2>(
  F: Covariant10<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Covariant10<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT4>(
  F: Covariant10<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT4, E2>(
  F: Covariant9<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT4, R2, E2>(
  F: Covariant9<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT4, S2, E2>(
  F: Covariant9<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT4, R2>(
  F: Covariant9<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT4, S2, R2>(
  F: Covariant9<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT4, S2>(
  F: Covariant9<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Covariant9<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT4>(
  F: Covariant9<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT4, E2>(
  F: Covariant8<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT4, R2, E2>(
  F: Covariant8<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT4, S2, E2>(
  F: Covariant8<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT4, R2>(
  F: Covariant8<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT4, S2, R2>(
  F: Covariant8<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT4, S2>(
  F: Covariant8<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Covariant8<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT4>(
  F: Covariant8<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT4, E2>(
  F: Covariant7<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT4, R2, E2>(
  F: Covariant7<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT4, S2, E2>(
  F: Covariant7<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT4, R2>(
  F: Covariant7<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT4, S2, R2>(
  F: Covariant7<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT4, S2>(
  F: Covariant7<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Covariant7<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT4>(
  F: Covariant7<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT4, E2>(
  F: Covariant6<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT4, R2, E2>(
  F: Covariant6<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, S2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT4, S2, E2>(
  F: Covariant6<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT4, R2>(
  F: Covariant6<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT4, S2, R2>(
  F: Covariant6<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT4, S2>(
  F: Covariant6<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Covariant6<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT4>(
  F: Covariant6<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT4, E2>(
  F: Covariant5<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, S2, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT4, R2, E2>(
  F: Covariant5<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, S2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT4, S2, E2>(
  F: Covariant5<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT4, R2>(
  F: Covariant5<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, S2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT4, S2, R2>(
  F: Covariant5<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT4, S2>(
  F: Covariant5<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Covariant5<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT4>(
  F: Covariant5<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT4, E2>(
  F: Covariant4EC<F, E1>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, S2, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S1, S2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT4, R2>(
  F: Covariant4RC<F, R1>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, S2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT4, S2>(
  F: Covariant4SC<F, S1>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT4, G extends HKT4>(
  F: Covariant4<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT4, E2>(
  F: Covariant3<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, S2, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT4, R2, E2>(
  F: Covariant3<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, S2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT4, S2, E2>(
  F: Covariant3<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT4, R2>(
  F: Covariant3<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, S2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: Covariant3EC<F, E1>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Covariant3RC<F, R1>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT4>(
  F: Covariant3<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT4, E2>(
  F: Covariant2<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, S2, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT4, R2, E2>(
  F: Covariant2<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, S2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT4, S2, E2>(
  F: Covariant2<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT4, R2>(
  F: Covariant2<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, S2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT4, S2, R2>(
  F: Covariant2<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT4, S2>(
  F: Covariant2<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: Covariant2EC<F, E1>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT4>(
  F: Covariant2<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, E2>(
  F: Covariant1<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, R2, E2>(
  F: Covariant1<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, S2, E2>(
  F: Covariant1<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, R2>(
  F: Covariant1<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant1<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, S2>(
  F: Covariant1<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Covariant1<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4>(
  F: Covariant1<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <S2, R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, E2>(
  F: Covariant<F>,
  G: Contravariant4EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, R2, E2>(
  F: Covariant<F>,
  G: Contravariant4REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, S2, E2>(
  F: Covariant<F>,
  G: Contravariant4SEC<G, S2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, R2>(
  F: Covariant<F>,
  G: Contravariant4RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <S2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant<F>,
  G: Contravariant4SRC<G, S2, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, S2>(
  F: Covariant<F>,
  G: Contravariant4SC<G, S2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Covariant<F>,
  G: Contravariant4SREC<G, S2, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT4>(
  F: Covariant<F>,
  G: Contravariant4<G>,
): <B, A>(
  f: (b: B) => A,
) => <S2, R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT3, E2>(
  F: Covariant10<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT3, R2, E2>(
  F: Covariant10<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT3, R2>(
  F: Covariant10<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT3>(
  F: Covariant10<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT3, E2>(
  F: Covariant9<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT3, R2, E2>(
  F: Covariant9<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT3, R2>(
  F: Covariant9<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT9, G extends HKT3>(
  F: Covariant9<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT3, E2>(
  F: Covariant8<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT3, R2, E2>(
  F: Covariant8<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT3, R2>(
  F: Covariant8<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT8, G extends HKT3>(
  F: Covariant8<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT3, E2>(
  F: Covariant7<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT3, R2, E2>(
  F: Covariant7<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT3, R2>(
  F: Covariant7<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT7, G extends HKT3>(
  F: Covariant7<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT3, E2>(
  F: Covariant6<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT3, R2, E2>(
  F: Covariant6<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT3, R2>(
  F: Covariant6<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT6, G extends HKT3>(
  F: Covariant6<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT3, E2>(
  F: Covariant5<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT3, R2, E2>(
  F: Covariant5<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT3, R2>(
  F: Covariant5<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT5, G extends HKT3>(
  F: Covariant5<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT3>(
  F: Covariant4EC<F, E1>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT3>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT3>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT3>(
  F: Covariant4RC<F, R1>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: Covariant4SC<F, S1>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT4, G extends HKT3>(
  F: Covariant4<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT3, E2>(
  F: Covariant3EC<F, E1>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R1, R2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT3, R2>(
  F: Covariant3RC<F, R1>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT3, G extends HKT3>(
  F: Covariant3<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT3, E2>(
  F: Covariant2<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT3, R2, E2>(
  F: Covariant2<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT3, R2>(
  F: Covariant2EC<F, E1>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT2, G extends HKT3>(
  F: Covariant2<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, R2, E2, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT3, E2>(
  F: Covariant1<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT3, R2, E2>(
  F: Covariant1<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT3, R2>(
  F: Covariant1<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT3>(
  F: Covariant1<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT3, E2>(
  F: Covariant<F>,
  G: Contravariant3EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <R2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT3, R2, E2>(
  F: Covariant<F>,
  G: Contravariant3REC<G, R2, E2>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT3, R2>(
  F: Covariant<F>,
  G: Contravariant3RC<G, R2>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT, G extends HKT3>(
  F: Covariant<F>,
  G: Contravariant3<G>,
): <B, A>(
  f: (b: B) => A,
) => <R2, E2, A>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function contramapC<F extends HKT10, G extends HKT2, E2>(
  F: Covariant10<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT10, G extends HKT2>(
  F: Covariant10<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT9, G extends HKT2, E2>(
  F: Covariant9<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT9, G extends HKT2>(
  F: Covariant9<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT8, G extends HKT2, E2>(
  F: Covariant8<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT8, G extends HKT2>(
  F: Covariant8<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT7, G extends HKT2, E2>(
  F: Covariant7<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT7, G extends HKT2>(
  F: Covariant7<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT6, G extends HKT2, E2>(
  F: Covariant6<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT6, G extends HKT2>(
  F: Covariant6<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT5, G extends HKT2, E2>(
  F: Covariant5<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT5, G extends HKT2>(
  F: Covariant5<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT4, E1, G extends HKT2>(
  F: Covariant4EC<F, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT2>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT2>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT4, R1, G extends HKT2>(
  F: Covariant4RC<F, R1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT4, S1, G extends HKT2>(
  F: Covariant4SC<F, S1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT4, G extends HKT2>(
  F: Covariant4<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT3, E1, G extends HKT2>(
  F: Covariant3EC<F, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E2, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT2>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <E2, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT3, R1, G extends HKT2, E2>(
  F: Covariant3RC<F, R1>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT3, G extends HKT2>(
  F: Covariant3<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, E2, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT2, E1, G extends HKT2, E2>(
  F: Covariant2EC<F, E1>,
  G: Contravariant2EC<G, E2>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT2, G extends HKT2>(
  F: Covariant2<F>,
  G: Contravariant2<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, E2, A>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, B>>

export function contramapC<F extends HKT, G extends HKT2, E2>(
  F: Covariant1<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function contramapC<F extends HKT, G extends HKT2>(
  F: Covariant1<F>,
  G: Contravariant2<G>,
): <B, A>(f: (b: B) => A) => <E2, A>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function contramapC<F extends HKT, G extends HKT2, E2>(
  F: Covariant<F>,
  G: Contravariant2EC<G, E2>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function contramapC<F extends HKT, G extends HKT2>(
  F: Covariant<F>,
  G: Contravariant2<G>,
): <B, A>(f: (b: B) => A) => <E2, A>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function contramapC<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, E1, G extends HKT>(
  F: Covariant4EC<F, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, R1, G extends HKT>(
  F: Covariant4RC<F, R1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, S1, G extends HKT>(
  F: Covariant4SC<F, S1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT3, E1, G extends HKT>(
  F: Covariant3EC<F, E1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT3, R1, G extends HKT>(
  F: Covariant3RC<F, R1>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: Contravariant1<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT2, E1, G extends HKT>(
  F: Covariant2EC<F, E1>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function contramapC<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <E1, A>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function contramapC<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function contramapC<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Contravariant1<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function contramapC<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, E1, G extends HKT>(
  F: Covariant4EC<F, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, R1, E1, G extends HKT>(
  F: Covariant4REC<F, R1, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, S1, E1, G extends HKT>(
  F: Covariant4SEC<F, S1, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, R1, G extends HKT>(
  F: Covariant4RC<F, R1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, S1, R1, G extends HKT>(
  F: Covariant4SRC<F, S1, R1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, S1, G extends HKT>(
  F: Covariant4SC<F, S1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <S1, R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT3, E1, G extends HKT>(
  F: Covariant3EC<F, E1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT3, R1, E1, G extends HKT>(
  F: Covariant3REC<F, R1, E1>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT3, R1, G extends HKT>(
  F: Covariant3RC<F, R1>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <E1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: Contravariant<G>,
): <B, A>(
  f: (b: B) => A,
) => <R1, E1, A>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function contramapC<F extends HKT2, E1, G extends HKT>(
  F: Covariant2EC<F, E1>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function contramapC<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <E1, A>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function contramapC<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function contramapC<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function contramapC<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Contravariant<G>,
): <B, A>(f: (b: B) => A) => <A>(kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>> {
  return <B, A>(f: (b: B) => A) => F.map(G.contramap(f))
}
