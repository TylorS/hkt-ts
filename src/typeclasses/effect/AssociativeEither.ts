import {
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
} from '../../HKT'
import { Either, toUnion } from '../../data/Either'
import { flow, pipe } from '../../function/function'

import {
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
} from './Covariant'

/* #region  TypeClasses */

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

export interface AssociativeEither3<T extends HKT3> {
  readonly either: <R, E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, Either<A, B>>
}

export interface AssociativeEither4<T extends HKT4> {
  readonly either: <S, R, E, B>(
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
  AE: AssociativeEither10<T> & Covariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, B>(
  f: () => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
) => <A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A | B>

export function orElse<T extends HKT9>(
  AE: AssociativeEither9<T> & Covariant9<T>,
): <Y, X, W, V, U, S, R, E, B>(
  f: () => Kind9<T, Y, X, W, V, U, S, R, E, B>,
) => <A>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Kind9<T, Y, X, W, V, U, S, R, E, A | B>

export function orElse<T extends HKT8>(
  AE: AssociativeEither8<T> & Covariant8<T>,
): <X, W, V, U, S, R, E, B>(
  f: () => Kind8<T, X, W, V, U, S, R, E, B>,
) => <A>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, A | B>

export function orElse<T extends HKT7>(
  AE: AssociativeEither7<T> & Covariant7<T>,
): <W, V, U, S, R, E, B>(
  f: () => Kind7<T, W, V, U, S, R, E, B>,
) => <A>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, A | B>

export function orElse<T extends HKT6>(
  AE: AssociativeEither6<T> & Covariant6<T>,
): <V, U, S, R, E, B>(
  f: () => Kind6<T, V, U, S, R, E, B>,
) => <A>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, A | B>

export function orElse<T extends HKT5>(
  AE: AssociativeEither5<T> & Covariant5<T>,
): <U, S, R, E, B>(
  f: () => Kind5<T, U, S, R, E, B>,
) => <A>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, A | B>

export function orElse<T extends HKT4>(
  AE: AssociativeEither4<T> & Covariant4<T>,
): <S, R, E, B>(
  f: () => Kind4<T, S, R, E, B>,
) => <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A | B>

export function orElse<T extends HKT3>(
  AE: AssociativeEither3<T> & Covariant3<T>,
): <R, E, B>(f: () => Kind3<T, R, E, B>) => <A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A | B>

export function orElse<T extends HKT2>(
  AE: AssociativeEither2<T> & Covariant2<T>,
): <E, B>(f: () => Kind2<T, E, B>) => <A>(kind: Kind2<T, E, A>) => Kind2<T, E, A | B>

export function orElse<T extends HKT>(
  AE: AssociativeEither1<T> & Covariant1<T>,
): <B>(f: () => Kind<T, B>) => <A>(kind: Kind<T, A>) => Kind<T, A | B>

export function orElse<T extends HKT>(
  AE: AssociativeEither<T> & Covariant<T>,
): <B>(f: () => Kind<T, B>) => <A>(kind: Kind<T, A>) => Kind<T, A | B>

export function orElse<T extends HKT>(
  AE: AssociativeEither<T> & Covariant<T>,
): <B>(f: () => Kind<T, B>) => <A>(kind: Kind<T, A>) => Kind<T, A | B> {
  return (f) => (kind) => pipe(kind, AE.either(f()), AE.map(toUnion))
}

export function eventually<T extends HKT10>(
  AE: AssociativeEither10<T> & Covariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function eventually<T extends HKT9>(
  AE: AssociativeEither9<T> & Covariant9<T>,
): <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function eventually<T extends HKT8>(
  AE: AssociativeEither8<T> & Covariant8<T>,
): <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, A>

export function eventually<T extends HKT7>(
  AE: AssociativeEither7<T> & Covariant7<T>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, A>

export function eventually<T extends HKT6>(
  AE: AssociativeEither6<T> & Covariant6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, A>

export function eventually<T extends HKT5>(
  AE: AssociativeEither5<T> & Covariant5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, A>

export function eventually<T extends HKT4>(
  AE: AssociativeEither4<T> & Covariant4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function eventually<T extends HKT3>(
  AE: AssociativeEither3<T> & Covariant3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function eventually<T extends HKT2>(
  AE: AssociativeEither2<T> & Covariant2<T>,
): <E, A>(kind: Kind2<T, E, A>) => Kind2<T, E, A>

export function eventually<T extends HKT>(
  AE: AssociativeEither1<T> & Covariant1<T>,
): <A>(kind: Kind<T, A>) => Kind<T, A>

export function eventually<T extends HKT>(
  AE: AssociativeEither<T> & Covariant<T>,
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
/* #endregion */

/* #region Contravariant */

export function eitherWith<T extends HKT10>(
  AE: AssociativeEither10<T> & Contravariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, B, C, A>(
  b: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => Kind10<T, Z, Y, X, W, V, U, S, R, E, C>

export function eitherWith<T extends HKT9>(
  AE: AssociativeEither9<T> & Contravariant9<T>,
): <Y, X, W, V, U, S, R, E, B, C, A>(
  b: Kind9<T, Y, X, W, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Kind9<T, Y, X, W, V, U, S, R, E, C>

export function eitherWith<T extends HKT8>(
  AE: AssociativeEither8<T> & Contravariant8<T>,
): <X, W, V, U, S, R, E, B, C, A>(
  b: Kind8<T, X, W, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, C>

export function eitherWith<T extends HKT7>(
  AE: AssociativeEither7<T> & Contravariant7<T>,
): <W, V, U, S, R, E, B, C, A>(
  b: Kind7<T, W, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, C>

export function eitherWith<T extends HKT6>(
  AE: AssociativeEither6<T> & Contravariant6<T>,
): <V, U, S, R, E, B, C, A>(
  b: Kind6<T, V, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, C>

export function eitherWith<T extends HKT5>(
  AE: AssociativeEither5<T> & Contravariant5<T>,
): <U, S, R, E, B, C, A>(
  b: Kind5<T, U, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, C>

export function eitherWith<T extends HKT4>(
  AE: AssociativeEither4<T> & Contravariant4<T>,
): <S, R, E, B, C, A>(
  b: Kind4<T, S, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, C>

export function eitherWith<T extends HKT3>(
  AE: AssociativeEither3<T> & Contravariant3<T>,
): <R, E, B, C, A>(
  b: Kind3<T, R, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind3<T, R, E, A>) => Kind3<T, R, E, C>

export function eitherWith<T extends HKT2>(
  AE: AssociativeEither2<T> & Contravariant2<T>,
): <E, B, C, A>(
  b: Kind2<T, E, B>,
  f: (c: C) => Either<A, B>,
) => (a: Kind2<T, E, A>) => Kind2<T, E, C>

export function eitherWith<T extends HKT>(
  AE: AssociativeEither1<T> & Contravariant1<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => Either<A, B>) => (a: Kind<T, A>) => Kind<T, C>

export function eitherWith<T extends HKT>(
  AE: AssociativeEither<T> & Contravariant<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => Either<A, B>) => (a: Kind<T, A>) => Kind<T, C>

export function eitherWith<T extends HKT>(
  AE: AssociativeEither<T> & Contravariant<T>,
): <B, C, A>(b: Kind<T, B>, f: (c: C) => Either<A, B>) => (a: Kind<T, A>) => Kind<T, C> {
  return (b, f) => flow(AE.either(b), AE.contramap(f))
}

/* #endregion */
