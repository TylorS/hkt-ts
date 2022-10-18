import { Kind, TypeClass, TypeLambda } from '../HKT.js'

import { BiCovariant } from './BiCovariant.js'
import { Covariant } from './Covariant.js'
import { PentaCovariant } from './PentaCovariant.js'
import { TetraCovariant } from './TetraCovariant.js'
import { TriCovariant } from './TriCovariant.js'

import { identity, pipe } from '@/data/Function.js'

export interface HexaCovariant<T extends TypeLambda> extends TypeClass<T> {
  readonly hexamap: <A, B, C, D, E, F, G, H, I, J, K, L>(
    f: (a: A) => B,
    g: (a: C) => D,
    h: (a: E) => F,
    i: (a: G) => H,
    j: (a: I) => J,
    k: (a: K) => L,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, A, C, E, G, I, K>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, B, D, F, H, J, L>
}

export function hexamap<T extends TypeLambda, U extends TypeLambda>(
  T: Covariant<T>,
  U: HexaCovariant<U>,
) {
  return <A, B, C, D, E, F, G, H, I, J, K, L>(
      f: (a: A) => B,
      g: (a: C) => D,
      h: (a: E) => F,
      i: (a: G) => H,
      j: (a: I) => J,
      k: (a: K) => L,
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
        Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, A, C, E, G, I, K>
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
      Kind<U, InOut3_2, InOut2_2, InOut1_2, In3_2, In2_2, In1_2, B, D, F, H, J, L>
    > =>
      pipe(kind, T.map(U.hexamap(f, g, h, i, j, k)))
}

export function mapSixth<T extends TypeLambda>(T: HexaCovariant<T>) {
  return <A, B>(f: (a: A) => B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out5, Out4, Out3, Out2, Out1>(
      fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, A, Out5, Out4, Out3, Out2, Out1>,
    ) =>
      pipe(fa, T.hexamap(f, identity, identity, identity, identity, identity))
}

export function pentamap<T extends TypeLambda>(T: HexaCovariant<T>): PentaCovariant<T>['pentamap'] {
  return (f, g, h, i, j) => (kind) => pipe(kind, T.hexamap(identity, f, g, h, i, j))
}

export function tetramap<T extends TypeLambda>(T: HexaCovariant<T>): TetraCovariant<T>['tetramap'] {
  return (f, g, h, i) => (kind) => pipe(kind, T.hexamap(identity, identity, f, g, h, i))
}

export function trimap<T extends TypeLambda>(T: HexaCovariant<T>): TriCovariant<T>['trimap'] {
  return (f, g, h) => (kind) => pipe(kind, T.hexamap(identity, identity, identity, f, g, h))
}

export function bimap<T extends TypeLambda>(T: HexaCovariant<T>): BiCovariant<T>['bimap'] {
  return (f, g) => (kind) => pipe(kind, T.hexamap(identity, identity, identity, identity, f, g))
}

export function map<T extends TypeLambda>(T: HexaCovariant<T>): Covariant<T>['map'] {
  return (f) => (kind) => pipe(kind, T.hexamap(identity, identity, identity, identity, identity, f))
}
