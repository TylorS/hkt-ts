import * as B from '@fp-ts/core/Bifunctor'

import { Functor } from '@/core/Functor.js'
import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'

export interface Bifunctor<T extends TypeLambda> extends TypeClass<T> {
  readonly mapBoth: <A, B, C, D>(
    f: (a: A) => B,
    g: (a: C) => D,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, A, C>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, B, D>
}

export const mapBothComposition = B.mapBothComposition as <
  F extends TypeLambda,
  G extends TypeLambda,
>(
  F: Functor<F>,
  G: Bifunctor<G>,
) => <A, B, C, D>(
  f: (a: A) => B,
  g: (a: C) => D,
) => <
  InOut3_1,
  InOut2_1,
  InOut1_1,
  In3_1,
  In2_1,
  In1_1,
  Out6_1,
  Out5_1,
  Out4_1,
  Out3_1,
  Out2_1,
  InOut3_2,
  InOut2_2,
  InOut1_2,
  In3_2,
  In2_2,
  In1_2,
  Out6_2,
  Out5_2,
  Out4_2,
  Out3_2,
>(
  fa: Kind<
    F,
    InOut3_1,
    InOut2_1,
    InOut1_1,
    In3_1,
    In2_1,
    In1_1,
    Out6_1,
    Out5_1,
    Out4_1,
    Out3_1,
    Out2_1,
    Kind<G, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, Out4_2, Out3_2, A, C>
  >,
) => Kind<
  F,
  InOut3_1,
  InOut2_1,
  InOut1_1,
  In3_1,
  In2_1,
  In1_1,
  Out6_1,
  Out5_1,
  Out4_1,
  Out3_1,
  Out2_1,
  Kind<G, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, Out4_2, Out3_2, B, D>
>
