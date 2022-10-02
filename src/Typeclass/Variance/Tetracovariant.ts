import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Tetracovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly tetramap: <A, B, C, D, E, F, G, H>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
    i: (g: G) => H,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, A, C, E, G>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, B, D, F, H>
}
