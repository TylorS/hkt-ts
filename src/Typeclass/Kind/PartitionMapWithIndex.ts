import { Kind, TypeLambda } from '../../HKT.js'
import { Either } from '../../Kind/Either.js'

export interface PartitionMapWithIndex<T extends TypeLambda, I> {
  readonly partitionMapWithIndex: <A, B, C>(
    f: (index: I, a: A) => Either<B, C>,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => readonly [
    Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>,
    Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, C>,
  ]
}
