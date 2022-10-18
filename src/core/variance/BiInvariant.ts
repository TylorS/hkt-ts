import { Kind, TypeClass, TypeLambda } from '../HKT.js'

export interface BiInvariant<T extends TypeLambda> extends TypeClass<T> {
  readonly biInvmap: <A, B, C, D>(
    f: (a: A) => B,
    g: (a: B) => A,
    h: (a: C) => D,
    i: (a: D) => C,
  ) => <InOut3, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
    fa: Kind<T, InOut3, A, C, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<T, InOut3, B, D, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>
}
