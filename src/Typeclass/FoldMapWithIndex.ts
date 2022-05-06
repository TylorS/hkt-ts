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
} from '../HKT'
import { pipe } from '../function'

import { Identity } from './Identity'

/* #region FoldMapWithIndex */
export interface FoldMapWithIndex<T extends HKT, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(f: (k: K, a: A) => B) => (kind: Kind<T, A>) => B
}

export interface FoldMapWithIndex1<T extends HKT, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(f: (k: K, a: A) => B) => (kind: Kind<T, A>) => B
}

export interface FoldMapWithIndex2<T extends HKT2, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(f: (k: K, a: A) => B) => <E>(kind: Kind2<T, E, A>) => B
}

export interface FoldMapWithIndex3<T extends HKT3, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(f: (k: K, a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B
}

export interface FoldMapWithIndex4<T extends HKT4, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(f: (k: K, a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMapWithIndex5<T extends HKT5, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(f: (k: K, a: A) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B
}

export interface FoldMapWithIndex6<T extends HKT6, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(f: (k: K, a: A) => B) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B
}

export interface FoldMapWithIndex7<T extends HKT7, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(f: (k: K, a: A) => B) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B
}

export interface FoldMapWithIndex8<T extends HKT8, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(
    f: (k: K, a: A) => B,
  ) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B
}

export interface FoldMapWithIndex9<T extends HKT9, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(
    f: (k: K, a: A) => B,
  ) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B
}

export interface FoldMapWithIndex10<T extends HKT10, K> {
  readonly foldMapWithIndex: <B>(
    ID: Identity<B>,
  ) => <A>(
    f: (k: K, a: A) => B,
  ) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B
}

/* #endregion */

/* #region toMap */

const mapIdentity: Identity<ReadonlyMap<any, any>> = {
  id: new Map(),
  concat: (f, s) => new Map([...f, ...s]),
}

export function toMap<T extends HKT10, K>(
  FMWI: FoldMapWithIndex10<T, K>,
): <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => ReadonlyMap<K, A>

export function toMap<T extends HKT9, K>(
  FMWI: FoldMapWithIndex9<T, K>,
): <Y, X, W, V, U, S, R, E, A>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT8, K>(
  FMWI: FoldMapWithIndex8<T, K>,
): <X, W, V, U, S, R, E, A>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT7, K>(
  FMWI: FoldMapWithIndex7<T, K>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT6, K>(
  FMWI: FoldMapWithIndex6<T, K>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT5, K>(
  FMWI: FoldMapWithIndex5<T, K>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT4, K>(
  FMWI: FoldMapWithIndex4<T, K>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT3, K>(
  FMWI: FoldMapWithIndex3<T, K>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT2, K>(
  FMWI: FoldMapWithIndex2<T, K>,
): <E, A>(kind: Kind2<T, E, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT, K>(
  FMWI: FoldMapWithIndex1<T, K>,
): <A>(kind: Kind<T, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT, K>(
  FMWI: FoldMapWithIndex<T, K>,
): <A>(kind: Kind<T, A>) => ReadonlyMap<K, A>

export function toMap<T extends HKT, K>(
  FMWI: FoldMapWithIndex<T, K>,
): <A>(kind: Kind<T, A>) => ReadonlyMap<K, A> {
  return <A>(kind: Kind<T, A>) =>
    pipe(
      kind,
      FMWI.foldMapWithIndex<ReadonlyMap<K, A>>(mapIdentity)((k, a) => new Map([[k, a]])),
    )
}

/* #endregion */
