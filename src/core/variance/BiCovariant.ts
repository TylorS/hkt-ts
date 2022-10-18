import { identity, pipe } from '@fp-ts/data/Function'

import { Covariant } from './Covariant.js'

import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'

export interface BiCovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly bimap: <A, B, C, D>(
    f: (a: A) => B,
    g: (a: C) => D,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, A, C>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, B, D>
}

export function bimap<T extends TypeLambda, U extends TypeLambda>(
  T: Covariant<T>,
  U: BiCovariant<U>,
) {
  return <A, B, C, D>(f: (a: A) => B, g: (a: C) => D) =>
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
          A,
          C
        >
      >,
    ) =>
      pipe(fa, T.map(U.bimap(f, g)))
}

export function bimapSecond<T extends TypeLambda, U extends TypeLambda>(
  T: BiCovariant<T>,
  U: BiCovariant<U>,
) {
  return <A, B, C, D>(f: (a: A) => B, g: (a: C) => D) =>
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
      Out1_1,
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
          A,
          C
        >,
        Out1_1
      >,
    ) =>
      pipe(fa, T.bimap(U.bimap(f, g), identity))
}

export function mapLeft<T extends TypeLambda>(T: BiCovariant<T>) {
  return <A, B>(f: (a: A) => B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out1>(
      fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, A, Out1>,
    ) =>
      pipe(fa, T.bimap(f, identity))
}

export function map<T extends TypeLambda>(T: BiCovariant<T>) {
  return <A, B>(f: (a: A) => B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
      fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
    ): Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B> =>
      pipe(fa, T.bimap(identity, f))
}

export function flapSecond<T extends TypeLambda>(T: BiCovariant<T>) {
  return <A>(value: A) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, B, Out1>(
      fab: Kind<
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
        (a: A) => B,
        Out1
      >,
    ) =>
      pipe(
        fab,
        T.bimap((f) => f(value), identity),
      )
}

export function mapSecondTo<T extends TypeLambda>(T: BiCovariant<T>) {
  return <A>(value: A) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, B, Out1>(
      fb: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, B, Out1>,
    ) =>
      pipe(
        fb,
        T.bimap(() => value, identity),
      )
}

export function bindSecondTo<T extends TypeLambda>(T: BiCovariant<T>) {
  return <Name extends string>(name: Name) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
      fb: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
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
      { readonly [_ in Name]: Out2 },
      Out1
    > =>
      pipe(
        fb,
        T.bimap((b) => ({ [name]: b } as Readonly<Record<Name, Out2>>), identity),
      )
}
