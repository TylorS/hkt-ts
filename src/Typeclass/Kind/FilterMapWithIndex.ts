import { Kind, TypeLambda } from '../../HKT.js'
import { Option } from '../../Kind/Option.js'

export interface FilterMapWithIndex<T extends TypeLambda, I> {
  readonly filterMapWithIndex: <A, B>(
    f: (index: I, a: A) => Option<B>,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>
}
