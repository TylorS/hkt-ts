import { Kind, TypeClass, TypeLambda } from '../HKT.js'

export interface Invariant<T extends TypeLambda> extends TypeClass<T> {
  readonly invmap: <A, B>(
    f: (a: A) => B,
    g: (a: B) => A,
  ) => <InOut3, InOut2, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
    fa: Kind<T, InOut3, InOut2, A, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<T, InOut3, InOut2, B, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>
}
