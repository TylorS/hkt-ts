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
} from './HKT'
import { NonEmptyArray } from './NonEmptyArray'
import { pipe } from './function'

export interface AssociativeBoth<T extends HKT> extends Covariant<T> {
  readonly both: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, readonly [A, B]>
}

export interface AssociativeBoth1<T extends HKT> extends Covariant1<T> {
  readonly both: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, readonly [A, B]>
}

export interface AssociativeBoth2<T extends HKT2> extends Covariant2<T> {
  readonly both: <E, B>(
    second: Kind2<T, E, B>,
  ) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, readonly [A, B]>
}

export interface AssociativeBoth3<T extends HKT3> extends Covariant3<T> {
  readonly both: <R, E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, readonly [A, B]>
}

export interface AssociativeBoth4<T extends HKT4> extends Covariant4<T> {
  readonly both: <S, R, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth5<T extends HKT5> extends Covariant5<T> {
  readonly both: <U, S, R, E, B>(
    second: Kind5<T, U, S, R, E, B>,
  ) => <A>(first: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth6<T extends HKT6> extends Covariant6<T> {
  readonly both: <V, U, S, R, E, B>(
    second: Kind6<T, V, U, S, R, E, B>,
  ) => <A>(first: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth7<T extends HKT7> extends Covariant7<T> {
  readonly both: <W, V, U, S, R, E, B>(
    second: Kind7<T, W, V, U, S, R, E, B>,
  ) => <A>(first: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth8<T extends HKT8> extends Covariant8<T> {
  readonly both: <X, W, V, U, S, R, E, B>(
    second: Kind8<T, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth9<T extends HKT9> extends Covariant9<T> {
  readonly both: <Y, X, W, V, U, S, R, E, B>(
    second: Kind9<T, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth10<T extends HKT10> extends Covariant10<T> {
  readonly both: <Z, Y, X, W, V, U, S, R, E, B>(
    second: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, readonly [A, B]>
}
export function tuple<T extends HKT10>(
  AB: AssociativeBoth10<T>,
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
  AB: AssociativeBoth9<T>,
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
  AB: AssociativeBoth8<T>,
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
  AB: AssociativeBoth7<T>,
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
  AB: AssociativeBoth6<T>,
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
  AB: AssociativeBoth5<T>,
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
  AB: AssociativeBoth4<T>,
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
  AB: AssociativeBoth3<T>,
): <AS extends NonEmptyArray<Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind3<
  T,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT2>(
  AB: AssociativeBoth2<T>,
): <AS extends NonEmptyArray<Kind2<T, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind2<
  T,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT>(
  AB: AssociativeBoth1<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(
  AB: AssociativeBoth<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(
  AB: AssociativeBoth<T>,
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
