import { Kind, TypeLambda } from '../../HKT.js'
import { Predicate } from '../../Kind/Predicate.js'

export interface Filter<T extends TypeLambda> {
  readonly filter: <A>(
    predicate: Predicate<A>,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>
}
