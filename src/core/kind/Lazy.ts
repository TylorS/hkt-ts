import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'

export interface Lazy<T extends TypeLambda> extends TypeClass<T> {
  readonly lazy: <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
    f: () => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>
}
