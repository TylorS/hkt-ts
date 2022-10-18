import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'

export interface Pentafunctor<T extends TypeLambda> extends TypeClass<T> {
  readonly pentamap: <A, B, C, D, E, F, G, H, I, J>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
    i: (a: G) => H,
    j: (a: I) => J,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, A, C, E, G, I>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, B, D, F, H, J>
}
