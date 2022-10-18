import { Kind, TypeClass, TypeLambda } from '../HKT.js'

import { BiCovariant } from './BiCovariant.js'
import { Covariant } from './Covariant.js'
import { TetraCovariant } from './TetraCovariant.js'
import { TriCovariant } from './TriCovariant.js'

import { identity, pipe } from '@/data/Function.js'

export interface PentaCovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly pentamap: <A, B, C, D, E, F, G, H, I, J>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
    i: (a: G) => H,
    j: (a: I) => J,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, A, C, E, G, I>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, B, D, F, H, J>
}

export function pentamap<T extends TypeLambda, U extends TypeLambda>(
  T: Covariant<T>,
  U: PentaCovariant<U>,
) {
  return <A, B, C, D, E, F, G, H, I, J>(
      f: (a: A) => B,
      g: (a: C) => D,
      h: (a: E) => F,
      i: (a: G) => H,
      j: (a: I) => J,
    ) =>
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
        Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, A, C, E, G, I>
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
      Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, Out6_2, B, D, F, H, J>
    > =>
      pipe(kind, T.map(U.pentamap(f, g, h, i, j)))
}

export function mapFifth<T extends TypeLambda>(T: PentaCovariant<T>) {
  return <A, B>(f: (a: A) => B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out4, Out3, Out2, Out1>(
      kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, A, Out4, Out3, Out2, Out1>,
    ): Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, B, Out4, Out3, Out2, Out1> =>
      pipe(kind, T.pentamap(f, identity, identity, identity, identity))
}

export function tetramap<T extends TypeLambda>(
  T: PentaCovariant<T>,
): TetraCovariant<T>['tetramap'] {
  return (f, g, h, i) => (kind) => pipe(kind, T.pentamap(identity, f, g, h, i))
}

export function trimap<T extends TypeLambda>(T: PentaCovariant<T>): TriCovariant<T>['trimap'] {
  return (f, g, h) => (kind) => pipe(kind, T.pentamap(identity, identity, f, g, h))
}

export function bimap<T extends TypeLambda>(T: PentaCovariant<T>): BiCovariant<T>['bimap'] {
  return (f, g) => (kind) => pipe(kind, T.pentamap(identity, identity, identity, f, g))
}

export function map<T extends TypeLambda>(T: PentaCovariant<T>): Covariant<T>['map'] {
  return (f) => (kind) => pipe(kind, T.pentamap(identity, identity, identity, identity, f))
}
