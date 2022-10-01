import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Trivariant<T extends TypeLambda> extends TypeClass<T> {
  readonly trimap: <A, B, C, D, E, F>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
  ) => <InOut3, InOut2, InOut1, In3, In2, Out6, Out5, Out4, Out3>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, B, Out6, Out5, Out4, Out3, C, E>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, A, Out6, Out5, Out4, Out3, D, F>
}
