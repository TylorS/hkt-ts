import {
  Applicative,
  Applicative1,
  Applicative10,
  Applicative2,
  Applicative3,
  Applicative4,
  Applicative5,
  Applicative6,
  Applicative7,
  Applicative8,
  Applicative9,
} from './Applicative'
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
} from './HKT'

export interface ForEach<T extends HKT> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind<T2, B>>
  }
}

export interface ForEach1<T extends HKT> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => (kind: Kind<T, A>) => Kind<T, Kind<T2, B>>
  }
}

export interface ForEach2<T extends HKT2> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(
      kind: Kind2<T, E1, A>,
    ) => Kind2<T, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <E1>(kind: Kind2<T, E1, A>) => Kind2<T, E1, Kind<T2, B>>
  }
}

export interface ForEach3<T extends HKT3> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind3<T, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind3<T, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind3<T, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(
      kind: Kind3<T, R1, E1, A>,
    ) => Kind3<T, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T, R1, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T, R1, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T, R1, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T, R1, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T, R1, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <R1, E1>(kind: Kind3<T, R1, E1, A>) => Kind3<T, R1, E1, Kind<T2, B>>
  }
}

export interface ForEach4<T extends HKT4> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <S1, R1, E1>(
      kind: Kind4<T, S1, R1, E1, A>,
    ) => Kind4<T, S1, R1, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T, S1, R1, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T, S1, R1, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T, S1, R1, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <S1, R1, E1>(kind: Kind4<T, S1, R1, E1, A>) => Kind4<T, S1, R1, E1, Kind<T2, B>>
  }
}

export interface ForEach5<T extends HKT5> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <U1, S1, R1, E1>(
      kind: Kind5<T, U1, S1, R1, E1, A>,
    ) => Kind5<T, U1, S1, R1, E1, Kind<T2, B>>
  }
}

export interface ForEach6<T extends HKT6> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <V1, U1, S1, R1, E1>(
      kind: Kind6<T, V1, U1, S1, R1, E1, A>,
    ) => Kind6<T, V1, U1, S1, R1, E1, Kind<T2, B>>
  }
}

export interface ForEach7<T extends HKT7> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <W1, V1, U1, S1, R1, E1>(
      kind: Kind7<T, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind7<T, W1, V1, U1, S1, R1, E1, Kind<T2, B>>
  }
}

export interface ForEach8<T extends HKT8> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind8<T, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind8<T, X1, W1, V1, U1, S1, R1, E1, Kind<T2, B>>
  }
}

export interface ForEach9<T extends HKT9> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind9<T, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<T2, B>>
  }
}

export interface ForEach10<T extends HKT10> {
  readonly forEach: {
    <T2 extends HKT10>(A: Applicative10<T2>): <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
        a: A,
      ) => Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<
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
      Kind10<T2, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>
    >
    <T2 extends HKT9>(A: Applicative9<T2>): <A, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <Y2, X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<T2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT8>(A: Applicative8<T2>): <A, X2, W2, V2, U2, S2, R2, E2, B>(
      f: <X2, W2, V2, U2, S2, R2, E2>(a: A) => Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<T2, X2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT7>(A: Applicative7<T2>): <A, W2, V2, U2, S2, R2, E2, B>(
      f: <W2, V2, U2, S2, R2, E2>(a: A) => Kind7<T2, W2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<T2, W2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT6>(A: Applicative6<T2>): <A, V2, U2, S2, R2, E2, B>(
      f: <V2, U2, S2, R2, E2>(a: A) => Kind6<T2, V2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<T2, V2, U2, S2, R2, E2, B>>
    <T2 extends HKT5>(A: Applicative5<T2>): <A, U2, S2, R2, E2, B>(
      f: <U2, S2, R2, E2>(a: A) => Kind5<T2, U2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<T2, U2, S2, R2, E2, B>>
    <T2 extends HKT4>(A: Applicative4<T2>): <A, S2, R2, E2, B>(
      f: <S2, R2, E2>(a: A) => Kind4<T2, S2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<T2, S2, R2, E2, B>>
    <T2 extends HKT3>(A: Applicative3<T2>): <A, R2, E2, B>(
      f: <R2, E2>(a: A) => Kind3<T2, R2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<T2, R2, E2, B>>
    <T2 extends HKT2>(A: Applicative2<T2>): <A, E2, B>(
      f: <E2>(a: A) => Kind2<T2, E2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<T2, E2, B>>
    <T2 extends HKT>(A: Applicative1<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<T2, B>>
    <T2 extends HKT>(A: Applicative<T2>): <A, B>(
      f: (a: A) => Kind<T2, B>,
    ) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
      kind: Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
    ) => Kind10<T, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<T2, B>>
  }
}
