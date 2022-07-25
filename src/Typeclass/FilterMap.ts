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
} from '../HKT.js'
import { Just, Maybe, Nothing } from '../Maybe.js'
import { Predicate } from '../Predicate.js'
import { Refinement } from '../Refinement.js'
import { flow, identity } from '../function.js'

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

/* #region FilterMap */
export interface FilterMap<T extends HKT> {
  readonly filterMap: <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface FilterMap1<T extends HKT> {
  readonly filterMap: <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<T, A>) => Kind<T, B>
}

export interface FilterMap2<T extends HKT2> {
  readonly filterMap: <A, B>(f: (a: A) => Maybe<B>) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface FilterMap2EC<T extends HKT2, E> {
  readonly filterMap: <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>
}

export interface FilterMap3<T extends HKT3> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMap3RC<T extends HKT3, R> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMap3REC<T extends HKT3, R, E> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMap3EC<T extends HKT3, E> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
}

export interface FilterMap4<T extends HKT4> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMap4SREC<T extends HKT4, S, R, E> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMap4SC<T extends HKT4, S> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMap4SRC<T extends HKT4, S, R> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMap4RC<T extends HKT4, R> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <S, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMap4SEC<T extends HKT4, S, E> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMap4REC<T extends HKT4, R, E> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <S>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
}

export interface FilterMap4EC<T extends HKT4, E> {
  readonly filterMap: <A, B>(
    f: (a: A) => Maybe<B>,
  ) => <S, R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>
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
/* #endregion */

/* #region compact */
export function compact<T extends HKT10>(
  FM: FilterMap10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, Maybe<A>>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function compact<T extends HKT9>(
  FM: FilterMap9<T>,
): <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, Maybe<A>>,
) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function compact<T extends HKT8>(
  FM: FilterMap8<T>,
): <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, Maybe<A>>,
) => Kind8<T, X, W, V, U, S, R, E, A>

export function compact<T extends HKT7>(
  FM: FilterMap7<T>,
): <W, V, U, S, R, E, A>(
  kind: Kind7<T, W, V, U, S, R, E, Maybe<A>>,
) => Kind7<T, W, V, U, S, R, E, A>

export function compact<T extends HKT6>(
  FM: FilterMap6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, Maybe<A>>) => Kind6<T, V, U, S, R, E, A>

export function compact<T extends HKT5>(
  FM: FilterMap5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, Maybe<A>>) => Kind5<T, U, S, R, E, A>

export function compact<T extends HKT4, E>(
  FM: FilterMap4EC<T, E>,
): <S, R, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT4, R, E>(
  FM: FilterMap4REC<T, R, E>,
): <S, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT4, S, E>(
  FM: FilterMap4SEC<T, S, E>,
): <R, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT4, R>(
  FM: FilterMap4RC<T, R>,
): <S, E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT4, S, R>(
  FM: FilterMap4SRC<T, S, R>,
): <E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT4, S>(
  FM: FilterMap4SC<T, S>,
): <R, E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT4, S, R, E>(
  FM: FilterMap4SREC<T, S, R, E>,
): <A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT4>(
  FM: FilterMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT3, E>(
  FM: FilterMap3EC<T, E>,
): <R, A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>

export function compact<T extends HKT3, R, E>(
  FM: FilterMap3REC<T, R, E>,
): <A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>

export function compact<T extends HKT3, R>(
  FM: FilterMap3RC<T, R>,
): <E, A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>

export function compact<T extends HKT3>(
  FM: FilterMap3<T>,
): <R, E, A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>

export function compact<T extends HKT2, E>(
  FM: FilterMap2EC<T, E>,
): <A>(kind: Kind2<T, E, Maybe<A>>) => Kind2<T, E, A>

export function compact<T extends HKT2>(
  FM: FilterMap2<T>,
): <E, A>(kind: Kind2<T, E, Maybe<A>>) => Kind2<T, E, A>

export function compact<T extends HKT>(
  FM: FilterMap1<T>,
): <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A>

export function compact<T extends HKT>(FM: FilterMap<T>): <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A>

export function compact<T extends HKT>(
  F: FilterMap<T>,
): <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A> {
  return F.filterMap(identity)
}

/* #endregion */

/* #region filter */
export function filter<T extends HKT10>(
  FM: FilterMap10<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
  <A>(predicate: Predicate<A>): <Z, Y, X, W, V, U, S, R, E>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>
}

export function filter<T extends HKT9>(
  FM: FilterMap9<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, B>
  <A>(predicate: Predicate<A>): <Y, X, W, V, U, S, R, E>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, A>
}

export function filter<T extends HKT8>(
  FM: FilterMap8<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, B>
  <A>(predicate: Predicate<A>): <X, W, V, U, S, R, E>(
    kind: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, A>
}

export function filter<T extends HKT7>(
  FM: FilterMap7<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <W, V, U, S, R, E>(
    kind: Kind7<T, W, V, U, S, R, E, A>,
  ) => Kind7<T, W, V, U, S, R, E, B>
  <A>(predicate: Predicate<A>): <W, V, U, S, R, E>(
    kind: Kind7<T, W, V, U, S, R, E, A>,
  ) => Kind7<T, W, V, U, S, R, E, A>
}

export function filter<T extends HKT6>(
  FM: FilterMap6<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <V, U, S, R, E>(
    kind: Kind6<T, V, U, S, R, E, A>,
  ) => Kind6<T, V, U, S, R, E, B>
  <A>(predicate: Predicate<A>): <V, U, S, R, E>(
    kind: Kind6<T, V, U, S, R, E, A>,
  ) => Kind6<T, V, U, S, R, E, A>
}

export function filter<T extends HKT5>(
  FM: FilterMap5<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <U, S, R, E>(
    kind: Kind5<T, U, S, R, E, A>,
  ) => Kind5<T, U, S, R, E, B>
  <A>(predicate: Predicate<A>): <U, S, R, E>(
    kind: Kind5<T, U, S, R, E, A>,
  ) => Kind5<T, U, S, R, E, A>
}

export function filter<T extends HKT4, E>(
  FM: FilterMap4EC<T, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <S, R>(
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): <S, R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT4, R, E>(
  FM: FilterMap4REC<T, R, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <S>(
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): <S>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT4, S, E>(
  FM: FilterMap4SEC<T, S, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <R>(
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): <R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT4, R>(
  FM: FilterMap4RC<T, R>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <S, E>(
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): <S, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT4, S, R>(
  FM: FilterMap4SRC<T, S, R>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <E>(
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): <E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT4, S>(
  FM: FilterMap4SC<T, S>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <R, E>(
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): <R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT4, S, R, E>(
  FM: FilterMap4SREC<T, S, R, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT4>(
  FM: FilterMap4<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <S, R, E>(
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT3, E>(
  FM: FilterMap3EC<T, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
  <A>(predicate: Predicate<A>): <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>
}

export function filter<T extends HKT3, R, E>(
  FM: FilterMap3REC<T, R, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
  <A>(predicate: Predicate<A>): (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>
}

export function filter<T extends HKT3, R>(
  FM: FilterMap3RC<T, R>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>
  <A>(predicate: Predicate<A>): <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>
}

export function filter<T extends HKT3>(
  FM: FilterMap3<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <R, E>(
    kind: Kind3<T, R, E, A>,
  ) => Kind3<T, R, E, B>
  <A>(predicate: Predicate<A>): <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>
}

export function filter<T extends HKT2, E>(
  FM: FilterMap2EC<T, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (kind: Kind2<T, E, A>) => Kind2<T, E, B>
  <A>(predicate: Predicate<A>): (kind: Kind2<T, E, A>) => Kind2<T, E, A>
}

export function filter<T extends HKT2>(
  FM: FilterMap2<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>
  <A>(predicate: Predicate<A>): <E>(kind: Kind2<T, E, A>) => Kind2<T, E, A>
}

export function filter<T extends HKT>(
  FM: FilterMap1<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (kind: Kind<T, A>) => Kind<T, B>
  <A>(predicate: Predicate<A>): (kind: Kind<T, A>) => Kind<T, A>
}

export function filter<T extends HKT>(
  FM: FilterMap<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (kind: Kind<T, A>) => Kind<T, B>
  <A>(predicate: Predicate<A>): (kind: Kind<T, A>) => Kind<T, A>
}

export function filter<T extends HKT>(
  FM: FilterMap<T>,
): <A>(predicate: Predicate<A>) => (kind: Kind<T, A>) => Kind<T, A> {
  return <A>(p: Predicate<A>) =>
    (k) =>
      FM.filterMap((a: A) => (p(a) ? Just(a) : Nothing))(k)
}

/* #endregion */

/* #region map */
export function map<T extends HKT10>(
  FM: FilterMap10<T>,
): <A, B>(
  f: (a: A) => B,
) => <Z, Y, X, W, V, U, S, R, E>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>

export function map<T extends HKT9>(
  FM: FilterMap9<T>,
): <A, B>(
  f: (a: A) => B,
) => <Y, X, W, V, U, S, R, E>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, B>

export function map<T extends HKT8>(
  FM: FilterMap8<T>,
): <A, B>(
  f: (a: A) => B,
) => <X, W, V, U, S, R, E>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, B>

export function map<T extends HKT7>(
  FM: FilterMap7<T>,
): <A, B>(
  f: (a: A) => B,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>

export function map<T extends HKT6>(
  FM: FilterMap6<T>,
): <A, B>(
  f: (a: A) => B,
) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>

export function map<T extends HKT5>(
  FM: FilterMap5<T>,
): <A, B>(f: (a: A) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>

export function map<T extends HKT4, E>(
  FM: FilterMap4EC<T, E>,
): <A, B>(f: (a: A) => B) => <S, R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, R, E>(
  FM: FilterMap4REC<T, R, E>,
): <A, B>(f: (a: A) => B) => <S>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, S, E>(
  FM: FilterMap4SEC<T, S, E>,
): <A, B>(f: (a: A) => B) => <R>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, R>(
  FM: FilterMap4RC<T, R>,
): <A, B>(f: (a: A) => B) => <S, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, S, R>(
  FM: FilterMap4SRC<T, S, R>,
): <A, B>(f: (a: A) => B) => <E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, S>(
  FM: FilterMap4SC<T, S>,
): <A, B>(f: (a: A) => B) => <R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4, S, R, E>(
  FM: FilterMap4SREC<T, S, R, E>,
): <A, B>(f: (a: A) => B) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT4>(
  FM: FilterMap4<T>,
): <A, B>(f: (a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function map<T extends HKT3, E>(
  FM: FilterMap3EC<T, E>,
): <A, B>(f: (a: A) => B) => <R>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT3, R, E>(
  FM: FilterMap3REC<T, R, E>,
): <A, B>(f: (a: A) => B) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT3, R>(
  FM: FilterMap3RC<T, R>,
): <A, B>(f: (a: A) => B) => <E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT3>(
  FM: FilterMap3<T>,
): <A, B>(f: (a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function map<T extends HKT2, E>(
  FM: FilterMap2EC<T, E>,
): <A, B>(f: (a: A) => B) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function map<T extends HKT2>(
  FM: FilterMap2<T>,
): <A, B>(f: (a: A) => B) => <E>(kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function map<T extends HKT>(
  FM: FilterMap1<T>,
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B>

export function map<T extends HKT>(
  FM: FilterMap<T>,
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B>

export function map<T extends HKT>(
  FM: FilterMap<T>,
): <A, B>(f: (a: A) => B) => (kind: Kind<T, A>) => Kind<T, B> {
  return <A, B>(f: (a: A) => B) => FM.filterMap(flow(f, Just))
}

/* #endregion */

/* #region filterMap */
export function filterMap<F extends HKT10, G extends HKT10>(
  F: Covariant10<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<
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
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT10>(
  F: Covariant9<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT10>(
  F: Covariant8<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT10>(
  F: Covariant7<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT10>(
  F: Covariant6<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT10>(
  F: Covariant5<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT10>(
  F: Covariant4EC<F, E1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT10>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT10>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT10>(
  F: Covariant4RC<F, R1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT10>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT10>(
  F: Covariant4SC<F, S1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, G extends HKT10>(
  F: Covariant4<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT10>(
  F: Covariant3EC<F, E1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT10>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT10>(
  F: Covariant3RC<F, R1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT10>(
  F: Covariant3<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT10>(
  F: Covariant2EC<F, E1>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT10>(
  F: Covariant2<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT10>(
  F: Covariant1<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT10>(
  F: Covariant<F>,
  G: FilterMap10<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT9>(
  F: Covariant10<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT9>(
  F: Covariant9<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT9>(
  F: Covariant8<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT9>(
  F: Covariant7<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT9>(
  F: Covariant6<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT9>(
  F: Covariant5<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT9>(
  F: Covariant4EC<F, E1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT9>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT9>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT9>(
  F: Covariant4RC<F, R1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT9>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT9>(
  F: Covariant4SC<F, S1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, G extends HKT9>(
  F: Covariant4<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT9>(
  F: Covariant3EC<F, E1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT9>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT9>(
  F: Covariant3RC<F, R1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT9>(
  F: Covariant3<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT9>(
  F: Covariant2EC<F, E1>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT9>(
  F: Covariant2<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT9>(
  F: Covariant1<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT9>(
  F: Covariant<F>,
  G: FilterMap9<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT8>(
  F: Covariant10<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT8>(
  F: Covariant9<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT8>(
  F: Covariant8<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT8>(
  F: Covariant7<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT8>(
  F: Covariant6<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT8>(
  F: Covariant5<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT8>(
  F: Covariant4EC<F, E1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT8>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT8>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT8>(
  F: Covariant4RC<F, R1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT8>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT8>(
  F: Covariant4SC<F, S1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, G extends HKT8>(
  F: Covariant4<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT8>(
  F: Covariant3EC<F, E1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT8>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT8>(
  F: Covariant3RC<F, R1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT8>(
  F: Covariant3<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT8>(
  F: Covariant2EC<F, E1>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT8>(
  F: Covariant2<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT8>(
  F: Covariant1<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT8>(
  F: Covariant<F>,
  G: FilterMap8<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT7>(
  F: Covariant10<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT7>(
  F: Covariant9<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT7>(
  F: Covariant8<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT7>(
  F: Covariant7<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT7>(
  F: Covariant6<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT7>(
  F: Covariant5<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT7>(
  F: Covariant4EC<F, E1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT7>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT7>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT7>(
  F: Covariant4RC<F, R1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT7>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT7>(
  F: Covariant4SC<F, S1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, G extends HKT7>(
  F: Covariant4<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT7>(
  F: Covariant3EC<F, E1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT7>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT7>(
  F: Covariant3RC<F, R1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT7>(
  F: Covariant3<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT7>(
  F: Covariant2EC<F, E1>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT7>(
  F: Covariant2<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT7>(
  F: Covariant1<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT7>(
  F: Covariant<F>,
  G: FilterMap7<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT6>(
  F: Covariant10<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT6>(
  F: Covariant9<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT6>(
  F: Covariant8<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT6>(
  F: Covariant7<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT6>(
  F: Covariant6<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT6>(
  F: Covariant5<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT6>(
  F: Covariant4EC<F, E1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT6>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT6>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT6>(
  F: Covariant4RC<F, R1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT6>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT6>(
  F: Covariant4SC<F, S1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, G extends HKT6>(
  F: Covariant4<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT6>(
  F: Covariant3EC<F, E1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT6>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT6>(
  F: Covariant3RC<F, R1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT6>(
  F: Covariant3<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT6>(
  F: Covariant2EC<F, E1>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT6>(
  F: Covariant2<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT6>(
  F: Covariant1<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT6>(
  F: Covariant<F>,
  G: FilterMap6<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT5>(
  F: Covariant10<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT5>(
  F: Covariant9<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT5>(
  F: Covariant8<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT5>(
  F: Covariant7<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT5>(
  F: Covariant6<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT5>(
  F: Covariant5<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT5>(
  F: Covariant4EC<F, E1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT5>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT5>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT5>(
  F: Covariant4RC<F, R1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT5>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT5>(
  F: Covariant4SC<F, S1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT4, G extends HKT5>(
  F: Covariant4<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT5>(
  F: Covariant3EC<F, E1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT5>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT5>(
  F: Covariant3RC<F, R1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT5>(
  F: Covariant3<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT5>(
  F: Covariant2EC<F, E1>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT5>(
  F: Covariant2<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT5>(
  F: Covariant1<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U2, S2, R2, E2>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT5>(
  F: Covariant<F>,
  G: FilterMap5<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U2, S2, R2, E2>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT4, E2>(
  F: Covariant10<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT4, R2, E2>(
  F: Covariant10<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT4, S2, E2>(
  F: Covariant10<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT4, R2>(
  F: Covariant10<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT4, S2, R2>(
  F: Covariant10<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT4, S2>(
  F: Covariant10<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Covariant10<F>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT4>(
  F: Covariant10<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT4, E2>(
  F: Covariant9<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT4, R2, E2>(
  F: Covariant9<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT4, S2, E2>(
  F: Covariant9<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT4, R2>(
  F: Covariant9<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT4, S2, R2>(
  F: Covariant9<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT4, S2>(
  F: Covariant9<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Covariant9<F>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT4>(
  F: Covariant9<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT4, E2>(
  F: Covariant8<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT4, R2, E2>(
  F: Covariant8<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT4, S2, E2>(
  F: Covariant8<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT4, R2>(
  F: Covariant8<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT4, S2, R2>(
  F: Covariant8<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT4, S2>(
  F: Covariant8<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Covariant8<F>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT4>(
  F: Covariant8<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT4, E2>(
  F: Covariant7<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT4, R2, E2>(
  F: Covariant7<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT4, S2, E2>(
  F: Covariant7<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT4, R2>(
  F: Covariant7<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT4, S2, R2>(
  F: Covariant7<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT4, S2>(
  F: Covariant7<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Covariant7<F>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT4>(
  F: Covariant7<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT4, E2>(
  F: Covariant6<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT4, R2, E2>(
  F: Covariant6<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, S2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT4, S2, E2>(
  F: Covariant6<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT4, R2>(
  F: Covariant6<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT4, S2, R2>(
  F: Covariant6<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT4, S2>(
  F: Covariant6<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Covariant6<F>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT4>(
  F: Covariant6<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT4, E2>(
  F: Covariant5<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, S2, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT4, R2, E2>(
  F: Covariant5<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, S2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT4, S2, E2>(
  F: Covariant5<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT4, R2>(
  F: Covariant5<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, S2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT4, S2, R2>(
  F: Covariant5<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT4, S2>(
  F: Covariant5<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Covariant5<F>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT4>(
  F: Covariant5<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT4, E2>(
  F: Covariant4EC<F, E1>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, S2, R2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, S2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT4, R2>(
  F: Covariant4RC<F, R1>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, S2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, E2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT4, S2>(
  F: Covariant4SC<F, S1>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT4, G extends HKT4>(
  F: Covariant4<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT4, E2>(
  F: Covariant3<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, S2, R2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT4, R2, E2>(
  F: Covariant3<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, S2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT4, S2, E2>(
  F: Covariant3<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, R2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT4, R2>(
  F: Covariant3<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, S2, E2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: Covariant3EC<F, E1>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2, E2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Covariant3RC<F, R1>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT4>(
  F: Covariant3<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT4, E2>(
  F: Covariant2<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, S2, R2>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT4, R2, E2>(
  F: Covariant2<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, S2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT4, S2, E2>(
  F: Covariant2<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, R2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT4, R2>(
  F: Covariant2<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, S2, E2>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT4, S2, R2>(
  F: Covariant2<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT4, S2>(
  F: Covariant2<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, R2, E2>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: Covariant2EC<F, E1>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT4>(
  F: Covariant2<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, S2, R2, E2>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, E2>(
  F: Covariant1<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, R2, E2>(
  F: Covariant1<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, S2, E2>(
  F: Covariant1<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, R2>(
  F: Covariant1<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant1<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, S2>(
  F: Covariant1<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Covariant1<F>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4>(
  F: Covariant1<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, E2>(
  F: Covariant<F>,
  G: FilterMap4EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, R2, E2>(
  F: Covariant<F>,
  G: FilterMap4REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, S2, E2>(
  F: Covariant<F>,
  G: FilterMap4SEC<G, S2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, R2>(
  F: Covariant<F>,
  G: FilterMap4RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant<F>,
  G: FilterMap4SRC<G, S2, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, S2>(
  F: Covariant<F>,
  G: FilterMap4SC<G, S2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Covariant<F>,
  G: FilterMap4SREC<G, S2, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT4>(
  F: Covariant<F>,
  G: FilterMap4<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => Kind<F, Kind4<G, S2, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT3, E2>(
  F: Covariant10<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT3, R2, E2>(
  F: Covariant10<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT3, R2>(
  F: Covariant10<F>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT3>(
  F: Covariant10<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT3, E2>(
  F: Covariant9<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT3, R2, E2>(
  F: Covariant9<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT3, R2>(
  F: Covariant9<F>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT9, G extends HKT3>(
  F: Covariant9<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT3, E2>(
  F: Covariant8<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT3, R2, E2>(
  F: Covariant8<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT3, R2>(
  F: Covariant8<F>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT8, G extends HKT3>(
  F: Covariant8<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT3, E2>(
  F: Covariant7<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT3, R2, E2>(
  F: Covariant7<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT3, R2>(
  F: Covariant7<F>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT7, G extends HKT3>(
  F: Covariant7<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT3, E2>(
  F: Covariant6<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, R2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT3, R2, E2>(
  F: Covariant6<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT3, R2>(
  F: Covariant6<F>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT6, G extends HKT3>(
  F: Covariant6<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT3, E2>(
  F: Covariant5<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, R2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT3, R2, E2>(
  F: Covariant5<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT3, R2>(
  F: Covariant5<F>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT5, G extends HKT3>(
  F: Covariant5<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT3>(
  F: Covariant4EC<F, E1>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT3>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT3>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT3>(
  F: Covariant4RC<F, R1>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, R2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: Covariant4SC<F, S1>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT4, G extends HKT3>(
  F: Covariant4<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT3, E2>(
  F: Covariant3EC<F, E1>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, R2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT3, R2>(
  F: Covariant3RC<F, R1>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, E2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT3, G extends HKT3>(
  F: Covariant3<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, R2, E2>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT3, E2>(
  F: Covariant2<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, R2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT3, R2, E2>(
  F: Covariant2<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT3, R2>(
  F: Covariant2EC<F, E1>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT2, G extends HKT3>(
  F: Covariant2<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, R2, E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => Kind2<F, E1, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT3, E2>(
  F: Covariant1<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT3, R2, E2>(
  F: Covariant1<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT3, R2>(
  F: Covariant1<F>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT3>(
  F: Covariant1<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT3, E2>(
  F: Covariant<F>,
  G: FilterMap3EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT3, R2, E2>(
  F: Covariant<F>,
  G: FilterMap3REC<G, R2, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT3, R2>(
  F: Covariant<F>,
  G: FilterMap3RC<G, R2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT, G extends HKT3>(
  F: Covariant<F>,
  G: FilterMap3<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => Kind<F, Kind3<G, R2, E2, B>>

export function filterMap<F extends HKT10, G extends HKT2, E2>(
  F: Covariant10<F>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT10, G extends HKT2>(
  F: Covariant10<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT9, G extends HKT2, E2>(
  F: Covariant9<F>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT9, G extends HKT2>(
  F: Covariant9<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT8, G extends HKT2, E2>(
  F: Covariant8<F>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT8, G extends HKT2>(
  F: Covariant8<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT7, G extends HKT2, E2>(
  F: Covariant7<F>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT7, G extends HKT2>(
  F: Covariant7<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT6, G extends HKT2, E2>(
  F: Covariant6<F>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT6, G extends HKT2>(
  F: Covariant6<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT5, G extends HKT2, E2>(
  F: Covariant5<F>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT5, G extends HKT2>(
  F: Covariant5<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT4, E1, G extends HKT2>(
  F: Covariant4EC<F, E1>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E2>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT2>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT2>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT4, R1, G extends HKT2>(
  F: Covariant4RC<F, R1>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1, E2>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT2>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT4, S1, G extends HKT2>(
  F: Covariant4SC<F, S1>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, E2>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT4, G extends HKT2>(
  F: Covariant4<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1, E2>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT3, E1, G extends HKT2>(
  F: Covariant3EC<F, E1>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT2>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT3, R1, G extends HKT2, E2>(
  F: Covariant3RC<F, R1>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT3, G extends HKT2>(
  F: Covariant3<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => Kind3<F, R1, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT2, E1, G extends HKT2, E2>(
  F: Covariant2EC<F, E1>,
  G: FilterMap2EC<G, E2>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT2, G extends HKT2>(
  F: Covariant2<F>,
  G: FilterMap2<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1, E2>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => Kind2<F, E1, Kind2<G, E2, B>>

export function filterMap<F extends HKT, G extends HKT2, E2>(
  F: Covariant1<F>,
  G: FilterMap2EC<G, E2>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function filterMap<F extends HKT, G extends HKT2>(
  F: Covariant1<F>,
  G: FilterMap2<G>,
): <A, B>(f: (a: A) => Maybe<B>) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function filterMap<F extends HKT, G extends HKT2, E2>(
  F: Covariant<F>,
  G: FilterMap2EC<G, E2>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function filterMap<F extends HKT, G extends HKT2>(
  F: Covariant<F>,
  G: FilterMap2<G>,
): <A, B>(f: (a: A) => Maybe<B>) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => Kind<F, Kind2<G, E2, B>>

export function filterMap<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, E1, G extends HKT>(
  F: Covariant4EC<F, E1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, R1, G extends HKT>(
  F: Covariant4RC<F, R1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, S1, G extends HKT>(
  F: Covariant4SC<F, S1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT3, E1, G extends HKT>(
  F: Covariant3EC<F, E1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT3, R1, G extends HKT>(
  F: Covariant3RC<F, R1>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: FilterMap1<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT2, E1, G extends HKT>(
  F: Covariant2EC<F, E1>,
  G: FilterMap1<G>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function filterMap<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: FilterMap1<G>,
): <A, B>(f: (a: A) => Maybe<B>) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function filterMap<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: FilterMap1<G>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function filterMap<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: FilterMap1<G>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function filterMap<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <W1, V1, U1, S1, R1, E1>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <V1, U1, S1, R1, E1>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <U1, S1, R1, E1>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, E1, G extends HKT>(
  F: Covariant4EC<F, E1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, R1, E1, G extends HKT>(
  F: Covariant4REC<F, R1, E1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, S1, E1, G extends HKT>(
  F: Covariant4SEC<F, S1, E1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, R1, G extends HKT>(
  F: Covariant4RC<F, R1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, S1, R1, G extends HKT>(
  F: Covariant4SRC<F, S1, R1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, S1, G extends HKT>(
  F: Covariant4SC<F, S1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => Kind4<F, S1, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT3, E1, G extends HKT>(
  F: Covariant3EC<F, E1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT3, R1, E1, G extends HKT>(
  F: Covariant3REC<F, R1, E1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => (kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT3, R1, G extends HKT>(
  F: Covariant3RC<F, R1>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: FilterMap<G>,
): <A, B>(
  f: (a: A) => Maybe<B>,
) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => Kind3<F, R1, E1, Kind<G, B>>

export function filterMap<F extends HKT2, E1, G extends HKT>(
  F: Covariant2EC<F, E1>,
  G: FilterMap<G>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function filterMap<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: FilterMap<G>,
): <A, B>(f: (a: A) => Maybe<B>) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => Kind2<F, E1, Kind<G, B>>

export function filterMap<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: FilterMap<G>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function filterMap<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: FilterMap<G>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>

export function filterMap<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: FilterMap<G>,
): <A, B>(f: (a: A) => Maybe<B>) => (kind: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>> {
  return <A, B>(f: (a: A) => Maybe<B>) => F.map(G.filterMap(f))
}

/* #endregion */
