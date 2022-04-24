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
import { Identity } from '../concrete/Identity'

export interface FoldMap<T extends HKT> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<T, A>) => B
}

export interface FoldMap1<T extends HKT> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<T, A>) => B
}

export interface FoldMap2<T extends HKT2> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => <E>(kind: Kind2<T, E, A>) => B
}

export interface FoldMap3<T extends HKT3> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B
}

export interface FoldMap4<T extends HKT4> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMap5<T extends HKT5> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B
}

export interface FoldMap6<T extends HKT6> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B
}

export interface FoldMap7<T extends HKT7> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B
}

export interface FoldMap8<T extends HKT8> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B
}

export interface FoldMap9<T extends HKT9> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(
    f: (a: A) => B,
  ) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B
}

export interface FoldMap10<T extends HKT10> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(
    f: (a: A) => B,
  ) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B
}
