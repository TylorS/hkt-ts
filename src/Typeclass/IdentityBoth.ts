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
import { pipe } from '../function'

import {
  AssociativeBoth,
  AssociativeBoth1,
  AssociativeBoth10,
  AssociativeBoth2,
  AssociativeBoth2EC,
  AssociativeBoth3,
  AssociativeBoth3EC,
  AssociativeBoth3RC,
  AssociativeBoth3REC,
  AssociativeBoth4,
  AssociativeBoth4EC,
  AssociativeBoth4RC,
  AssociativeBoth4REC,
  AssociativeBoth4SC,
  AssociativeBoth4SEC,
  AssociativeBoth4SRC,
  AssociativeBoth4SREC,
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
} from './Covariant'
import {
  Top,
  Top1,
  Top10,
  Top2,
  Top2EC,
  Top3,
  Top3EC,
  Top3RC,
  Top3REC,
  Top4,
  Top4EC,
  Top4RC,
  Top4REC,
  Top4SC,
  Top4SEC,
  Top4SRC,
  Top4SREC,
  Top5,
  Top6,
  Top7,
  Top8,
  Top9,
  makeFromValue,
} from './Top'

/* #region IdentityBoth */
export interface IdentityBoth<T extends HKT> extends AssociativeBoth<T>, Top<T> {}

export interface IdentityBoth1<T extends HKT> extends AssociativeBoth1<T>, Top1<T> {}

export interface IdentityBoth2<T extends HKT2> extends AssociativeBoth2<T>, Top2<T> {}

export interface IdentityBoth2EC<T extends HKT2, E>
  extends AssociativeBoth2EC<T, E>,
    Top2EC<T, E> {}

export interface IdentityBoth3<T extends HKT3> extends AssociativeBoth3<T>, Top3<T> {}

export interface IdentityBoth3RC<T extends HKT3, R>
  extends AssociativeBoth3RC<T, R>,
    Top3RC<T, R> {}

export interface IdentityBoth3REC<T extends HKT3, R, E>
  extends AssociativeBoth3REC<T, R, E>,
    Top3REC<T, R, E> {}

export interface IdentityBoth3EC<T extends HKT3, E>
  extends AssociativeBoth3EC<T, E>,
    Top3EC<T, E> {}

export interface IdentityBoth4<T extends HKT4> extends AssociativeBoth4<T>, Top4<T> {}

export interface IdentityBoth4SREC<T extends HKT4, S, R, E>
  extends AssociativeBoth4SREC<T, S, R, E>,
    Top4SREC<T, S, R, E> {}

export interface IdentityBoth4SC<T extends HKT4, S>
  extends AssociativeBoth4SC<T, S>,
    Top4SC<T, S> {}

export interface IdentityBoth4SRC<T extends HKT4, S, R>
  extends AssociativeBoth4SRC<T, S, R>,
    Top4SRC<T, S, R> {}

export interface IdentityBoth4RC<T extends HKT4, R>
  extends AssociativeBoth4RC<T, R>,
    Top4RC<T, R> {}

export interface IdentityBoth4SEC<T extends HKT4, S, E>
  extends AssociativeBoth4SEC<T, S, E>,
    Top4SEC<T, S, E> {}

export interface IdentityBoth4REC<T extends HKT4, R, E>
  extends AssociativeBoth4REC<T, R, E>,
    Top4REC<T, R, E> {}

export interface IdentityBoth4EC<T extends HKT4, E>
  extends AssociativeBoth4EC<T, E>,
    Top4EC<T, E> {}

export interface IdentityBoth5<T extends HKT5> extends AssociativeBoth5<T>, Top5<T> {}

export interface IdentityBoth6<T extends HKT6> extends AssociativeBoth6<T>, Top6<T> {}

export interface IdentityBoth7<T extends HKT7> extends AssociativeBoth7<T>, Top7<T> {}

export interface IdentityBoth8<T extends HKT8> extends AssociativeBoth8<T>, Top8<T> {}

export interface IdentityBoth9<T extends HKT9> extends AssociativeBoth9<T>, Top9<T> {}

export interface IdentityBoth10<T extends HKT10> extends AssociativeBoth10<T>, Top10<T> {}

/* #endregion */

export function tuple<T extends HKT10>(
  IB: IdentityBoth10<T> & Covariant10<T>,
): <
  AS extends ReadonlyArray<
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
  IB: IdentityBoth9<T> & Covariant9<T>,
): <
  AS extends ReadonlyArray<
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
  IB: IdentityBoth8<T> & Covariant8<T>,
): <
  AS extends ReadonlyArray<
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
  IB: IdentityBoth7<T> & Covariant7<T>,
): <
  AS extends ReadonlyArray<
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
  IB: IdentityBoth6<T> & Covariant6<T>,
): <
  AS extends ReadonlyArray<
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
  IB: IdentityBoth5<T> & Covariant5<T>,
): <
  AS extends ReadonlyArray<
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
  IB: IdentityBoth4<T> & Covariant4<T>,
): <
  AS extends ReadonlyArray<
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
  IB: IdentityBoth3<T> & Covariant3<T>,
): <AS extends ReadonlyArray<Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind3<
  T,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT2>(
  IB: IdentityBoth2<T> & Covariant2<T>,
): <AS extends ReadonlyArray<Kind2<T, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind2<
  T,
  ParamOf<T, AS[number], Params.E>,
  { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }
>

export function tuple<T extends HKT>(
  IB: IdentityBoth1<T> & Covariant1<T>,
): <AS extends ReadonlyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(
  IB: IdentityBoth<T> & Covariant<T>,
): <AS extends ReadonlyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }>

export function tuple<T extends HKT>(IB: IdentityBoth<T> & Covariant<T>) {
  const tuple = makeFromValue(IB)<readonly any[]>([])

  return <AS extends ReadonlyArray<Kind<T, any>>>(
    ...values: AS
  ): Kind<T, { readonly [K in keyof AS]: ParamOf<T, AS[K], Params.A> }> =>
    values.reduce(
      (acc, next) =>
        pipe(
          acc,
          IB.both(next),
          IB.map(([acc, x]) => [...acc, x]),
        ),
      tuple,
    )
}

export function struct<T extends HKT10>(
  AB: IdentityBoth10<T> & Covariant10<T>,
): <
  A extends Readonly<
    Record<
      string,
      Kind9<
        T,
        DefaultOf<T, Params.Z>,
        DefaultOf<T, Params.Y>,
        DefaultOf<T, Params.X>,
        DefaultOf<T, Params.W>,
        DefaultOf<T, Params.V>,
        DefaultOf<T, Params.U>,
        DefaultOf<T, Params.S>,
        DefaultOf<T, Params.R>,
        any
      >
    >
  >,
>(
  values: A,
) => Kind10<
  T,
  ParamOf<T, A[string], Params.Z>,
  ParamOf<T, A[string], Params.Y>,
  ParamOf<T, A[string], Params.X>,
  ParamOf<T, A[string], Params.W>,
  ParamOf<T, A[string], Params.V>,
  ParamOf<T, A[string], Params.U>,
  ParamOf<T, A[string], Params.S>,
  ParamOf<T, A[string], Params.R>,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT9>(
  AB: IdentityBoth9<T> & Covariant9<T>,
): <
  A extends Readonly<
    Record<
      string,
      Kind8<
        T,
        DefaultOf<T, Params.Y>,
        DefaultOf<T, Params.X>,
        DefaultOf<T, Params.W>,
        DefaultOf<T, Params.V>,
        DefaultOf<T, Params.U>,
        DefaultOf<T, Params.S>,
        DefaultOf<T, Params.R>,
        any
      >
    >
  >,
>(
  values: A,
) => Kind9<
  T,
  ParamOf<T, A[string], Params.Y>,
  ParamOf<T, A[string], Params.X>,
  ParamOf<T, A[string], Params.W>,
  ParamOf<T, A[string], Params.V>,
  ParamOf<T, A[string], Params.U>,
  ParamOf<T, A[string], Params.S>,
  ParamOf<T, A[string], Params.R>,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT8>(
  AB: IdentityBoth8<T> & Covariant8<T>,
): <
  A extends Readonly<
    Record<
      string,
      Kind7<
        T,
        DefaultOf<T, Params.X>,
        DefaultOf<T, Params.W>,
        DefaultOf<T, Params.V>,
        DefaultOf<T, Params.U>,
        DefaultOf<T, Params.S>,
        DefaultOf<T, Params.R>,
        any
      >
    >
  >,
>(
  values: A,
) => Kind8<
  T,
  ParamOf<T, A[string], Params.X>,
  ParamOf<T, A[string], Params.W>,
  ParamOf<T, A[string], Params.V>,
  ParamOf<T, A[string], Params.U>,
  ParamOf<T, A[string], Params.S>,
  ParamOf<T, A[string], Params.R>,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT7>(
  AB: IdentityBoth7<T> & Covariant7<T>,
): <
  A extends Readonly<
    Record<
      string,
      Kind6<
        T,
        DefaultOf<T, Params.W>,
        DefaultOf<T, Params.V>,
        DefaultOf<T, Params.U>,
        DefaultOf<T, Params.S>,
        DefaultOf<T, Params.R>,
        any
      >
    >
  >,
>(
  values: A,
) => Kind7<
  T,
  ParamOf<T, A[string], Params.W>,
  ParamOf<T, A[string], Params.V>,
  ParamOf<T, A[string], Params.U>,
  ParamOf<T, A[string], Params.S>,
  ParamOf<T, A[string], Params.R>,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT6>(
  AB: IdentityBoth6<T> & Covariant6<T>,
): <
  A extends Readonly<
    Record<
      string,
      Kind5<
        T,
        DefaultOf<T, Params.V>,
        DefaultOf<T, Params.U>,
        DefaultOf<T, Params.S>,
        DefaultOf<T, Params.R>,
        any
      >
    >
  >,
>(
  values: A,
) => Kind6<
  T,
  ParamOf<T, A[string], Params.V>,
  ParamOf<T, A[string], Params.U>,
  ParamOf<T, A[string], Params.S>,
  ParamOf<T, A[string], Params.R>,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT5>(
  AB: IdentityBoth5<T> & Covariant5<T>,
): <
  A extends Readonly<
    Record<
      string,
      Kind4<T, DefaultOf<T, Params.U>, DefaultOf<T, Params.S>, DefaultOf<T, Params.R>, any>
    >
  >,
>(
  values: A,
) => Kind5<
  T,
  ParamOf<T, A[string], Params.U>,
  ParamOf<T, A[string], Params.S>,
  ParamOf<T, A[string], Params.R>,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT4>(
  AB: IdentityBoth4<T> & Covariant4<T>,
): <
  A extends Readonly<Record<string, Kind3<T, DefaultOf<T, Params.S>, DefaultOf<T, Params.R>, any>>>,
>(
  values: A,
) => Kind4<
  T,
  ParamOf<T, A[string], Params.S>,
  ParamOf<T, A[string], Params.R>,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT3>(
  AB: IdentityBoth3<T> & Covariant3<T>,
): <A extends Readonly<Record<string, Kind2<T, DefaultOf<T, Params.R>, any>>>>(
  values: A,
) => Kind3<
  T,
  ParamOf<T, A[string], Params.R>,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT2>(
  AB: IdentityBoth2<T> & Covariant2<T>,
): <A extends Readonly<Record<string, Kind<T, any>>>>(
  values: A,
) => Kind2<
  T,
  ParamOf<T, A[string], Params.E>,
  { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }
>

export function struct<T extends HKT>(
  AB: IdentityBoth1<T> & Covariant1<T>,
): <A extends Readonly<Record<string, Kind<T, any>>>>(
  values: A,
) => Kind<T, { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }>

export function struct<T extends HKT>(
  AB: IdentityBoth<T> & Covariant<T>,
): <A extends Readonly<Record<string, Kind<T, any>>>>(
  values: A,
) => Kind<T, { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }>

export function struct<T extends HKT>(
  AB: IdentityBoth<T> & Covariant<T>,
): <A extends Readonly<Record<string, Kind<T, any>>>>(
  values: A,
) => Kind<T, { readonly [K in keyof A]: ParamOf<T, A[K], Params.A> }> {
  const tuple_ = tuple(AB)

  return <A extends Readonly<Record<string, Kind<T, any>>>>(values: A) => {
    const entries = Object.entries(values)

    if (entries.length === 0) {
      return pipe(
        AB.top,
        AB.map(() => Object.create({})),
      )
    }

    return pipe(
      tuple_(
        ...entries.map(([k, f]) =>
          pipe(
            f,
            AB.map((a) => [k, a] as const),
          ),
        ),
      ),
      AB.map(Object.entries),
    )
  }
}
