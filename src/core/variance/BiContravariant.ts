import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'

export interface BiContravariant<T extends TypeLambda> extends TypeClass<T> {
  readonly bicontramap: <A, B, C, D>(
    f: (a: A) => B,
    g: (a: C) => D,
  ) => <InOut3, InOut2, InOut1, In3, Out6, Out5, Out4, Out3, Out2, Out1>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, B, D, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, A, C, Out6, Out5, Out4, Out3, Out2, Out1>
}
