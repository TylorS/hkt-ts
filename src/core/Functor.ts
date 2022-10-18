import * as F from '@fp-ts/core/Functor'
import { pipe } from '@fp-ts/data/Function'

import { Kind, TypeClass, TypeLambda } from '@/core/HKT.js'

export interface Functor<T extends TypeLambda> extends TypeClass<T> {
  readonly map: <A, B>(
    f: (a: A) => B,
  ) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
    fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
  ) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>
}

export const mapComposition = F.mapComposition as <T extends TypeLambda, U extends TypeLambda>(
  T: Functor<T>,
  U: Functor<U>,
) => <A, B>(
  f: (a: A) => B,
) => <
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
) => Kind<
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
>

export const flap = F.flap as <T extends TypeLambda>(
  T: Functor<T>,
) => <A>(
  value: A,
) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>(
  fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, (a: A) => B>,
) => Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B>

const let_ = F.let as <F extends TypeLambda>(
  F: Functor<F>,
) => <N extends string, A extends object, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
  self: Kind<F, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
) => Kind<
  F,
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
  A & { readonly [_ in N]: B }
>

export { let_ as let }

export const bindTo = F.bindTo as <T extends TypeLambda>(
  T: Functor<T>,
) => <N extends string, A>(
  name: N,
) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2>(
  fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
) => Kind<
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
  { readonly [_ in N]: A }
>

export const tupled = F.tupled as <F extends TypeLambda>(
  Functor: F.Functor<F>,
) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
  kind: Kind<F, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
) => Kind<F, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, readonly [Out1]>

export const unit = F.unit as <F extends TypeLambda>(
  Functor: F.Functor<F>,
) => <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
  kind: Kind<F, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
) => Kind<F, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, void>

export function mapTo<T extends TypeLambda>(T: Functor<T>) {
  return <B>(value: B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>(
      fa: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, A>,
    ): Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, B> =>
      pipe(
        fa,
        T.map(() => value),
      )
}
