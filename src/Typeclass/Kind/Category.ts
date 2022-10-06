import { Kind, TypeLambda } from '../../HKT.js'

import { AssociativeCompose } from './AssociativeCompose.js'

export interface Category<T extends TypeLambda> extends AssociativeCompose<T> {
  readonly id: <A, InOut3 = unknown, InOut2 = unknown, InOut1 = unknown>() => Kind<
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
