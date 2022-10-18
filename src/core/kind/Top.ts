import { Kind, TypeClass, TypeLambda } from '../HKT.js'

export interface Top<T extends TypeLambda> extends TypeClass<T> {
  readonly top: <InOut3, InOut2, InOut1>() => Kind<
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
    unknown
  >
}
