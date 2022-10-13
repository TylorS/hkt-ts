import { pipe } from '../../Function.js'
import { Kind, TypeLambda } from '../../HKT.js'
import { Covariant } from '../Variance/Covariant.js'

import { AssociativeBoth } from './AssociativeBoth.js'

export interface Apply<T extends TypeLambda> extends AssociativeBoth<T>, Covariant<T> {}

export function both<T extends TypeLambda, T2 extends TypeLambda>(
  T: Apply<T>,
  T2: AssociativeBoth<T2>,
) {
  return <
      InOut3_4,
      InOut2_4,
      InOut1_4,
      In3_4,
      In2_4,
      In1_4,
      Out6_4,
      Out5_4,
      Out4_4,
      Out3_4,
      Out2_4,
      InOut3_3,
      InOut2_3,
      InOut1_3,
      In3_3,
      In2_3,
      In1_3,
      Out6_3,
      Out5_3,
      Out4_3,
      Out3_3,
      Out2_3,
      Out1_3,
    >(
      second: Kind<
        T,
        InOut3_4,
        InOut2_4,
        InOut1_4,
        In3_4,
        In2_4,
        In1_4,
        Out6_4,
        Out5_4,
        Out4_4,
        Out3_4,
        Out2_4,
        Kind<
          T2,
          InOut3_3,
          InOut2_3,
          InOut1_3,
          In3_3,
          In2_3,
          In1_3,
          Out6_3,
          Out5_3,
          Out4_3,
          Out3_3,
          Out2_3,
          Out1_3
        >
      >,
    ) =>
    <
      In3_2,
      In2_2,
      In1_2,
      Out6_2,
      Out5_2,
      Out4_2,
      Out3_2,
      Out2_2,
      In3_1,
      In2_1,
      In1_1,
      Out6_1,
      Out5_1,
      Out4_1,
      Out3_1,
      Out2_1,
      Out1_1,
    >(
      first: Kind<
        T,
        InOut3_4,
        InOut2_4,
        InOut1_4,
        In3_2,
        In2_2,
        In1_2,
        Out6_2,
        Out5_2,
        Out4_2,
        Out3_2,
        Out2_2,
        Kind<
          T2,
          InOut3_3,
          InOut2_3,
          InOut1_3,
          In3_1,
          In2_1,
          In1_1,
          Out6_1,
          Out5_1,
          Out4_1,
          Out3_1,
          Out2_1,
          Out1_1
        >
      >,
    ): Kind<
      T,
      InOut3_4,
      InOut2_4,
      InOut1_4,
      In3_4 & In3_2,
      In2_4 & In2_2,
      In1_4 & In1_2,
      Out6_4 | Out6_2,
      Out5_4 | Out5_2,
      Out4_4 | Out4_2,
      Out3_4 | Out3_2,
      Out2_4 | Out2_2,
      Kind<
        T2,
        InOut3_3,
        InOut2_3,
        InOut1_3,
        In3_3 & In3_1,
        In2_3 & In2_1,
        In1_3 & In1_1,
        Out6_3 | Out6_1,
        Out5_3 | Out5_1,
        Out4_3 | Out4_1,
        Out3_3 | Out3_1,
        Out2_3 | Out2_1,
        readonly [Out1_1, Out1_3]
      >
    > =>
      pipe(
        first,
        T.both(second),
        T.map(([e1, e2]) => T2.both(e2)(e1)),
      )
}
