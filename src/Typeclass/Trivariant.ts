import {
  HKT10,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
  Kind10,
  Kind3,
  Kind4,
  Kind5,
  Kind6,
  Kind7,
  Kind8,
  Kind9,
} from '../HKT.js'
import type { Unary } from '../Unary.js'
import { identity } from '../function.js'

/* #region Trivariant */
export interface Trivariant<T extends HKT3> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => (kind: Kind3<T, R2, E1, A1>) => Kind3<T, R1, E2, A2>
}

export interface Trivariant3<T extends HKT3> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => (kind: Kind3<T, R2, E1, A1>) => Kind3<T, R1, E2, A2>
}

export interface Trivariant4<T extends HKT4> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <S>(kind: Kind4<T, S, R2, E1, A1>) => Kind4<T, S, R1, E2, A2>
}

export interface Trivariant4SC<T extends HKT4, S> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => (kind: Kind4<T, S, R2, E1, A1>) => Kind4<T, S, R1, E2, A2>
}

export interface Trivariant5<T extends HKT5> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <U, S>(kind: Kind5<T, U, S, R2, E1, A1>) => Kind5<T, U, S, R1, E2, A2>
}

export interface Trivariant6<T extends HKT6> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <V, U, S>(kind: Kind6<T, V, U, S, R2, E1, A1>) => Kind6<T, V, U, S, R1, E2, A2>
}

export interface Trivariant7<T extends HKT7> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <W, V, U, S>(kind: Kind7<T, W, V, U, S, R2, E1, A1>) => Kind7<T, W, V, U, S, R1, E2, A2>
}

export interface Trivariant8<T extends HKT8> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <X, W, V, U, S>(
    kind: Kind8<T, X, W, V, U, S, R2, E1, A1>,
  ) => Kind8<T, X, W, V, U, S, R1, E2, A2>
}

export interface Trivariant9<T extends HKT9> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <Y, X, W, V, U, S>(
    kind: Kind9<T, Y, X, W, V, U, S, R2, E1, A1>,
  ) => Kind9<T, Y, X, W, V, U, S, R1, E2, A2>
}

export interface Trivariant10<T extends HKT10> {
  readonly trimap: <R1, R2, E1, E2, A1, A2>(
    f: Unary<R1, R2>,
    g: Unary<E1, E2>,
    h: Unary<A1, A2>,
  ) => <Z, Y, X, W, V, U, S>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R2, E1, A1>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R1, E2, A2>
}

/* #endregion */

/* #region map */
export function map<T extends HKT10>(
  T: Trivariant10<T>,
): <A, B>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, C, D>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, C, D, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, C, D, B>

export function map<T extends HKT9>(
  T: Trivariant9<T>,
): <A, B>(
  f: (a: A) => B,
) => <Y, X, W, V, U, S, C, D>(
  kind: Kind9<T, Y, X, W, V, U, S, C, D, A>,
) => Kind9<T, Y, X, W, V, U, S, C, D, B>

export function map<T extends HKT8>(
  T: Trivariant8<T>,
): <A, B>(
  f: (a: A) => B,
) => <X, W, V, U, S, C, D>(
  kind: Kind8<T, X, W, V, U, S, C, D, A>,
) => Kind8<T, X, W, V, U, S, C, D, B>

export function map<T extends HKT7>(
  T: Trivariant7<T>,
): <A, B>(
  f: (a: A) => B,
) => <W, V, U, S, C, D>(kind: Kind7<T, W, V, U, S, C, D, A>) => Kind7<T, W, V, U, S, C, D, B>

export function map<T extends HKT6>(
  T: Trivariant6<T>,
): <A, B>(
  f: (a: A) => B,
) => <V, U, S, C, D>(kind: Kind6<T, V, U, S, C, D, A>) => Kind6<T, V, U, S, C, D, B>

export function map<T extends HKT5>(
  T: Trivariant5<T>,
): <A, B>(f: (a: A) => B) => <U, S, C, D>(kind: Kind5<T, U, S, C, D, A>) => Kind5<T, U, S, C, D, B>

export function map<T extends HKT4, S>(
  T: Trivariant4SC<T, S>,
): <A, B>(f: (a: A) => B) => <C, D>(kind: Kind4<T, S, C, D, A>) => Kind4<T, S, C, D, B>

export function map<T extends HKT4>(
  T: Trivariant4<T>,
): <A, B>(f: (a: A) => B) => <S, C, D>(kind: Kind4<T, S, C, D, A>) => Kind4<T, S, C, D, B>

export function map<T extends HKT3>(
  T: Trivariant3<T>,
): <A, B>(f: (a: A) => B) => <C, D>(kind: Kind3<T, C, D, A>) => Kind3<T, C, D, B>

export function map<T extends HKT3>(
  T: Trivariant<T>,
): <A, B>(f: (a: A) => B) => <C, D>(kind: Kind3<T, C, D, A>) => Kind3<T, C, D, B>

export function map<T extends HKT3>(
  T: Trivariant<T>,
): <A, B>(f: (a: A) => B) => <C, D>(kind: Kind3<T, C, D, A>) => Kind3<T, C, D, B> {
  return <A, B>(f: (a: A) => B) => T.trimap(identity, identity, f)
}
/* #endregion */

/* #region bimap */
export function bimap<T extends HKT10>(
  T: Trivariant10<T>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Z, Y, X, W, V, U, S, R>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, A, C>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, B, D>

export function bimap<T extends HKT9>(
  T: Trivariant9<T>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <Y, X, W, V, U, S, R>(
  kind: Kind9<T, Y, X, W, V, U, S, R, A, C>,
) => Kind9<T, Y, X, W, V, U, S, R, B, D>

export function bimap<T extends HKT8>(
  T: Trivariant8<T>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <X, W, V, U, S, R>(kind: Kind8<T, X, W, V, U, S, R, A, C>) => Kind8<T, X, W, V, U, S, R, B, D>

export function bimap<T extends HKT7>(
  T: Trivariant7<T>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <W, V, U, S, R>(kind: Kind7<T, W, V, U, S, R, A, C>) => Kind7<T, W, V, U, S, R, B, D>

export function bimap<T extends HKT6>(
  T: Trivariant6<T>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <V, U, S, R>(kind: Kind6<T, V, U, S, R, A, C>) => Kind6<T, V, U, S, R, B, D>

export function bimap<T extends HKT5>(
  T: Trivariant5<T>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <U, S, R>(kind: Kind5<T, U, S, R, A, C>) => Kind5<T, U, S, R, B, D>

export function bimap<T extends HKT4, S>(
  T: Trivariant4SC<T, S>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, D>

export function bimap<T extends HKT4>(
  T: Trivariant4<T>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <S, R>(kind: Kind4<T, S, R, A, C>) => Kind4<T, S, R, B, D>

export function bimap<T extends HKT3>(
  T: Trivariant3<T>,
): <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => <R>(kind: Kind3<T, R, A, C>) => Kind3<T, R, B, D>

export function bimap<T extends HKT3>(
  T: Trivariant<T>,
): <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => <R>(kind: Kind3<T, R, A, C>) => Kind3<T, R, B, D>

export function bimap<T extends HKT3>(
  T: Trivariant<T>,
): <A, B, C, D>(
  f: (a: A) => B,
  g: (c: C) => D,
) => <R>(kind: Kind3<T, R, A, C>) => Kind3<T, R, B, D> {
  return <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => T.trimap(identity, f, g)
}
/* #endregion */

/* #region contramap */
export function contramap<T extends HKT10>(
  T: Trivariant10<T>,
): <R1, R2>(
  f: (r1: R1) => R2,
) => <Z, Y, X, W, V, U, S, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R2, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R1, E, A>

export function contramap<T extends HKT9>(
  T: Trivariant9<T>,
): <R1, R2>(
  f: (r1: R1) => R2,
) => <Y, X, W, V, U, S, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R2, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R1, E, A>

export function contramap<T extends HKT8>(
  T: Trivariant8<T>,
): <R1, R2>(
  f: (r1: R1) => R2,
) => <X, W, V, U, S, E, A>(
  kind: Kind8<T, X, W, V, U, S, R2, E, A>,
) => Kind8<T, X, W, V, U, S, R1, E, A>

export function contramap<T extends HKT7>(
  T: Trivariant7<T>,
): <R1, R2>(
  f: (r1: R1) => R2,
) => <W, V, U, S, E, A>(kind: Kind7<T, W, V, U, S, R2, E, A>) => Kind7<T, W, V, U, S, R1, E, A>

export function contramap<T extends HKT6>(
  T: Trivariant6<T>,
): <R1, R2>(
  f: (r1: R1) => R2,
) => <V, U, S, E, A>(kind: Kind6<T, V, U, S, R2, E, A>) => Kind6<T, V, U, S, R1, E, A>

export function contramap<T extends HKT5>(
  T: Trivariant5<T>,
): <R1, R2>(
  f: (r1: R1) => R2,
) => <U, S, E, A>(kind: Kind5<T, U, S, R2, E, A>) => Kind5<T, U, S, R1, E, A>

export function contramap<T extends HKT4, S>(
  T: Trivariant4SC<T, S>,
): <R1, R2>(f: (r1: R1) => R2) => <E, A>(kind: Kind4<T, S, R2, E, A>) => Kind4<T, S, R1, E, A>

export function contramap<T extends HKT4>(
  T: Trivariant4<T>,
): <R1, R2>(f: (r1: R1) => R2) => <S, E, A>(kind: Kind4<T, S, R2, E, A>) => Kind4<T, S, R1, E, A>

export function contramap<T extends HKT3>(
  T: Trivariant3<T>,
): <R1, R2>(f: (r1: R1) => R2) => <E, A>(kind: Kind3<T, R2, E, A>) => Kind3<T, R1, E, A>

export function contramap<T extends HKT3>(
  T: Trivariant<T>,
): <R1, R2>(f: (r1: R1) => R2) => <E, A>(kind: Kind3<T, R2, E, A>) => Kind3<T, R1, E, A> {
  return <R1, R2>(f: (r1: R1) => R2) => T.trimap(f, identity, identity)
}

/* #endregion */
