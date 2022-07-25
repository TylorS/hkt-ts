/* #region map */

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
import * as Id from '../../Id.js'

import {
  ForEach,
  ForEach1,
  ForEach10,
  ForEach2,
  ForEach2EC,
  ForEach3,
  ForEach3EC,
  ForEach3RC,
  ForEach3REC,
  ForEach4,
  ForEach4EC,
  ForEach4RC,
  ForEach4REC,
  ForEach4SC,
  ForEach4SEC,
  ForEach4SRC,
  ForEach4SREC,
  ForEach5,
  ForEach6,
  ForEach7,
  ForEach8,
  ForEach9,
} from './ForEach.js'

/**
 * Derive map from your ForEach['forEach'] function, proving ForEach is a valid extension
 * of Covariant.
 */
export function map<T extends HKT10>(
  forEach: ForEach10<T>['forEach'],
): <A, B>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, R, E>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>

export function map<T extends HKT9>(
  forEach: ForEach9<T>['forEach'],
): <A, B>(
  f: (a: A) => B,
) => <Y, X, W, V, U, S, R, E>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, B>

export function map<T extends HKT8>(
  forEach: ForEach8<T>['forEach'],
): <A, B>(
  f: (a: A) => B,
) => <X, W, V, U, S, R, E>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, B>

export function map<T extends HKT7>(
  forEach: ForEach7<T>['forEach'],
): <A, B>(
  f: (a: A) => B,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>

export function map<T extends HKT6>(
  forEach: ForEach6<T>['forEach'],
): <A, B>(
  f: (a: A) => B,
) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>

export function map<T extends HKT5>(
  forEach: ForEach5<T>['forEach'],
): <A, B>(f: (a: A) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>

export function map<T extends HKT4, E>(
  forEach: ForEach4EC<T, E>['forEach'],
): <A, B>(f: (a: A) => B) => <S, R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, R, E>(
  forEach: ForEach4REC<T, R, E>['forEach'],
): <A, B>(f: (a: A) => B) => <S>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, S, E>(
  forEach: ForEach4SEC<T, S, E>['forEach'],
): <A, B>(f: (a: A) => B) => <R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, R>(
  forEach: ForEach4RC<T, R>['forEach'],
): <A, B>(f: (a: A) => B) => <S, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, S, R>(
  forEach: ForEach4SRC<T, S, R>['forEach'],
): <A, B>(f: (a: A) => B) => <E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, S>(
  forEach: ForEach4SC<T, S>['forEach'],
): <A, B>(f: (a: A) => B) => <R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, S, R, E>(
  forEach: ForEach4SREC<T, S, R, E>['forEach'],
): <A, B>(f: (a: A) => B) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4>(
  forEach: ForEach4<T>['forEach'],
): <A, B>(f: (a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT3, E>(
  forEach: ForEach3EC<T, E>['forEach'],
): <A, B>(f: (a: A) => B) => <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT3, R, E>(
  forEach: ForEach3REC<T, R, E>['forEach'],
): <A, B>(f: (a: A) => B) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT3, R>(
  forEach: ForEach3RC<T, R>['forEach'],
): <A, B>(f: (a: A) => B) => <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT3>(
  forEach: ForEach3<T>['forEach'],
): <A, B>(f: (a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT2, E>(
  forEach: ForEach2EC<T, E>['forEach'],
): <A, B>(f: (a: A) => B) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function map<T extends HKT2>(
  forEach: ForEach2<T>['forEach'],
): <A, B>(f: (a: A) => B) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function map<T extends HKT>(
  forEach: ForEach1<T>['forEach'],
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B>

export function map<T extends HKT>(
  forEach: ForEach<T>['forEach'],
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B>

export function map<T extends HKT>(
  forEach: ForEach<T>['forEach'],
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B> {
  return forEach<Id.IdHKT>({
    ...Id.IdentityBoth,
    ...Id.Covariant,
  })
}
/* #endregion */
