import { BiCovariant } from './BiCovariant.js'
import { Covariant } from './Covariant.js'
import { TriCovariant } from './TriCovariant.js'

import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'
import { identity, pipe } from '@/data/Function.js'

export interface TetraCovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly tetramap: <A, B, C, D, E, F, G, H>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
    i: (a: G) => H,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, A, C, E, G>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, B, D, F, H>
}

export function tetramap<T extends TypeLambda, U extends TypeLambda>(
  T: Covariant<T>,
  U: TetraCovariant<U>,
) {
  return <A, B, C, D, E, F, G, H>(f: (a: A) => B, g: (a: C) => D, h: (a: E) => F, i: (a: G) => H) =>
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
        Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, A, C, E, G>
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
      Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, Out5_2, B, D, F, H>
    > =>
      pipe(kind, T.map(U.tetramap(f, g, h, i)))
}

export function mapFourth<T extends TypeLambda>(T: TetraCovariant<T>) {
  return <A, B>(f: (a: A) => B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out3, Out2, Out1>(
      fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, A, Out3, Out2, Out1>,
    ) =>
      pipe(fa, T.tetramap(f, identity, identity, identity))
}

export function trimap<T extends TypeLambda>(T: TetraCovariant<T>): TriCovariant<T>['trimap'] {
  return (f, g, h) => (kind) => pipe(kind, T.tetramap(identity, f, g, h))
}

export function bimap<T extends TypeLambda>(T: TetraCovariant<T>): BiCovariant<T>['bimap'] {
  return (f, g) => (kind) => pipe(kind, T.tetramap(identity, identity, f, g))
}

export function map<T extends TypeLambda>(T: TetraCovariant<T>): Covariant<T>['map'] {
  return (f) => (kind) => pipe(kind, T.tetramap(identity, identity, identity, f))
}
