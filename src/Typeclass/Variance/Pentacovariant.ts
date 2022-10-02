import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Pentacovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly pentamap: <A, B, C, D, E, F, G, H, I, J>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
    i: (g: G) => H,
    j: (g: I) => J,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, A, C, E, G, I>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, B, D, F, H, J>
}
