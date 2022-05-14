import type { Either } from '../../Either'
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
import { flow } from '../../function'
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
import type {
  Separate,
  Separate1,
  Separate10,
  Separate2,
  Separate2EC,
  Separate3,
  Separate3EC,
  Separate3RC,
  Separate3REC,
  Separate4,
  Separate4EC,
  Separate4RC,
  Separate4REC,
  Separate4SC,
  Separate4SEC,
  Separate4SRC,
  Separate4SREC,
  Separate5,
  Separate6,
  Separate7,
  Separate8,
  Separate9,
} from '../Separate'

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

export function separated<T extends HKT10>(
  FES: ForEach10<T> & Separate10<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
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
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind6<
    T2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind5<
    T2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<
    T2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<
    T2,
    E2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<
    T2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<
    T2,
    readonly [
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
}

export function separated<T extends HKT9>(
  FES: ForEach9<T> & Separate9<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
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
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind6<
    T2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind5<
    T2,
    U2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<
    T2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<
    T2,
    E2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<
    T2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<
    T2,
    readonly [
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>,
      Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, C>,
    ]
  >
}

export function separated<T extends HKT8>(
  FES: ForEach8<T> & Separate8<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
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
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind6<
    T2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind5<
    T2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<
    T2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<
    T2,
    E2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<
    T2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <X1, W1, V1, U1, S1, R1, E1>(
    kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<
    T2,
    readonly [Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>, Kind8<T, X1, W1, V1, U1, S1, R1, E1, C>]
  >
}

export function separated<T extends HKT7>(
  FES: ForEach7<T> & Separate7<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
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
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind6<
    T2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind5<
    T2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<
    T2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind2<
    T2,
    E2,
    readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <W1, V1, U1, S1, R1, E1>(
    kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind7<T, W1, V1, U1, S1, R1, E1, B>, Kind7<T, W1, V1, U1, S1, R1, E1, C>]>
}

export function separated<T extends HKT6>(
  FES: ForEach6<T> & Separate6<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
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
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind6<
    T2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind5<
    T2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind4<
    T2,
    S2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind3<
    T2,
    R2,
    E2,
    readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <V1, U1, S1, R1, E1>(
    kind: Kind6<T, V1, U1, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind6<T, V1, U1, S1, R1, E1, B>, Kind6<T, V1, U1, S1, R1, E1, C>]>
}

export function separated<T extends HKT5>(
  FES: ForEach5<T> & Separate5<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
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
    readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind6<
    T2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind5<
    T2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]
  >
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <U1, S1, R1, E1>(
    kind: Kind5<T, U1, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind5<T, U1, S1, R1, E1, B>, Kind5<T, U1, S1, R1, E1, C>]>
}

export function separated<T extends HKT4, E>(
  FES: ForEach4EC<T, E> & Separate4EC<T, E>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
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
    readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <S1, R1>(
    kind: Kind4<T, S1, R1, E, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E, B>, Kind4<T, S1, R1, E, C>]>
}

export function separated<T extends HKT4, R1, E1>(
  FES: ForEach4REC<T, R1, E1> & Separate4REC<T, R1, E1>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
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
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <S1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
}

export function separated<T extends HKT4, S1, E1>(
  FES: ForEach4SEC<T, S1, E1> & Separate4SEC<T, S1, E1>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
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
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <R1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
}

export function separated<T extends HKT4, R1>(
  FES: ForEach4RC<T, R1> & Separate4RC<T, R1>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
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
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <S1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
}

export function separated<T extends HKT4, S1, R1>(
  FES: ForEach4SRC<T, S1, R1> & Separate4SRC<T, S1, R1>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
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
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
}

export function separated<T extends HKT4, S1>(
  FES: ForEach4SC<T, S1> & Separate4SC<T, S1>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
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
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
}

export function separated<T extends HKT4, S1, R1, E1>(
  FES: ForEach4SREC<T, S1, R1, E1> & Separate4SREC<T, S1, R1, E1>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
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
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
}

export function separated<T extends HKT4>(
  FES: ForEach4<T> & Separate4<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
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
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind8<
    T2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind7<
    T2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]
  >
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <S1, R1, E1>(
    kind: Kind4<T, S1, R1, E1, A>,
  ) => Kind<T2, readonly [Kind4<T, S1, R1, E1, B>, Kind4<T, S1, R1, E1, C>]>
}

export function separated<T extends HKT3, E>(
  FES: ForEach3EC<T, E> & Separate3EC<T, E>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
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
    readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind2<T2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <R1>(
    kind: Kind3<T, R1, E, A>,
  ) => Kind2<T2, E2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind<T2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <R1>(kind: Kind3<T, R1, E, A>) => Kind<T2, readonly [Kind3<T, R1, E, B>, Kind3<T, R1, E, C>]>
}

export function separated<T extends HKT3, R1, E1>(
  FES: ForEach3REC<T, R1, E1> & Separate3REC<T, R1, E1>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
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
    readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (
    kind: Kind3<T, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind<T2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (kind: Kind3<T, R1, E1, A>) => Kind<T2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
}

export function separated<T extends HKT3, R1>(
  FES: ForEach3RC<T, R1> & Separate3RC<T, R1>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
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
    readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind<T2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind<T2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
}

export function separated<T extends HKT3>(
  FES: ForEach3<T> & Separate3<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
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
    readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind9<
    T2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]
  >
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind3<T2, R2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind2<T2, E2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind<T2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <R1, E1>(
    kind: Kind3<T, R1, E1, A>,
  ) => Kind<T2, readonly [Kind3<T, R1, E1, B>, Kind3<T, R1, E1, C>]>
}

export function separated<T extends HKT2, E>(
  FES: ForEach2EC<T, E> & Separate2EC<T, E>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind2<T, E, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind2<T, E, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind2<T, E, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind2<T, E, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind2<T, E, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind2<T, E, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind3<T2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind3<T2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind3<T2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind3<T2, R2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind2<T2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind2<T2, E2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind<T2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (kind: Kind2<T, E, A>) => Kind<T2, readonly [Kind2<T, E, B>, Kind2<T, E, C>]>
}

export function separated<T extends HKT2>(
  FES: ForEach2<T> & Separate2<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind5<T2, U2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => <E1>(
    kind: Kind2<T, E1, A>,
  ) => Kind4<T2, S2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, readonly [Kind2<T, E1, B>, Kind2<T, E1, C>]>
}

export function separated<T extends HKT>(
  FES: ForEach1<T> & Separate1<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind<T, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind<T, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind<T, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind2<T2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind2<T2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind<T2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind<T2, readonly [Kind<T, B>, Kind<T, C>]>
}

export function separated<T extends HKT>(
  FES: ForEach<T> & Separate<T>,
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
    C,
  >(
    f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind<T, A>,
  ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
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
    C,
  >(
    f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind<T, A>,
  ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (
    kind: Kind<T, A>,
  ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind6<T2, V2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B, C>(
    f: (a: A) => Kind5<T2, U2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
    C,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B, C>(
    f: (a: A) => Kind4<T2, S2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
    A,
    B,
    C,
  >(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B, C>(
    f: (a: A) => Kind3<T2, R2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind2<T2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B, C>(
    f: (a: A) => Kind2<T2, E2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind2<T2, E2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind<T2, readonly [Kind<T, B>, Kind<T, C>]>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B, C>(
    f: (a: A) => Kind<T2, Either<B, C>>,
  ) => (kind: Kind<T, A>) => Kind<T2, readonly [Kind<T, B>, Kind<T, C>]>
}

export function separated<T extends HKT>(FES: ForEach<T> & Separate<T>) {
  return <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>) => {
    const forEach = FES.forEach(IBC)

    return <A, B, C>(f: (a: A) => Kind<T2, Either<B, C>>) => flow(forEach(f), IBC.map(FES.separate))
  }
}
