import { Kind, TypeLambda } from '../../HKT.js'
import { Either } from '../../Kind/Either.js'

export interface FromEither<T extends TypeLambda> {
  readonly fromEither: <E, A, InOut3 = unknown, InOut2 = unknown, InOut1 = unknown>(
    either: Either<E, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, unknown, unknown, unknown, never, never, never, never, E, A>
}
