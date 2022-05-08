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
import { pipe } from '../function'

import {
  AssociativeFlatten,
  AssociativeFlatten1,
  AssociativeFlatten10,
  AssociativeFlatten2,
  AssociativeFlatten2EC,
  AssociativeFlatten3,
  AssociativeFlatten3EC,
  AssociativeFlatten3RC,
  AssociativeFlatten3REC,
  AssociativeFlatten4,
  AssociativeFlatten4EC,
  AssociativeFlatten4RC,
  AssociativeFlatten4REC,
  AssociativeFlatten4SC,
  AssociativeFlatten4SEC,
  AssociativeFlatten4SRC,
  AssociativeFlatten4SREC,
  AssociativeFlatten5,
  AssociativeFlatten6,
  AssociativeFlatten7,
  AssociativeFlatten8,
  AssociativeFlatten9,
} from './AssociativeFlatten'
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

/* #region AssociativeCompose */
export interface AssociativeCompose<T extends HKT2> {
  readonly compose: <B, C>(second: Kind2<T, B, C>) => <A>(first: Kind2<T, A, B>) => Kind2<T, A, C>
}

export interface AssociativeCompose2<T extends HKT2> {
  readonly compose: <B, C>(second: Kind2<T, B, C>) => <A>(first: Kind2<T, A, B>) => Kind2<T, A, C>
}

export interface AssociativeCompose3<T extends HKT3> {
  readonly compose: <R, B, C>(
    second: Kind3<T, R, B, C>,
  ) => <A>(first: Kind3<T, R, A, B>) => Kind3<T, R, A, C>
}

export interface AssociativeCompose3RC<T extends HKT3, R> {
  readonly compose: <B, C>(
    second: Kind3<T, R, B, C>,
  ) => <A>(first: Kind3<T, R, A, B>) => Kind3<T, R, A, C>
}

export interface AssociativeCompose4<T extends HKT4> {
  readonly compose: <S, R, B, C>(
    second: Kind4<T, S, R, B, C>,
  ) => <A>(first: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, C>
}

export interface AssociativeCompose4SC<T extends HKT4, S> {
  readonly compose: <R, B, C>(
    second: Kind4<T, S, R, B, C>,
  ) => <A>(first: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, C>
}

export interface AssociativeCompose4SRC<T extends HKT4, S, R> {
  readonly compose: <B, C>(
    second: Kind4<T, S, R, B, C>,
  ) => <A>(first: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, C>
}

export interface AssociativeCompose4RC<T extends HKT4, R> {
  readonly compose: <S, B, C>(
    second: Kind4<T, S, R, B, C>,
  ) => <A>(first: Kind4<T, S, R, A, B>) => Kind4<T, S, R, A, C>
}

export interface AssociativeCompose5<T extends HKT5> {
  readonly compose: <U, S, R, B, C>(
    second: Kind5<T, U, S, R, B, C>,
  ) => <A>(first: Kind5<T, U, S, R, A, B>) => Kind5<T, U, S, R, A, C>
}

export interface AssociativeCompose6<T extends HKT6> {
  readonly compose: <V, U, S, R, B, C>(
    second: Kind6<T, V, U, S, R, B, C>,
  ) => <A>(first: Kind6<T, V, U, S, R, A, B>) => Kind6<T, V, U, S, R, A, C>
}

export interface AssociativeCompose7<T extends HKT7> {
  readonly compose: <W, V, U, S, R, B, C>(
    second: Kind7<T, W, V, U, S, R, B, C>,
  ) => <A>(first: Kind7<T, W, V, U, S, R, A, B>) => Kind7<T, W, V, U, S, R, A, C>
}

export interface AssociativeCompose8<T extends HKT8> {
  readonly compose: <X, W, V, U, S, R, B, C>(
    second: Kind8<T, X, W, V, U, S, R, B, C>,
  ) => <A>(first: Kind8<T, X, W, V, U, S, R, A, B>) => Kind8<T, X, W, V, U, S, R, A, C>
}

export interface AssociativeCompose9<T extends HKT9> {
  readonly compose: <Y, X, W, V, U, S, R, B, C>(
    second: Kind9<T, Y, X, W, V, U, S, R, B, C>,
  ) => <A>(first: Kind9<T, Y, X, W, V, U, S, R, A, B>) => Kind9<T, Y, X, W, V, U, S, R, A, C>
}

export interface AssociativeCompose10<T extends HKT10> {
  readonly compose: <Z, Y, X, W, V, U, S, R, B, C>(
    second: Kind10<T, Z, Y, X, W, V, U, S, R, B, C>,
  ) => <A>(
    first: Kind10<T, Z, Y, X, W, V, U, S, R, A, B>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, A, C>
}
/* #endregion */
export function compose<F extends HKT10, G extends HKT10>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose10<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind10<
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
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>
  >,
) => <B>(
  first: Kind10<
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
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT10>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose10<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT10>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose10<G>,
): <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT10>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose10<G>,
): <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT10>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose10<G>,
): <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT10>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose10<G>,
): <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, E1, G extends HKT10>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose10<G>,
): <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT10>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose10<G>,
): <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT10>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, G extends HKT10>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose10<G>,
): <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT10>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, G extends HKT10>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, G extends HKT10>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose10<G>,
): <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, E1, G extends HKT10>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT10>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, G extends HKT10>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, G extends HKT10>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, E1, G extends HKT10>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT10>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT10>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT10>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT9>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose9<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT9>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose9<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT9>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose9<G>,
): <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT9>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose9<G>,
): <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT9>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose9<G>,
): <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT9>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose9<G>,
): <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, E1, G extends HKT9>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose9<G>,
): <S1, R1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT9>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose9<G>,
): <S1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT9>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, G extends HKT9>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose9<G>,
): <S1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT9>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, G extends HKT9>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, G extends HKT9>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose9<G>,
): <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, E1, G extends HKT9>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT9>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, G extends HKT9>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, G extends HKT9>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, E1, G extends HKT9>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT9>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT9>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT9>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT8>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose8<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT8>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose8<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT8>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose8<G>,
): <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT8>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose8<G>,
): <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT8>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose8<G>,
): <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT8>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose8<G>,
): <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, E1, G extends HKT8>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose8<G>,
): <S1, R1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT8>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose8<G>,
): <S1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT8>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose8<G>,
): <R1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, G extends HKT8>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose8<G>,
): <S1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT8>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose8<G>,
): <E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, G extends HKT8>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose8<G>,
): <X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, G extends HKT8>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose8<G>,
): <S1, R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, E1, G extends HKT8>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose8<G>,
): <R1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT8>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose8<G>,
): <X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, G extends HKT8>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose8<G>,
): <E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, G extends HKT8>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, E1, G extends HKT8>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose8<G>,
): <X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT8>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose8<G>,
): <E1, X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT8>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose8<G>,
): <X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT8>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose8<G>,
): <X2, W2, V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, B, C>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT7>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose7<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT7>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose7<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT7>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose7<G>,
): <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT7>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose7<G>,
): <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT7>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose7<G>,
): <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT7>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose7<G>,
): <U1, S1, R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, E1, G extends HKT7>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose7<G>,
): <S1, R1, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT7>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose7<G>,
): <S1, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT7>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose7<G>,
): <R1, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, G extends HKT7>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose7<G>,
): <S1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT7>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose7<G>,
): <E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, G extends HKT7>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose7<G>,
): <R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose7<G>,
): <W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, G extends HKT7>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose7<G>,
): <S1, R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, E1, G extends HKT7>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose7<G>,
): <R1, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT7>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose7<G>,
): <W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, G extends HKT7>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose7<G>,
): <E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, G extends HKT7>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose7<G>,
): <R1, E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, E1, G extends HKT7>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose7<G>,
): <W2, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT7>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose7<G>,
): <E1, W2, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT7>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose7<G>,
): <W2, V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind<F, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT7>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose7<G>,
): <W2, V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind7<G, W2, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind<F, Kind7<G, W2, V2, U2, S2, R2, B, C>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT6>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose6<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT6>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose6<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT6>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose6<G>,
): <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT6>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose6<G>,
): <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT6>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose6<G>,
): <V1, U1, S1, R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT6>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose6<G>,
): <U1, S1, R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, E1, G extends HKT6>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose6<G>,
): <S1, R1, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT6>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose6<G>,
): <S1, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT6>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose6<G>,
): <R1, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, G extends HKT6>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose6<G>,
): <S1, E1, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT6>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose6<G>,
): <E1, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, G extends HKT6>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose6<G>,
): <R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose6<G>,
): <V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT4, G extends HKT6>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose6<G>,
): <S1, R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, E1, G extends HKT6>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose6<G>,
): <R1, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT6>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose6<G>,
): <V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, G extends HKT6>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose6<G>,
): <E1, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT3, G extends HKT6>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose6<G>,
): <R1, E1, V2, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, E1, G extends HKT6>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose6<G>,
): <V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT6>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose6<G>,
): <E1, V2, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT6>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose6<G>,
): <V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind6<G, V2, U2, S2, R2, B, C>>) => Kind<F, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT6>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose6<G>,
): <V2, U2, S2, R2, C, D>(
  second: Kind<F, Kind6<G, V2, U2, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind6<G, V2, U2, S2, R2, B, C>>) => Kind<F, Kind6<G, V2, U2, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT5>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose5<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT5>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose5<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT5>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose5<G>,
): <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT5>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose5<G>,
): <W1, V1, U1, S1, R1, E1, U2, S2, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT5>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose5<G>,
): <V1, U1, S1, R1, E1, U2, S2, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT5>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose5<G>,
): <U1, S1, R1, E1, U2, S2, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT4, E1, G extends HKT5>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose5<G>,
): <S1, R1, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT5>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose5<G>,
): <S1, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT5>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose5<G>,
): <R1, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT4, R1, G extends HKT5>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose5<G>,
): <S1, E1, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT5>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose5<G>,
): <E1, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, G extends HKT5>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose5<G>,
): <R1, E1, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose5<G>,
): <U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT4, G extends HKT5>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose5<G>,
): <S1, R1, E1, U2, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT3, E1, G extends HKT5>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose5<G>,
): <R1, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT5>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose5<G>,
): <U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT3, R1, G extends HKT5>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose5<G>,
): <E1, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT3, G extends HKT5>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose5<G>,
): <R1, E1, U2, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT2, E1, G extends HKT5>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose5<G>,
): <U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT5>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose5<G>,
): <E1, U2, S2, R2, C, D>(
  second: Kind2<F, E1, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(
  first: Kind2<F, E1, Kind5<G, U2, S2, R2, B, C>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT5>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose5<G>,
): <U2, S2, R2, C, D>(
  second: Kind<F, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind5<G, U2, S2, R2, B, C>>) => Kind<F, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT5>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose5<G>,
): <U2, S2, R2, C, D>(
  second: Kind<F, Kind5<G, U2, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind5<G, U2, S2, R2, B, C>>) => Kind<F, Kind5<G, U2, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT4, R2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose4RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT4, S2, R2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT4, S2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose4SC<G, S2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT4>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose4<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT4, R2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose4RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT4, S2, R2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT4, S2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose4SC<G, S2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT9, G extends HKT4>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose4<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT4, R2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose4RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT4, S2, R2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT4, S2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose4SC<G, S2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT8, G extends HKT4>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose4<G>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT4, R2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose4RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, S2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT4, S2, R2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT4, S2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose4SC<G, S2>,
): <W1, V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT7, G extends HKT4>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose4<G>,
): <W1, V1, U1, S1, R1, E1, S2, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT4, R2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose4RC<G, R2>,
): <V1, U1, S1, R1, E1, S2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT4, S2, R2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <V1, U1, S1, R1, E1, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT4, S2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose4SC<G, S2>,
): <V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT6, G extends HKT4>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose4<G>,
): <V1, U1, S1, R1, E1, S2, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT4, R2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose4RC<G, R2>,
): <U1, S1, R1, E1, S2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT4, S2, R2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <U1, S1, R1, E1, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT4, S2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose4SC<G, S2>,
): <U1, S1, R1, E1, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT5, G extends HKT4>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose4<G>,
): <U1, S1, R1, E1, S2, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT4, E1, G extends HKT4>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose4<G>,
): <S1, R1, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT4>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose4<G>,
): <S1, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT4>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose4<G>,
): <R1, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT4, R1, G extends HKT4>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose4<G>,
): <S1, E1, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT4, R2>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose4RC<G, R2>,
): <E1, S2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT4, S1, G extends HKT4, S2, R2>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <R1, E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT4, S2>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose4SC<G, S2>,
): <R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT4, G extends HKT4>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose4<G>,
): <S1, R1, E1, S2, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT3, E1, G extends HKT4, R2>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose4RC<G, R2>,
): <R1, S2, C, D>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT4, S2, R2>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <C, D>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT3, R1, G extends HKT4, S2>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose4SC<G, S2>,
): <E1, R2, C, D>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT3, G extends HKT4>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose4<G>,
): <R1, E1, S2, R2, C, D>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, B, C>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT4, R2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose4RC<G, R2>,
): <E1, S2, C, D>(
  second: Kind2<F, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind2<F, E1, Kind4<G, S2, R2, B, C>>) => Kind2<F, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT4, S2, R2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <E1, C, D>(
  second: Kind2<F, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind2<F, E1, Kind4<G, S2, R2, B, C>>) => Kind2<F, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT2, E1, G extends HKT4, S2>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose4SC<G, S2>,
): <R2, C, D>(
  second: Kind2<F, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind2<F, E1, Kind4<G, S2, R2, B, C>>) => Kind2<F, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT2, G extends HKT4>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose4<G>,
): <E1, S2, R2, C, D>(
  second: Kind2<F, E1, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind2<F, E1, Kind4<G, S2, R2, B, C>>) => Kind2<F, E1, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT4, R2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose4RC<G, R2>,
): <S2, C, D>(
  second: Kind<F, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind4<G, S2, R2, B, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT4, S2, R2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <C, D>(
  second: Kind<F, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind4<G, S2, R2, B, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT4, S2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose4SC<G, S2>,
): <R2, C, D>(
  second: Kind<F, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind4<G, S2, R2, B, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT4>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose4<G>,
): <S2, R2, C, D>(
  second: Kind<F, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind4<G, S2, R2, B, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT4, R2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose4RC<G, R2>,
): <S2, C, D>(
  second: Kind<F, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind4<G, S2, R2, B, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT4, S2, R2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose4SRC<G, S2, R2>,
): <C, D>(
  second: Kind<F, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind4<G, S2, R2, B, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT4, S2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose4SC<G, S2>,
): <R2, C, D>(
  second: Kind<F, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind4<G, S2, R2, B, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT, G extends HKT4>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose4<G>,
): <S2, R2, C, D>(
  second: Kind<F, Kind4<G, S2, R2, C, D>>,
) => <B>(first: Kind<F, Kind4<G, S2, R2, B, C>>) => Kind<F, Kind4<G, S2, R2, B, D>>

export function compose<F extends HKT10, G extends HKT3, R2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose3RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT10, G extends HKT3>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose3<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT9, G extends HKT3, R2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose3RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT9, G extends HKT3>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose3<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT8, G extends HKT3, R2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose3RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT8, G extends HKT3>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose3<G>,
): <X1, W1, V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT7, G extends HKT3, R2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose3RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT7, G extends HKT3>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose3<G>,
): <W1, V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT6, G extends HKT3, R2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose3RC<G, R2>,
): <V1, U1, S1, R1, E1, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT6, G extends HKT3>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose3<G>,
): <V1, U1, S1, R1, E1, R2, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT5, G extends HKT3, R2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose3RC<G, R2>,
): <U1, S1, R1, E1, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT5, G extends HKT3>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose3<G>,
): <U1, S1, R1, E1, R2, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT4, E1, G extends HKT3>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose3<G>,
): <S1, R1, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT3>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose3<G>,
): <S1, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT3>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose3<G>,
): <R1, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT4, R1, G extends HKT3>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose3<G>,
): <S1, E1, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT3>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose3<G>,
): <E1, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT4, S1, G extends HKT3>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose3<G>,
): <R1, E1, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose3RC<G, R2>,
): <C, D>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT4, G extends HKT3>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose3<G>,
): <S1, R1, E1, R2, C, D>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, B, C>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT3, E1, G extends HKT3>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose3<G>,
): <R1, R2, C, D>(
  second: Kind3<F, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind3<G, R2, B, C>>) => Kind3<F, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT3>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose3<G>,
): <R2, C, D>(
  second: Kind3<F, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind3<G, R2, B, C>>) => Kind3<F, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT3, R1, G extends HKT3, R2>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose3RC<G, R2>,
): <E1, C, D>(
  second: Kind3<F, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind3<G, R2, B, C>>) => Kind3<F, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT3, G extends HKT3>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose3<G>,
): <R1, E1, R2, C, D>(
  second: Kind3<F, R1, E1, Kind3<G, R2, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind3<G, R2, B, C>>) => Kind3<F, R1, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT2, E1, G extends HKT3, R2>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose3RC<G, R2>,
): <C, D>(
  second: Kind2<F, E1, Kind3<G, R2, C, D>>,
) => <B>(first: Kind2<F, E1, Kind3<G, R2, B, C>>) => Kind2<F, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT2, G extends HKT3>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose3<G>,
): <E1, R2, C, D>(
  second: Kind2<F, E1, Kind3<G, R2, C, D>>,
) => <B>(first: Kind2<F, E1, Kind3<G, R2, B, C>>) => Kind2<F, E1, Kind3<G, R2, B, D>>

export function compose<F extends HKT, G extends HKT3, R2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose3RC<G, R2>,
): <C, D>(
  second: Kind<F, Kind3<G, R2, C, D>>,
) => <B>(first: Kind<F, Kind3<G, R2, B, C>>) => Kind<F, Kind3<G, R2, B, D>>

export function compose<F extends HKT, G extends HKT3>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose3<G>,
): <R2, C, D>(
  second: Kind<F, Kind3<G, R2, C, D>>,
) => <B>(first: Kind<F, Kind3<G, R2, B, C>>) => Kind<F, Kind3<G, R2, B, D>>

export function compose<F extends HKT, G extends HKT3, R2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose3RC<G, R2>,
): <C, D>(
  second: Kind<F, Kind3<G, R2, C, D>>,
) => <B>(first: Kind<F, Kind3<G, R2, B, C>>) => Kind<F, Kind3<G, R2, B, D>>

export function compose<F extends HKT, G extends HKT3>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose3<G>,
): <R2, C, D>(
  second: Kind<F, Kind3<G, R2, C, D>>,
) => <B>(first: Kind<F, Kind3<G, R2, B, C>>) => Kind<F, Kind3<G, R2, B, D>>

export function compose<F extends HKT10, G extends HKT2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose2<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT9, G extends HKT2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose2<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT8, G extends HKT2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose2<G>,
): <X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT7, G extends HKT2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose2<G>,
): <W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT6, G extends HKT2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose2<G>,
): <V1, U1, S1, R1, E1, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT5, G extends HKT2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose2<G>,
): <U1, S1, R1, E1, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, E1, G extends HKT2>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose2<G>,
): <S1, R1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT2>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose2<G>,
): <S1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT2>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose2<G>,
): <R1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, R1, G extends HKT2>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose2<G>,
): <S1, E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT2>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose2<G>,
): <E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, S1, G extends HKT2>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose2<G>,
): <R1, E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT2>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose2<G>,
): <C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, G extends HKT2>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose2<G>,
): <S1, R1, E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT3, E1, G extends HKT2>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose2<G>,
): <R1, C, D>(
  second: Kind3<F, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind2<G, B, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT2>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose2<G>,
): <C, D>(
  second: Kind3<F, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind2<G, B, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT3, R1, G extends HKT2>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose2<G>,
): <E1, C, D>(
  second: Kind3<F, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind2<G, B, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT3, G extends HKT2>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose2<G>,
): <R1, E1, C, D>(
  second: Kind3<F, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind2<G, B, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT2, E1, G extends HKT2>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose2<G>,
): <C, D>(
  second: Kind2<F, E1, Kind2<G, C, D>>,
) => <B>(first: Kind2<F, E1, Kind2<G, B, C>>) => Kind2<F, E1, Kind2<G, B, D>>

export function compose<F extends HKT2, G extends HKT2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose2<G>,
): <E1, C, D>(
  second: Kind2<F, E1, Kind2<G, C, D>>,
) => <B>(first: Kind2<F, E1, Kind2<G, B, C>>) => Kind2<F, E1, Kind2<G, B, D>>

export function compose<F extends HKT, G extends HKT2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose2<G>,
): <C, D>(
  second: Kind<F, Kind2<G, C, D>>,
) => <B>(first: Kind<F, Kind2<G, B, C>>) => Kind<F, Kind2<G, B, D>>

export function compose<F extends HKT, G extends HKT2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose2<G>,
): <C, D>(
  second: Kind<F, Kind2<G, C, D>>,
) => <B>(first: Kind<F, Kind2<G, B, C>>) => Kind<F, Kind2<G, B, D>>

export function compose<F extends HKT10, G extends HKT2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeCompose<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT9, G extends HKT2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeCompose<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT8, G extends HKT2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeCompose<G>,
): <X1, W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT7, G extends HKT2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeCompose<G>,
): <W1, V1, U1, S1, R1, E1, C, D>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT6, G extends HKT2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeCompose<G>,
): <V1, U1, S1, R1, E1, C, D>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT5, G extends HKT2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeCompose<G>,
): <U1, S1, R1, E1, C, D>(
  second: Kind5<F, U1, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(
  first: Kind5<F, U1, S1, R1, E1, Kind2<G, B, C>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, E1, G extends HKT2>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeCompose<G>,
): <S1, R1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, R1, E1, G extends HKT2>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeCompose<G>,
): <S1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, S1, E1, G extends HKT2>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeCompose<G>,
): <R1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, R1, G extends HKT2>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeCompose<G>,
): <S1, E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, S1, R1, G extends HKT2>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeCompose<G>,
): <E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, S1, G extends HKT2>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeCompose<G>,
): <R1, E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, S1, R1, E1, G extends HKT2>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeCompose<G>,
): <C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT4, G extends HKT2>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeCompose<G>,
): <S1, R1, E1, C, D>(
  second: Kind4<F, S1, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind4<F, S1, R1, E1, Kind2<G, B, C>>) => Kind4<F, S1, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT3, E1, G extends HKT2>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeCompose<G>,
): <R1, C, D>(
  second: Kind3<F, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind2<G, B, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT3, R1, E1, G extends HKT2>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeCompose<G>,
): <C, D>(
  second: Kind3<F, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind2<G, B, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT3, R1, G extends HKT2>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeCompose<G>,
): <E1, C, D>(
  second: Kind3<F, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind2<G, B, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT3, G extends HKT2>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeCompose<G>,
): <R1, E1, C, D>(
  second: Kind3<F, R1, E1, Kind2<G, C, D>>,
) => <B>(first: Kind3<F, R1, E1, Kind2<G, B, C>>) => Kind3<F, R1, E1, Kind2<G, B, D>>

export function compose<F extends HKT2, E1, G extends HKT2>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeCompose<G>,
): <C, D>(
  second: Kind2<F, E1, Kind2<G, C, D>>,
) => <B>(first: Kind2<F, E1, Kind2<G, B, C>>) => Kind2<F, E1, Kind2<G, B, D>>

export function compose<F extends HKT2, G extends HKT2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeCompose<G>,
): <E1, C, D>(
  second: Kind2<F, E1, Kind2<G, C, D>>,
) => <B>(first: Kind2<F, E1, Kind2<G, B, C>>) => Kind2<F, E1, Kind2<G, B, D>>

export function compose<F extends HKT, G extends HKT2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeCompose<G>,
): <C, D>(
  second: Kind<F, Kind2<G, C, D>>,
) => <B>(first: Kind<F, Kind2<G, B, C>>) => Kind<F, Kind2<G, B, D>>

export function compose<F extends HKT, G extends HKT2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose<G>,
): <C, D>(
  second: Kind<F, Kind2<G, C, D>>,
) => <B>(first: Kind<F, Kind2<G, B, C>>) => Kind<F, Kind2<G, B, D>>

export function compose<F extends HKT, G extends HKT2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeCompose<G>,
): <C, D>(
  second: Kind<F, Kind2<G, C, D>>,
) => <B>(first: Kind<F, Kind2<G, B, C>>) => Kind<F, Kind2<G, B, D>> {
  return <C, D>(second: Kind<F, Kind2<G, C, D>>) =>
    <B>(first: Kind<F, Kind2<G, B, C>>) =>
      pipe(
        first,
        F.map((f) =>
          pipe(
            second,
            F.map((s) => pipe(f, G.compose(s))),
          ),
        ),
        F.flatten,
      )
}
