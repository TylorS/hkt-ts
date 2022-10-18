import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'

export interface TriInvariant<T extends TypeLambda> extends TypeClass<T> {
  readonly triInvmap: <A, B, C, D, E, F>(
    f: (a: A) => B,
    g: (a: B) => A,
    h: (a: C) => D,
    i: (a: D) => C,
    j: (a: E) => F,
    k: (a: F) => E,
  ) => <In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
    fa: Kind<T, A, C, E, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<T, B, D, F, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>
}
