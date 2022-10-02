import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Tricontravariant<T extends TypeLambda> extends TypeClass<T> {
  readonly tricontramap: <A, B, C, D, E, F>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
  ) => <InOut3, InOut2, InOut1, Out6, Out5, Out4, Out3, Out2, Out1>(
    kind: Kind<T, InOut3, InOut2, InOut1, B, D, F, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<T, InOut3, InOut2, InOut1, A, C, E, Out6, Out5, Out4, Out3, Out2, Out1>
}
