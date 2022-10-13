import { Kind, TypeLambda } from '../../HKT.js'
import { Covariant } from '../Variance/Covariant.js'

import { Top } from './Top.js'

export interface FromIdentity<T extends TypeLambda> extends Top<T>, Covariant<T> {}

export function of<T extends TypeLambda>(P: FromIdentity<T>) {
  return <A, InOut3 = unknown, InOut2 = unknown, InOut1 = unknown>(
    a: A,
  ): Kind<
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
  > => P.map(() => a)(P.top<InOut3, InOut2, InOut1>())
}
