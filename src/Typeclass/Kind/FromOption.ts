import { Kind, TypeLambda } from '../../HKT.js'
import { Option } from '../../Kind/Option.js'

export interface FromOption<T extends TypeLambda> {
  readonly fromOption: <A, InOut3 = unknown, InOut2 = unknown, InOut1 = unknown>(
    option: Option<A>,
  ) => Kind<
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
    A
  >
}
