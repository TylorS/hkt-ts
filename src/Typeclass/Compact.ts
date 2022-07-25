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
import { Maybe } from '../Maybe.js'

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

/* #region Compact */
export interface Compact<T extends HKT> {
  readonly compact: <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A>
}

export interface Compact1<T extends HKT> {
  readonly compact: <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A>
}

export interface Compact2<T extends HKT2> {
  readonly compact: <E, A>(kind: Kind2<T, E, Maybe<A>>) => Kind2<T, E, A>
}

export interface Compact2EC<T extends HKT2, E> {
  readonly compact: <A>(kind: Kind2<T, E, Maybe<A>>) => Kind2<T, E, A>
}

export interface Compact3<T extends HKT3> {
  readonly compact: <R, E, A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>
}

export interface Compact3RC<T extends HKT3, R> {
  readonly compact: <E, A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>
}

export interface Compact3REC<T extends HKT3, R, E> {
  readonly compact: <A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>
}

export interface Compact3EC<T extends HKT3, E> {
  readonly compact: <R, A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>
}

export interface Compact4<T extends HKT4> {
  readonly compact: <S, R, E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact4SREC<T extends HKT4, S, R, E> {
  readonly compact: <A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact4SC<T extends HKT4, S> {
  readonly compact: <R, E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact4SRC<T extends HKT4, S, R> {
  readonly compact: <E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact4RC<T extends HKT4, R> {
  readonly compact: <S, E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact4SEC<T extends HKT4, S, E> {
  readonly compact: <R, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact4REC<T extends HKT4, R, E> {
  readonly compact: <S, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact4EC<T extends HKT4, E> {
  readonly compact: <S, R, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact5<T extends HKT5> {
  readonly compact: <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, Maybe<A>>) => Kind5<T, U, S, R, E, A>
}

export interface Compact6<T extends HKT6> {
  readonly compact: <V, U, S, R, E, A>(
    kind: Kind6<T, V, U, S, R, E, Maybe<A>>,
  ) => Kind6<T, V, U, S, R, E, A>
}

export interface Compact7<T extends HKT7> {
  readonly compact: <W, V, U, S, R, E, A>(
    kind: Kind7<T, W, V, U, S, R, E, Maybe<A>>,
  ) => Kind7<T, W, V, U, S, R, E, A>
}

export interface Compact8<T extends HKT8> {
  readonly compact: <X, W, V, U, S, R, E, A>(
    kind: Kind8<T, X, W, V, U, S, R, E, Maybe<A>>,
  ) => Kind8<T, X, W, V, U, S, R, E, A>
}

export interface Compact9<T extends HKT9> {
  readonly compact: <Y, X, W, V, U, S, R, E, A>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, Maybe<A>>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, A>
}

export interface Compact10<T extends HKT10> {
  readonly compact: <Z, Y, X, W, V, U, S, R, E, A>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, Maybe<A>>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>
}

/* #endregion */

/* #region compact */
export function compact<F extends HKT10, G extends HKT10>(
  F: Covariant10<F>,
  G: Compact10<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
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
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT10>(
  F: Covariant9<F>,
  G: Compact10<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT10>(
  F: Covariant8<F>,
  G: Compact10<G>,
): <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT10>(
  F: Covariant7<F>,
  G: Compact10<G>,
): <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT10>(
  F: Covariant6<F>,
  G: Compact10<G>,
): <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT10>(
  F: Covariant5<F>,
  G: Compact10<G>,
): <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT10>(
  F: Covariant4EC<F, E1>,
  G: Compact10<G>,
): <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT10>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact10<G>,
): <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT10>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT10>(
  F: Covariant4RC<F, R1>,
  G: Compact10<G>,
): <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT10>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT10>(
  F: Covariant4SC<F, S1>,
  G: Compact10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, G extends HKT10>(
  F: Covariant4<F>,
  G: Compact10<G>,
): <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT10>(
  F: Covariant3EC<F, E1>,
  G: Compact10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT10>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT10>(
  F: Covariant3RC<F, R1>,
  G: Compact10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT10>(
  F: Covariant3<F>,
  G: Compact10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT10>(
  F: Covariant2EC<F, E1>,
  G: Compact10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT10>(
  F: Covariant2<F>,
  G: Compact10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT10>(
  F: Covariant1<F>,
  G: Compact10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT10>(
  F: Covariant<F>,
  G: Compact10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT9>(
  F: Covariant10<F>,
  G: Compact9<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
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
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT9>(
  F: Covariant9<F>,
  G: Compact9<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT9>(
  F: Covariant8<F>,
  G: Compact9<G>,
): <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT9>(
  F: Covariant7<F>,
  G: Compact9<G>,
): <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT9>(
  F: Covariant6<F>,
  G: Compact9<G>,
): <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT9>(
  F: Covariant5<F>,
  G: Compact9<G>,
): <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT9>(
  F: Covariant4EC<F, E1>,
  G: Compact9<G>,
): <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT9>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact9<G>,
): <S1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT9>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT9>(
  F: Covariant4RC<F, R1>,
  G: Compact9<G>,
): <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT9>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT9>(
  F: Covariant4SC<F, S1>,
  G: Compact9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, G extends HKT9>(
  F: Covariant4<F>,
  G: Compact9<G>,
): <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT9>(
  F: Covariant3EC<F, E1>,
  G: Compact9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT9>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT9>(
  F: Covariant3RC<F, R1>,
  G: Compact9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT9>(
  F: Covariant3<F>,
  G: Compact9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT9>(
  F: Covariant2EC<F, E1>,
  G: Compact9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT9>(
  F: Covariant2<F>,
  G: Compact9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT9>(
  F: Covariant1<F>,
  G: Compact9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT9>(
  F: Covariant<F>,
  G: Compact9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT8>(
  F: Covariant10<F>,
  G: Compact8<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
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
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT8>(
  F: Covariant9<F>,
  G: Compact8<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT8>(
  F: Covariant8<F>,
  G: Compact8<G>,
): <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT8>(
  F: Covariant7<F>,
  G: Compact8<G>,
): <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT8>(
  F: Covariant6<F>,
  G: Compact8<G>,
): <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT8>(
  F: Covariant5<F>,
  G: Compact8<G>,
): <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT8>(
  F: Covariant4EC<F, E1>,
  G: Compact8<G>,
): <S1, R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT8>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact8<G>,
): <S1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT8>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT8>(
  F: Covariant4RC<F, R1>,
  G: Compact8<G>,
): <S1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT8>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT8>(
  F: Covariant4SC<F, S1>,
  G: Compact8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, G extends HKT8>(
  F: Covariant4<F>,
  G: Compact8<G>,
): <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT8>(
  F: Covariant3EC<F, E1>,
  G: Compact8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT8>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT8>(
  F: Covariant3RC<F, R1>,
  G: Compact8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT8>(
  F: Covariant3<F>,
  G: Compact8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT8>(
  F: Covariant2EC<F, E1>,
  G: Compact8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT8>(
  F: Covariant2<F>,
  G: Compact8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT8>(
  F: Covariant1<F>,
  G: Compact8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT8>(
  F: Covariant<F>,
  G: Compact8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT7>(
  F: Covariant10<F>,
  G: Compact7<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT7>(
  F: Covariant9<F>,
  G: Compact7<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT7>(
  F: Covariant8<F>,
  G: Compact7<G>,
): <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT7>(
  F: Covariant7<F>,
  G: Compact7<G>,
): <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT7>(
  F: Covariant6<F>,
  G: Compact7<G>,
): <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT7>(
  F: Covariant5<F>,
  G: Compact7<G>,
): <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT7>(
  F: Covariant4EC<F, E1>,
  G: Compact7<G>,
): <S1, R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT7>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact7<G>,
): <S1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT7>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact7<G>,
): <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT7>(
  F: Covariant4RC<F, R1>,
  G: Compact7<G>,
): <S1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT7>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT7>(
  F: Covariant4SC<F, S1>,
  G: Compact7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, G extends HKT7>(
  F: Covariant4<F>,
  G: Compact7<G>,
): <S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT7>(
  F: Covariant3EC<F, E1>,
  G: Compact7<G>,
): <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT7>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT7>(
  F: Covariant3RC<F, R1>,
  G: Compact7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT7>(
  F: Covariant3<F>,
  G: Compact7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT7>(
  F: Covariant2EC<F, E1>,
  G: Compact7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT7>(
  F: Covariant2<F>,
  G: Compact7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT7>(
  F: Covariant1<F>,
  G: Compact7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT7>(
  F: Covariant<F>,
  G: Compact7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT6>(
  F: Covariant10<F>,
  G: Compact6<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT6>(
  F: Covariant9<F>,
  G: Compact6<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT6>(
  F: Covariant8<F>,
  G: Compact6<G>,
): <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT6>(
  F: Covariant7<F>,
  G: Compact6<G>,
): <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT6>(
  F: Covariant6<F>,
  G: Compact6<G>,
): <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT6>(
  F: Covariant5<F>,
  G: Compact6<G>,
): <U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT6>(
  F: Covariant4EC<F, E1>,
  G: Compact6<G>,
): <S1, R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT6>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact6<G>,
): <S1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT6>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact6<G>,
): <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT6>(
  F: Covariant4RC<F, R1>,
  G: Compact6<G>,
): <S1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT6>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT6>(
  F: Covariant4SC<F, S1>,
  G: Compact6<G>,
): <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, G extends HKT6>(
  F: Covariant4<F>,
  G: Compact6<G>,
): <S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT6>(
  F: Covariant3EC<F, E1>,
  G: Compact6<G>,
): <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT6>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT6>(
  F: Covariant3RC<F, R1>,
  G: Compact6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT6>(
  F: Covariant3<F>,
  G: Compact6<G>,
): <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT6>(
  F: Covariant2EC<F, E1>,
  G: Compact6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT6>(
  F: Covariant2<F>,
  G: Compact6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT6>(
  F: Covariant1<F>,
  G: Compact6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT6>(
  F: Covariant<F>,
  G: Compact6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT5>(
  F: Covariant10<F>,
  G: Compact5<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT5>(
  F: Covariant9<F>,
  G: Compact5<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT5>(
  F: Covariant8<F>,
  G: Compact5<G>,
): <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT5>(
  F: Covariant7<F>,
  G: Compact5<G>,
): <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT5>(
  F: Covariant6<F>,
  G: Compact5<G>,
): <V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT5>(
  F: Covariant5<F>,
  G: Compact5<G>,
): <U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT5>(
  F: Covariant4EC<F, E1>,
  G: Compact5<G>,
): <S1, R1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT5>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact5<G>,
): <S1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT5>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact5<G>,
): <R1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT5>(
  F: Covariant4RC<F, R1>,
  G: Compact5<G>,
): <S1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT5>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT5>(
  F: Covariant4SC<F, S1>,
  G: Compact5<G>,
): <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT4, G extends HKT5>(
  F: Covariant4<F>,
  G: Compact5<G>,
): <S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT5>(
  F: Covariant3EC<F, E1>,
  G: Compact5<G>,
): <R1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT5>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT5>(
  F: Covariant3RC<F, R1>,
  G: Compact5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT5>(
  F: Covariant3<F>,
  G: Compact5<G>,
): <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT5>(
  F: Covariant2EC<F, E1>,
  G: Compact5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT5>(
  F: Covariant2<F>,
  G: Compact5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT5>(
  F: Covariant1<F>,
  G: Compact5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT5>(
  F: Covariant<F>,
  G: Compact5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT4, E2>(
  F: Covariant10<F>,
  G: Compact4EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT4, R2, E2>(
  F: Covariant10<F>,
  G: Compact4REC<G, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT4, S2, E2>(
  F: Covariant10<F>,
  G: Compact4SEC<G, S2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT4, R2>(
  F: Covariant10<F>,
  G: Compact4RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT4, S2, R2>(
  F: Covariant10<F>,
  G: Compact4SRC<G, S2, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT4, S2>(
  F: Covariant10<F>,
  G: Compact4SC<G, S2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Covariant10<F>,
  G: Compact4SREC<G, S2, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT4>(
  F: Covariant10<F>,
  G: Compact4<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT4, E2>(
  F: Covariant9<F>,
  G: Compact4EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT4, R2, E2>(
  F: Covariant9<F>,
  G: Compact4REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT4, S2, E2>(
  F: Covariant9<F>,
  G: Compact4SEC<G, S2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT4, R2>(
  F: Covariant9<F>,
  G: Compact4RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT4, S2, R2>(
  F: Covariant9<F>,
  G: Compact4SRC<G, S2, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT4, S2>(
  F: Covariant9<F>,
  G: Compact4SC<G, S2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Covariant9<F>,
  G: Compact4SREC<G, S2, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT4>(
  F: Covariant9<F>,
  G: Compact4<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT4, E2>(
  F: Covariant8<F>,
  G: Compact4EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT4, R2, E2>(
  F: Covariant8<F>,
  G: Compact4REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT4, S2, E2>(
  F: Covariant8<F>,
  G: Compact4SEC<G, S2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT4, R2>(
  F: Covariant8<F>,
  G: Compact4RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT4, S2, R2>(
  F: Covariant8<F>,
  G: Compact4SRC<G, S2, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT4, S2>(
  F: Covariant8<F>,
  G: Compact4SC<G, S2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Covariant8<F>,
  G: Compact4SREC<G, S2, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT4>(
  F: Covariant8<F>,
  G: Compact4<G>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT4, E2>(
  F: Covariant7<F>,
  G: Compact4EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT4, R2, E2>(
  F: Covariant7<F>,
  G: Compact4REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT4, S2, E2>(
  F: Covariant7<F>,
  G: Compact4SEC<G, S2, E2>,
): <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT4, R2>(
  F: Covariant7<F>,
  G: Compact4RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT4, S2, R2>(
  F: Covariant7<F>,
  G: Compact4SRC<G, S2, R2>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT4, S2>(
  F: Covariant7<F>,
  G: Compact4SC<G, S2>,
): <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Covariant7<F>,
  G: Compact4SREC<G, S2, R2, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT4>(
  F: Covariant7<F>,
  G: Compact4<G>,
): <W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT4, E2>(
  F: Covariant6<F>,
  G: Compact4EC<G, E2>,
): <V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT4, R2, E2>(
  F: Covariant6<F>,
  G: Compact4REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, S2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT4, S2, E2>(
  F: Covariant6<F>,
  G: Compact4SEC<G, S2, E2>,
): <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT4, R2>(
  F: Covariant6<F>,
  G: Compact4RC<G, R2>,
): <V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT4, S2, R2>(
  F: Covariant6<F>,
  G: Compact4SRC<G, S2, R2>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT4, S2>(
  F: Covariant6<F>,
  G: Compact4SC<G, S2>,
): <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Covariant6<F>,
  G: Compact4SREC<G, S2, R2, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT4>(
  F: Covariant6<F>,
  G: Compact4<G>,
): <V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT4, E2>(
  F: Covariant5<F>,
  G: Compact4EC<G, E2>,
): <U1, S1, R1, E1, S2, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT4, R2, E2>(
  F: Covariant5<F>,
  G: Compact4REC<G, R2, E2>,
): <U1, S1, R1, E1, S2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT4, S2, E2>(
  F: Covariant5<F>,
  G: Compact4SEC<G, S2, E2>,
): <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT4, R2>(
  F: Covariant5<F>,
  G: Compact4RC<G, R2>,
): <U1, S1, R1, E1, S2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT4, S2, R2>(
  F: Covariant5<F>,
  G: Compact4SRC<G, S2, R2>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT4, S2>(
  F: Covariant5<F>,
  G: Compact4SC<G, S2>,
): <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Covariant5<F>,
  G: Compact4SREC<G, S2, R2, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT4>(
  F: Covariant5<F>,
  G: Compact4<G>,
): <U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT4, E2>(
  F: Covariant4EC<F, E1>,
  G: Compact4EC<G, E2>,
): <S1, R1, S2, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact4REC<G, R2, E2>,
): <S1, S2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact4SEC<G, S2, E2>,
): <R1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT4, R2>(
  F: Covariant4RC<F, R1>,
  G: Compact4RC<G, R2>,
): <S1, E1, S2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact4SRC<G, S2, R2>,
): <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT4, S2>(
  F: Covariant4SC<F, S1>,
  G: Compact4SC<G, S2>,
): <R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT4, G extends HKT4>(
  F: Covariant4<F>,
  G: Compact4<G>,
): <S1, R1, E1, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT4, E2>(
  F: Covariant3<F>,
  G: Compact4EC<G, E2>,
): <R1, E1, S2, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT4, R2, E2>(
  F: Covariant3<F>,
  G: Compact4REC<G, R2, E2>,
): <R1, E1, S2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT4, S2, E2>(
  F: Covariant3<F>,
  G: Compact4SEC<G, S2, E2>,
): <R1, E1, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT4, R2>(
  F: Covariant3<F>,
  G: Compact4RC<G, R2>,
): <R1, E1, S2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: Covariant3EC<F, E1>,
  G: Compact4SRC<G, S2, R2>,
): <R1, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact4SC<G, S2>,
): <R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Covariant3RC<F, R1>,
  G: Compact4SREC<G, S2, R2, E2>,
): <E1, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT4>(
  F: Covariant3<F>,
  G: Compact4<G>,
): <R1, E1, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT4, E2>(
  F: Covariant2<F>,
  G: Compact4EC<G, E2>,
): <E1, S2, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT4, R2, E2>(
  F: Covariant2<F>,
  G: Compact4REC<G, R2, E2>,
): <E1, S2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT4, S2, E2>(
  F: Covariant2<F>,
  G: Compact4SEC<G, S2, E2>,
): <E1, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT4, R2>(
  F: Covariant2<F>,
  G: Compact4RC<G, R2>,
): <E1, S2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT4, S2, R2>(
  F: Covariant2<F>,
  G: Compact4SRC<G, S2, R2>,
): <E1, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT4, S2>(
  F: Covariant2<F>,
  G: Compact4SC<G, S2>,
): <E1, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: Covariant2EC<F, E1>,
  G: Compact4SREC<G, S2, R2, E2>,
): <A>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT4>(
  F: Covariant2<F>,
  G: Compact4<G>,
): <E1, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, E2>(
  F: Covariant1<F>,
  G: Compact4EC<G, E2>,
): <S2, R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, R2, E2>(
  F: Covariant1<F>,
  G: Compact4REC<G, R2, E2>,
): <S2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, S2, E2>(
  F: Covariant1<F>,
  G: Compact4SEC<G, S2, E2>,
): <R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, R2>(
  F: Covariant1<F>,
  G: Compact4RC<G, R2>,
): <S2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant1<F>,
  G: Compact4SRC<G, S2, R2>,
): <E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, S2>(
  F: Covariant1<F>,
  G: Compact4SC<G, S2>,
): <R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Covariant1<F>,
  G: Compact4SREC<G, S2, R2, E2>,
): <A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4>(
  F: Covariant1<F>,
  G: Compact4<G>,
): <S2, R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, E2>(
  F: Covariant<F>,
  G: Compact4EC<G, E2>,
): <S2, R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, R2, E2>(
  F: Covariant<F>,
  G: Compact4REC<G, R2, E2>,
): <S2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, S2, E2>(
  F: Covariant<F>,
  G: Compact4SEC<G, S2, E2>,
): <R2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, R2>(
  F: Covariant<F>,
  G: Compact4RC<G, R2>,
): <S2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant<F>,
  G: Compact4SRC<G, S2, R2>,
): <E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, S2>(
  F: Covariant<F>,
  G: Compact4SC<G, S2>,
): <R2, E2, A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Covariant<F>,
  G: Compact4SREC<G, S2, R2, E2>,
): <A>(kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT, G extends HKT4>(
  F: Covariant<F>,
  G: Compact4<G>,
): <S2, R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Maybe<A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT3, E2>(
  F: Covariant10<F>,
  G: Compact3EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT3, R2, E2>(
  F: Covariant10<F>,
  G: Compact3REC<G, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT3, R2>(
  F: Covariant10<F>,
  G: Compact3RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT3>(
  F: Covariant10<F>,
  G: Compact3<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT3, E2>(
  F: Covariant9<F>,
  G: Compact3EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT3, R2, E2>(
  F: Covariant9<F>,
  G: Compact3REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT3, R2>(
  F: Covariant9<F>,
  G: Compact3RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT9, G extends HKT3>(
  F: Covariant9<F>,
  G: Compact3<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT3, E2>(
  F: Covariant8<F>,
  G: Compact3EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT3, R2, E2>(
  F: Covariant8<F>,
  G: Compact3REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT3, R2>(
  F: Covariant8<F>,
  G: Compact3RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT8, G extends HKT3>(
  F: Covariant8<F>,
  G: Compact3<G>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT3, E2>(
  F: Covariant7<F>,
  G: Compact3EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT3, R2, E2>(
  F: Covariant7<F>,
  G: Compact3REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT3, R2>(
  F: Covariant7<F>,
  G: Compact3RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT7, G extends HKT3>(
  F: Covariant7<F>,
  G: Compact3<G>,
): <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT3, E2>(
  F: Covariant6<F>,
  G: Compact3EC<G, E2>,
): <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT3, R2, E2>(
  F: Covariant6<F>,
  G: Compact3REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT3, R2>(
  F: Covariant6<F>,
  G: Compact3RC<G, R2>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT6, G extends HKT3>(
  F: Covariant6<F>,
  G: Compact3<G>,
): <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT3, E2>(
  F: Covariant5<F>,
  G: Compact3EC<G, E2>,
): <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT3, R2, E2>(
  F: Covariant5<F>,
  G: Compact3REC<G, R2, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT3, R2>(
  F: Covariant5<F>,
  G: Compact3RC<G, R2>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT5, G extends HKT3>(
  F: Covariant5<F>,
  G: Compact3<G>,
): <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT3>(
  F: Covariant4EC<F, E1>,
  G: Compact3<G>,
): <S1, R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT3>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact3<G>,
): <S1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT3>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact3<G>,
): <R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT3>(
  F: Covariant4RC<F, R1>,
  G: Compact3<G>,
): <S1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact3EC<G, E2>,
): <E1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: Covariant4SC<F, S1>,
  G: Compact3REC<G, R2, E2>,
): <R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact3RC<G, R2>,
): <E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT4, G extends HKT3>(
  F: Covariant4<F>,
  G: Compact3<G>,
): <S1, R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT3, E2>(
  F: Covariant3EC<F, E1>,
  G: Compact3EC<G, E2>,
): <R1, R2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact3REC<G, R2, E2>,
): <A>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Maybe<A>>>) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT3, R2>(
  F: Covariant3RC<F, R1>,
  G: Compact3RC<G, R2>,
): <E1, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT3, G extends HKT3>(
  F: Covariant3<F>,
  G: Compact3<G>,
): <R1, E1, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT3, E2>(
  F: Covariant2<F>,
  G: Compact3EC<G, E2>,
): <E1, R2, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, Maybe<A>>>) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT3, R2, E2>(
  F: Covariant2<F>,
  G: Compact3REC<G, R2, E2>,
): <E1, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, Maybe<A>>>) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT3, R2>(
  F: Covariant2EC<F, E1>,
  G: Compact3RC<G, R2>,
): <E2, A>(kind: Kind2<F, E1, Kind3<G, R2, E2, Maybe<A>>>) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT2, G extends HKT3>(
  F: Covariant2<F>,
  G: Compact3<G>,
): <E1, R2, E2, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Maybe<A>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function compact<F extends HKT, G extends HKT3, E2>(
  F: Covariant1<F>,
  G: Compact3EC<G, E2>,
): <R2, A>(kind: Kind<F, Kind3<G, R2, E2, Maybe<A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function compact<F extends HKT, G extends HKT3, R2, E2>(
  F: Covariant1<F>,
  G: Compact3REC<G, R2, E2>,
): <A>(kind: Kind<F, Kind3<G, R2, E2, Maybe<A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function compact<F extends HKT, G extends HKT3, R2>(
  F: Covariant1<F>,
  G: Compact3RC<G, R2>,
): <E2, A>(kind: Kind<F, Kind3<G, R2, E2, Maybe<A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function compact<F extends HKT, G extends HKT3>(
  F: Covariant1<F>,
  G: Compact3<G>,
): <R2, E2, A>(kind: Kind<F, Kind3<G, R2, E2, Maybe<A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function compact<F extends HKT, G extends HKT3, E2>(
  F: Covariant<F>,
  G: Compact3EC<G, E2>,
): <R2, A>(kind: Kind<F, Kind3<G, R2, E2, Maybe<A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function compact<F extends HKT, G extends HKT3, R2, E2>(
  F: Covariant<F>,
  G: Compact3REC<G, R2, E2>,
): <A>(kind: Kind<F, Kind3<G, R2, E2, Maybe<A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function compact<F extends HKT, G extends HKT3, R2>(
  F: Covariant<F>,
  G: Compact3RC<G, R2>,
): <E2, A>(kind: Kind<F, Kind3<G, R2, E2, Maybe<A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function compact<F extends HKT, G extends HKT3>(
  F: Covariant<F>,
  G: Compact3<G>,
): <R2, E2, A>(kind: Kind<F, Kind3<G, R2, E2, Maybe<A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function compact<F extends HKT10, G extends HKT2, E2>(
  F: Covariant10<F>,
  G: Compact2EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT10, G extends HKT2>(
  F: Covariant10<F>,
  G: Compact2<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT9, G extends HKT2, E2>(
  F: Covariant9<F>,
  G: Compact2EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT9, G extends HKT2>(
  F: Covariant9<F>,
  G: Compact2<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT8, G extends HKT2, E2>(
  F: Covariant8<F>,
  G: Compact2EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT8, G extends HKT2>(
  F: Covariant8<F>,
  G: Compact2<G>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT7, G extends HKT2, E2>(
  F: Covariant7<F>,
  G: Compact2EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT7, G extends HKT2>(
  F: Covariant7<F>,
  G: Compact2<G>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT6, G extends HKT2, E2>(
  F: Covariant6<F>,
  G: Compact2EC<G, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT6, G extends HKT2>(
  F: Covariant6<F>,
  G: Compact2<G>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT5, G extends HKT2, E2>(
  F: Covariant5<F>,
  G: Compact2EC<G, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT5, G extends HKT2>(
  F: Covariant5<F>,
  G: Compact2<G>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT4, E1, G extends HKT2>(
  F: Covariant4EC<F, E1>,
  G: Compact2<G>,
): <S1, R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT2>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact2<G>,
): <S1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT2>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact2<G>,
): <R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT4, R1, G extends HKT2>(
  F: Covariant4RC<F, R1>,
  G: Compact2<G>,
): <S1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT2>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact2<G>,
): <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT4, S1, G extends HKT2>(
  F: Covariant4SC<F, S1>,
  G: Compact2<G>,
): <R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact2EC<G, E2>,
): <A>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT4, G extends HKT2>(
  F: Covariant4<F>,
  G: Compact2<G>,
): <S1, R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT3, E1, G extends HKT2>(
  F: Covariant3EC<F, E1>,
  G: Compact2<G>,
): <R1, E2, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, Maybe<A>>>) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT2>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact2<G>,
): <E2, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, Maybe<A>>>) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT3, R1, G extends HKT2, E2>(
  F: Covariant3RC<F, R1>,
  G: Compact2EC<G, E2>,
): <E1, A>(kind: Kind3<F, R1, E1, Kind2<G, E2, Maybe<A>>>) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT3, G extends HKT2>(
  F: Covariant3<F>,
  G: Compact2<G>,
): <R1, E1, E2, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Maybe<A>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function compact<F extends HKT2, E1, G extends HKT2, E2>(
  F: Covariant2EC<F, E1>,
  G: Compact2EC<G, E2>,
): <A>(kind: Kind2<F, E1, Kind2<G, E2, Maybe<A>>>) => Kind2<F, E1, Kind2<G, E2, A>>

export function compact<F extends HKT2, G extends HKT2>(
  F: Covariant2<F>,
  G: Compact2<G>,
): <E1, E2, A>(kind: Kind2<F, E1, Kind2<G, E2, Maybe<A>>>) => Kind2<F, E1, Kind2<G, E2, A>>

export function compact<F extends HKT, G extends HKT2, E2>(
  F: Covariant1<F>,
  G: Compact2EC<G, E2>,
): <A>(kind: Kind<F, Kind2<G, E2, Maybe<A>>>) => Kind<F, Kind2<G, E2, A>>

export function compact<F extends HKT, G extends HKT2>(
  F: Covariant1<F>,
  G: Compact2<G>,
): <E2, A>(kind: Kind<F, Kind2<G, E2, Maybe<A>>>) => Kind<F, Kind2<G, E2, A>>

export function compact<F extends HKT, G extends HKT2, E2>(
  F: Covariant<F>,
  G: Compact2EC<G, E2>,
): <A>(kind: Kind<F, Kind2<G, E2, Maybe<A>>>) => Kind<F, Kind2<G, E2, A>>

export function compact<F extends HKT, G extends HKT2>(
  F: Covariant<F>,
  G: Compact2<G>,
): <E2, A>(kind: Kind<F, Kind2<G, E2, Maybe<A>>>) => Kind<F, Kind2<G, E2, A>>

export function compact<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: Compact1<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: Compact1<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: Compact1<G>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: Compact1<G>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: Compact1<G>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: Compact1<G>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, E1, G extends HKT>(
  F: Covariant4EC<F, E1>,
  G: Compact1<G>,
): <S1, R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact1<G>,
): <S1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact1<G>,
): <R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, R1, G extends HKT>(
  F: Covariant4RC<F, R1>,
  G: Compact1<G>,
): <S1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact1<G>,
): <E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, S1, G extends HKT>(
  F: Covariant4SC<F, S1>,
  G: Compact1<G>,
): <R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact1<G>,
): <A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: Compact1<G>,
): <S1, R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT3, E1, G extends HKT>(
  F: Covariant3EC<F, E1>,
  G: Compact1<G>,
): <R1, A>(kind: Kind3<F, R1, E1, Kind<G, Maybe<A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact1<G>,
): <A>(kind: Kind3<F, R1, E1, Kind<G, Maybe<A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function compact<F extends HKT3, R1, G extends HKT>(
  F: Covariant3RC<F, R1>,
  G: Compact1<G>,
): <E1, A>(kind: Kind3<F, R1, E1, Kind<G, Maybe<A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function compact<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: Compact1<G>,
): <R1, E1, A>(kind: Kind3<F, R1, E1, Kind<G, Maybe<A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function compact<F extends HKT2, E1, G extends HKT>(
  F: Covariant2EC<F, E1>,
  G: Compact1<G>,
): <A>(kind: Kind2<F, E1, Kind<G, Maybe<A>>>) => Kind2<F, E1, Kind<G, A>>

export function compact<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: Compact1<G>,
): <E1, A>(kind: Kind2<F, E1, Kind<G, Maybe<A>>>) => Kind2<F, E1, Kind<G, A>>

export function compact<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: Compact1<G>,
): <A>(kind: Kind<F, Kind<G, Maybe<A>>>) => Kind<F, Kind<G, A>>

export function compact<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Compact1<G>,
): <A>(kind: Kind<F, Kind<G, Maybe<A>>>) => Kind<F, Kind<G, A>>

export function compact<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: Compact<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: Compact<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: Compact<G>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: Compact<G>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: Compact<G>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: Compact<G>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, E1, G extends HKT>(
  F: Covariant4EC<F, E1>,
  G: Compact<G>,
): <S1, R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, R1, E1, G extends HKT>(
  F: Covariant4REC<F, R1, E1>,
  G: Compact<G>,
): <S1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, S1, E1, G extends HKT>(
  F: Covariant4SEC<F, S1, E1>,
  G: Compact<G>,
): <R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, R1, G extends HKT>(
  F: Covariant4RC<F, R1>,
  G: Compact<G>,
): <S1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, S1, R1, G extends HKT>(
  F: Covariant4SRC<F, S1, R1>,
  G: Compact<G>,
): <E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, S1, G extends HKT>(
  F: Covariant4SC<F, S1>,
  G: Compact<G>,
): <R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: Compact<G>,
): <A>(kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: Compact<G>,
): <S1, R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Maybe<A>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function compact<F extends HKT3, E1, G extends HKT>(
  F: Covariant3EC<F, E1>,
  G: Compact<G>,
): <R1, A>(kind: Kind3<F, R1, E1, Kind<G, Maybe<A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function compact<F extends HKT3, R1, E1, G extends HKT>(
  F: Covariant3REC<F, R1, E1>,
  G: Compact<G>,
): <A>(kind: Kind3<F, R1, E1, Kind<G, Maybe<A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function compact<F extends HKT3, R1, G extends HKT>(
  F: Covariant3RC<F, R1>,
  G: Compact<G>,
): <E1, A>(kind: Kind3<F, R1, E1, Kind<G, Maybe<A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function compact<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: Compact<G>,
): <R1, E1, A>(kind: Kind3<F, R1, E1, Kind<G, Maybe<A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function compact<F extends HKT2, E1, G extends HKT>(
  F: Covariant2EC<F, E1>,
  G: Compact<G>,
): <A>(kind: Kind2<F, E1, Kind<G, Maybe<A>>>) => Kind2<F, E1, Kind<G, A>>

export function compact<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: Compact<G>,
): <E1, A>(kind: Kind2<F, E1, Kind<G, Maybe<A>>>) => Kind2<F, E1, Kind<G, A>>

export function compact<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: Compact<G>,
): <A>(kind: Kind<F, Kind<G, Maybe<A>>>) => Kind<F, Kind<G, A>>

export function compact<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Compact<G>,
): <A>(kind: Kind<F, Kind<G, Maybe<A>>>) => Kind<F, Kind<G, A>>

export function compact<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: Compact<G>,
): <A>(kind: Kind<F, Kind<G, Maybe<A>>>) => Kind<F, Kind<G, A>> {
  return F.map(G.compact)
}

/* #endregion */
