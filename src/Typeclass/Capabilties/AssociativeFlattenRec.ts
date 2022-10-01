import { Kind, TypeClass, TypeLambda } from '../../HKT.js'
import { Either } from '../../Kind/Either.js'

export interface AssociativeFlatten<T extends TypeLambda> extends TypeClass<T> {
  readonly flattenRec: <A, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>(
    f: (
      a: A,
    ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Either<A, B>>,
  ) => (a: A) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>
}
