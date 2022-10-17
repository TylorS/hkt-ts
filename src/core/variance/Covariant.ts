import { Kind, TypeClass, TypeLambda } from '../HKT.js'

export interface Covariant<F extends TypeLambda> extends TypeClass<F> {
  readonly map: <A, B>(
    f: (a: A) => B,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    fa: Kind<F, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => Kind<F, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>
}
