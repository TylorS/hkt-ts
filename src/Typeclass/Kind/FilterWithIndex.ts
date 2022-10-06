import { Kind, TypeLambda } from '../../HKT.js'

export interface FilterWithIndex<T extends TypeLambda, I> {
  readonly filterWithIndex: <A>(
    predicate: (i: I, a: A) => boolean,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>
}
