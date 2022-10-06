import { Kind, TypeLambda } from '../../HKT.js'
import { These } from '../../Kind/These.js'

export interface FromThese<T extends TypeLambda> {
  readonly fromEither: <E, A, InOut3 = unknown, InOut2 = unknown, InOut1 = unknown>(
    these: These<E, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, unknown, unknown, unknown, never, never, never, never, E, A>
}
