import type { Either } from '../Either.js'
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

import {
  AssociativeFlatten,
  AssociativeFlatten1,
  AssociativeFlatten10,
  AssociativeFlatten2,
  AssociativeFlatten2EC,
  AssociativeFlatten3,
  AssociativeFlatten3EC,
  AssociativeFlatten3RC,
  AssociativeFlatten3REC,
  AssociativeFlatten4,
  AssociativeFlatten4EC,
  AssociativeFlatten4RC,
  AssociativeFlatten4REC,
  AssociativeFlatten4SC,
  AssociativeFlatten4SEC,
  AssociativeFlatten4SRC,
  AssociativeFlatten4SREC,
  AssociativeFlatten5,
  AssociativeFlatten6,
  AssociativeFlatten7,
  AssociativeFlatten8,
  AssociativeFlatten9,
} from './AssociativeFlatten.js'
import {
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
} from './Covariant.js'

/* #region AssociativeEither */
export interface AssociativeEither<T extends HKT> {
  readonly either: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, Either<A, B>>
}

export interface AssociativeEither1<T extends HKT> {
  readonly either: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, Either<A, B>>
}

export interface AssociativeEither2<T extends HKT2> {
  readonly either: <E, B>(
    second: Kind2<T, E, B>,
  ) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, Either<A, B>>
}

export interface AssociativeEither2EC<T extends HKT2, E> {
  readonly either: <B>(
    second: Kind2<T, E, B>,
  ) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, Either<A, B>>
}

export interface AssociativeEither3<T extends HKT3> {
  readonly either: <R, E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, Either<A, B>>
}

export interface AssociativeEither3RC<T extends HKT3, R> {
  readonly either: <E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, Either<A, B>>
}

export interface AssociativeEither3REC<T extends HKT3, R, E> {
  readonly either: <B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, Either<A, B>>
}

export interface AssociativeEither3EC<T extends HKT3, E> {
  readonly either: <R, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, Either<A, B>>
}

export interface AssociativeEither4<T extends HKT4> {
  readonly either: <S, R, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither4SREC<T extends HKT4, S, R, E> {
  readonly either: <B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither4SC<T extends HKT4, S> {
  readonly either: <R, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither4SRC<T extends HKT4, S, R> {
  readonly either: <E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither4RC<T extends HKT4, R> {
  readonly either: <S, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither4SEC<T extends HKT4, S, E> {
  readonly either: <R, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither4REC<T extends HKT4, R, E> {
  readonly either: <S, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither4EC<T extends HKT4, E> {
  readonly either: <S, R, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither5<T extends HKT5> {
  readonly either: <U, S, R, E, B>(
    second: Kind5<T, U, S, R, E, B>,
  ) => <A>(first: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither6<T extends HKT6> {
  readonly either: <V, U, S, R, E, B>(
    second: Kind6<T, V, U, S, R, E, B>,
  ) => <A>(first: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither7<T extends HKT7> {
  readonly either: <W, V, U, S, R, E, B>(
    second: Kind7<T, W, V, U, S, R, E, B>,
  ) => <A>(first: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither8<T extends HKT8> {
  readonly either: <X, W, V, U, S, R, E, B>(
    second: Kind8<T, X, W, V, U, S, R, E, B>,
  ) => <A>(first: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither9<T extends HKT9> {
  readonly either: <Y, X, W, V, U, S, R, E, B>(
    second: Kind9<T, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither10<T extends HKT10> {
  readonly either: <Z, Y, X, W, V, U, S, R, E, B>(
    second: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, Either<A, B>>
}
/* #endregion */

/* #region Covariant */

/**
 * Provide a fallback computation in case of failure
 */
export function orElse<T extends HKT10>(
  AEC: AssociativeEither10<T> & Covariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, B>(
  f: () => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
) => <A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A | B>

export function orElse<T extends HKT9>(
  AEC: AssociativeEither9<T> & Covariant9<T>,
): <Y, X, W, V, U, S, R, E, B>(
  f: () => Kind9<T, Y, X, W, V, U, S, R, E, B>,
) => <A>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Kind9<T, Y, X, W, V, U, S, R, E, A | B>

export function orElse<T extends HKT8>(
  AEC: AssociativeEither8<T> & Covariant8<T>,
): <X, W, V, U, S, R, E, B>(
  f: () => Kind8<T, X, W, V, U, S, R, E, B>,
) => <A>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, A | B>

export function orElse<T extends HKT7>(
  AEC: AssociativeEither7<T> & Covariant7<T>,
): <W, V, U, S, R, E, B>(
  f: () => Kind7<T, W, V, U, S, R, E, B>,
) => <A>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, A | B>

export function orElse<T extends HKT6>(
  AEC: AssociativeEither6<T> & Covariant6<T>,
): <V, U, S, R, E, B>(
  f: () => Kind6<T, V, U, S, R, E, B>,
) => <A>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, A | B>

export function orElse<T extends HKT5>(
  AEC: AssociativeEither5<T> & Covariant5<T>,
): <U, S, R, E, B>(
  f: () => Kind5<T, U, S, R, E, B>,
) => <A>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, A | B>

export function orElse<T extends HKT4, E>(
  AEC: AssociativeEither4EC<T, E> & Covariant4EC<T, E>,
): <S, R, B>(
  f: () => Kind4<T, S, R, E, B>,
) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT4, R, E>(
  AEC: AssociativeEither4REC<T, R, E> & Covariant4REC<T, R, E>,
): <S, B>(
  f: () => Kind4<T, S, R, E, B>,
) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT4, S, E>(
  AEC: AssociativeEither4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): <R, B>(
  f: () => Kind4<T, S, R, E, B>,
) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT4, R>(
  AEC: AssociativeEither4RC<T, R> & Covariant4RC<T, R>,
): <S, E, B>(
  f: () => Kind4<T, S, R, E, B>,
) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT4, S, R>(
  AEC: AssociativeEither4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): <E, B>(
  f: () => Kind4<T, S, R, E, B>,
) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT4, S>(
  AEC: AssociativeEither4SC<T, S> & Covariant4SC<T, S>,
): <R, E, B>(
  f: () => Kind4<T, S, R, E, B>,
) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT4, S, R, E>(
  AEC: AssociativeEither4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): <B>(f: () => Kind4<T, S, R, E, B>) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT4>(
  AEC: AssociativeEither4<T> & Covariant4<T>,
): <S, R, E, B>(
  f: () => Kind4<T, S, R, E, B>,
) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT3, E>(
  AEC: AssociativeEither3EC<T, E> & Covariant3EC<T, E>,
): <R, B>(f: () => Kind3<T, R, E, B>) => <A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A | B>

export function orElse<T extends HKT3, R, E>(
  AEC: AssociativeEither3REC<T, R, E> & Covariant3REC<T, R, E>,
): <B>(f: () => Kind3<T, R, E, B>) => <A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A | B>

export function orElse<T extends HKT3, R>(
  AEC: AssociativeEither3RC<T, R> & Covariant3RC<T, R>,
): <E, B>(f: () => Kind3<T, R, E, B>) => <A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A | B>

export function orElse<T extends HKT3>(
  AEC: AssociativeEither3<T> & Covariant3<T>,
): <R, E, B>(f: () => Kind3<T, R, E, B>) => <A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A | B>

export function orElse<T extends HKT2, E>(
  AEC: AssociativeEither2EC<T, E> & Covariant2EC<T, E>,
): <B>(f: () => Kind2<T, E, B>) => <A>(kind: Kind2<T, E, A>) => Kind2<T, E, A | B>

export function orElse<T extends HKT2>(
  AEC: AssociativeEither2<T> & Covariant2<T>,
): <E, B>(f: () => Kind2<T, E, B>) => <A>(kind: Kind2<T, E, A>) => Kind2<T, E, A | B>

export function orElse<T extends HKT>(
  AEC: AssociativeEither1<T> & Covariant1<T>,
): <B>(f: () => Kind<T, B>) => <A>(kind: Kind<T, A>) => Kind<T, A | B>

export function orElse<T extends HKT>(
  AEC: AssociativeEither<T> & Covariant<T>,
): <B>(f: () => Kind<T, B>) => <A>(kind: Kind<T, A>) => Kind<T, A | B>

export function orElse<T extends HKT>(
  AE: AssociativeEither<T> & Covariant<T>,
): <B>(f: () => Kind<T, B>) => <A>(kind: Kind<T, A>) => Kind<T, A | B> {
  return (f) => (kind) =>
    pipe(
      kind,
      AE.either(f()),
      AE.map((e) => (e.tag === 'Left' ? e.left : e.right)),
    )
}

export function eventually<T extends HKT10>(
  AEC: AssociativeEither10<T> & Covariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function eventually<T extends HKT9>(
  AEC: AssociativeEither9<T> & Covariant9<T>,
): <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function eventually<T extends HKT8>(
  AEC: AssociativeEither8<T> & Covariant8<T>,
): <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, A>

export function eventually<T extends HKT7>(
  AEC: AssociativeEither7<T> & Covariant7<T>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, A>

export function eventually<T extends HKT6>(
  AEC: AssociativeEither6<T> & Covariant6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, A>

export function eventually<T extends HKT5>(
  AEC: AssociativeEither5<T> & Covariant5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, A>

export function eventually<T extends HKT4, E>(
  AEC: AssociativeEither4EC<T, E> & Covariant4EC<T, E>,
): <S, R, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT4, R, E>(
  AEC: AssociativeEither4REC<T, R, E> & Covariant4REC<T, R, E>,
): <S, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT4, S, E>(
  AEC: AssociativeEither4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): <R, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT4, R>(
  AEC: AssociativeEither4RC<T, R> & Covariant4RC<T, R>,
): <S, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT4, S, R>(
  AEC: AssociativeEither4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): <E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT4, S>(
  AEC: AssociativeEither4SC<T, S> & Covariant4SC<T, S>,
): <R, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT4, S, R, E>(
  AEC: AssociativeEither4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT4>(
  AEC: AssociativeEither4<T> & Covariant4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT3, E>(
  AEC: AssociativeEither3EC<T, E> & Covariant3EC<T, E>,
): <R, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function eventually<T extends HKT3, R, E>(
  AEC: AssociativeEither3REC<T, R, E> & Covariant3REC<T, R, E>,
): <A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function eventually<T extends HKT3, R>(
  AEC: AssociativeEither3RC<T, R> & Covariant3RC<T, R>,
): <E, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function eventually<T extends HKT3>(
  AEC: AssociativeEither3<T> & Covariant3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function eventually<T extends HKT2, E>(
  AEC: AssociativeEither2EC<T, E> & Covariant2EC<T, E>,
): <A>(kind: Kind2<T, E, A>) => Kind2<T, E, A>

export function eventually<T extends HKT2>(
  AEC: AssociativeEither2<T> & Covariant2<T>,
): <E, A>(kind: Kind2<T, E, A>) => Kind2<T, E, A>

export function eventually<T extends HKT>(
  AEC: AssociativeEither1<T> & Covariant1<T>,
): <A>(kind: Kind<T, A>) => Kind<T, A>

export function eventually<T extends HKT>(
  AEC: AssociativeEither<T> & Covariant<T>,
): <A>(kind: Kind<T, A>) => Kind<T, A>

export function eventually<T extends HKT>(AE: AssociativeEither<T> & Covariant<T>) {
  const orElse_ = orElse(AE)
  const eventually_ = <A>(kind: Kind<T, A>): Kind<T, A> =>
    pipe(
      kind,
      orElse_(() => eventually_(kind)),
    )

  return eventually_
}

/* #region tuple */
export function tuple<T extends HKT10>(
  AEC: AssociativeEither10<T> & Covariant10<T>,
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
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT9>(
  AEC: AssociativeEither9<T> & Covariant9<T>,
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
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT8>(
  AEC: AssociativeEither8<T> & Covariant8<T>,
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
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT7>(
  AEC: AssociativeEither7<T> & Covariant7<T>,
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
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT6>(
  AEC: AssociativeEither6<T> & Covariant6<T>,
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
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT5>(
  AEC: AssociativeEither5<T> & Covariant5<T>,
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
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT4, E>(
  AEC: AssociativeEither4EC<T, E> & Covariant4EC<T, E>,
): <AS extends NonEmptyArray<Kind4<T, DefaultOf<T, Params.S>, DefaultOf<T, Params.R>, E, any>>>(
  ...values: AS
) => Kind4<
  T,
  ParamOf<T, AS[number], Params.S>,
  ParamOf<T, AS[number], Params.R>,
  E,
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT4, R, E>(
  AEC: AssociativeEither4REC<T, R, E> & Covariant4REC<T, R, E>,
): <AS extends NonEmptyArray<Kind4<T, DefaultOf<T, Params.S>, R, E, any>>>(
  ...values: AS
) => Kind4<T, ParamOf<T, AS[number], Params.S>, R, E, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT4, S, E>(
  AEC: AssociativeEither4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): <AS extends NonEmptyArray<Kind4<T, S, DefaultOf<T, Params.R>, E, any>>>(
  ...values: AS
) => Kind4<T, S, ParamOf<T, AS[number], Params.R>, E, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT4, R>(
  AEC: AssociativeEither4RC<T, R> & Covariant4RC<T, R>,
): <AS extends NonEmptyArray<Kind4<T, DefaultOf<T, Params.S>, R, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind4<
  T,
  ParamOf<T, AS[number], Params.S>,
  R,
  ParamOf<T, AS[number], Params.E>,
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT4, S, R>(
  AEC: AssociativeEither4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): <AS extends NonEmptyArray<Kind4<T, S, R, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind4<T, S, R, ParamOf<T, AS[number], Params.E>, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT4, S>(
  AEC: AssociativeEither4SC<T, S> & Covariant4SC<T, S>,
): <AS extends NonEmptyArray<Kind4<T, S, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind4<
  T,
  S,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT4, S, R, E>(
  AEC: AssociativeEither4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): <AS extends NonEmptyArray<Kind4<T, S, R, E, any>>>(
  ...values: AS
) => Kind4<T, S, R, E, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT4>(
  AEC: AssociativeEither4<T> & Covariant4<T>,
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
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT3, E>(
  AEC: AssociativeEither3EC<T, E> & Covariant3EC<T, E>,
): <AS extends NonEmptyArray<Kind3<T, DefaultOf<T, Params.R>, E, any>>>(
  ...values: AS
) => Kind3<T, ParamOf<T, AS[number], Params.R>, E, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT3, R, E>(
  AEC: AssociativeEither3REC<T, R, E> & Covariant3REC<T, R, E>,
): <AS extends NonEmptyArray<Kind3<T, R, E, any>>>(
  ...values: AS
) => Kind3<T, R, E, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT3, R>(
  AEC: AssociativeEither3RC<T, R> & Covariant3RC<T, R>,
): <AS extends NonEmptyArray<Kind3<T, R, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind3<T, R, ParamOf<T, AS[number], Params.E>, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT3>(
  AEC: AssociativeEither3<T> & Covariant3<T>,
): <AS extends NonEmptyArray<Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind3<
  T,
  ParamOf<T, AS[number], Params.R>,
  ParamOf<T, AS[number], Params.E>,
  ParamOf<T, AS[number], Params.A>
>

export function tuple<T extends HKT2, E>(
  AEC: AssociativeEither2EC<T, E> & Covariant2EC<T, E>,
): <AS extends NonEmptyArray<Kind2<T, E, any>>>(
  ...values: AS
) => Kind2<T, E, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT2>(
  AEC: AssociativeEither2<T> & Covariant2<T>,
): <AS extends NonEmptyArray<Kind2<T, DefaultOf<T, Params.E>, any>>>(
  ...values: AS
) => Kind2<T, ParamOf<T, AS[number], Params.E>, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT>(
  AEC: AssociativeEither1<T> & Covariant1<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT>(
  AEC: AssociativeEither<T> & Covariant<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, ParamOf<T, AS[number], Params.A>>

export function tuple<T extends HKT>(
  AEC: AssociativeEither<T> & Covariant<T>,
): <AS extends NonEmptyArray<Kind<T, any>>>(
  ...values: AS
) => Kind<T, ParamOf<T, AS[number], Params.A>> {
  const orElse_ = orElse(AEC)

  return <AS extends NonEmptyArray<Kind<T, any>>>(...[first, ...rest]: AS) =>
    rest.length === 0
      ? first
      : rest.reduce(
          (acc, x) =>
            pipe(
              acc,
              orElse_(() => x),
            ),
          first,
        )
}
/* #endregion */

/* #endregion */

/* #region Contravariant */
export function eitherWith<T extends HKT10>(
  AEC: AssociativeEither10<T> & Contravariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, B, C, A>(
  b: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => Kind10<T, Z, Y, X, W, V, U, S, R, E, C>

export function eitherWith<T extends HKT9>(
  AEC: AssociativeEither9<T> & Contravariant9<T>,
): <Y, X, W, V, U, S, R, E, B, C, A>(
  b: Kind9<T, Y, X, W, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Kind9<T, Y, X, W, V, U, S, R, E, C>

export function eitherWith<T extends HKT8>(
  AEC: AssociativeEither8<T> & Contravariant8<T>,
): <X, W, V, U, S, R, E, B, C, A>(
  b: Kind8<T, X, W, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, C>

export function eitherWith<T extends HKT7>(
  AEC: AssociativeEither7<T> & Contravariant7<T>,
): <W, V, U, S, R, E, B, C, A>(
  b: Kind7<T, W, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, C>

export function eitherWith<T extends HKT6>(
  AEC: AssociativeEither6<T> & Contravariant6<T>,
): <V, U, S, R, E, B, C, A>(
  b: Kind6<T, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, C>

export function eitherWith<T extends HKT5>(
  AEC: AssociativeEither5<T> & Contravariant5<T>,
): <U, S, R, E, B, C, A>(
  b: Kind5<T, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, C>

export function eitherWith<T extends HKT4, E>(
  AEC: AssociativeEither4EC<T, E> & Contravariant4EC<T, E>,
): <S, R, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT4, R, E>(
  AEC: AssociativeEither4REC<T, R, E> & Contravariant4REC<T, R, E>,
): <S, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT4, S, E>(
  AEC: AssociativeEither4SEC<T, S, E> & Contravariant4SEC<T, S, E>,
): <R, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT4, R>(
  AEC: AssociativeEither4RC<T, R> & Contravariant4RC<T, R>,
): <S, E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT4, S, R>(
  AEC: AssociativeEither4SRC<T, S, R> & Contravariant4SRC<T, S, R>,
): <E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT4, S>(
  AEC: AssociativeEither4SC<T, S> & Contravariant4SC<T, S>,
): <R, E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT4, S, R, E>(
  AEC: AssociativeEither4SREC<T, S, R, E> & Contravariant4SREC<T, S, R, E>,
): <B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT4>(
  AEC: AssociativeEither4<T> & Contravariant4<T>,
): <S, R, E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT3, E>(
  AEC: AssociativeEither3EC<T, E> & Contravariant3EC<T, E>,
): <R, B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function eitherWith<T extends HKT3, R, E>(
  AEC: AssociativeEither3REC<T, R, E> & Contravariant3REC<T, R, E>,
): <B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function eitherWith<T extends HKT3, R>(
  AEC: AssociativeEither3RC<T, R> & Contravariant3RC<T, R>,
): <E, B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function eitherWith<T extends HKT3>(
  AEC: AssociativeEither3<T> & Contravariant3<T>,
): <R, E, B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function eitherWith<T extends HKT2, E>(
  AEC: AssociativeEither2EC<T, E> & Contravariant2EC<T, E>,
): <B, C, A>(b: Kind2<T, E, B>, f: (c: C) => Either<A, B>) => (a: Kind2<T, E, A>) => Kind2<T, E, C>

export function eitherWith<T extends HKT2>(
  AEC: AssociativeEither2<T> & Contravariant2<T>,
): <E, B, C, A>(
  b: Kind2<T, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind2<T, E, A>) => Kind2<T, E, C>

export function eitherWith<T extends HKT>(
  AEC: AssociativeEither1<T> & Contravariant1<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => Either<A, B>) => (a: Kind<T, A>) => Kind<T, C>

export function eitherWith<T extends HKT>(
  AEC: AssociativeEither<T> & Contravariant<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => Either<A, B>) => (a: Kind<T, A>) => Kind<T, C>

export function eitherWith<T extends HKT>(
  AE: AssociativeEither<T> & Contravariant<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => Either<A, B>) => (a: Kind<T, A>) => Kind<T, C> {
  return (b, f) => flow(AE.either(b), AE.contramap(f))
}

/* #endregion */

/* #region Compose */
export function either<F extends HKT10, G extends HKT10>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither10<G>,
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
  Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>
>

export function either<F extends HKT9, G extends HKT10>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither10<G>,
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
  Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>
>

export function either<F extends HKT8, G extends HKT10>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither10<G>,
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
  Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>
>

export function either<F extends HKT7, G extends HKT10>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither10<G>,
): <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT10>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither10<G>,
): <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT10>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither10<G>,
): <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT10>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither10<G>,
): <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT10>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither10<G>,
): <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT10>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT10>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither10<G>,
): <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT10>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT10>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT10>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither10<G>,
): <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT10>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT10>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT10>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT10>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT10>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT10>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT10>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT10>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT9>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither9<G>,
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
  Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>
>

export function either<F extends HKT9, G extends HKT9>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither9<G>,
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
  Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>
>

export function either<F extends HKT8, G extends HKT9>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither9<G>,
): <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT9>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither9<G>,
): <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT9>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither9<G>,
): <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT9>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither9<G>,
): <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT9>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither9<G>,
): <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT9>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither9<G>,
): <S1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT9>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT9>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither9<G>,
): <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT9>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT9>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT9>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither9<G>,
): <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT9>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT9>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT9>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT9>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT9>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT9>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT9>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT9>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT8>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither8<G>,
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
  Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>
>

export function either<F extends HKT9, G extends HKT8>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither8<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT8>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither8<G>,
): <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT8>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither8<G>,
): <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT8>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither8<G>,
): <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT8>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither8<G>,
): <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT8>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither8<G>,
): <S1, R1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT8>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither8<G>,
): <S1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT8>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT8>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither8<G>,
): <S1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT8>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT8>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT8>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither8<G>,
): <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT8>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT8>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT8>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT8>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT8>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT8>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT8>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT8>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither8<G>,
): <X2, W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT7>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither7<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT7>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither7<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT7>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither7<G>,
): <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT7>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither7<G>,
): <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT7>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither7<G>,
): <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT7>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither7<G>,
): <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT7>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither7<G>,
): <S1, R1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT7>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither7<G>,
): <S1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT7>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither7<G>,
): <R1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT7>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither7<G>,
): <S1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT7>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither7<G>,
): <E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT7>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT7>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither7<G>,
): <S1, R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT7>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither7<G>,
): <R1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT7>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT7>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither7<G>,
): <E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT7>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT7>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT7>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither7<G>,
): <E1, W2, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT7>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT7>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither7<G>,
): <W2, V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT6>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither6<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT6>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither6<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT6>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither6<G>,
): <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT6>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither6<G>,
): <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT6>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither6<G>,
): <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT6>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither6<G>,
): <U1, S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT6>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither6<G>,
): <S1, R1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT6>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither6<G>,
): <S1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT6>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither6<G>,
): <R1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT6>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither6<G>,
): <S1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT6>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither6<G>,
): <E1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT6>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither6<G>,
): <R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT6>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither6<G>,
): <S1, R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT6>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither6<G>,
): <R1, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT6>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT6>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither6<G>,
): <E1, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT6>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither6<G>,
): <R1, E1, V2, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT6>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT6>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither6<G>,
): <E1, V2, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT6>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT6>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither6<G>,
): <V2, U2, S2, R2, E2, B>(
  second: Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT5>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither5<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT5>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither5<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT5>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither5<G>,
): <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT5>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither5<G>,
): <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT5>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither5<G>,
): <V1, U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT5>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither5<G>,
): <U1, S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT5>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither5<G>,
): <S1, R1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT5>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither5<G>,
): <S1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT5>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither5<G>,
): <R1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT5>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither5<G>,
): <S1, E1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT5>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither5<G>,
): <E1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT5>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither5<G>,
): <R1, E1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT5>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither5<G>,
): <S1, R1, E1, U2, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT5>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither5<G>,
): <R1, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT5>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT5>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither5<G>,
): <E1, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT5>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither5<G>,
): <R1, E1, U2, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT5>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT5>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither5<G>,
): <E1, U2, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT5>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind<F, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT5>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither5<G>,
): <U2, S2, R2, E2, B>(
  second: Kind<F, Kind5<G, U2, S2, R2, E2, B>>,
) => <A>(
  first: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT4, E2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither4EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT4, R2, E2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT4, S2, E2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT4, R2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither4RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT4, S2, R2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT4, S2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither4SC<G, S2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT4>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither4<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT4, E2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither4EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT4, R2, E2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT4, S2, E2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT4, R2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither4RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT4, S2, R2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT4, S2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither4SC<G, S2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT4>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither4<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT4, E2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither4EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT4, R2, E2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT4, S2, E2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT4, R2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither4RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT4, S2, R2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT4, S2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither4SC<G, S2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT4>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither4<G>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT4, E2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither4EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT4, R2, E2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, S2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT4, S2, E2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT4, R2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither4RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT4, S2, R2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT4, S2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither4SC<G, S2>,
): <W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT4>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither4<G>,
): <W1, V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT4, E2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither4EC<G, E2>,
): <V1, U1, S1, R1, E1, S2, R2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT4, R2, E2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, S2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT4, S2, E2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <V1, U1, S1, R1, E1, R2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT4, R2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither4RC<G, R2>,
): <V1, U1, S1, R1, E1, S2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT4, S2, R2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <V1, U1, S1, R1, E1, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT4, S2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither4SC<G, S2>,
): <V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT4>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither4<G>,
): <V1, U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT4, E2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither4EC<G, E2>,
): <U1, S1, R1, E1, S2, R2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT4, R2, E2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <U1, S1, R1, E1, S2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT4, S2, E2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <U1, S1, R1, E1, R2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT4, R2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither4RC<G, R2>,
): <U1, S1, R1, E1, S2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT4, S2, R2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <U1, S1, R1, E1, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT4, S2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither4SC<G, S2>,
): <U1, S1, R1, E1, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT4>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither4<G>,
): <U1, S1, R1, E1, S2, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT4, E2>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither4EC<G, E2>,
): <S1, R1, S2, R2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither4REC<G, R2, E2>,
): <S1, S2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <R1, R2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT4, R2>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither4RC<G, R2>,
): <S1, E1, S2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT4, S2>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither4SC<G, S2>,
): <R1, E1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT4>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither4<G>,
): <S1, R1, E1, S2, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT4, E2>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither4EC<G, E2>,
): <R1, E1, S2, R2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT4, R2, E2>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <R1, E1, S2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT4, S2, E2>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <R1, E1, R2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT4, R2>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither4RC<G, R2>,
): <R1, E1, S2, E2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <R1, E2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither4SC<G, S2>,
): <R2, E2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <E1, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT4>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither4<G>,
): <R1, E1, S2, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT4, E2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither4EC<G, E2>,
): <E1, S2, R2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT4, R2, E2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <E1, S2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT4, S2, E2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <E1, R2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT4, R2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither4RC<G, R2>,
): <E1, S2, E2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT4, S2, R2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <E1, E2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT4, S2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither4SC<G, S2>,
): <E1, R2, E2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT4>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither4<G>,
): <E1, S2, R2, E2, B>(
  second: Kind2<F, E1, Kind4<G, S2, R2, E2, B>>,
) => <A>(
  first: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, E2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither4EC<G, E2>,
): <S2, R2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, R2, E2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <S2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, S2, E2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <R2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, R2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither4RC<G, R2>,
): <S2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, S2, R2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, S2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither4SC<G, S2>,
): <R2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither4<G>,
): <S2, R2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, E2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither4EC<G, E2>,
): <S2, R2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, R2, E2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither4REC<G, R2, E2>,
): <S2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, S2, E2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither4SEC<G, S2, E2>,
): <R2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, R2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither4RC<G, R2>,
): <S2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, S2, R2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither4SRC<G, S2, R2>,
): <E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, S2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither4SC<G, S2>,
): <R2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither4SREC<G, S2, R2, E2>,
): <B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT4>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither4<G>,
): <S2, R2, E2, B>(
  second: Kind<F, Kind4<G, S2, R2, E2, B>>,
) => <A>(first: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT3, E2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither3EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT3, R2, E2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT3, R2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither3RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT3>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither3<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT3, E2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither3EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT3, R2, E2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT3, R2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither3RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT3>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither3<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT3, E2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither3EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT3, R2, E2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT3, R2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither3RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT3>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither3<G>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT3, E2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither3EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, R2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT3, R2, E2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT3, R2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither3RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT3>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither3<G>,
): <W1, V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT3, E2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither3EC<G, E2>,
): <V1, U1, S1, R1, E1, R2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT3, R2, E2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT3, R2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither3RC<G, R2>,
): <V1, U1, S1, R1, E1, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT3>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither3<G>,
): <V1, U1, S1, R1, E1, R2, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT3, E2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither3EC<G, E2>,
): <U1, S1, R1, E1, R2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT3, R2, E2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT3, R2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither3RC<G, R2>,
): <U1, S1, R1, E1, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT3>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither3<G>,
): <U1, S1, R1, E1, R2, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT3>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither3<G>,
): <S1, R1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT3>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither3<G>,
): <S1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT3>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither3<G>,
): <R1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT3>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither3<G>,
): <S1, E1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither3EC<G, E2>,
): <E1, R2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither3REC<G, R2, E2>,
): <R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither3RC<G, R2>,
): <E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT3>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither3<G>,
): <S1, R1, E1, R2, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT3, E2>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither3EC<G, E2>,
): <R1, R2, B>(
  second: Kind3<F, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither3REC<G, R2, E2>,
): <B>(
  second: Kind3<F, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT3, R2>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither3RC<G, R2>,
): <E1, E2, B>(
  second: Kind3<F, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT3>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither3<G>,
): <R1, E1, R2, E2, B>(
  second: Kind3<F, R1, E1, Kind3<G, R2, E2, B>>,
) => <A>(
  first: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT3, E2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither3EC<G, E2>,
): <E1, R2, B>(
  second: Kind2<F, E1, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT3, R2, E2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <E1, B>(
  second: Kind2<F, E1, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT3, R2>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither3RC<G, R2>,
): <E2, B>(
  second: Kind2<F, E1, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT3>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither3<G>,
): <E1, R2, E2, B>(
  second: Kind2<F, E1, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT3, E2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither3EC<G, E2>,
): <R2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT3, R2, E2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT3, R2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither3RC<G, R2>,
): <E2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT3>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither3<G>,
): <R2, E2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT3, E2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither3EC<G, E2>,
): <R2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT3, R2, E2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither3REC<G, R2, E2>,
): <B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT3, R2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither3RC<G, R2>,
): <E2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT3>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither3<G>,
): <R2, E2, B>(
  second: Kind<F, Kind3<G, R2, E2, B>>,
) => <A>(first: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT2, E2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither2EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT2>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither2<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT2, E2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither2EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT9, G extends HKT2>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither2<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT2, E2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither2EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT8, G extends HKT2>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither2<G>,
): <X1, W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT2, E2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither2EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT7, G extends HKT2>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither2<G>,
): <W1, V1, U1, S1, R1, E1, E2, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT2, E2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither2EC<G, E2>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT6, G extends HKT2>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither2<G>,
): <V1, U1, S1, R1, E1, E2, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT2, E2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither2EC<G, E2>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT5, G extends HKT2>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither2<G>,
): <U1, S1, R1, E1, E2, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT2>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither2<G>,
): <S1, R1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT2>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither2<G>,
): <S1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT2>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither2<G>,
): <R1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT2>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither2<G>,
): <S1, E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT2>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither2<G>,
): <E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT2>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither2<G>,
): <R1, E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither2EC<G, E2>,
): <B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT4, G extends HKT2>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither2<G>,
): <S1, R1, E1, E2, B>(
  second: Kind4<F, S1, R1, E1, Kind2<G, E2, B>>,
) => <A>(
  first: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT2>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither2<G>,
): <R1, E2, B>(
  second: Kind3<F, R1, E1, Kind2<G, E2, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT2>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither2<G>,
): <E2, B>(
  second: Kind3<F, R1, E1, Kind2<G, E2, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT2, E2>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither2EC<G, E2>,
): <E1, B>(
  second: Kind3<F, R1, E1, Kind2<G, E2, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT3, G extends HKT2>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither2<G>,
): <R1, E1, E2, B>(
  second: Kind3<F, R1, E1, Kind2<G, E2, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT2, E2>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither2EC<G, E2>,
): <B>(
  second: Kind2<F, E1, Kind2<G, E2, B>>,
) => <A>(first: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT2, G extends HKT2>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither2<G>,
): <E1, E2, B>(
  second: Kind2<F, E1, Kind2<G, E2, B>>,
) => <A>(first: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT2, E2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither2EC<G, E2>,
): <B>(
  second: Kind<F, Kind2<G, E2, B>>,
) => <A>(first: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT2>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither2<G>,
): <E2, B>(
  second: Kind<F, Kind2<G, E2, B>>,
) => <A>(first: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT2, E2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither2EC<G, E2>,
): <B>(
  second: Kind<F, Kind2<G, E2, B>>,
) => <A>(first: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT, G extends HKT2>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither2<G>,
): <E2, B>(
  second: Kind<F, Kind2<G, E2, B>>,
) => <A>(first: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, Either<A, B>>>

export function either<F extends HKT10, G extends HKT>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither1<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT9, G extends HKT>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither1<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT8, G extends HKT>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither1<G>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT7, G extends HKT>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither1<G>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT6, G extends HKT>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither1<G>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT5, G extends HKT>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither1<G>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither1<G>,
): <S1, R1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither1<G>,
): <S1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither1<G>,
): <R1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither1<G>,
): <S1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither1<G>,
): <E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither1<G>,
): <R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither1<G>,
): <B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, G extends HKT>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither1<G>,
): <S1, R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither1<G>,
): <R1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither1<G>,
): <B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither1<G>,
): <E1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT3, G extends HKT>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither1<G>,
): <R1, E1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither1<G>,
): <B>(
  second: Kind2<F, E1, Kind<G, B>>,
) => <A>(first: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT2, G extends HKT>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither1<G>,
): <E1, B>(
  second: Kind2<F, E1, Kind<G, B>>,
) => <A>(first: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT, G extends HKT>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither1<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, Either<A, B>>>

export function either<F extends HKT, G extends HKT>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither1<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, Either<A, B>>>

export function either<F extends HKT10, G extends HKT>(
  F: AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeEither<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT9, G extends HKT>(
  F: AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeEither<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT8, G extends HKT>(
  F: AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeEither<G>,
): <X1, W1, V1, U1, S1, R1, E1, B>(
  second: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT7, G extends HKT>(
  F: AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeEither<G>,
): <W1, V1, U1, S1, R1, E1, B>(
  second: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT6, G extends HKT>(
  F: AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeEither<G>,
): <V1, U1, S1, R1, E1, B>(
  second: Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT5, G extends HKT>(
  F: AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeEither<G>,
): <U1, S1, R1, E1, B>(
  second: Kind5<F, U1, S1, R1, E1, Kind<G, B>>,
) => <A>(
  first: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, E1, G extends HKT>(
  F: AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeEither<G>,
): <S1, R1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, R1, E1, G extends HKT>(
  F: AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeEither<G>,
): <S1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, S1, E1, G extends HKT>(
  F: AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeEither<G>,
): <R1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, R1, G extends HKT>(
  F: AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeEither<G>,
): <S1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, S1, R1, G extends HKT>(
  F: AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeEither<G>,
): <E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, S1, G extends HKT>(
  F: AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeEither<G>,
): <R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: AssociativeFlatten4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeEither<G>,
): <B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT4, G extends HKT>(
  F: AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeEither<G>,
): <S1, R1, E1, B>(
  second: Kind4<F, S1, R1, E1, Kind<G, B>>,
) => <A>(first: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT3, E1, G extends HKT>(
  F: AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeEither<G>,
): <R1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT3, R1, E1, G extends HKT>(
  F: AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeEither<G>,
): <B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT3, R1, G extends HKT>(
  F: AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeEither<G>,
): <E1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT3, G extends HKT>(
  F: AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeEither<G>,
): <R1, E1, B>(
  second: Kind3<F, R1, E1, Kind<G, B>>,
) => <A>(first: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT2, E1, G extends HKT>(
  F: AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeEither<G>,
): <B>(
  second: Kind2<F, E1, Kind<G, B>>,
) => <A>(first: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT2, G extends HKT>(
  F: AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeEither<G>,
): <E1, B>(
  second: Kind2<F, E1, Kind<G, B>>,
) => <A>(first: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, Either<A, B>>>

export function either<F extends HKT, G extends HKT>(
  F: AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeEither<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, Either<A, B>>>

export function either<F extends HKT, G extends HKT>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, Either<A, B>>>

export function either<F extends HKT, G extends HKT>(
  F: AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeEither<G>,
): <B>(
  second: Kind<F, Kind<G, B>>,
) => <A>(first: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, Either<A, B>>> {
  return <B>(second: Kind<F, Kind<G, B>>) =>
    <A>(first: Kind<F, Kind<G, A>>) =>
      pipe(
        first,
        F.map((f) =>
          pipe(
            second,
            F.map((s) => pipe(f, G.either(s))),
          ),
        ),
        F.flatten,
      )
}

/* #endregion */
