import { Kind, TypeClass, TypeLambda } from '../HKT.js'

export interface TriCovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly trimap: <A, B, C, D, E, F>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, A, C, E>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, B, D, F>
}
