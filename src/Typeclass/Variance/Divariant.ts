import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Divariant<T extends TypeLambda> extends TypeClass<T> {
  readonly dimap: <A, B, C, D>(
    f: (a: A) => B,
    g: (a: C) => D,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, B, C>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, A, D>
}
