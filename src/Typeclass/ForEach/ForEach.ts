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
} from '../Covariant.js'
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
} from '../IdentityBoth.js'

/* #region Typeclass */
export interface ForEach<T extends HKT> extends Covariant<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
  }
}

export interface ForEach1<T extends HKT> extends Covariant1<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
  }
}

export interface ForEach2<T extends HKT2> extends Covariant2<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
  }
}

export interface ForEach2EC<T extends HKT2, E1> extends Covariant2EC<T, E1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
  }
}

export interface ForEach3<T extends HKT3> extends Covariant3<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEach3RC<T extends HKT3, R1> extends Covariant3RC<T, R1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEach3REC<T extends HKT3, R1, E1> extends Covariant3REC<T, R1, E1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (
      kind: Kind3<T, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEach3EC<T extends HKT3, E1> extends Covariant3EC<T, E1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEach4<T extends HKT4> extends Covariant4<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEach4SREC<T extends HKT4, S1, R1, E1> extends Covariant4SREC<T, S1, R1, E1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEach4SC<T extends HKT4, S1> extends Covariant4SC<T, S1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEach4SRC<T extends HKT4, S1, R1> extends Covariant4SRC<T, S1, R1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEach4RC<T extends HKT4, R1> extends Covariant4RC<T, R1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEach4SEC<T extends HKT4, S1, E1> extends Covariant4SEC<T, S1, E1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEach4REC<T extends HKT4, R1, E1> extends Covariant4REC<T, R1, E1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEach4EC<T extends HKT4, E1> extends Covariant4EC<T, E1> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1>(
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEach5<T extends HKT5> extends Covariant5<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
  }
}

export interface ForEach6<T extends HKT6> extends Covariant6<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEach7<T extends HKT7> extends Covariant7<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEach8<T extends HKT8> extends Covariant8<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEach9<T extends HKT9> extends Covariant9<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEach10<T extends HKT10> extends Covariant10<T> {
  readonly forEach: {
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
      f: (a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
      f: (a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IBC: IdentityBoth8<T2> & Covariant8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IBC: IdentityBoth7<T2> & Covariant7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IBC: IdentityBoth6<T2> & Covariant6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: (a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IBC: IdentityBoth5<T2> & Covariant5<T2>): <A, U2, S2, R2, E2, B>(
      f: (a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, E2>(IBC: IdentityBoth4EC<T2, E2> & Covariant4EC<T2, E2>): <A, S2, R2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
      A,
      S2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
      A,
      R2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
      A,
      E2,
      B,
    >(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, S2, R2, E2>(
      IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
    ): <A, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
      f: (a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <
      A,
      B,
    >(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, R2>(IBC: IdentityBoth3RC<T2, R2> & Covariant3RC<T2, R2>): <A, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IBC: IdentityBoth3<T2> & Covariant3<T2>): <A, R2, E2, B>(
      f: (a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, E2>(IBC: IdentityBoth2EC<T2, E2> & Covariant2EC<T2, E2>): <A, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IBC: IdentityBoth2<T2> & Covariant2<T2>): <A, E2, B>(
      f: (a: A) => Kind2<T2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth1<T2> & Covariant1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}
/* #endregion */
