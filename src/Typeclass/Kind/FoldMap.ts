import { Kind, TypeLambda } from '../../HKT.js'
import { Identity } from '../Data/Identity.js'

export interface FoldMap<T extends TypeLambda> {
  readonly foldMap: <B>(
    I: Identity<B>,
  ) => <A, B>(
    f: (a: A) => B,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => B
}
