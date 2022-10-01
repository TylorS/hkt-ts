import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Bicovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly bimap: <A, B, C, D>(
    f: (a: A) => B,
    g: (a: C) => D,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, A, C>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, B, D>
}
