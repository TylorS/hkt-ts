import { Kind, TypeLambda } from '../../HKT.js'
import { Exit } from '../../Kind/Exit.js'

export interface FromExit<T extends TypeLambda> {
  readonly fromExit: <E, A, InOut3 = unknown, InOut2 = unknown, InOut1 = unknown>(
    exit: Exit<E, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, unknown, unknown, unknown, never, never, never, never, E, A>
}
