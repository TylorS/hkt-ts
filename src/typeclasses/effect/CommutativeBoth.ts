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
} from '../../HKT'
import { NonEmptyArray } from '../../data/NonEmptyArray'
import { pipe } from '../../function'

import {
  AssociativeBoth,
  AssociativeBoth1,
  AssociativeBoth10,
  AssociativeBoth2,
  AssociativeBoth3,
  AssociativeBoth4,
  AssociativeBoth5,
  AssociativeBoth6,
  AssociativeBoth7,
  AssociativeBoth8,
  AssociativeBoth9,
} from './AssociativeBoth'
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

export interface CommutativeBoth<T extends HKT> extends AssociativeBoth<T> {}

export interface CommutativeBoth1<T extends HKT> extends AssociativeBoth1<T> {}

export interface CommutativeBoth2<T extends HKT2> extends AssociativeBoth2<T> {}

export interface CommutativeBoth3<T extends HKT3> extends AssociativeBoth3<T> {}

export interface CommutativeBoth4<T extends HKT4> extends AssociativeBoth4<T> {}

export interface CommutativeBoth5<T extends HKT5> extends AssociativeBoth5<T> {}

export interface CommutativeBoth6<T extends HKT6> extends AssociativeBoth6<T> {}

export interface CommutativeBoth7<T extends HKT7> extends AssociativeBoth7<T> {}

export interface CommutativeBoth8<T extends HKT8> extends AssociativeBoth8<T> {}

export interface CommutativeBoth9<T extends HKT9> extends AssociativeBoth9<T> {}

export interface CommutativeBoth10<T extends HKT10> extends AssociativeBoth10<T> {}

export function tuple<T extends HKT10>(
  AB: CommutativeBoth10<T> & Covariant10<T>,
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
  AB: CommutativeBoth9<T> & Covariant9<T>,
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
  AB: CommutativeBoth8<T> & Covariant8<T>,
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
  AB: CommutativeBoth7<T> & Covariant7<T>,
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
  AB: CommutativeBoth6<T> & Covariant6<T>,
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
  AB: CommutativeBoth5<T> & Covariant5<T>,
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
  AB: CommutativeBoth4<T> & Covariant4<T>,
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
  AB: CommutativeBoth3<T> & Covariant3<T>,
): <AS extends NonEmptyArray<Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind3<
  T,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT2>(
  AB: CommutativeBoth2<T> & Covariant2<T>,
): <AS extends NonEmptyArray<Kind2<T, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind2<
  T,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT>(
  AB: CommutativeBoth1<T> & Covariant1<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(
  AB: CommutativeBoth<T> & Covariant<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(
  AB: CommutativeBoth<T> & Covariant<T>,
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
