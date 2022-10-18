import { BiCovariant } from './BiCovariant.js'
import { Covariant } from './Covariant.js'

import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'
import { identity, pipe } from '@/data/Function.js'

export interface TriCovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly trimap: <A, B, C, D, E, F>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, A, C, E>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, B, D, F>
}

export function trimap<T extends TypeLambda, U extends TypeLambda>(
  T: Covariant<T>,
  U: TriCovariant<U>,
) {
  return <A, B, C, D, E, F>(f: (a: A) => B, g: (a: C) => D, h: (a: E) => F) =>
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
    >(
      kind: Kind<
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
        Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, Out4_2, A, C, E>
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
      Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, Out4_2, B, D, F>
    > =>
      pipe(kind, T.map(U.trimap(f, g, h)))
}

export function trimapSecond<T extends TypeLambda, U extends TypeLambda>(
  T: BiCovariant<T>,
  U: TriCovariant<U>,
) {
  return <A, B, C, D, E, F>(f: (a: A) => B, g: (a: C) => D, h: (a: E) => F) =>
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
      InOut3_2,
      InOut2_2,
      InOut1_2,
      In3_2,
      In2_2,
      In1_2,
      Out6_2,
      Out5_2,
      Out4_2,
      Out1,
    >(
      kind: Kind<
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
        Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, Out4_2, A, C, E>,
        Out1
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
      Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, Out4_2, B, D, F>,
      Out1
    > =>
      pipe(kind, T.bimap(U.trimap(f, g, h), identity))
}

export function trimapThird<T extends TypeLambda, U extends TypeLambda>(
  T: TriCovariant<T>,
  U: TriCovariant<U>,
) {
  return <A, B, C, D, E, F>(f: (a: A) => B, g: (a: C) => D, h: (a: E) => F) =>
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
      InOut3_2,
      InOut2_2,
      InOut1_2,
      In3_2,
      In2_2,
      In1_2,
      Out6_2,
      Out5_2,
      Out4_2,
      Out2,
      Out1,
    >(
      kind: Kind<
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
        Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, Out4_2, A, C, E>,
        Out2,
        Out1
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
      Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, Out4_2, B, D, F>,
      Out2,
      Out1
    > =>
      pipe(kind, T.trimap(U.trimap(f, g, h), identity, identity))
}

export function mapThird<T extends TypeLambda>(T: TriCovariant<T>) {
  return <A, B>(f: (a: A) => B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out2, Out1>(
      kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, A, Out2, Out1>,
    ) =>
      pipe(kind, T.trimap(f, identity, identity))
}

export function bimap<T extends TypeLambda>(T: TriCovariant<T>): BiCovariant<T>['bimap'] {
  return <A, B, C, D>(f: (a: A) => B, g: (a: C) => D) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3>(
      kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, A, C>,
    ) =>
      pipe(kind, T.trimap(identity, f, g))
}

export function map<T extends TypeLambda>(T: TriCovariant<T>): Covariant<T>['map'] {
  return <A, B>(f: (a: A) => B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
      kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
    ): Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B> =>
      pipe(kind, T.trimap(identity, identity, f))
}
