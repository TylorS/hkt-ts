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
} from '../HKT'
import type { NonEmptyArray } from '../NonEmptyArray'
import { flow, pipe } from '../function'

import type {
  Contravariant,
  Contravariant1,
  Contravariant10,
  Contravariant2,
  Contravariant3,
  Contravariant4,
  Contravariant5,
  Contravariant6,
  Contravariant7,
  Contravariant8,
  Contravariant9,
} from './Contravariant'
import {
  Covariant,
  Covariant1,
  Covariant10,
  Covariant2,
  Covariant3,
  Covariant4,
  Covariant5,
  Covariant6,
  Covariant7,
  Covariant8,
  Covariant9,
  tupled,
} from './Covariant'

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

export interface AssociativeBoth2C<T extends HKT2, E> {
  readonly both: <B>(
    second: Kind2<T, E, B>,
  ) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, readonly [A, B]>
}

export interface AssociativeBoth3<T extends HKT3> {
  readonly both: <R, E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, readonly [A, B]>
}

export interface AssociativeBoth4<T extends HKT4> {
  readonly both: <S, R, E, B>(
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
  AB: AssociativeBoth10<T> & Covariant10<T>,
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
  AB: AssociativeBoth9<T> & Covariant9<T>,
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
  AB: AssociativeBoth8<T> & Covariant8<T>,
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
  AB: AssociativeBoth7<T> & Covariant7<T>,
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
  AB: AssociativeBoth6<T> & Covariant6<T>,
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
  AB: AssociativeBoth5<T> & Covariant5<T>,
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

export function tuple<T extends HKT4>(
  AB: AssociativeBoth4<T> & Covariant4<T>,
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

export function tuple<T extends HKT3>(
  AB: AssociativeBoth3<T> & Covariant3<T>,
): <AS extends NonEmptyArray<Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind3<
  T,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT2>(
  AB: AssociativeBoth2<T> & Covariant2<T>,
): <AS extends NonEmptyArray<Kind2<T, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind2<
  T,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT>(
  AB: AssociativeBoth1<T> & Covariant1<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(
  AB: AssociativeBoth<T> & Covariant<T>,
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

export function zipRight<T extends HKT4>(
  ABC: AssociativeBoth4<T> & Covariant4<T>,
): <S, R, E, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function zipRight<T extends HKT3>(
  ABC: AssociativeBoth3<T> & Covariant3<T>,
): <R, E, B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function zipRight<T extends HKT2>(
  ABC: AssociativeBoth2<T> & Covariant2<T>,
): <E, B>(second: Kind2<T, E, B>) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, B>

export function zipRight<T extends HKT>(
  ABC: AssociativeBoth1<T> & Covariant1<T>,
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

export function zipLeft<T extends HKT4>(
  ABC: AssociativeBoth4<T> & Covariant4<T>,
): <S, R, E, B>(
  second: Kind4<T, S, R, E, B>,
) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function zipLeft<T extends HKT3>(
  ABC: AssociativeBoth3<T> & Covariant3<T>,
): <R, E, B>(second: Kind3<T, R, E, B>) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

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

export function bothWith<T extends HKT4>(
  AB: AssociativeBoth4<T> & Contravariant4<T>,
): <S, R, E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function bothWith<T extends HKT3>(
  AB: AssociativeBoth3<T> & Contravariant3<T>,
): <R, E, B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => readonly [A, B],
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

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
