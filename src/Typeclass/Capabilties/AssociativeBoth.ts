import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface AssociativeBoth<T extends TypeLambda> extends TypeClass<T> {
  readonly both: <
    InOut3,
    InOut2,
    InOut1,
    In3_2,
    In2_2,
    In1_2,
    Out6_2,
    Out5_2,
    Out4_2,
    Out3_2,
    Out2_2,
    Out1_2,
  >(
    second: Kind<
      T,
      InOut3,
      InOut2,
      InOut1,
      In3_2,
      In2_2,
      In1_2,
      Out6_2,
      Out5_2,
      Out4_2,
      Out3_2,
      Out2_2,
      Out1_2
    >,
  ) => <In3_1, In2_1, In1_1, Out6_1, Out5_1, Out4_1, Out3_1, Out2_1, Out1_1>(
    first: Kind<
      T,
      InOut3,
      InOut2,
      InOut1,
      In3_1,
      In2_1,
      In1_1,
      Out6_1,
      Out5_1,
      Out4_1,
      Out3_1,
      Out2_1,
      Out1_1
    >,
  ) => Kind<
    T,
    InOut3,
    InOut2,
    InOut1,
    In3_1 & In3_2,
    In2_1 & In2_2,
    In1_1 & In1_1,
    Out6_1 | Out6_2,
    Out5_1 | Out5_2,
    Out4_1 | Out4_2,
    Out3_1 | Out3_2,
    Out2_1 | Out2_2,
    readonly [Out1_1, Out1_2]
  >
}
