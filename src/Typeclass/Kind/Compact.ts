import { Kind, TypeLambda } from '../../HKT.js'
import { Option } from '../../Kind/Option.js'

export interface Compact<T extends TypeLambda> {
  readonly compact: <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
    kind: Kind<
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
      Option<Out1>
    >,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>
}
