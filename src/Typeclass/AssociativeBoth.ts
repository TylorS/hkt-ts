import {
  DefaultOf,
  HKT,
  HKT10,
  HKT2,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
  Kind,
  Kind10,
  Kind2,
  Kind3,
  Kind4,
  Kind5,
  Kind6,
  Kind7,
  Kind8,
  Kind9,
  ParamOf,
  Params,
} from '../HKT.js'
import type { NonEmptyArray } from '../NonEmptyArray.js'
import { flow, pipe } from '../function.js'

import type {
  Contravariant,
  Contravariant1,
  Contravariant10,
  Contravariant2,
  Contravariant2EC,
  Contravariant3,
  Contravariant3EC,
  Contravariant3RC,
  Contravariant3REC,
  Contravariant4,
  Contravariant4EC,
  Contravariant4RC,
  Contravariant4REC,
  Contravariant4SC,
  Contravariant4SEC,
  Contravariant4SRC,
  Contravariant4SREC,
  Contravariant5,
  Contravariant6,
  Contravariant7,
  Contravariant8,
  Contravariant9,
} from './Contravariant.js'
import {
  Covariant,
  Covariant1,
  Covariant10,
  Covariant2,
  Covariant2EC,
  Covariant3,
  Covariant3EC,
  Covariant3RC,
  Covariant3REC,
  Covariant4,
  Covariant4EC,
  Covariant4RC,
  Covariant4REC,
  Covariant4SC,
  Covariant4SEC,
  Covariant4SRC,
  Covariant4SREC,
  Covariant5,
  Covariant6,
  Covariant7,
  Covariant8,
  Covariant9,
  tupled,
} from './Covariant.js'

/* #region TypeClass */
export interface AssociativeBoth<T extends HKT> {
  readonly both: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, readonly [A, B]>
}

export interface AssociativeBoth1<T extends HKT> {
  readonly both: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, readonly [A, B]>
}

export interface AssociativeBoth2<T extends HKT2> {
  readonly both: <E, B>(
    second: Kind2<T, E, B>,
  ) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, readonly [A, B]>
}

export interface AssociativeBoth2EC<T extends HKT2, E> {
  readonly both: <B>(
    second: Kind2<T, E, B>,
  ) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, readonly [A, B]>
}

export interface AssociativeBoth3<T extends HKT3> {
  readonly both: <R, E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, readonly [A, B]>
}

export interface AssociativeBoth3RC<T extends HKT3, R> {
  readonly both: <E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, readonly [A, B]>
}

export interface AssociativeBoth3REC<T extends HKT3, R, E> {
  readonly both: <B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, readonly [A, B]>
}

export interface AssociativeBoth3EC<T extends HKT3, E> {
  readonly both: <R, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, readonly [A, B]>
}

export interface AssociativeBoth4<T extends HKT4> {
  readonly both: <S, R, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth4SREC<T extends HKT4, S, R, E> {
  readonly both: <B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth4SC<T extends HKT4, S> {
  readonly both: <R, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth4SRC<T extends HKT4, S, R> {
  readonly both: <E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth4RC<T extends HKT4, R> {
  readonly both: <S, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth4SEC<T extends HKT4, S, E> {
  readonly both: <R, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth4REC<T extends HKT4, R, E> {
  readonly both: <S, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth4EC<T extends HKT4, E> {
  readonly both: <S, R, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth5<T extends HKT5> {
  readonly both: <U, S, R, E, B>(
    second: Kind5<T, U, S, R, E, B>,
  ) => <A>(first: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth6<T extends HKT6> {
  readonly both: <V, U, S, R, E, B>(
    second: Kind6<T, V, U, S, R, E, B>,
  ) => <A>(first: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth7<T extends HKT7> {
  readonly both: <W, V, U, S, R, E, B>(
    second: Kind7<T, W, V, U, S, R, E, B>,
  ) => <A>(first: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth8<T extends HKT8> {
  readonly both: <X, W, V, U, S, R, E, B>(
    second: Kind8<T, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth9<T extends HKT9> {
  readonly both: <Y, X, W, V, U, S, R, E, B>(
    second: Kind9<T, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth10<T extends HKT10> {
  readonly both: <Z, Y, X, W, V, U, S, R, E, B>(
    second: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, readonly [A, B]>
}
/* #endregion */

/* #region Covariant */

/* #region tuple */
export function tuple<T extends HKT10>(
  ABC: AssociativeBoth10<T> & Covariant10<T>,
): <
  AS extends NonEmptyArray<
    Kind10<
      T,
      DefaultOf<T, Params.Z>,
      DefaultOf<T, Params.Y>,
      DefaultOf<T, Params.X>,
      DefaultOf<T, Params.W>,
      DefaultOf<T, Params.V>,
      DefaultOf<T, Params.U>,
      DefaultOf<T, Params.S>,
      DefaultOf<T, Params.R>,
      DefaultOf<T, Params.E>,
      any
    >
  >,
>(
  ...values: AS
) => Kind10<
  T,
  ParamOf<T, AS[number], Params.Z>,
  ParamOf<T, AS[number], Params.Y>,
  ParamOf<T, AS[number], Params.X>,
  ParamOf<T, AS[number], Params.W>,
  ParamOf<T, AS[number], Params.V>,
  ParamOf<T, AS[number], Params.U>,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT9>(
  ABC: AssociativeBoth9<T> & Covariant9<T>,
): <
  AS extends NonEmptyArray<
    Kind9<
      T,
      DefaultOf<T, Params.Y>,
      DefaultOf<T, Params.X>,
      DefaultOf<T, Params.W>,
      DefaultOf<T, Params.V>,
      DefaultOf<T, Params.U>,
      DefaultOf<T, Params.S>,
      DefaultOf<T, Params.R>,
      DefaultOf<T, Params.E>,
      any
    >
  >,
>(
  ...values: AS
) => Kind9<
  T,
  ParamOf<T, AS[number], Params.Y>,
  ParamOf<T, AS[number], Params.X>,
  ParamOf<T, AS[number], Params.W>,
  ParamOf<T, AS[number], Params.V>,
  ParamOf<T, AS[number], Params.U>,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT8>(
  ABC: AssociativeBoth8<T> & Covariant8<T>,
): <
  AS extends NonEmptyArray<
    Kind8<
      T,
      DefaultOf<T, Params.X>,
      DefaultOf<T, Params.W>,
      DefaultOf<T, Params.V>,
      DefaultOf<T, Params.U>,
      DefaultOf<T, Params.S>,
      DefaultOf<T, Params.R>,
      DefaultOf<T, Params.E>,
      any
    >
  >,
>(
  ...values: AS
) => Kind8<
  T,
  ParamOf<T, AS[number], Params.X>,
  ParamOf<T, AS[number], Params.W>,
  ParamOf<T, AS[number], Params.V>,
  ParamOf<T, AS[number], Params.U>,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT7>(
  ABC: AssociativeBoth7<T> & Covariant7<T>,
): <
  AS extends NonEmptyArray<
    Kind7<
      T,
      DefaultOf<T, Params.W>,
      DefaultOf<T, Params.V>,
      DefaultOf<T, Params.U>,
      DefaultOf<T, Params.S>,
      DefaultOf<T, Params.R>,
      DefaultOf<T, Params.E>,
      any
    >
  >,
>(
  ...values: AS
) => Kind7<
  T,
  ParamOf<T, AS[number], Params.W>,
  ParamOf<T, AS[number], Params.V>,
  ParamOf<T, AS[number], Params.U>,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT6>(
  ABC: AssociativeBoth6<T> & Covariant6<T>,
): <
  AS extends NonEmptyArray<
    Kind6<
      T,
      DefaultOf<T, Params.V>,
      DefaultOf<T, Params.U>,
      DefaultOf<T, Params.S>,
      DefaultOf<T, Params.R>,
      DefaultOf<T, Params.E>,
      any
    >
  >,
>(
  ...values: AS
) => Kind6<
  T,
  ParamOf<T, AS[number], Params.V>,
  ParamOf<T, AS[number], Params.U>,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT5>(
  ABC: AssociativeBoth5<T> & Covariant5<T>,
): <
  AS extends NonEmptyArray<
    Kind5<
      T,
      DefaultOf<T, Params.U>,
      DefaultOf<T, Params.S>,
      DefaultOf<T, Params.R>,
      DefaultOf<T, Params.E>,
      any
    >
  >,
>(
  ...values: AS
) => Kind5<
  T,
  ParamOf<T, AS[number], Params.U>,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT4, E>(
  ABC: AssociativeBoth4EC<T, E> & Covariant4EC<T, E>,
): <AS extends NonEmptyArray<Kind4<T, DefaultOf<T, Params.S>, DefaultOf<T, Params.R>, E, any>>>(
  ...values: AS
) => Kind4<
  T,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  E,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT4, R, E>(
  ABC: AssociativeBoth4REC<T, R, E> & Covariant4REC<T, R, E>,
): <AS extends NonEmptyArray<Kind4<T, DefaultOf<T, Params.S>, R, E, any>>>(
  ...values: AS
) => Kind4<
  T,
  ParamOf<T, AS[number], Params.S>,
  R,
  E,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT4, S, E>(
  ABC: AssociativeBoth4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): <AS extends NonEmptyArray<Kind4<T, S, DefaultOf<T, Params.R>, E, any>>>(
  ...values: AS
) => Kind4<
  T,
  S,
  ParamOf<T, AS[number], Params.R>,
  E,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT4, R>(
  ABC: AssociativeBoth4RC<T, R> & Covariant4RC<T, R>,
): <AS extends NonEmptyArray<Kind4<T, DefaultOf<T, Params.S>, R, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind4<
  T,
  ParamOf<T, AS[number], Params.S>,
  R,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT4, S, R>(
  ABC: AssociativeBoth4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): <AS extends NonEmptyArray<Kind4<T, S, R, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind4<
  T,
  S,
  R,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT4, S>(
  ABC: AssociativeBoth4SC<T, S> & Covariant4SC<T, S>,
): <AS extends NonEmptyArray<Kind4<T, S, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind4<
  T,
  S,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT4, S, R, E>(
  ABC: AssociativeBoth4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): <AS extends NonEmptyArray<Kind4<T, S, R, E, any>>>(
  ...values: AS
) => Kind4<T, S, R, E, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT4>(
  ABC: AssociativeBoth4<T> & Covariant4<T>,
): <
  AS extends NonEmptyArray<
    Kind4<T, DefaultOf<T, Params.S>, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>
  >,
>(
  ...values: AS
) => Kind4<
  T,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT3, E>(
  ABC: AssociativeBoth3EC<T, E> & Covariant3EC<T, E>,
): <AS extends NonEmptyArray<Kind3<T, DefaultOf<T, Params.R>, E, any>>>(
  ...values: AS
) => Kind3<
  T,
  ParamOf<T, AS[number], Params.R>,
  E,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT3, R, E>(
  ABC: AssociativeBoth3REC<T, R, E> & Covariant3REC<T, R, E>,
): <AS extends NonEmptyArray<Kind3<T, R, E, any>>>(
  ...values: AS
) => Kind3<T, R, E, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT3, R>(
  ABC: AssociativeBoth3RC<T, R> & Covariant3RC<T, R>,
): <AS extends NonEmptyArray<Kind3<T, R, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind3<
  T,
  R,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT3>(
  ABC: AssociativeBoth3<T> & Covariant3<T>,
): <AS extends NonEmptyArray<Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind3<
  T,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT2, E>(
  ABC: AssociativeBoth2EC<T, E> & Covariant2EC<T, E>,
): <AS extends NonEmptyArray<Kind2<T, E, any>>>(
  ...values: AS
) => Kind2<T, E, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT2>(
  ABC: AssociativeBoth2<T> & Covariant2<T>,
): <AS extends NonEmptyArray<Kind2<T, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind2<
  T,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT>(
  ABC: AssociativeBoth1<T> & Covariant1<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(
  ABC: AssociativeBoth<T> & Covariant<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(
  AB: AssociativeBoth<T> & Covariant<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }> {
  const tupled_ = tupled(AB)

  return (...[head, ...rest]) =>
    rest.reduce(
      (acc: Kind<T, readonly any[]>, next) =>
        pipe(
          acc,
          AB.both(next),
          AB.map(([acc, x]) => [...acc, x]),
        ),
      tupled_(head),
    )
}
/* #endregion */

/* #region zipRight */
export function zipRight<T extends HKT10>(
  ABC: AssociativeBoth10<T> & Covariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, B>(
  second: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
) => <A>(first: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>

export function zipRight<T extends HKT9>(
  ABC: AssociativeBoth9<T> & Covariant9<T>,
): <Y, X, W, V, U, S, R, E, B>(
  second: Kind9<T, Y, X, W, V, U, S, R, E, B>,
) => <A>(first: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Kind9<T, Y, X, W, V, U, S, R, E, B>

export function zipRight<T extends HKT8>(
  ABC: AssociativeBoth8<T> & Covariant8<T>,
): <X, W, V, U, S, R, E, B>(
  second: Kind8<T, X, W, V, U, S, R, E, B>,
) => <A>(first: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, B>

export function zipRight<T extends HKT7>(
  ABC: AssociativeBoth7<T> & Covariant7<T>,
): <W, V, U, S, R, E, B>(
  second: Kind7<T, W, V, U, S, R, E, B>,
) => <A>(first: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>

export function zipRight<T extends HKT6>(
  ABC: AssociativeBoth6<T> & Covariant6<T>,
): <V, U, S, R, E, B>(
  second: Kind6<T, V, U, S, R, E, B>,
) => <A>(first: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>

export function zipRight<T extends HKT5>(
  ABC: AssociativeBoth5<T> & Covariant5<T>,
): <U, S, R, E, B>(
  second: Kind5<T, U, S, R, E, B>,
) => <A>(first: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>

export function zipRight<T extends HKT4, E>(
  ABC: AssociativeBoth4EC<T, E> & Covariant4EC<T, E>,
): <S, R, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT4, R, E>(
  ABC: AssociativeBoth4REC<T, R, E> & Covariant4REC<T, R, E>,
): <S, B>(second: Kind4<T, S, R, E, B>) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT4, S, E>(
  ABC: AssociativeBoth4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): <R, B>(second: Kind4<T, S, R, E, B>) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT4, R>(
  ABC: AssociativeBoth4RC<T, R> & Covariant4RC<T, R>,
): <S, E, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT4, S, R>(
  ABC: AssociativeBoth4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): <E, B>(second: Kind4<T, S, R, E, B>) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT4, S>(
  ABC: AssociativeBoth4SC<T, S> & Covariant4SC<T, S>,
): <R, E, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT4, S, R, E>(
  ABC: AssociativeBoth4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): <B>(second: Kind4<T, S, R, E, B>) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT4>(
  ABC: AssociativeBoth4<T> & Covariant4<T>,
): <S, R, E, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT3, E>(
  ABC: AssociativeBoth3EC<T, E> & Covariant3EC<T, E>,
): <R, B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function zipRight<T extends HKT3, R, E>(
  ABC: AssociativeBoth3REC<T, R, E> & Covariant3REC<T, R, E>,
): <B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function zipRight<T extends HKT3, R>(
  ABC: AssociativeBoth3RC<T, R> & Covariant3RC<T, R>,
): <E, B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function zipRight<T extends HKT3>(
  ABC: AssociativeBoth3<T> & Covariant3<T>,
): <R, E, B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function zipRight<T extends HKT2, E>(
  ABC: AssociativeBoth2EC<T, E> & Covariant2EC<T, E>,
): <B>(second: Kind2<T, E, B>) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, B>

export function zipRight<T extends HKT2>(
  ABC: AssociativeBoth2<T> & Covariant2<T>,
): <E, B>(second: Kind2<T, E, B>) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, B>

export function zipRight<T extends HKT>(
  ABC: AssociativeBoth1<T> & Covariant1<T>,
): <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, B>

export function zipRight<T extends HKT>(
  ABC: AssociativeBoth<T> & Covariant<T>,
): <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, B>

export function zipRight<T extends HKT>(
  ABC: AssociativeBoth<T> & Covariant<T>,
): <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, B> {
  return (s) => (f) =>
    pipe(
      f,
      ABC.both(s),
      ABC.map(([, b]) => b),
    )
}

/* #endregion */

/* #region zipLeft */
export function zipLeft<T extends HKT10>(
  ABC: AssociativeBoth10<T> & Covariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, B>(
  second: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
) => <A>(first: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function zipLeft<T extends HKT9>(
  ABC: AssociativeBoth9<T> & Covariant9<T>,
): <Y, X, W, V, U, S, R, E, B>(
  second: Kind9<T, Y, X, W, V, U, S, R, E, B>,
) => <A>(first: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function zipLeft<T extends HKT8>(
  ABC: AssociativeBoth8<T> & Covariant8<T>,
): <X, W, V, U, S, R, E, B>(
  second: Kind8<T, X, W, V, U, S, R, E, B>,
) => <A>(first: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, A>

export function zipLeft<T extends HKT7>(
  ABC: AssociativeBoth7<T> & Covariant7<T>,
): <W, V, U, S, R, E, B>(
  second: Kind7<T, W, V, U, S, R, E, B>,
) => <A>(first: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, A>

export function zipLeft<T extends HKT6>(
  ABC: AssociativeBoth6<T> & Covariant6<T>,
): <V, U, S, R, E, B>(
  second: Kind6<T, V, U, S, R, E, B>,
) => <A>(first: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, A>

export function zipLeft<T extends HKT5>(
  ABC: AssociativeBoth5<T> & Covariant5<T>,
): <U, S, R, E, B>(
  second: Kind5<T, U, S, R, E, B>,
) => <A>(first: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, A>

export function zipLeft<T extends HKT4, E>(
  ABC: AssociativeBoth4EC<T, E> & Covariant4EC<T, E>,
): <S, R, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT4, R, E>(
  ABC: AssociativeBoth4REC<T, R, E> & Covariant4REC<T, R, E>,
): <S, B>(second: Kind4<T, S, R, E, B>) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT4, S, E>(
  ABC: AssociativeBoth4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): <R, B>(second: Kind4<T, S, R, E, B>) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT4, R>(
  ABC: AssociativeBoth4RC<T, R> & Covariant4RC<T, R>,
): <S, E, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT4, S, R>(
  ABC: AssociativeBoth4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): <E, B>(second: Kind4<T, S, R, E, B>) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT4, S>(
  ABC: AssociativeBoth4SC<T, S> & Covariant4SC<T, S>,
): <R, E, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT4, S, R, E>(
  ABC: AssociativeBoth4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): <B>(second: Kind4<T, S, R, E, B>) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT4>(
  ABC: AssociativeBoth4<T> & Covariant4<T>,
): <S, R, E, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT3, E>(
  ABC: AssociativeBoth3EC<T, E> & Covariant3EC<T, E>,
): <R, B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function zipLeft<T extends HKT3, R, E>(
  ABC: AssociativeBoth3REC<T, R, E> & Covariant3REC<T, R, E>,
): <B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function zipLeft<T extends HKT3, R>(
  ABC: AssociativeBoth3RC<T, R> & Covariant3RC<T, R>,
): <E, B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function zipLeft<T extends HKT3>(
  ABC: AssociativeBoth3<T> & Covariant3<T>,
): <R, E, B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function zipLeft<T extends HKT2, E>(
  ABC: AssociativeBoth2EC<T, E> & Covariant2EC<T, E>,
): <B>(second: Kind2<T, E, B>) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, A>

export function zipLeft<T extends HKT2>(
  ABC: AssociativeBoth2<T> & Covariant2<T>,
): <E, B>(second: Kind2<T, E, B>) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, A>

export function zipLeft<T extends HKT>(
  ABC: AssociativeBoth1<T> & Covariant1<T>,
): <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, A>

export function zipLeft<T extends HKT>(
  ABC: AssociativeBoth<T> & Covariant<T>,
): <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, A>

export function zipLeft<T extends HKT>(
  ABC: AssociativeBoth<T> & Covariant<T>,
): <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, A> {
  return (s) => (f) =>
    pipe(
      f,
      ABC.both(s),
      ABC.map(([a]) => a),
    )
}
/* #endregion */

/* #endregion */

/* #region Contravariant */
export function bothWith<T extends HKT10>(
  AB: AssociativeBoth10<T> & Contravariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, B, C, A>(
  b: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => Kind10<T, Z, Y, X, W, V, U, S, R, E, C>

export function bothWith<T extends HKT9>(
  AB: AssociativeBoth9<T> & Contravariant9<T>,
): <Y, X, W, V, U, S, R, E, B, C, A>(
  b: Kind9<T, Y, X, W, V, U, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Kind9<T, Y, X, W, V, U, S, R, E, C>

export function bothWith<T extends HKT8>(
  AB: AssociativeBoth8<T> & Contravariant8<T>,
): <X, W, V, U, S, R, E, B, C, A>(
  b: Kind8<T, X, W, V, U, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, C>

export function bothWith<T extends HKT7>(
  AB: AssociativeBoth7<T> & Contravariant7<T>,
): <W, V, U, S, R, E, B, C, A>(
  b: Kind7<T, W, V, U, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, C>

export function bothWith<T extends HKT6>(
  AB: AssociativeBoth6<T> & Contravariant6<T>,
): <V, U, S, R, E, B, C, A>(
  b: Kind6<T, V, U, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, C>

export function bothWith<T extends HKT5>(
  AB: AssociativeBoth5<T> & Contravariant5<T>,
): <U, S, R, E, B, C, A>(
  b: Kind5<T, U, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, C>

export function bothWith<T extends HKT4, E>(
  AB: AssociativeBoth4EC<T, E> & Contravariant4EC<T, E>,
): <S, R, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT4, R, E>(
  AB: AssociativeBoth4REC<T, R, E> & Contravariant4REC<T, R, E>,
): <S, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT4, S, E>(
  AB: AssociativeBoth4SEC<T, S, E> & Contravariant4SEC<T, S, E>,
): <R, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT4, R>(
  AB: AssociativeBoth4RC<T, R> & Contravariant4RC<T, R>,
): <S, E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT4, S, R>(
  AB: AssociativeBoth4SRC<T, S, R> & Contravariant4SRC<T, S, R>,
): <E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT4, S>(
  AB: AssociativeBoth4SC<T, S> & Contravariant4SC<T, S>,
): <R, E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT4, S, R, E>(
  AB: AssociativeBoth4SREC<T, S, R, E> & Contravariant4SREC<T, S, R, E>,
): <B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT4>(
  AB: AssociativeBoth4<T> & Contravariant4<T>,
): <S, R, E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT3, E>(
  AB: AssociativeBoth3EC<T, E> & Contravariant3EC<T, E>,
): <R, B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function bothWith<T extends HKT3, R, E>(
  AB: AssociativeBoth3REC<T, R, E> & Contravariant3REC<T, R, E>,
): <B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function bothWith<T extends HKT3, R>(
  AB: AssociativeBoth3RC<T, R> & Contravariant3RC<T, R>,
): <E, B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function bothWith<T extends HKT3>(
  AB: AssociativeBoth3<T> & Contravariant3<T>,
): <R, E, B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function bothWith<T extends HKT2, E>(
  AB: AssociativeBoth2EC<T, E> & Contravariant2EC<T, E>,
): <B, C, A>(
  b: Kind2<T, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind2<T, E, A>) => Kind2<T, E, C>

export function bothWith<T extends HKT2>(
  AB: AssociativeBoth2<T> & Contravariant2<T>,
): <E, B, C, A>(
  b: Kind2<T, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind2<T, E, A>) => Kind2<T, E, C>

export function bothWith<T extends HKT>(
  AB: AssociativeBoth1<T> & Contravariant1<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => readonly [A, B]) => (a: Kind<T, A>) => Kind<T, C>

export function bothWith<T extends HKT>(
  AB: AssociativeBoth<T> & Contravariant<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => readonly [A, B]) => (a: Kind<T, A>) => Kind<T, C>

export function bothWith<T extends HKT>(
  AB: AssociativeBoth<T> & Contravariant<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => readonly [A, B]) => (a: Kind<T, A>) => Kind<T, C> {
  return (b, f) => flow(AB.both(b), AB.contramap(f))
}

/* #endregion */

/* #region both */
export function both<F extends HKT10, G extends HKT10>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth10<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind10<
    F,
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>
  >,
) => <A>(
  first: Kind10<
    F,
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>
  >,
) => Kind10<
  F,
  Z1,
  Y1,
  X1,
  W1,
  V1,
  U1,
  S1,
  R1,
  E1,
  Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>
>

export function both<F extends HKT9, G extends HKT10>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth10<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>
  >,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<
  F,
  Y1,
  X1,
  W1,
  V1,
  U1,
  S1,
  R1,
  E1,
  Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>
>

export function both<F extends HKT8, G extends HKT10>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth10<G>,
): <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<
  F,
  X1,
  W1,
  V1,
  U1,
  S1,
  R1,
  E1,
  Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>
>

export function both<F extends HKT7, G extends HKT10>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth10<G>,
): <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<
  F,
  W1,
  V1,
  U1,
  S1,
  R1,
  E1,
  Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>
>

export function both<F extends HKT6, G extends HKT10>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth10<G>,
): <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT10>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth10<G>,
): <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT10>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth10<G>,
): <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT10>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth10<G>,
): <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT10>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT10>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth10<G>,
): <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT10>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT10>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT10>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth10<G>,
): <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT10>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT10>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT10>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT10>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT10>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT10>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT10>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT10>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT9>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth9<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind10<
    F,
    Z1,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>
  >,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<
  F,
  Z1,
  Y1,
  X1,
  W1,
  V1,
  U1,
  S1,
  R1,
  E1,
  Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>
>

export function both<F extends HKT9, G extends HKT9>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth9<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<
  F,
  Y1,
  X1,
  W1,
  V1,
  U1,
  S1,
  R1,
  E1,
  Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>
>

export function both<F extends HKT8, G extends HKT9>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth9<G>,
): <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT9>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth9<G>,
): <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT9>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth9<G>,
): <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT9>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth9<G>,
): <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT9>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth9<G>,
): <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT9>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth9<G>,
): <S1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT9>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT9>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth9<G>,
): <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT9>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT9>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT9>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth9<G>,
): <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT9>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT9>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT9>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT9>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT9>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT9>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT9>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT9>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT8>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth8<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<
  F,
  Z1,
  Y1,
  X1,
  W1,
  V1,
  U1,
  S1,
  R1,
  E1,
  Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>
>

export function both<F extends HKT9, G extends HKT8>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth8<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT8>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth8<G>,
): <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT8>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth8<G>,
): <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT8>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth8<G>,
): <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT8>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth8<G>,
): <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT8>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth8<G>,
): <S1, R1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT8>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth8<G>,
): <S1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT8>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT8>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth8<G>,
): <S1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT8>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT8>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT8>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth8<G>,
): <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT8>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT8>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT8>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT8>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT8>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT8>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT8>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT8>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT7>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth7<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<
  F,
  Z1,
  Y1,
  X1,
  W1,
  V1,
  U1,
  S1,
  R1,
  E1,
  Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>
>

export function both<F extends HKT9, G extends HKT7>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth7<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT7>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth7<G>,
): <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT7>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth7<G>,
): <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT7>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth7<G>,
): <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT7>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth7<G>,
): <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT7>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth7<G>,
): <S1, R1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT7>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth7<G>,
): <S1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT7>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth7<G>,
): <R1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT7>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth7<G>,
): <S1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT7>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth7<G>,
): <E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT7>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT7>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth7<G>,
): <S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT7>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth7<G>,
): <R1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT7>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT7>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth7<G>,
): <E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT7>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT7>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT7>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth7<G>,
): <E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT7>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT7>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT6>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth6<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT6>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth6<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT6>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth6<G>,
): <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT6>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth6<G>,
): <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT6>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth6<G>,
): <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT6>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth6<G>,
): <U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT6>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth6<G>,
): <S1, R1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT6>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth6<G>,
): <S1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT6>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth6<G>,
): <R1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT6>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth6<G>,
): <S1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT6>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth6<G>,
): <E1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT6>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth6<G>,
): <R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT6>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth6<G>,
): <S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT6>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth6<G>,
): <R1, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT6>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT6>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth6<G>,
): <E1, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT6>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth6<G>,
): <R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT6>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT6>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth6<G>,
): <E1, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT6>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT6>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT5>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth5<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT5>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth5<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT5>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth5<G>,
): <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT5>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth5<G>,
): <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT5>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth5<G>,
): <V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT5>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth5<G>,
): <U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT5>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth5<G>,
): <S1, R1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT5>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth5<G>,
): <S1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT5>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth5<G>,
): <R1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT5>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth5<G>,
): <S1, E1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT5>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth5<G>,
): <E1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT5>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth5<G>,
): <R1, E1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT5>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth5<G>,
): <S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT5>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth5<G>,
): <R1, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT5>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT5>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth5<G>,
): <E1, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT5>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth5<G>,
): <R1, E1, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT5>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT5>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth5<G>,
): <E1, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT5>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind<F, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT5>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind<F, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT4, E2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth4EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT4, R2, E2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT4, S2, E2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT4, R2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth4RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT4, S2, R2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT4, S2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth4SC<G, S2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT4>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth4<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT4, E2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth4EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT4, R2, E2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT4, S2, E2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT4, R2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth4RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT4, S2, R2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT4, S2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth4SC<G, S2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT4>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth4<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT4, E2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth4EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT4, R2, E2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT4, S2, E2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT4, R2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth4RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT4, S2, R2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT4, S2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth4SC<G, S2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT4>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth4<G>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT4, E2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth4EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT4, R2, E2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, S2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT4, S2, E2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT4, R2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth4RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT4, S2, R2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT4, S2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth4SC<G, S2>,
): <W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT4>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth4<G>,
): <W1, V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT4, E2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth4EC<G, E2>,
): <V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT4, R2, E2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, S2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT4, S2, E2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <V1, U1, S1, R1, E1, R2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT4, R2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth4RC<G, R2>,
): <V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT4, S2, R2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <V1, U1, S1, R1, E1, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT4, S2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth4SC<G, S2>,
): <V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT4>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth4<G>,
): <V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT4, E2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth4EC<G, E2>,
): <U1, S1, R1, E1, S2, R2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT4, R2, E2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <U1, S1, R1, E1, S2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT4, S2, E2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <U1, S1, R1, E1, R2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT4, R2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth4RC<G, R2>,
): <U1, S1, R1, E1, S2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT4, S2, R2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <U1, S1, R1, E1, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT4, S2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth4SC<G, S2>,
): <U1, S1, R1, E1, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT4>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth4<G>,
): <U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT4, E2>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth4EC<G, E2>,
): <S1, R1, S2, R2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <S1, S2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <R1, R2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT4, R2>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth4RC<G, R2>,
): <S1, E1, S2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT4, S2>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth4SC<G, S2>,
): <R1, E1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT4>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth4<G>,
): <S1, R1, E1, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT4, E2>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth4EC<G, E2>,
): <R1, E1, S2, R2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT4, R2, E2>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <R1, E1, S2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT4, S2, E2>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <R1, E1, R2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT4, R2>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth4RC<G, R2>,
): <R1, E1, S2, E2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <R1, E2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth4SC<G, S2>,
): <R2, E2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <E1, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT4>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth4<G>,
): <R1, E1, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT4, E2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth4EC<G, E2>,
): <E1, S2, R2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT4, R2, E2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <E1, S2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT4, S2, E2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <E1, R2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT4, R2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth4RC<G, R2>,
): <E1, S2, E2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT4, S2, R2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <E1, E2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT4, S2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth4SC<G, S2>,
): <E1, R2, E2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT4>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth4<G>,
): <E1, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, E2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth4EC<G, E2>,
): <S2, R2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, R2, E2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <S2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, S2, E2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <R2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, R2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth4RC<G, R2>,
): <S2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, S2, R2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, S2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth4SC<G, S2>,
): <R2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth4<G>,
): <S2, R2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, E2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth4EC<G, E2>,
): <S2, R2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, R2, E2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth4REC<G, R2, E2>,
): <S2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, S2, E2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth4SEC<G, S2, E2>,
): <R2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, R2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth4RC<G, R2>,
): <S2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, S2, R2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth4SRC<G, S2, R2>,
): <E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, S2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth4SC<G, S2>,
): <R2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth4SREC<G, S2, R2, E2>,
): <B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT4>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth4<G>,
): <S2, R2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT3, E2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth3EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT3, R2, E2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT3, R2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth3RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT3>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth3<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT3, E2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth3EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT3, R2, E2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT3, R2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth3RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT3>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth3<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT3, E2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth3EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT3, R2, E2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT3, R2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth3RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT3>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth3<G>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT3, E2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth3EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT3, R2, E2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT3, R2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth3RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT3>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth3<G>,
): <W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT3, E2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth3EC<G, E2>,
): <V1, U1, S1, R1, E1, R2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT3, R2, E2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT3, R2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth3RC<G, R2>,
): <V1, U1, S1, R1, E1, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT3>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth3<G>,
): <V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT3, E2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth3EC<G, E2>,
): <U1, S1, R1, E1, R2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT3, R2, E2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT3, R2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth3RC<G, R2>,
): <U1, S1, R1, E1, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT3>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth3<G>,
): <U1, S1, R1, E1, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT3>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth3<G>,
): <S1, R1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT3>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth3<G>,
): <S1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT3>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth3<G>,
): <R1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT3>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth3<G>,
): <S1, E1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth3EC<G, E2>,
): <E1, R2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth3RC<G, R2>,
): <E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT3>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth3<G>,
): <S1, R1, E1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT3, E2>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth3EC<G, E2>,
): <R1, R2, B>(
  second: Kind3<F, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <B>(
  second: Kind3<F, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT3, R2>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth3RC<G, R2>,
): <E1, E2, B>(
  second: Kind3<F, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT3>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth3<G>,
): <R1, E1, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT3, E2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth3EC<G, E2>,
): <E1, R2, B>(
  second: Kind2<F, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind3<G, R2, E2, A>>,
) => Kind2<F, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT3, R2, E2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <E1, B>(
  second: Kind2<F, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind3<G, R2, E2, A>>,
) => Kind2<F, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT3, R2>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth3RC<G, R2>,
): <E2, B>(
  second: Kind2<F, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind3<G, R2, E2, A>>,
) => Kind2<F, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT3>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth3<G>,
): <E1, R2, E2, B>(
  second: Kind2<F, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind3<G, R2, E2, A>>,
) => Kind2<F, E1, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT3, E2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth3EC<G, E2>,
): <R2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT3, R2, E2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT3, R2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth3RC<G, R2>,
): <E2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT3>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth3<G>,
): <R2, E2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT3, E2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth3EC<G, E2>,
): <R2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT3, R2, E2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth3REC<G, R2, E2>,
): <B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT3, R2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth3RC<G, R2>,
): <E2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT3>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth3<G>,
): <R2, E2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT2, E2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth2EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT2>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth2<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT2, E2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth2EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT2>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth2<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT2, E2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth2EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT2>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth2<G>,
): <X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT2, E2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth2EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT2>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth2<G>,
): <W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT2, E2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth2EC<G, E2>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT2>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth2<G>,
): <V1, U1, S1, R1, E1, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT2, E2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth2EC<G, E2>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT2>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth2<G>,
): <U1, S1, R1, E1, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT2>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth2<G>,
): <S1, R1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT2>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth2<G>,
): <S1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT2>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth2<G>,
): <R1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT2>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth2<G>,
): <S1, E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT2>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth2<G>,
): <E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT2>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth2<G>,
): <R1, E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth2EC<G, E2>,
): <B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT2>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth2<G>,
): <S1, R1, E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT2>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth2<G>,
): <R1, E2, B>(
  second: Kind3<F, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind2<G, E2, A>>,
) => Kind3<F, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT2>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth2<G>,
): <E2, B>(
  second: Kind3<F, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind2<G, E2, A>>,
) => Kind3<F, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT2, E2>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth2EC<G, E2>,
): <E1, B>(
  second: Kind3<F, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind2<G, E2, A>>,
) => Kind3<F, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT2>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth2<G>,
): <R1, E1, E2, B>(
  second: Kind3<F, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind2<G, E2, A>>,
) => Kind3<F, R1, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT2, E2>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth2EC<G, E2>,
): <B>(
  second: Kind2<F, E1, Kind2<G, E2, B>>,
) => <A>(first: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT2>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth2<G>,
): <E1, E2, B>(
  second: Kind2<F, E1, Kind2<G, E2, B>>,
) => <A>(first: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT2, E2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth2EC<G, E2>,
): <B>(
  second: Kind<F, Kind2<G, E2, B>>,
) => <A>(first: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT2>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth2<G>,
): <E2, B>(
  second: Kind<F, Kind2<G, E2, B>>,
) => <A>(first: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT2, E2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth2EC<G, E2>,
): <B>(
  second: Kind<F, Kind2<G, E2, B>>,
) => <A>(first: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT, G extends HKT2>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth2<G>,
): <E2, B>(
  second: Kind<F, Kind2<G, E2, B>>,
) => <A>(first: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth1<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth1<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth1<G>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth1<G>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth1<G>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth1<G>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth1<G>,
): <S1, R1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth1<G>,
): <S1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth1<G>,
): <R1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth1<G>,
): <S1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth1<G>,
): <E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth1<G>,
): <R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth1<G>,
): <B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth1<G>,
): <S1, R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth1<G>,
): <R1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth1<G>,
): <B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth1<G>,
): <E1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth1<G>,
): <R1, E1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth1<G>,
): <B>(
  second: Kind2<F, E1, Kind<G, B>>,
) => <A>(first: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth1<G>,
): <E1, B>(
  second: Kind2<F, E1, Kind<G, B>>,
) => <A>(first: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT, G extends HKT>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth1<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, readonly [A, B]>>

export function both<F extends HKT, G extends HKT>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth1<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, readonly [A, B]>>

export function both<F extends HKT10, G extends HKT>(
  F: AssociativeBoth10<F> & Covariant10<F>,
  G: AssociativeBoth<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT9, G extends HKT>(
  F: AssociativeBoth9<F> & Covariant9<F>,
  G: AssociativeBoth<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT8, G extends HKT>(
  F: AssociativeBoth8<F> & Covariant8<F>,
  G: AssociativeBoth<G>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT7, G extends HKT>(
  F: AssociativeBoth7<F> & Covariant7<F>,
  G: AssociativeBoth<G>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT6, G extends HKT>(
  F: AssociativeBoth6<F> & Covariant6<F>,
  G: AssociativeBoth<G>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT5, G extends HKT>(
  F: AssociativeBoth5<F> & Covariant5<F>,
  G: AssociativeBoth<G>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, E1, G extends HKT>(
  F: AssociativeBoth4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeBoth<G>,
): <S1, R1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, R1, E1, G extends HKT>(
  F: AssociativeBoth4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeBoth<G>,
): <S1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, S1, E1, G extends HKT>(
  F: AssociativeBoth4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeBoth<G>,
): <R1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, R1, G extends HKT>(
  F: AssociativeBoth4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeBoth<G>,
): <S1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, G extends HKT>(
  F: AssociativeBoth4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeBoth<G>,
): <E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, S1, G extends HKT>(
  F: AssociativeBoth4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeBoth<G>,
): <R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: AssociativeBoth4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeBoth<G>,
): <B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT4, G extends HKT>(
  F: AssociativeBoth4<F> & Covariant4<F>,
  G: AssociativeBoth<G>,
): <S1, R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT3, E1, G extends HKT>(
  F: AssociativeBoth3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeBoth<G>,
): <R1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT3, R1, E1, G extends HKT>(
  F: AssociativeBoth3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeBoth<G>,
): <B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT3, R1, G extends HKT>(
  F: AssociativeBoth3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeBoth<G>,
): <E1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT3, G extends HKT>(
  F: AssociativeBoth3<F> & Covariant3<F>,
  G: AssociativeBoth<G>,
): <R1, E1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT2, E1, G extends HKT>(
  F: AssociativeBoth2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeBoth<G>,
): <B>(
  second: Kind2<F, E1, Kind<G, B>>,
) => <A>(first: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT2, G extends HKT>(
  F: AssociativeBoth2<F> & Covariant2<F>,
  G: AssociativeBoth<G>,
): <E1, B>(
  second: Kind2<F, E1, Kind<G, B>>,
) => <A>(first: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, readonly [A, B]>>

export function both<F extends HKT, G extends HKT>(
  F: AssociativeBoth1<F> & Covariant1<F>,
  G: AssociativeBoth<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, readonly [A, B]>>

export function both<F extends HKT, G extends HKT>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, readonly [A, B]>>

export function both<F extends HKT, G extends HKT>(
  F: AssociativeBoth<F> & Covariant<F>,
  G: AssociativeBoth<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, readonly [A, B]>> {
  return <B>(second: Kind<F, Kind<G, B>>) =>
    <A>(first: Kind<F, Kind<G, A>>) =>
      pipe(
        first,
        F.both(second),
        F.map(([f, s]) => pipe(f, G.both(s))),
      )
}

/* #endregion */
