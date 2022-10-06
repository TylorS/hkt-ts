import { Kind, TypeLambda } from '../../HKT.js'

export interface Extend<T extends TypeLambda> {
  readonly extend: <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<
    T,
    InOut3,
    InOut2,
    InOut1,
    In3,
    In2,
    In1,
    Out6,
    Out5,
    Out4,
    Out3,
    Out2,
    Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>
  >
}
