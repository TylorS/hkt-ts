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

export interface NaturalTransformation_<F extends HKT, G extends HKT> {
  <A>(kind: Kind<F, A>): Kind<G, A>
}

export interface NaturalTransformation1_<F extends HKT, G extends HKT> {
  <A>(kind: Kind<F, A>): Kind<G, A>
}

export interface NaturalTransformation2_<F extends HKT2, G extends HKT> {
  <E1, A>(kind: Kind2<F, E1, A>): Kind<G, A>
}

export interface NaturalTransformation2E_C<F extends HKT2, E1, G extends HKT> {
  <A>(kind: Kind2<F, E1, A>): Kind<G, A>
}

export interface NaturalTransformation3_<F extends HKT3, G extends HKT> {
  <R1, E1, A>(kind: Kind3<F, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation3R_C<F extends HKT3, R1, G extends HKT> {
  <E1, A>(kind: Kind3<F, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation3RE_C<F extends HKT3, R1, E1, G extends HKT> {
  <A>(kind: Kind3<F, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation3E_C<F extends HKT3, E1, G extends HKT> {
  <R1, A>(kind: Kind3<F, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4_<F extends HKT4, G extends HKT> {
  <S1, R1, E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4SRE_C<F extends HKT4, S1, R1, E1, G extends HKT> {
  <A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4S_C<F extends HKT4, S1, G extends HKT> {
  <R1, E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4SR_C<F extends HKT4, S1, R1, G extends HKT> {
  <E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4R_C<F extends HKT4, R1, G extends HKT> {
  <S1, E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4SE_C<F extends HKT4, S1, E1, G extends HKT> {
  <R1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4RE_C<F extends HKT4, R1, E1, G extends HKT> {
  <S1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4E_C<F extends HKT4, E1, G extends HKT> {
  <S1, R1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation5_<F extends HKT5, G extends HKT> {
  <U1, S1, R1, E1, A>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation6_<F extends HKT6, G extends HKT> {
  <V1, U1, S1, R1, E1, A>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation7_<F extends HKT7, G extends HKT> {
  <W1, V1, U1, S1, R1, E1, A>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation8_<F extends HKT8, G extends HKT> {
  <X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation9_<F extends HKT9, G extends HKT> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation10_<F extends HKT10, G extends HKT> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind<G, A>
}

export interface NaturalTransformation_1<F extends HKT, G extends HKT> {
  <A>(kind: Kind<F, A>): Kind<G, A>
}

export interface NaturalTransformation1_1<F extends HKT, G extends HKT> {
  <A>(kind: Kind<F, A>): Kind<G, A>
}

export interface NaturalTransformation2_1<F extends HKT2, G extends HKT> {
  <E1, A>(kind: Kind2<F, E1, A>): Kind<G, A>
}

export interface NaturalTransformation2E_1C<F extends HKT2, E1, G extends HKT> {
  <A>(kind: Kind2<F, E1, A>): Kind<G, A>
}

export interface NaturalTransformation3_1<F extends HKT3, G extends HKT> {
  <R1, E1, A>(kind: Kind3<F, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation3R_1C<F extends HKT3, R1, G extends HKT> {
  <E1, A>(kind: Kind3<F, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation3RE_1C<F extends HKT3, R1, E1, G extends HKT> {
  <A>(kind: Kind3<F, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation3E_1C<F extends HKT3, E1, G extends HKT> {
  <R1, A>(kind: Kind3<F, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4_1<F extends HKT4, G extends HKT> {
  <S1, R1, E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4SRE_1C<F extends HKT4, S1, R1, E1, G extends HKT> {
  <A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4S_1C<F extends HKT4, S1, G extends HKT> {
  <R1, E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4SR_1C<F extends HKT4, S1, R1, G extends HKT> {
  <E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4R_1C<F extends HKT4, R1, G extends HKT> {
  <S1, E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4SE_1C<F extends HKT4, S1, E1, G extends HKT> {
  <R1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4RE_1C<F extends HKT4, R1, E1, G extends HKT> {
  <S1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation4E_1C<F extends HKT4, E1, G extends HKT> {
  <S1, R1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation5_1<F extends HKT5, G extends HKT> {
  <U1, S1, R1, E1, A>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation6_1<F extends HKT6, G extends HKT> {
  <V1, U1, S1, R1, E1, A>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation7_1<F extends HKT7, G extends HKT> {
  <W1, V1, U1, S1, R1, E1, A>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation8_1<F extends HKT8, G extends HKT> {
  <X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation9_1<F extends HKT9, G extends HKT> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind<G, A>
}

export interface NaturalTransformation10_1<F extends HKT10, G extends HKT> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind<G, A>
}

export interface NaturalTransformation_2<F extends HKT, G extends HKT2> {
  <A, E2>(kind: Kind<F, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation_2EC<F extends HKT, G extends HKT2, E2> {
  <A>(kind: Kind<F, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation1_2<F extends HKT, G extends HKT2> {
  <A, E2>(kind: Kind<F, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation1_2EC<F extends HKT, G extends HKT2, E2> {
  <A>(kind: Kind<F, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation2_2<F extends HKT2, G extends HKT2> {
  <E1, A, E2>(kind: Kind2<F, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation2E_2EC<F extends HKT2, E1, G extends HKT2, E2> {
  <A>(kind: Kind2<F, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation3_2<F extends HKT3, G extends HKT2> {
  <R1, E1, A, E2>(kind: Kind3<F, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation3R_2C<F extends HKT3, R1, G extends HKT2> {
  <E1, A, E2>(kind: Kind3<F, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation3R_2EC<F extends HKT3, R1, G extends HKT2, E2> {
  <E1, A>(kind: Kind3<F, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation3RE_2C<F extends HKT3, R1, E1, G extends HKT2> {
  <A, E2>(kind: Kind3<F, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation3E_2C<F extends HKT3, E1, G extends HKT2> {
  <R1, A, E2>(kind: Kind3<F, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4_2<F extends HKT4, G extends HKT2> {
  <S1, R1, E1, A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4SRE_2C<F extends HKT4, S1, R1, E1, G extends HKT2> {
  <A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4SRE_2EC<F extends HKT4, S1, R1, E1, G extends HKT2, E2> {
  <A>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4S_2C<F extends HKT4, S1, G extends HKT2> {
  <R1, E1, A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4SR_2C<F extends HKT4, S1, R1, G extends HKT2> {
  <E1, A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4R_2C<F extends HKT4, R1, G extends HKT2> {
  <S1, E1, A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4SE_2C<F extends HKT4, S1, E1, G extends HKT2> {
  <R1, A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4RE_2C<F extends HKT4, R1, E1, G extends HKT2> {
  <S1, A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation4E_2C<F extends HKT4, E1, G extends HKT2> {
  <S1, R1, A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation5_2<F extends HKT5, G extends HKT2> {
  <U1, S1, R1, E1, A, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation5_2EC<F extends HKT5, G extends HKT2, E2> {
  <U1, S1, R1, E1, A>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation6_2<F extends HKT6, G extends HKT2> {
  <V1, U1, S1, R1, E1, A, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation6_2EC<F extends HKT6, G extends HKT2, E2> {
  <V1, U1, S1, R1, E1, A>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation7_2<F extends HKT7, G extends HKT2> {
  <W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation7_2EC<F extends HKT7, G extends HKT2, E2> {
  <W1, V1, U1, S1, R1, E1, A>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation8_2<F extends HKT8, G extends HKT2> {
  <X1, W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind2<
    G,
    E2,
    A
  >
}

export interface NaturalTransformation8_2EC<F extends HKT8, G extends HKT2, E2> {
  <X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind2<G, E2, A>
}

export interface NaturalTransformation9_2<F extends HKT9, G extends HKT2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind2<
    G,
    E2,
    A
  >
}

export interface NaturalTransformation9_2EC<F extends HKT9, G extends HKT2, E2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind2<
    G,
    E2,
    A
  >
}

export interface NaturalTransformation10_2<F extends HKT10, G extends HKT2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind2<G, E2, A>
}

export interface NaturalTransformation10_2EC<F extends HKT10, G extends HKT2, E2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind2<G, E2, A>
}

export interface NaturalTransformation_3<F extends HKT, G extends HKT3> {
  <A, R2, E2>(kind: Kind<F, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation_3RC<F extends HKT, G extends HKT3, R2> {
  <A, E2>(kind: Kind<F, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation_3REC<F extends HKT, G extends HKT3, R2, E2> {
  <A>(kind: Kind<F, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation_3EC<F extends HKT, G extends HKT3, E2> {
  <A, R2>(kind: Kind<F, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation1_3<F extends HKT, G extends HKT3> {
  <A, R2, E2>(kind: Kind<F, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation1_3RC<F extends HKT, G extends HKT3, R2> {
  <A, E2>(kind: Kind<F, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation1_3REC<F extends HKT, G extends HKT3, R2, E2> {
  <A>(kind: Kind<F, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation1_3EC<F extends HKT, G extends HKT3, E2> {
  <A, R2>(kind: Kind<F, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation2_3<F extends HKT2, G extends HKT3> {
  <E1, A, R2, E2>(kind: Kind2<F, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation2E_3RC<F extends HKT2, E1, G extends HKT3, R2> {
  <A, E2>(kind: Kind2<F, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation2_3REC<F extends HKT2, G extends HKT3, R2, E2> {
  <E1, A>(kind: Kind2<F, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation2_3EC<F extends HKT2, G extends HKT3, E2> {
  <E1, A, R2>(kind: Kind2<F, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation3_3<F extends HKT3, G extends HKT3> {
  <R1, E1, A, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation3R_3RC<F extends HKT3, R1, G extends HKT3, R2> {
  <E1, A, E2>(kind: Kind3<F, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation3RE_3REC<F extends HKT3, R1, E1, G extends HKT3, R2, E2> {
  <A>(kind: Kind3<F, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation3E_3EC<F extends HKT3, E1, G extends HKT3, E2> {
  <R1, A, R2>(kind: Kind3<F, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation4_3<F extends HKT4, G extends HKT3> {
  <S1, R1, E1, A, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation4SRE_3RC<F extends HKT4, S1, R1, E1, G extends HKT3, R2> {
  <A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation4S_3REC<F extends HKT4, S1, G extends HKT3, R2, E2> {
  <R1, E1, A>(kind: Kind4<F, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation4SR_3EC<F extends HKT4, S1, R1, G extends HKT3, E2> {
  <E1, A, R2>(kind: Kind4<F, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation4R_3C<F extends HKT4, R1, G extends HKT3> {
  <S1, E1, A, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation4SE_3C<F extends HKT4, S1, E1, G extends HKT3> {
  <R1, A, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation4RE_3C<F extends HKT4, R1, E1, G extends HKT3> {
  <S1, A, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation4E_3C<F extends HKT4, E1, G extends HKT3> {
  <S1, R1, A, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation5_3<F extends HKT5, G extends HKT3> {
  <U1, S1, R1, E1, A, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation5_3RC<F extends HKT5, G extends HKT3, R2> {
  <U1, S1, R1, E1, A, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation5_3REC<F extends HKT5, G extends HKT3, R2, E2> {
  <U1, S1, R1, E1, A>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation5_3EC<F extends HKT5, G extends HKT3, E2> {
  <U1, S1, R1, E1, A, R2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation6_3<F extends HKT6, G extends HKT3> {
  <V1, U1, S1, R1, E1, A, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation6_3RC<F extends HKT6, G extends HKT3, R2> {
  <V1, U1, S1, R1, E1, A, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation6_3REC<F extends HKT6, G extends HKT3, R2, E2> {
  <V1, U1, S1, R1, E1, A>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation6_3EC<F extends HKT6, G extends HKT3, E2> {
  <V1, U1, S1, R1, E1, A, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation7_3<F extends HKT7, G extends HKT3> {
  <W1, V1, U1, S1, R1, E1, A, R2, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind3<
    G,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_3RC<F extends HKT7, G extends HKT3, R2> {
  <W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation7_3REC<F extends HKT7, G extends HKT3, R2, E2> {
  <W1, V1, U1, S1, R1, E1, A>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation7_3EC<F extends HKT7, G extends HKT3, E2> {
  <W1, V1, U1, S1, R1, E1, A, R2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation8_3<F extends HKT8, G extends HKT3> {
  <X1, W1, V1, U1, S1, R1, E1, A, R2, E2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind3<
    G,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_3RC<F extends HKT8, G extends HKT3, R2> {
  <X1, W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind3<
    G,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_3REC<F extends HKT8, G extends HKT3, R2, E2> {
  <X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind3<
    G,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_3EC<F extends HKT8, G extends HKT3, E2> {
  <X1, W1, V1, U1, S1, R1, E1, A, R2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind3<
    G,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation9_3<F extends HKT9, G extends HKT3> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation9_3RC<F extends HKT9, G extends HKT3, R2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind3<
    G,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation9_3REC<F extends HKT9, G extends HKT3, R2, E2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind3<
    G,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation9_3EC<F extends HKT9, G extends HKT3, E2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, R2>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind3<
    G,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation10_3<F extends HKT10, G extends HKT3> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation10_3RC<F extends HKT10, G extends HKT3, R2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation10_3REC<F extends HKT10, G extends HKT3, R2, E2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation10_3EC<F extends HKT10, G extends HKT3, E2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, R2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind3<G, R2, E2, A>
}

export interface NaturalTransformation_4<F extends HKT, G extends HKT4> {
  <A, S2, R2, E2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation_4SREC<F extends HKT, G extends HKT4, S2, R2, E2> {
  <A>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation_4SC<F extends HKT, G extends HKT4, S2> {
  <A, R2, E2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation_4SRC<F extends HKT, G extends HKT4, S2, R2> {
  <A, E2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation_4RC<F extends HKT, G extends HKT4, R2> {
  <A, S2, E2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation_4SEC<F extends HKT, G extends HKT4, S2, E2> {
  <A, R2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation_4REC<F extends HKT, G extends HKT4, R2, E2> {
  <A, S2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation_4EC<F extends HKT, G extends HKT4, E2> {
  <A, S2, R2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation1_4<F extends HKT, G extends HKT4> {
  <A, S2, R2, E2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation1_4SREC<F extends HKT, G extends HKT4, S2, R2, E2> {
  <A>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation1_4SC<F extends HKT, G extends HKT4, S2> {
  <A, R2, E2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation1_4SRC<F extends HKT, G extends HKT4, S2, R2> {
  <A, E2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation1_4RC<F extends HKT, G extends HKT4, R2> {
  <A, S2, E2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation1_4SEC<F extends HKT, G extends HKT4, S2, E2> {
  <A, R2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation1_4REC<F extends HKT, G extends HKT4, R2, E2> {
  <A, S2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation1_4EC<F extends HKT, G extends HKT4, E2> {
  <A, S2, R2>(kind: Kind<F, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation2_4<F extends HKT2, G extends HKT4> {
  <E1, A, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation2E_4SREC<F extends HKT2, E1, G extends HKT4, S2, R2, E2> {
  <A>(kind: Kind2<F, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation2_4SC<F extends HKT2, G extends HKT4, S2> {
  <E1, A, R2, E2>(kind: Kind2<F, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation2_4SRC<F extends HKT2, G extends HKT4, S2, R2> {
  <E1, A, E2>(kind: Kind2<F, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation2_4RC<F extends HKT2, G extends HKT4, R2> {
  <E1, A, S2, E2>(kind: Kind2<F, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation2_4SEC<F extends HKT2, G extends HKT4, S2, E2> {
  <E1, A, R2>(kind: Kind2<F, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation2_4REC<F extends HKT2, G extends HKT4, R2, E2> {
  <E1, A, S2>(kind: Kind2<F, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation2_4EC<F extends HKT2, G extends HKT4, E2> {
  <E1, A, S2, R2>(kind: Kind2<F, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation3_4<F extends HKT3, G extends HKT4> {
  <R1, E1, A, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation3R_4SREC<F extends HKT3, R1, G extends HKT4, S2, R2, E2> {
  <E1, A>(kind: Kind3<F, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation3RE_4SC<F extends HKT3, R1, E1, G extends HKT4, S2> {
  <A, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation3E_4SRC<F extends HKT3, E1, G extends HKT4, S2, R2> {
  <R1, A, E2>(kind: Kind3<F, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation3_4RC<F extends HKT3, G extends HKT4, R2> {
  <R1, E1, A, S2, E2>(kind: Kind3<F, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation3_4SEC<F extends HKT3, G extends HKT4, S2, E2> {
  <R1, E1, A, R2>(kind: Kind3<F, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation3_4REC<F extends HKT3, G extends HKT4, R2, E2> {
  <R1, E1, A, S2>(kind: Kind3<F, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation3_4EC<F extends HKT3, G extends HKT4, E2> {
  <R1, E1, A, S2, R2>(kind: Kind3<F, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation4_4<F extends HKT4, G extends HKT4> {
  <S1, R1, E1, A, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation4SRE_4SREC<
  F extends HKT4,
  S1,
  R1,
  E1,
  G extends HKT4,
  S2,
  R2,
  E2,
> {
  <A>(kind: Kind4<F, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation4S_4SC<F extends HKT4, S1, G extends HKT4, S2> {
  <R1, E1, A, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation4SR_4SRC<F extends HKT4, S1, R1, G extends HKT4, S2, R2> {
  <E1, A, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation4R_4RC<F extends HKT4, R1, G extends HKT4, R2> {
  <S1, E1, A, S2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation4SE_4SEC<F extends HKT4, S1, E1, G extends HKT4, S2, E2> {
  <R1, A, R2>(kind: Kind4<F, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation4RE_4REC<F extends HKT4, R1, E1, G extends HKT4, R2, E2> {
  <S1, A, S2>(kind: Kind4<F, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation4E_4EC<F extends HKT4, E1, G extends HKT4, E2> {
  <S1, R1, A, S2, R2>(kind: Kind4<F, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation5_4<F extends HKT5, G extends HKT4> {
  <U1, S1, R1, E1, A, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation5_4SREC<F extends HKT5, G extends HKT4, S2, R2, E2> {
  <U1, S1, R1, E1, A>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation5_4SC<F extends HKT5, G extends HKT4, S2> {
  <U1, S1, R1, E1, A, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation5_4SRC<F extends HKT5, G extends HKT4, S2, R2> {
  <U1, S1, R1, E1, A, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation5_4RC<F extends HKT5, G extends HKT4, R2> {
  <U1, S1, R1, E1, A, S2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation5_4SEC<F extends HKT5, G extends HKT4, S2, E2> {
  <U1, S1, R1, E1, A, R2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation5_4REC<F extends HKT5, G extends HKT4, R2, E2> {
  <U1, S1, R1, E1, A, S2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation5_4EC<F extends HKT5, G extends HKT4, E2> {
  <U1, S1, R1, E1, A, S2, R2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation6_4<F extends HKT6, G extends HKT4> {
  <V1, U1, S1, R1, E1, A, S2, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation6_4SREC<F extends HKT6, G extends HKT4, S2, R2, E2> {
  <V1, U1, S1, R1, E1, A>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation6_4SC<F extends HKT6, G extends HKT4, S2> {
  <V1, U1, S1, R1, E1, A, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation6_4SRC<F extends HKT6, G extends HKT4, S2, R2> {
  <V1, U1, S1, R1, E1, A, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation6_4RC<F extends HKT6, G extends HKT4, R2> {
  <V1, U1, S1, R1, E1, A, S2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation6_4SEC<F extends HKT6, G extends HKT4, S2, E2> {
  <V1, U1, S1, R1, E1, A, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation6_4REC<F extends HKT6, G extends HKT4, R2, E2> {
  <V1, U1, S1, R1, E1, A, S2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation6_4EC<F extends HKT6, G extends HKT4, E2> {
  <V1, U1, S1, R1, E1, A, S2, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation7_4<F extends HKT7, G extends HKT4> {
  <W1, V1, U1, S1, R1, E1, A, S2, R2, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_4SREC<F extends HKT7, G extends HKT4, S2, R2, E2> {
  <W1, V1, U1, S1, R1, E1, A>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation7_4SC<F extends HKT7, G extends HKT4, S2> {
  <W1, V1, U1, S1, R1, E1, A, R2, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_4SRC<F extends HKT7, G extends HKT4, S2, R2> {
  <W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_4RC<F extends HKT7, G extends HKT4, R2> {
  <W1, V1, U1, S1, R1, E1, A, S2, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_4SEC<F extends HKT7, G extends HKT4, S2, E2> {
  <W1, V1, U1, S1, R1, E1, A, R2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_4REC<F extends HKT7, G extends HKT4, R2, E2> {
  <W1, V1, U1, S1, R1, E1, A, S2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_4EC<F extends HKT7, G extends HKT4, E2> {
  <W1, V1, U1, S1, R1, E1, A, S2, R2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_4<F extends HKT8, G extends HKT4> {
  <X1, W1, V1, U1, S1, R1, E1, A, S2, R2, E2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_4SREC<F extends HKT8, G extends HKT4, S2, R2, E2> {
  <X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_4SC<F extends HKT8, G extends HKT4, S2> {
  <X1, W1, V1, U1, S1, R1, E1, A, R2, E2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_4SRC<F extends HKT8, G extends HKT4, S2, R2> {
  <X1, W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_4RC<F extends HKT8, G extends HKT4, R2> {
  <X1, W1, V1, U1, S1, R1, E1, A, S2, E2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_4SEC<F extends HKT8, G extends HKT4, S2, E2> {
  <X1, W1, V1, U1, S1, R1, E1, A, R2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_4REC<F extends HKT8, G extends HKT4, R2, E2> {
  <X1, W1, V1, U1, S1, R1, E1, A, S2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_4EC<F extends HKT8, G extends HKT4, E2> {
  <X1, W1, V1, U1, S1, R1, E1, A, S2, R2>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation9_4<F extends HKT9, G extends HKT4> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, S2, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation9_4SREC<F extends HKT9, G extends HKT4, S2, R2, E2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation9_4SC<F extends HKT9, G extends HKT4, S2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation9_4SRC<F extends HKT9, G extends HKT4, S2, R2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, E2>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation9_4RC<F extends HKT9, G extends HKT4, R2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, S2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation9_4SEC<F extends HKT9, G extends HKT4, S2, E2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, R2>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation9_4REC<F extends HKT9, G extends HKT4, R2, E2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, S2>(kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>): Kind4<
    G,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation9_4EC<F extends HKT9, G extends HKT4, E2> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, S2, R2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation10_4<F extends HKT10, G extends HKT4> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, S2, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation10_4SREC<F extends HKT10, G extends HKT4, S2, R2, E2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation10_4SC<F extends HKT10, G extends HKT4, S2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation10_4SRC<F extends HKT10, G extends HKT4, S2, R2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation10_4RC<F extends HKT10, G extends HKT4, R2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, S2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation10_4SEC<F extends HKT10, G extends HKT4, S2, E2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, R2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation10_4REC<F extends HKT10, G extends HKT4, R2, E2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, S2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation10_4EC<F extends HKT10, G extends HKT4, E2> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, S2, R2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind4<G, S2, R2, E2, A>
}

export interface NaturalTransformation_5<F extends HKT, G extends HKT5> {
  <A, U2, S2, R2, E2>(kind: Kind<F, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation1_5<F extends HKT, G extends HKT5> {
  <A, U2, S2, R2, E2>(kind: Kind<F, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation2_5<F extends HKT2, G extends HKT5> {
  <E1, A, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation2E_5C<F extends HKT2, E1, G extends HKT5> {
  <A, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3_5<F extends HKT3, G extends HKT5> {
  <R1, E1, A, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3R_5C<F extends HKT3, R1, G extends HKT5> {
  <E1, A, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3RE_5C<F extends HKT3, R1, E1, G extends HKT5> {
  <A, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3E_5C<F extends HKT3, E1, G extends HKT5> {
  <R1, A, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4_5<F extends HKT4, G extends HKT5> {
  <S1, R1, E1, A, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4SRE_5C<F extends HKT4, S1, R1, E1, G extends HKT5> {
  <A, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4S_5C<F extends HKT4, S1, G extends HKT5> {
  <R1, E1, A, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4SR_5C<F extends HKT4, S1, R1, G extends HKT5> {
  <E1, A, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4R_5C<F extends HKT4, R1, G extends HKT5> {
  <S1, E1, A, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4SE_5C<F extends HKT4, S1, E1, G extends HKT5> {
  <R1, A, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4RE_5C<F extends HKT4, R1, E1, G extends HKT5> {
  <S1, A, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4E_5C<F extends HKT4, E1, G extends HKT5> {
  <S1, R1, A, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation5_5<F extends HKT5, G extends HKT5> {
  <U1, S1, R1, E1, A, U2, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind5<
    G,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation6_5<F extends HKT6, G extends HKT5> {
  <V1, U1, S1, R1, E1, A, U2, S2, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind5<
    G,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_5<F extends HKT7, G extends HKT5> {
  <W1, V1, U1, S1, R1, E1, A, U2, S2, R2, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind5<
    G,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_5<F extends HKT8, G extends HKT5> {
  <X1, W1, V1, U1, S1, R1, E1, A, U2, S2, R2, E2>(
    kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation9_5<F extends HKT9, G extends HKT5> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, U2, S2, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation10_5<F extends HKT10, G extends HKT5> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, U2, S2, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind5<G, U2, S2, R2, E2, A>
}

export interface NaturalTransformation_6<F extends HKT, G extends HKT6> {
  <A, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation1_6<F extends HKT, G extends HKT6> {
  <A, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation2_6<F extends HKT2, G extends HKT6> {
  <E1, A, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation2E_6C<F extends HKT2, E1, G extends HKT6> {
  <A, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3_6<F extends HKT3, G extends HKT6> {
  <R1, E1, A, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3R_6C<F extends HKT3, R1, G extends HKT6> {
  <E1, A, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3RE_6C<F extends HKT3, R1, E1, G extends HKT6> {
  <A, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3E_6C<F extends HKT3, E1, G extends HKT6> {
  <R1, A, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4_6<F extends HKT4, G extends HKT6> {
  <S1, R1, E1, A, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind6<
    G,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SRE_6C<F extends HKT4, S1, R1, E1, G extends HKT6> {
  <A, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4S_6C<F extends HKT4, S1, G extends HKT6> {
  <R1, E1, A, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4SR_6C<F extends HKT4, S1, R1, G extends HKT6> {
  <E1, A, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4R_6C<F extends HKT4, R1, G extends HKT6> {
  <S1, E1, A, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4SE_6C<F extends HKT4, S1, E1, G extends HKT6> {
  <R1, A, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4RE_6C<F extends HKT4, R1, E1, G extends HKT6> {
  <S1, A, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4E_6C<F extends HKT4, E1, G extends HKT6> {
  <S1, R1, A, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation5_6<F extends HKT5, G extends HKT6> {
  <U1, S1, R1, E1, A, V2, U2, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind6<
    G,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation6_6<F extends HKT6, G extends HKT6> {
  <V1, U1, S1, R1, E1, A, V2, U2, S2, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind6<
    G,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_6<F extends HKT7, G extends HKT6> {
  <W1, V1, U1, S1, R1, E1, A, V2, U2, S2, R2, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>): Kind6<
    G,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation8_6<F extends HKT8, G extends HKT6> {
  <X1, W1, V1, U1, S1, R1, E1, A, V2, U2, S2, R2, E2>(
    kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation9_6<F extends HKT9, G extends HKT6> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, V2, U2, S2, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation10_6<F extends HKT10, G extends HKT6> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, V2, U2, S2, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind6<G, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation_7<F extends HKT, G extends HKT7> {
  <A, W2, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation1_7<F extends HKT, G extends HKT7> {
  <A, W2, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation2_7<F extends HKT2, G extends HKT7> {
  <E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation2E_7C<F extends HKT2, E1, G extends HKT7> {
  <A, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3_7<F extends HKT3, G extends HKT7> {
  <R1, E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3R_7C<F extends HKT3, R1, G extends HKT7> {
  <E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3RE_7C<F extends HKT3, R1, E1, G extends HKT7> {
  <A, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3E_7C<F extends HKT3, E1, G extends HKT7> {
  <R1, A, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4_7<F extends HKT4, G extends HKT7> {
  <S1, R1, E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SRE_7C<F extends HKT4, S1, R1, E1, G extends HKT7> {
  <A, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation4S_7C<F extends HKT4, S1, G extends HKT7> {
  <R1, E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SR_7C<F extends HKT4, S1, R1, G extends HKT7> {
  <E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4R_7C<F extends HKT4, R1, G extends HKT7> {
  <S1, E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SE_7C<F extends HKT4, S1, E1, G extends HKT7> {
  <R1, A, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4RE_7C<F extends HKT4, R1, E1, G extends HKT7> {
  <S1, A, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4E_7C<F extends HKT4, E1, G extends HKT7> {
  <S1, R1, A, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation5_7<F extends HKT5, G extends HKT7> {
  <U1, S1, R1, E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation6_7<F extends HKT6, G extends HKT7> {
  <V1, U1, S1, R1, E1, A, W2, V2, U2, S2, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind7<
    G,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_7<F extends HKT7, G extends HKT7> {
  <W1, V1, U1, S1, R1, E1, A, W2, V2, U2, S2, R2, E2>(
    kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>,
  ): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation8_7<F extends HKT8, G extends HKT7> {
  <X1, W1, V1, U1, S1, R1, E1, A, W2, V2, U2, S2, R2, E2>(
    kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation9_7<F extends HKT9, G extends HKT7> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, W2, V2, U2, S2, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation10_7<F extends HKT10, G extends HKT7> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, W2, V2, U2, S2, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind7<G, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation_8<F extends HKT, G extends HKT8> {
  <A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation1_8<F extends HKT, G extends HKT8> {
  <A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation2_8<F extends HKT2, G extends HKT8> {
  <E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation2E_8C<F extends HKT2, E1, G extends HKT8> {
  <A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation3_8<F extends HKT3, G extends HKT8> {
  <R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3R_8C<F extends HKT3, R1, G extends HKT8> {
  <E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3RE_8C<F extends HKT3, R1, E1, G extends HKT8> {
  <A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3E_8C<F extends HKT3, E1, G extends HKT8> {
  <R1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4_8<F extends HKT4, G extends HKT8> {
  <S1, R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SRE_8C<F extends HKT4, S1, R1, E1, G extends HKT8> {
  <A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4S_8C<F extends HKT4, S1, G extends HKT8> {
  <R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SR_8C<F extends HKT4, S1, R1, G extends HKT8> {
  <E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4R_8C<F extends HKT4, R1, G extends HKT8> {
  <S1, E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SE_8C<F extends HKT4, S1, E1, G extends HKT8> {
  <R1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4RE_8C<F extends HKT4, R1, E1, G extends HKT8> {
  <S1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4E_8C<F extends HKT4, E1, G extends HKT8> {
  <S1, R1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation5_8<F extends HKT5, G extends HKT8> {
  <U1, S1, R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation6_8<F extends HKT6, G extends HKT8> {
  <V1, U1, S1, R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, A>): Kind8<
    G,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation7_8<F extends HKT7, G extends HKT8> {
  <W1, V1, U1, S1, R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>,
  ): Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation8_8<F extends HKT8, G extends HKT8> {
  <X1, W1, V1, U1, S1, R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation9_8<F extends HKT9, G extends HKT8> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation10_8<F extends HKT10, G extends HKT8> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation_9<F extends HKT, G extends HKT9> {
  <A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation1_9<F extends HKT, G extends HKT9> {
  <A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation2_9<F extends HKT2, G extends HKT9> {
  <E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation2E_9C<F extends HKT2, E1, G extends HKT9> {
  <A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3_9<F extends HKT3, G extends HKT9> {
  <R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3R_9C<F extends HKT3, R1, G extends HKT9> {
  <E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3RE_9C<F extends HKT3, R1, E1, G extends HKT9> {
  <A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3E_9C<F extends HKT3, E1, G extends HKT9> {
  <R1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4_9<F extends HKT4, G extends HKT9> {
  <S1, R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SRE_9C<F extends HKT4, S1, R1, E1, G extends HKT9> {
  <A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4S_9C<F extends HKT4, S1, G extends HKT9> {
  <R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SR_9C<F extends HKT4, S1, R1, G extends HKT9> {
  <E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4R_9C<F extends HKT4, R1, G extends HKT9> {
  <S1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SE_9C<F extends HKT4, S1, E1, G extends HKT9> {
  <R1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4RE_9C<F extends HKT4, R1, E1, G extends HKT9> {
  <S1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4E_9C<F extends HKT4, E1, G extends HKT9> {
  <S1, R1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation5_9<F extends HKT5, G extends HKT9> {
  <U1, S1, R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, A>): Kind9<
    G,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation6_9<F extends HKT6, G extends HKT9> {
  <V1, U1, S1, R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind6<F, V1, U1, S1, R1, E1, A>,
  ): Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation7_9<F extends HKT7, G extends HKT9> {
  <W1, V1, U1, S1, R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>,
  ): Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation8_9<F extends HKT8, G extends HKT9> {
  <X1, W1, V1, U1, S1, R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation9_9<F extends HKT9, G extends HKT9> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation10_9<F extends HKT10, G extends HKT9> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation_10<F extends HKT, G extends HKT10> {
  <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation1_10<F extends HKT, G extends HKT10> {
  <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation2_10<F extends HKT2, G extends HKT10> {
  <E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation2E_10C<F extends HKT2, E1, G extends HKT10> {
  <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3_10<F extends HKT3, G extends HKT10> {
  <R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3R_10C<F extends HKT3, R1, G extends HKT10> {
  <E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3RE_10C<F extends HKT3, R1, E1, G extends HKT10> {
  <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation3E_10C<F extends HKT3, E1, G extends HKT10> {
  <R1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4_10<F extends HKT4, G extends HKT10> {
  <S1, R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SRE_10C<F extends HKT4, S1, R1, E1, G extends HKT10> {
  <A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4S_10C<F extends HKT4, S1, G extends HKT10> {
  <R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SR_10C<F extends HKT4, S1, R1, G extends HKT10> {
  <E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4R_10C<F extends HKT4, R1, G extends HKT10> {
  <S1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4SE_10C<F extends HKT4, S1, E1, G extends HKT10> {
  <R1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4RE_10C<F extends HKT4, R1, E1, G extends HKT10> {
  <S1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation4E_10C<F extends HKT4, E1, G extends HKT10> {
  <S1, R1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, A>): Kind10<
    G,
    Z2,
    Y2,
    X2,
    W2,
    V2,
    U2,
    S2,
    R2,
    E2,
    A
  >
}

export interface NaturalTransformation5_10<F extends HKT5, G extends HKT10> {
  <U1, S1, R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind5<F, U1, S1, R1, E1, A>,
  ): Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation6_10<F extends HKT6, G extends HKT10> {
  <V1, U1, S1, R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind6<F, V1, U1, S1, R1, E1, A>,
  ): Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation7_10<F extends HKT7, G extends HKT10> {
  <W1, V1, U1, S1, R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind7<F, W1, V1, U1, S1, R1, E1, A>,
  ): Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation8_10<F extends HKT8, G extends HKT10> {
  <X1, W1, V1, U1, S1, R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation9_10<F extends HKT9, G extends HKT10> {
  <Y1, X1, W1, V1, U1, S1, R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}

export interface NaturalTransformation10_10<F extends HKT10, G extends HKT10> {
  <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
    kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>,
  ): Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
}
