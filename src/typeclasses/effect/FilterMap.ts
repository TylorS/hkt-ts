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
import { Just, Maybe, Nothing } from '../../data/Maybe'
import { Predicate } from '../../function/Predicate'
import { Refinement } from '../../function/Refinement'
import { identity } from '../../function/function'

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

/* #endregion */

/* #region makeCompact */
export function compact<T extends HKT10>(
  F: FilterMap10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, Maybe<A>>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function compact<T extends HKT9>(
  F: FilterMap9<T>,
): <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, Maybe<A>>,
) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function compact<T extends HKT8>(
  F: FilterMap8<T>,
): <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, Maybe<A>>,
) => Kind8<T, X, W, V, U, S, R, E, A>

export function compact<T extends HKT7>(
  F: FilterMap7<T>,
): <W, V, U, S, R, E, A>(
  kind: Kind7<T, W, V, U, S, R, E, Maybe<A>>,
) => Kind7<T, W, V, U, S, R, E, A>

export function compact<T extends HKT6>(
  F: FilterMap6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, Maybe<A>>) => Kind6<T, V, U, S, R, E, A>

export function compact<T extends HKT5>(
  F: FilterMap5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, Maybe<A>>) => Kind5<T, U, S, R, E, A>

export function compact<T extends HKT4>(
  F: FilterMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>

export function compact<T extends HKT3>(
  F: FilterMap3<T>,
): <R, E, A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>

export function compact<T extends HKT2>(
  F: FilterMap2<T>,
): <E, A>(kind: Kind2<T, E, Maybe<A>>) => Kind2<T, E, A>

export function compact<T extends HKT>(F: FilterMap1<T>): <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A>

export function compact<T extends HKT>(F: FilterMap<T>): <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A>

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

export function filter<T extends HKT4>(
  FM: FilterMap4<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <S, R, E>(
    kind: Kind4<T, S, R, E, A>,
  ) => Kind4<T, S, R, E, B>
  <A>(predicate: Predicate<A>): <S, R, E>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>
}

export function filter<T extends HKT3>(
  FM: FilterMap3<T>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <R, E>(
    kind: Kind3<T, R, E, A>,
  ) => Kind3<T, R, E, B>
  <A>(predicate: Predicate<A>): <R, E>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>
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
