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
import {
  CovariantWithIndex,
  CovariantWithIndex1,
  CovariantWithIndex10,
  CovariantWithIndex2,
  CovariantWithIndex2EC,
  CovariantWithIndex3,
  CovariantWithIndex3EC,
  CovariantWithIndex3RC,
  CovariantWithIndex3REC,
  CovariantWithIndex4,
  CovariantWithIndex4EC,
  CovariantWithIndex4RC,
  CovariantWithIndex4REC,
  CovariantWithIndex4SC,
  CovariantWithIndex4SEC,
  CovariantWithIndex4SRC,
  CovariantWithIndex4SREC,
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
} from './IdentityBoth'

/* #region ForEachWithIndex */
export interface ForEachWithIndex<T extends HKT, K> extends CovariantWithIndex<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
  }
}

export interface ForEachWithIndex1<T extends HKT, K> extends CovariantWithIndex1<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind5<T2, U2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind4<T2, S2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind3<T2, R2, E2, Kind<T, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind2<T2, E2, Kind<T, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T2, Kind<T, B>>
  }
}

export interface ForEachWithIndex2<T extends HKT2, K> extends CovariantWithIndex2<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
  }
}

export interface ForEachWithIndex2EC<T extends HKT2, K, E1>
  extends CovariantWithIndex2EC<T, K, E1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    ) => (kind: Kind2<T, E1, A>) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => (kind: Kind2<T, E1, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => (kind: Kind2<T, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => (kind: Kind2<T, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind4<T2, S2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind3<T2, R2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind2<T2, E2, Kind2<T, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind2<T, E1, A>) => Kind<T2, Kind2<T, E1, B>>
  }
}

export interface ForEachWithIndex3<T extends HKT3, K> extends CovariantWithIndex3<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEachWithIndex3RC<T extends HKT3, K, R1>
  extends CovariantWithIndex3RC<T, K, R1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
      kind: Kind3<T, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => <E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => <E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEachWithIndex3REC<T extends HKT3, K, R1, E1>
  extends CovariantWithIndex3REC<T, K, R1, E1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    ) => (
      kind: Kind3<T, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => (
      kind: Kind3<T, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => (kind: Kind3<T, R1, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => (kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEachWithIndex3EC<T extends HKT3, K, E1>
  extends CovariantWithIndex3EC<T, K, E1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    ) => <R1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => <R1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => <R1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind3<T2, R2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind2<T2, E2, Kind3<T, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1>(kind: Kind3<T, R1, E1, A>) => Kind<T2, Kind3<T, R1, E1, B>>
  }
}

export interface ForEachWithIndex4<T extends HKT4, K> extends CovariantWithIndex4<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex4SREC<T extends HKT4, K, S1, R1, E1>
  extends CovariantWithIndex4SREC<T, K, S1, R1, E1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    ) => (
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => (
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => (
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => (
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex4SC<T extends HKT4, K, S1>
  extends CovariantWithIndex4SC<T, K, S1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex4SRC<T extends HKT4, K, S1, R1>
  extends CovariantWithIndex4SRC<T, K, S1, R1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => <E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => <E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => <E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex4RC<T extends HKT4, K, R1>
  extends CovariantWithIndex4RC<T, K, R1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex4SEC<T extends HKT4, K, S1, E1>
  extends CovariantWithIndex4SEC<T, K, S1, E1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex4REC<T extends HKT4, K, R1, E1>
  extends CovariantWithIndex4REC<T, K, R1, E1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex4EC<T extends HKT4, K, E1>
  extends CovariantWithIndex4EC<T, K, E1> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
      A,
      V2,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1, R1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind2<T2, E2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <S1, R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind<T2, Kind4<T, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex5<T extends HKT5, K> extends CovariantWithIndex5<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex6<T extends HKT6, K> extends CovariantWithIndex6<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind6<T, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex7<T extends HKT7, K> extends CovariantWithIndex7<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind7<T, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex8<T extends HKT8, K> extends CovariantWithIndex8<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind8<T, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex9<T extends HKT9, K> extends CovariantWithIndex9<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}

export interface ForEachWithIndex10<T extends HKT10, K> extends CovariantWithIndex10<T, K> {
  readonly forEachWithIndex: {
    <T2 extends HKT10, K2>(IB: IdentityBoth10<T2> & CovariantWithIndex10<T2, K2>): <
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
    <T2 extends HKT9, K2>(IB: IdentityBoth9<T2> & CovariantWithIndex9<T2, K2>): <
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
    <T2 extends HKT8, K2>(IB: IdentityBoth8<T2> & CovariantWithIndex8<T2, K2>): <
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
    <T2 extends HKT7, K2>(IB: IdentityBoth7<T2> & CovariantWithIndex7<T2, K2>): <
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
    <T2 extends HKT6, K2>(IB: IdentityBoth6<T2> & CovariantWithIndex6<T2, K2>): <
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
    <T2 extends HKT5, K2>(IB: IdentityBoth5<T2> & CovariantWithIndex5<T2, K2>): <
      A,
      U2,
      S2,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind5<T2, U2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, E2>(IB: IdentityBoth4EC<T2, E2> & CovariantWithIndex4EC<T2, K2, E2>): <
      A,
      S2,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2, E2>(
      IB: IdentityBoth4REC<T2, R2, E2> & CovariantWithIndex4REC<T2, K2, R2, E2>,
    ): <A, S2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, E2>(
      IB: IdentityBoth4SEC<T2, S2, E2> & CovariantWithIndex4SEC<T2, K2, S2, E2>,
    ): <A, R2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, R2>(IB: IdentityBoth4RC<T2, R2> & CovariantWithIndex4RC<T2, K2, R2>): <
      A,
      S2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2>(
      IB: IdentityBoth4SRC<T2, S2, R2> & CovariantWithIndex4SRC<T2, K2, S2, R2>,
    ): <A, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2>(IB: IdentityBoth4SC<T2, S2> & CovariantWithIndex4SC<T2, K2, S2>): <
      A,
      R2,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2, S2, R2, E2>(
      IB: IdentityBoth4SREC<T2, S2, R2, E2> & CovariantWithIndex4SREC<T2, K2, S2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT4, K2>(IB: IdentityBoth4<T2> & CovariantWithIndex4<T2, K2>): <A, S2, R2, E2, B>(
      f: (k: K, a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind4<T2, S2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, E2>(IB: IdentityBoth3EC<T2, E2> & CovariantWithIndex3EC<T2, K2, E2>): <
      A,
      R2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2, E2>(
      IB: IdentityBoth3REC<T2, R2, E2> & CovariantWithIndex3REC<T2, K2, R2, E2>,
    ): <A, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2, R2>(IB: IdentityBoth3RC<T2, R2> & CovariantWithIndex3RC<T2, K2, R2>): <
      A,
      E2,
      B,
    >(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT3, K2>(IB: IdentityBoth3<T2> & CovariantWithIndex3<T2, K2>): <A, R2, E2, B>(
      f: (k: K, a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind3<T2, R2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2, E2>(IB: IdentityBoth2EC<T2, E2> & CovariantWithIndex2EC<T2, K2, E2>): <
      A,
      B,
    >(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT2, K2>(IB: IdentityBoth2<T2> & CovariantWithIndex2<T2, K2>): <A, E2, B>(
      f: (k: K, a: A) => Kind2<T2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind2<T2, E2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth1<T2> & CovariantWithIndex1<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
    <T2 extends HKT, K2>(IB: IdentityBoth<T2> & CovariantWithIndex<T2, K2>): <A, B>(
      f: (k: K, a: A) => Kind<T2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind<T2, Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>>
  }
}
/* #endregion */
export function forEach<T extends HKT10, K>(
  FEWI: ForEachWithIndex10<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT9, K>(
  FEWI: ForEachWithIndex9<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT8, K>(
  FEWI: ForEachWithIndex8<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT7, K>(
  FEWI: ForEachWithIndex7<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT6, K>(
  FEWI: ForEachWithIndex6<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT5, K>(
  FEWI: ForEachWithIndex5<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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
  ) => <U1, S1, R1, E1>(kind: Kind5<T, U1, S1, R1, E1, A>) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
  <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>): <A, B>(
    f: (a: A) => Kind<T2, B>,
  ) => <U1, S1, R1, E1>(kind: Kind5<T, U1, S1, R1, E1, A>) => Kind<T2, Kind5<T, U1, S1, R1, E1, B>>
}

export function forEach<T extends HKT4, K, E>(
  FEWI: ForEachWithIndex4EC<T, K, E>,
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
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT4, K, R1, E1>(
  FEWI: ForEachWithIndex4REC<T, K, R1, E1>,
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
  ) => <S1>(kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT4, K, S1, E1>(
  FEWI: ForEachWithIndex4SEC<T, K, S1, E1>,
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
  ) => <R1>(kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT4, K, R1>(
  FEWI: ForEachWithIndex4RC<T, K, R1>,
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
  ) => <S1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT4, K, S1, R1>(
  FEWI: ForEachWithIndex4SRC<T, K, S1, R1>,
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
  ) => <E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind6<T2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT4, K, S1>(
  FEWI: ForEachWithIndex4SC<T, K, S1>,
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
  ) => <R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind5<T2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT4, K, S1, R1, E1>(
  FEWI: ForEachWithIndex4SREC<T, K, S1, R1, E1>,
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
  ) => (kind: Kind4<T, S1, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT4, K>(
  FEWI: ForEachWithIndex4<T, K>,
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
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2, E2>(IBC: IdentityBoth4REC<T2, R2, E2> & Covariant4REC<T2, R2, E2>): <
    A,
    S2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, E2>(IBC: IdentityBoth4SEC<T2, S2, E2> & Covariant4SEC<T2, S2, E2>): <
    A,
    R2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, R2>(IBC: IdentityBoth4RC<T2, R2> & Covariant4RC<T2, R2>): <A, S2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2>(IBC: IdentityBoth4SRC<T2, S2, R2> & Covariant4SRC<T2, S2, R2>): <
    A,
    E2,
    B,
  >(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2>(IBC: IdentityBoth4SC<T2, S2> & Covariant4SC<T2, S2>): <A, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4, S2, R2, E2>(
    IBC: IdentityBoth4SREC<T2, S2, R2, E2> & Covariant4SREC<T2, S2, R2, E2>,
  ): <A, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT4>(IBC: IdentityBoth4<T2> & Covariant4<T2>): <A, S2, R2, E2, B>(
    f: (a: A) => Kind4<T2, S2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T2, S2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, E2>(IBC: IdentityBoth3EC<T2, E2> & Covariant3EC<T2, E2>): <A, R2, B>(
    f: (a: A) => Kind3<T2, R2, E2, B>,
  ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind3<T2, R2, E2, Kind4<T, S1, R1, E1, B>>
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT3, K, E>(
  FEWI: ForEachWithIndex3EC<T, K, E>,
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
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT3, K, R1, E1>(
  FEWI: ForEachWithIndex3REC<T, K, R1, E1>,
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
  ) => (kind: Kind3<T, R1, E1, A>) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT3, K, R1>(
  FEWI: ForEachWithIndex3RC<T, K, R1>,
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
  ) => <E1>(kind: Kind3<T, R1, E1, A>) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT3, K>(
  FEWI: ForEachWithIndex3<T, K>,
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
  ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind7<T2, W2, V2, U2, S2, R2, E2, Kind3<T, R1, E1, B>>
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT2, K, E>(
  FEWI: ForEachWithIndex2EC<T, K, E>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT2, K>(
  FEWI: ForEachWithIndex2<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT, K>(
  FEWI: ForEachWithIndex1<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT, K>(
  FEWI: ForEachWithIndex<T, K>,
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
  <T2 extends HKT3, R2, E2>(IBC: IdentityBoth3REC<T2, R2, E2> & Covariant3REC<T2, R2, E2>): <A, B>(
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

export function forEach<T extends HKT, K>(FEWI: ForEachWithIndex<T, K>) {
  return <T2 extends HKT>(IBC: IdentityBoth<T2> & Covariant<T2>) =>
    <A, B>(f: (a: A) => Kind<T2, B>) =>
      FEWI.forEachWithIndex<T2, unknown>({ ...IBC, mapWithIndex: (f) => IBC.map((a) => f(0, a)) })(
        (_, a: A) => f(a),
      )
}
