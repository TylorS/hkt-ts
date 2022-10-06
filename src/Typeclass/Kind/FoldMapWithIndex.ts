import { Kind, TypeLambda } from '../../HKT.js'
import { Identity } from '../Data/Identity.js'

export interface FoldMapWithIndex<T extends TypeLambda, I> {
  readonly foldMapWithIndex: <B>(
    I: Identity<B>,
  ) => <A, B>(
    f: (index: I, a: A) => B,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => B
}
