import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Covariant<T extends TypeLambda> extends TypeClass<T> {
  readonly map: <A, B>(
    f: (a: A) => B,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>
}
