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
} from '../../HKT'
import type { Maybe } from '../../Maybe'
import { flow } from '../../function'
import type {
  Compact,
  Compact1,
  Compact10,
  Compact2,
  Compact2EC,
  Compact3,
  Compact3EC,
  Compact3RC,
  Compact3REC,
  Compact4,
  Compact4EC,
  Compact4RC,
  Compact4REC,
  Compact4SC,
  Compact4SEC,
  Compact4SRC,
  Compact4SREC,
  Compact5,
  Compact6,
  Compact7,
  Compact8,
  Compact9,
} from '../Compact'
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
} from '../Covariant'
import {
  IdentityBoth,
  IdentityBoth1,
  IdentityBoth10,
  IdentityBoth2,
  IdentityBoth2EC,
  IdentityBoth3,
  IdentityBoth3EC,
  IdentityBoth3RC,
  IdentityBoth3REC,
  IdentityBoth4,
  IdentityBoth4EC,
  IdentityBoth4RC,
  IdentityBoth4REC,
  IdentityBoth4SC,
  IdentityBoth4SEC,
  IdentityBoth4SRC,
  IdentityBoth4SREC,
  IdentityBoth5,
  IdentityBoth6,
  IdentityBoth7,
  IdentityBoth8,
  IdentityBoth9,
} from '../IdentityBoth'

import {
  ForEach,
  ForEach1,
  ForEach10,
  ForEach2,
  ForEach2EC,
  ForEach3,
  ForEach3EC,
  ForEach3RC,
  ForEach3REC,
  ForEach4,
  ForEach4EC,
  ForEach4RC,
  ForEach4REC,
  ForEach4SC,
  ForEach4SEC,
  ForEach4SRC,
  ForEach4SREC,
  ForEach5,
  ForEach6,
  ForEach7,
  ForEach8,
  ForEach9,
} from './ForEach'

/* #region compacted */
export function compacted<T extends HKT10>(
  FEC: ForEach10<T> & Compact10<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
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
    Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>
  >
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
}

export function compacted<T extends HKT9>(
  FEC: ForEach9<T> & Compact9<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
}

export function compacted<T extends HKT8>(
  FEC: ForEach8<T> & Compact8<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
}

export function compacted<T extends HKT7>(
  FEC: ForEach7<T> & Compact7<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
}

export function compacted<T extends HKT6>(
  FEC: ForEach6<T> & Compact6<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, B>>
}

export function compacted<T extends HKT5>(
  FEC: ForEach5<T> & Compact5<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(kind: Kind5<T, U1, S1, R1, E1, A>) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <U1, S1, R1, E1>(kind: Kind5<T, U1, S1, R1, E1, A>) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
}

export function compacted<T extends HKT4, E>(
  FEC: ForEach4EC<T, E> & Compact4EC<T, E>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind<T2, Kind4<T, S1, R1, E, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <S1, R1>(kind: Kind4<T, S1, R1, E, A>) => Kind<T2, Kind4<T, S1, R1, E, B>>
}

export function compacted<T extends HKT4, R1, E1>(
  FEC: ForEach4REC<T, R1, E1> & Compact4REC<T, R1, E1>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
}

export function compacted<T extends HKT4, S1, E1>(
  FEC: ForEach4SEC<T, S1, E1> & Compact4SEC<T, S1, E1>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
}

export function compacted<T extends HKT4, R1>(
  FEC: ForEach4RC<T, R1> & Compact4RC<T, R1>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
}

export function compacted<T extends HKT4, S1, R1>(
  FEC: ForEach4SRC<T, S1, R1> & Compact4SRC<T, S1, R1>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
}

export function compacted<T extends HKT4, S1>(
  FEC: ForEach4SC<T, S1> & Compact4SC<T, S1>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
}

export function compacted<T extends HKT4, S1, R1, E1>(
  FEC: ForEach4SREC<T, S1, R1, E1> & Compact4SREC<T, S1, R1, E1>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
}

export function compacted<T extends HKT4>(
  FEC: ForEach4<T> & Compact4<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
}

export function compacted<T extends HKT3, E>(
  FEC: ForEach3EC<T, E> & Compact3EC<T, E>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind2<T2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind2<T2, E2, Kind3<T, R1, E, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind<T2, Kind3<T, R1, E, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind<T2, Kind3<T, R1, E, B>>
}

export function compacted<T extends HKT3, R1, E1>(
  FEC: ForEach3REC<T, R1, E1> & Compact3REC<T, R1, E1>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
}

export function compacted<T extends HKT3, R1>(
  FEC: ForEach3RC<T, R1> & Compact3RC<T, R1>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
}

export function compacted<T extends HKT3>(
  FEC: ForEach3<T> & Compact3<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
}

export function compacted<T extends HKT2, E>(
  FEC: ForEach2EC<T, E> & Compact2EC<T, E>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind5<T2, U2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind3<T2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind3<T2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind3<T2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind3<T2, R2, E2, Kind2<T, E, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind2<T2, E2, Kind2<T, E, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind2<T2, E2, Kind2<T, E, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind<T2, Kind2<T, E, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind2<T, E, A>) => Kind<T2, Kind2<T, E, B>>
}

export function compacted<T extends HKT2>(
  FEC: ForEach2<T> & Compact2<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
}

export function compacted<T extends HKT>(
  FEC: ForEach1<T> & Compact1<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
}

export function compacted<T extends HKT>(
  FEC: ForEach<T> & Compact<T>,
): {
  <T2 extends HKT10>(IBC: IdentityBoth10<T2> & Covariant10<T2>): <
    A,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT9>(IBC: IdentityBoth9<T2> & Covariant9<T2>): <
    A,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    B,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
    f: (a: A) => Kind3<T2, R2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
    f: (a: A) => Kind2<T2, E2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, Maybe<B>>,
  ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
}

export function compacted<T extends HKT>(FEC: ForEach<T> & Compact<T>) {
  return <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>) => {
    const forEach = FEC.forEach(IBC)

    return <A, B>(f: (a: A) => Kind<T2, Maybe<B>>) => flow(forEach(f), IBC.map(FEC.compact))
  }
}
/* #endregion */
