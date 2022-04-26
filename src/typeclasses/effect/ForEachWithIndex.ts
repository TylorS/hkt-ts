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

import {
  CovariantWithIndex,
  CovariantWithIndex1,
  CovariantWithIndex10,
  CovariantWithIndex2,
  CovariantWithIndex3,
  CovariantWithIndex4,
  CovariantWithIndex5,
  CovariantWithIndex6,
  CovariantWithIndex7,
  CovariantWithIndex8,
  CovariantWithIndex9,
} from './CovariantWithIndex'
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
} from './IdentityBoth'

/* #region  Typeclass */
export interface ForEachWithIndex<T extends HKT, K> extends CovariantWithIndex<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
  }
}

export interface ForEachWithIndex1<T extends HKT, K> extends CovariantWithIndex1<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
  }
}

export interface ForEachWithIndex2<T extends HKT2, K> extends CovariantWithIndex2<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind2<T, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
  }
}

export interface ForEachWithIndex3<T extends HKT3, K> extends CovariantWithIndex3<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEachWithIndex4<T extends HKT4, K> extends CovariantWithIndex4<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex5<T extends HKT5, K> extends CovariantWithIndex5<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex6<T extends HKT6, K> extends CovariantWithIndex6<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex7<T extends HKT7, K> extends CovariantWithIndex7<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex8<T extends HKT8, K> extends CovariantWithIndex8<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex9<T extends HKT9, K> extends CovariantWithIndex9<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex10<T extends HKT10, K> extends CovariantWithIndex10<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K>): <
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
      f: (k: K, a: A) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
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
    <T2 extends HKT9>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K>): <
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
      f: (k: K, a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT8>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K>): <
      A,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT7>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K>): <
      A,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT6>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT5>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K>): <A, U2, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}

/* #endregion */
