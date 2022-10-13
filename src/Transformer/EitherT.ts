import { pipe } from '../Function.js'
import { Kind, TypeLambda } from '../HKT.js'
import * as E from '../Kind/Either.js'
import { Either, Left, Right } from '../Kind/Either.js'
import * as Apply from '../TypeClass/Kind/Apply.js'
import { FromIdentity, of } from '../TypeClass/Kind/FromIdentity.js'
import { Covariant } from '../TypeClass/Variance/Covariant.js'

export function right<T extends TypeLambda>(P: FromIdentity<T>) {
  const of_ = of(P)

  return <A, InOut3, InOut2, InOut1>(value: A) =>
    of_<Either<never, A>, InOut3, InOut2, InOut1>(Right(value))
}

export function left<T extends TypeLambda>(P: FromIdentity<T>) {
  const of_ = of(P)

  return <E, InOut3, InOut2, InOut1>(value: E) =>
    of_<Either<E, never>, InOut3, InOut2, InOut1>(Left(value))
}

export function toRight<T extends TypeLambda>(C: Covariant<T>) {
  return <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
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
    Either<never, Out1>
  > => pipe(kind, C.map(Right))
}

export function toLeft<T extends TypeLambda>(C: Covariant<T>) {
  return <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>(
    kind: Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Out1>,
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
    Either<Out1, never>
  > => pipe(kind, C.map(Left))
}

export function map<T extends TypeLambda>(C: Covariant<T>) {
  return <A, B>(f: (a: A) => B) =>
    <InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, E>(
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
        Either<E, A>
      >,
    ): Kind<T, InOut3, InOut2, InOut1, In3, In2, In1, Out6, Out5, Out4, Out3, Out2, Either<E, B>> =>
      pipe(kind, C.map(E.map(f)))
}

export function both<T extends TypeLambda>(T: Apply.Apply<T>) {
  return <
      InOut3,
      InOut2,
      InOut1,
      In3_2,
      In2_2,
      In1_2,
      Out6_2,
      Out5_2,
      Out4_2,
      Out3_2,
      Out2_2,
      E2,
      B,
    >(
      second: Kind<
        T,
        InOut3,
        InOut2,
        InOut1,
        In3_2,
        In2_2,
        In1_2,
        Out6_2,
        Out5_2,
        Out4_2,
        Out3_2,
        Out2_2,
        Either<E2, B>
      >,
    ) =>
    <In3_1, In2_1, In1_1, Out6_1, Out5_1, Out4_1, Out3_1, Out2_1, E, A>(
      first: Kind<
        T,
        InOut3,
        InOut2,
        InOut1,
        In3_1,
        In2_1,
        In1_1,
        Out6_1,
        Out5_1,
        Out4_1,
        Out3_1,
        Out2_1,
        Either<E, A>
      >,
    ): Kind<
      T,
      InOut3,
      InOut2,
      InOut1,
      In3_1 & In3_2,
      In2_1 & In2_2,
      In1_1 & In1_2,
      Out6_1 | Out6_2,
      Out5_1 | Out5_2,
      Out4_1 | Out4_2,
      Out3_1 | Out3_2,
      Out2_1 | Out2_2,
      Either<E | E2, readonly [A, B]>
    > =>
      Apply.both(T, E.AssociativeBoth)(second)(first)
}
