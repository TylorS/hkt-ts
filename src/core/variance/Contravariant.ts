import { Kind, TypeClass, TypeLambda } from '../HKT.js'

export interface Contravariant<T extends TypeLambda> extends TypeClass<T> {
  readonly contramap: <A, B>(
    f: (a: A) => B,
  ) => <InOut3, InOut2, InOut1, In3, In2, Out6, Out5, Out4, Out3, Out2, Out1>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, B, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, A, Out6, Out5, Out4, Out3, Out2, Out1>
}
