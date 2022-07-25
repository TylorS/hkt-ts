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
} from '../../HKT.js'
import { identity } from '../../function.js'
import {
  Covariant,
  Covariant1,
  Covariant10,
  Covariant2,
  Covariant3,
  Covariant4,
  Covariant5,
  Covariant6,
  Covariant7,
  Covariant8,
  Covariant9,
} from '../Covariant.js'
import {
  IdentityBoth,
  IdentityBoth1,
  IdentityBoth10,
  IdentityBoth2,
  IdentityBoth3,
  IdentityBoth4,
  IdentityBoth5,
  IdentityBoth6,
  IdentityBoth7,
  IdentityBoth8,
  IdentityBoth9,
} from '../IdentityBoth.js'

import {
  ForEach,
  ForEach1,
  ForEach10,
  ForEach2,
  ForEach3,
  ForEach4,
  ForEach5,
  ForEach6,
  ForEach7,
  ForEach8,
  ForEach9,
} from './ForEach.js'

/* #region sequence */
export function sequence<T extends HKT10>(
  FE: ForEach10<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind10<
      T,
      Z1,
      Y1,
      X1,
      W1,
      V1,
      U1,
      S1,
      R1,
      E1,
      Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
    >,
  ) => Kind10<
    T2,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>
  >
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind10<
      T,
      Z1,
      Y1,
      X1,
      W1,
      V1,
      U1,
      S1,
      R1,
      E1,
      Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
    >,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    R2,
    E2,
    A,
  >(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    E2,
    A,
  >(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    A,
  >(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
}

export function sequence<T extends HKT9>(
  FE: ForEach9<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind9<
      T,
      Y1,
      X1,
      W1,
      V1,
      U1,
      S1,
      R1,
      E1,
      Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
    >,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    R2,
    E2,
    A,
  >(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    E2,
    A,
  >(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>>
}

export function sequence<T extends HKT8>(
  FE: ForEach8<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    R2,
    E2,
    A,
  >(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>>
}

export function sequence<T extends HKT7>(
  FE: ForEach7<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <W1, V1, U1, S1, R1, E1, R2, E2, A>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <W1, V1, U1, S1, R1, E1, E2, A>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <W1, V1, U1, S1, R1, E1, A>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <W1, V1, U1, S1, R1, E1, A>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, A>>
}

export function sequence<T extends HKT6>(
  FE: ForEach6<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    V1,
    U1,
    S1,
    R1,
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    V1,
    U1,
    S1,
    R1,
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <
    V1,
    U1,
    S1,
    R1,
    E1,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <
    V1,
    U1,
    S1,
    R1,
    E1,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <
    V1,
    U1,
    S1,
    R1,
    E1,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <
    V1,
    U1,
    S1,
    R1,
    E1,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <V1, U1, S1, R1, E1, S2, R2, E2, A>(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <V1, U1, S1, R1, E1, R2, E2, A>(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <V1, U1, S1, R1, E1, E2, A>(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <V1, U1, S1, R1, E1, A>(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <V1, U1, S1, R1, E1, A>(
    kind: Kind6<T, V1, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, A>>
}

export function sequence<T extends HKT5>(
  FE: ForEach5<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    U1,
    S1,
    R1,
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind5<T, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    U1,
    S1,
    R1,
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind5<T, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <
    U1,
    S1,
    R1,
    E1,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind5<T, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <
    U1,
    S1,
    R1,
    E1,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind5<T, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <
    U1,
    S1,
    R1,
    E1,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind5<T, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <U1, S1, R1, E1, U2, S2, R2, E2, A>(
    kind: Kind5<T, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <U1, S1, R1, E1, S2, R2, E2, A>(
    kind: Kind5<T, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <U1, S1, R1, E1, R2, E2, A>(
    kind: Kind5<T, U1, S1, R1, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <U1, S1, R1, E1, E2, A>(
    kind: Kind5<T, U1, S1, R1, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <U1, S1, R1, E1, A>(
    kind: Kind5<T, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind5<T, U1, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <U1, S1, R1, E1, A>(
    kind: Kind5<T, U1, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind5<T, U1, S1, R1, E1, A>>
}

export function sequence<T extends HKT4>(
  FE: ForEach4<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    S1,
    R1,
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind4<T, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    S1,
    R1,
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind4<T, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <
    S1,
    R1,
    E1,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind4<T, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <
    S1,
    R1,
    E1,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind4<T, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <S1, R1, E1, V2, U2, S2, R2, E2, A>(
    kind: Kind4<T, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <S1, R1, E1, U2, S2, R2, E2, A>(
    kind: Kind4<T, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <S1, R1, E1, S2, R2, E2, A>(
    kind: Kind4<T, S1, R1, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <S1, R1, E1, R2, E2, A>(
    kind: Kind4<T, S1, R1, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <S1, R1, E1, E2, A>(
    kind: Kind4<T, S1, R1, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <S1, R1, E1, A>(
    kind: Kind4<T, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind4<T, S1, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <S1, R1, E1, A>(
    kind: Kind4<T, S1, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind4<T, S1, R1, E1, A>>
}

export function sequence<T extends HKT3>(
  FE: ForEach3<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    R1,
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind3<T, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    R1,
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind3<T, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <
    R1,
    E1,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind3<T, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <R1, E1, W2, V2, U2, S2, R2, E2, A>(
    kind: Kind3<T, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <R1, E1, V2, U2, S2, R2, E2, A>(
    kind: Kind3<T, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <R1, E1, U2, S2, R2, E2, A>(
    kind: Kind3<T, R1, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <R1, E1, S2, R2, E2, A>(
    kind: Kind3<T, R1, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <R1, E1, R2, E2, A>(
    kind: Kind3<T, R1, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <R1, E1, E2, A>(
    kind: Kind3<T, R1, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind3<T, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <R1, E1, A>(
    kind: Kind3<T, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind3<T, R1, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <R1, E1, A>(
    kind: Kind3<T, R1, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind3<T, R1, E1, A>>
}

export function sequence<T extends HKT2>(
  FE: ForEach2<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    E1,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind2<T, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    E1,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind2<T, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
    kind: Kind2<T, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <E1, W2, V2, U2, S2, R2, E2, A>(
    kind: Kind2<T, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <E1, V2, U2, S2, R2, E2, A>(
    kind: Kind2<T, E1, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind2<T, E1, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <E1, U2, S2, R2, E2, A>(
    kind: Kind2<T, E1, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind2<T, E1, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <E1, S2, R2, E2, A>(
    kind: Kind2<T, E1, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind2<T, E1, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <E1, R2, E2, A>(
    kind: Kind2<T, E1, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind2<T, E1, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <E1, E2, A>(
    kind: Kind2<T, E1, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind2<T, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <E1, A>(
    kind: Kind2<T, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind2<T, E1, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <E1, A>(
    kind: Kind2<T, E1, Kind<T2, A>>,
  ) => Kind<T2, Kind2<T, E1, A>>
}

export function sequence<T extends HKT>(
  FE: ForEach1<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind<T, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
    kind: Kind<T, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <X2, W2, V2, U2, S2, R2, E2, A>(
    kind: Kind<T, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <W2, V2, U2, S2, R2, E2, A>(
    kind: Kind<T, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <V2, U2, S2, R2, E2, A>(
    kind: Kind<T, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <U2, S2, R2, E2, A>(
    kind: Kind<T, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <S2, R2, E2, A>(
    kind: Kind<T, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <R2, E2, A>(
    kind: Kind<T, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind<T, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <E2, A>(
    kind: Kind<T, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind<T, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A>(
    kind: Kind<T, Kind<T2, A>>,
  ) => Kind<T2, Kind<T, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A>(
    kind: Kind<T, Kind<T2, A>>,
  ) => Kind<T2, Kind<T, A>>
}

export function sequence<T extends HKT>(
  FE: ForEach<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A,
  >(
    kind: Kind<T, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
    kind: Kind<T, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <X2, W2, V2, U2, S2, R2, E2, A>(
    kind: Kind<T, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <W2, V2, U2, S2, R2, E2, A>(
    kind: Kind<T, Kind7<T2, W2, V2, U2, S2, R2, E2, A>>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <V2, U2, S2, R2, E2, A>(
    kind: Kind<T, Kind6<T2, V2, U2, S2, R2, E2, A>>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <U2, S2, R2, E2, A>(
    kind: Kind<T, Kind5<T2, U2, S2, R2, E2, A>>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <S2, R2, E2, A>(
    kind: Kind<T, Kind4<T2, S2, R2, E2, A>>,
  ) => Kind4<T2, S2, R2, E2, Kind<T, A>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <R2, E2, A>(
    kind: Kind<T, Kind3<T2, R2, E2, A>>,
  ) => Kind3<T2, R2, E2, Kind<T, A>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <E2, A>(
    kind: Kind<T, Kind2<T2, E2, A>>,
  ) => Kind2<T2, E2, Kind<T, A>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A>(
    kind: Kind<T, Kind<T2, A>>,
  ) => Kind<T2, Kind<T, A>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A>(
    kind: Kind<T, Kind<T2, A>>,
  ) => Kind<T2, Kind<T, A>>
}

export function sequence<T extends HKT>(
  FE: ForEach<T>,
): <T2 extends HKT>(
  IBC: IdentityBoth<T2> & Covariant<T2>,
) => <A>(kind: Kind<T, Kind<T2, A>>) => Kind<T2, Kind<T, A>> {
  return <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>) => {
    const forEach = FE.forEach(IBC)

    return <A>(kind: Kind<T, Kind<T2, A>>) => forEach(identity)(kind)
  }
}

/* #endregion */
