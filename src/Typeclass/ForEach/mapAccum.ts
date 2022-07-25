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
} from '../../HKT.js'
import { CovariantState, IdentityBothState, StateHKT } from '../../common.js'
import { flow } from '../../function.js'

import {
  ForEach,
  ForEach1,
  ForEach10,
  ForEach2,
  ForEach3,
  ForEach4,
  ForEach5,
  ForEach6,
  ForEach7,
  ForEach8,
  ForEach9,
} from './ForEach.js'

/* #region mapAccum */
export function mapAccum<T extends HKT10>(
  FE: ForEach10<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <Z, Y, X, W, V, U, S, R, E>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => readonly [S, Kind10<T, Z, Y, X, W, V, U, S, R, E, B>]

export function mapAccum<T extends HKT9>(
  FE: ForEach9<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <Y, X, W, V, U, S, R, E>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => readonly [S, Kind9<T, Y, X, W, V, U, S, R, E, B>]

export function mapAccum<T extends HKT8>(
  FE: ForEach8<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <X, W, V, U, S, R, E>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => readonly [S, Kind8<T, X, W, V, U, S, R, E, B>]

export function mapAccum<T extends HKT7>(
  FE: ForEach7<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <W, V, U, S, R, E>(
  kind: Kind7<T, W, V, U, S, R, E, A>,
) => readonly [S, Kind7<T, W, V, U, S, R, E, B>]

export function mapAccum<T extends HKT6>(
  FE: ForEach6<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => readonly [S, Kind6<T, V, U, S, R, E, B>]

export function mapAccum<T extends HKT5>(
  FE: ForEach5<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => readonly [S, Kind5<T, U, S, R, E, B>]

export function mapAccum<T extends HKT4>(
  FE: ForEach4<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => readonly [S, Kind4<T, S, R, E, B>]

export function mapAccum<T extends HKT3>(
  FE: ForEach3<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <R, E>(kind: Kind3<T, R, E, A>) => readonly [S, Kind3<T, R, E, B>]

export function mapAccum<T extends HKT2>(
  FE: ForEach2<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => <E>(kind: Kind2<T, E, A>) => readonly [S, Kind2<T, E, B>]

export function mapAccum<T extends HKT>(
  FE: ForEach1<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => (kind: Kind<T, A>) => readonly [S, Kind<T, B>]

export function mapAccum<T extends HKT>(
  FE: ForEach<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => (kind: Kind<T, A>) => readonly [S, Kind<T, B>]

export function mapAccum<T extends HKT>(
  FE: ForEach<T>,
): <S, A, B>(
  s: S,
  f: (s: S, a: A) => readonly [S, B],
) => (kind: Kind<T, A>) => readonly [S, Kind<T, B>] {
  const forEach = FE.forEach<StateHKT>({ ...IdentityBothState, ...CovariantState })

  return <S, A, B>(s: S, f: (s: S, a: A) => readonly [S, B]) =>
    flow(
      forEach((a: A) => (s: S) => f(s, a)),
      (f) => f(s),
    )
}

/* #endregion */
