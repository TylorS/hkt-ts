import { pipe } from '@fp-ts/data/Function'

import { Kind, TypeClass, TypeLambda } from '../HKT.js'

export interface Covariant<T extends TypeLambda> extends TypeClass<T> {
  readonly map: <A, B>(
    f: (a: A) => B,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>
}

export function map<T extends TypeLambda, U extends TypeLambda>(T: Covariant<T>, U: Covariant<U>) {
  return <A, B>(f: (a: A) => B) =>
    <
      InOut3_1,
      InOut2_1,
      InOut1_1,
      In3_1,
      In2_1,
      In1_1,
      Out6_1,
      Out5_1,
      Out4_1,
      Out3_1,
      Out2_1,
      InOut3_2,
      InOut2_2,
      InOut1_2,
      In3_2,
      In2_2,
      In1_2,
      Out6_2,
      Out5_2,
      Out4_2,
      Out3_2,
      Out2_2,
    >(
      fa: Kind<
        T,
        InOut3_1,
        InOut2_1,
        InOut1_1,
        In3_1,
        In2_1,
        In1_1,
        Out6_1,
        Out5_1,
        Out4_1,
        Out3_1,
        Out2_1,
        Kind<
          U,
          InOut3_2,
          InOut2_2,
          InOut1_2,
          In3_2,
          In2_2,
          In1_2,
          Out6_2,
          Out5_2,
          Out4_2,
          Out3_2,
          Out2_2,
          A
        >
      >,
    ): Kind<
      T,
      InOut3_1,
      InOut2_1,
      InOut1_1,
      In3_1,
      In2_1,
      In1_1,
      Out6_1,
      Out5_1,
      Out4_1,
      Out3_1,
      Out2_1,
      Kind<
        U,
        InOut3_2,
        InOut2_2,
        InOut1_2,
        In3_2,
        In2_2,
        In1_2,
        Out6_2,
        Out5_2,
        Out4_2,
        Out3_2,
        Out2_2,
        B
      >
    > =>
      pipe(fa, T.map(U.map(f)))
}

export function flap<T extends TypeLambda>(T: Covariant<T>) {
  return <A>(value: A) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>(
      fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, (a: A) => B>,
    ) =>
      pipe(
        fa,
        T.map((f) => f(value)),
      )
}

export function mapTo<T extends TypeLambda>(T: Covariant<T>) {
  return <B>(value: B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>(
      fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
    ) =>
      pipe(
        fa,
        T.map(() => value),
      )
}

export function bindTo<T extends TypeLambda>(T: Covariant<T>) {
  return <N extends string>(name: N) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>(
      fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
    ): Kind<
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
      { readonly [K in N]: A }
    > =>
      pipe(
        fa,
        T.map((a) => ({ [name]: a } as { readonly [K in N]: A })),
      )
}
