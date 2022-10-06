import { Kind, TypeLambda } from '../../HKT.js'

export interface ReduceRight<T extends TypeLambda> {
  readonly reduceRight: <A, B>(
    f: (a: A, b: B) => A,
    seed: A,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => B
}
