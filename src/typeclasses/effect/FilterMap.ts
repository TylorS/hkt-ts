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
import { Maybe } from '../../data/Maybe'

export interface FilterMap<T extends HKT> {
  readonly filterMap: <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface FilterMap1<T extends HKT> {
  readonly filterMap: <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface FilterMap2<T extends HKT2> {
  readonly filterMap: <A, B>(f: (a: A) => Maybe<B>) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface FilterMap3<T extends HKT3> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMap4<T extends HKT4> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMap5<T extends HKT5> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>
}

export interface FilterMap6<T extends HKT6> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>
}

export interface FilterMap7<T extends HKT7> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>
}

export interface FilterMap8<T extends HKT8> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, B>
}

export interface FilterMap9<T extends HKT9> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, B>
}

export interface FilterMap10<T extends HKT10> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
}
