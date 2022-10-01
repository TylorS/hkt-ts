import { Kind, TypeClass, TypeLambda } from '../../HKT.js'

export interface Bottom<T extends TypeLambda> extends TypeClass<T> {
  readonly bottom: <InOut3, InOut2, InOut1>() => Kind<
    T,
    InOut3,
    InOut2,
    InOut1,
    unknown,
    unknown,
    unknown,
    never,
    never,
    never,
    never,
    never,
    never
  >
}
