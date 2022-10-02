import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Hexacovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly hexamap: <A, B, C, D, E, F, G, H, I, J, K, L>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
    i: (g: G) => H,
    j: (g: I) => J,
    k: (g: K) => L,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, A, C, E, G, I, K>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, B, D, F, H, J, L>
}
