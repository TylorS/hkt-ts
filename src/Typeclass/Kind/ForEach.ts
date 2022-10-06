import { Kind, TypeLambda } from '../../HKT.js'

import { Applicative } from './Applicative.js'

export interface ForEach<T extends TypeLambda> {
  readonly forEach: <T2 extends TypeLambda>(
    A: Applicative<T2>,
  ) => <
    A,
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
    Out2_2,
    B,
  >(
    f: (
      a: A,
    ) => Kind<
      T2,
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
      Out2_2,
      B
    >,
  ) => <InOut3_1, InOut2_1, InOut1_1, In3_1, In2_1, In1_1, Out6_1, Out5_1, Out4_1, Out3_1, Out2_1>(
    kind: Kind<
      T,
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
      A
    >,
  ) => Kind<
    T2,
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
    Out2_2,
    Kind<
      T,
      In3_1,
      InOut3_1,
      InOut2_1,
      InOut1_1,
      In2_1,
      In1_1,
      Out6_1,
      Out5_1,
      Out4_1,
      Out3_1,
      Out2_1,
      B
    >
  >
}
