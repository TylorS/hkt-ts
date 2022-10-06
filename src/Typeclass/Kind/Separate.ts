import { Kind, TypeLambda } from '../../HKT.js'
import { Either } from '../../Kind/Either.js'

export interface Separate<T extends TypeLambda> {
  readonly separate: <
    InOut3,
    InOut2,
    InOut1,
    In3,
    In2,
    In1,
    Out6,
    Out5,
    Out4,
    Out3,
    Out2,
    Out1E,
    Out1A,
  >(
    kind: Kind<
      T,
      InOut3,
      InOut2,
      InOut1,
      In3,
      In2,
      In1,
      Out6,
      Out5,
      Out4,
      Out3,
      Out2,
      Either<Out1E, Out1A>
    >,
  ) => readonly [
    lefts: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1E>,
    rights: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1A>,
  ]
}
