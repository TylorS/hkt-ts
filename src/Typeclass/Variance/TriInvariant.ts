import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface TriInvariant<T extends TypeLambda> extends TypeClass<T> {
  readonly triInvmap: <A, B, C, D, E, F>(
    f: (a: A) => B,
    g: (a: B) => A,
    h: (c: C) => D,
    i: (d: D) => C,
    j: (c: E) => F,
    k: (d: F) => E,
  ) => <In3, In2, Out6, Out5, Out4, Out3, Out2, Out1>(
    kind: Kind<T, A, C, E, In3, In2, B, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<T, B, D, F, In3, In2, A, Out6, Out5, Out4, Out3, Out2, Out1>
}
