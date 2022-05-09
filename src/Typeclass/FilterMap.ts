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
import { Just, Maybe, Nothing } from '../Maybe'
import { Predicate } from '../Predicate'
import { Refinement } from '../Refinement'
import { identity } from '../function'

/* #region  Typeclass */
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