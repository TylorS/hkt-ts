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
import { pipe } from '../../function.js'
import type { Identity } from '../Identity.js'

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
import { mapAccum } from './mapAccum.js'

/* #region foldMap */
export function foldMap<T extends HKT10>(
  FE: ForEach10<T>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B

export function foldMap<T extends HKT9>(
  FE: ForEach9<T>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B

export function foldMap<T extends HKT8>(
  FE: ForEach8<T>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B

export function foldMap<T extends HKT7>(
  FE: ForEach7<T>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B

export function foldMap<T extends HKT6>(
  FE: ForEach6<T>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B

export function foldMap<T extends HKT5>(
  FE: ForEach5<T>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B

export function foldMap<T extends HKT4, E>(
  FE: ForEach4EC<T, E>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <S, R>(kind: Kind4<T, S, R, E, A>) => B

export function foldMap<T extends HKT4, R, E>(
  FE: ForEach4REC<T, R, E>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <S>(kind: Kind4<T, S, R, E, A>) => B

export function foldMap<T extends HKT4, S, E>(
  FE: ForEach4SEC<T, S, E>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R>(kind: Kind4<T, S, R, E, A>) => B

export function foldMap<T extends HKT4, R>(
  FE: ForEach4RC<T, R>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <S, E>(kind: Kind4<T, S, R, E, A>) => B

export function foldMap<T extends HKT4, S, R>(
  FE: ForEach4SRC<T, S, R>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E>(kind: Kind4<T, S, R, E, A>) => B

export function foldMap<T extends HKT4, S>(
  FE: ForEach4SC<T, S>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R, E>(kind: Kind4<T, S, R, E, A>) => B

export function foldMap<T extends HKT4, S, R, E>(
  FE: ForEach4SREC<T, S, R, E>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind4<T, S, R, E, A>) => B

export function foldMap<T extends HKT4>(
  FE: ForEach4<T>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B

export function foldMap<T extends HKT3, E>(
  FE: ForEach3EC<T, E>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R>(kind: Kind3<T, R, E, A>) => B

export function foldMap<T extends HKT3, R, E>(
  FE: ForEach3REC<T, R, E>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind3<T, R, E, A>) => B

export function foldMap<T extends HKT3, R>(
  FE: ForEach3RC<T, R>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E>(kind: Kind3<T, R, E, A>) => B

export function foldMap<T extends HKT3>(
  FE: ForEach3<T>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B

export function foldMap<T extends HKT2, E>(
  FE: ForEach2EC<T, E>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind2<T, E, A>) => B

export function foldMap<T extends HKT2>(
  FE: ForEach2<T>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E>(kind: Kind2<T, E, A>) => B

export function foldMap<T extends HKT>(
  FE: ForEach1<T>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<T, A>) => B

export function foldMap<T extends HKT>(
  FE: ForEach<T>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<T, A>) => B

export function foldMap<T extends HKT>(FE: ForEach<T>) {
  const mapAccum_ = mapAccum(FE)

  return <B>(I: Identity<B>) => {
    return <A>(f: (a: A) => B) =>
      (kind: Kind<T, A>) =>
        pipe(
          kind,
          mapAccum_(I.id, (b, a) => [I.concat(b, f(a)), undefined]),
          (x) => x[0],
        )
  }
}

/* #endregion */
