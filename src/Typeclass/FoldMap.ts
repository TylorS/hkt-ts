import type * as Either from '../Either'
import * as Endo from '../Endomorphism'
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
import type * as M from '../Maybe'
import type { NonEmptyArray } from '../NonEmptyArray'
import { not } from '../Predicate'
import { makeIdentity, snd } from '../Tuple'
import * as B from '../boolean'
import { makeStateIdentity } from '../common'
import { constFalse, flow, pipe } from '../function'
import * as N from '../number'

import * as A from './Associative'
import { Commutative } from './Commutative'
import type {
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
} from './Covariant'
import type { Eq } from './Eq'
import type {
  FoldMapWithIndex,
  FoldMapWithIndex1,
  FoldMapWithIndex10,
  FoldMapWithIndex2,
  FoldMapWithIndex2EC,
  FoldMapWithIndex3,
  FoldMapWithIndex3EC,
  FoldMapWithIndex3RC,
  FoldMapWithIndex3REC,
  FoldMapWithIndex4,
  FoldMapWithIndex4EC,
  FoldMapWithIndex4RC,
  FoldMapWithIndex4REC,
  FoldMapWithIndex4SC,
  FoldMapWithIndex4SEC,
  FoldMapWithIndex4SRC,
  FoldMapWithIndex4SREC,
  FoldMapWithIndex5,
  FoldMapWithIndex6,
  FoldMapWithIndex7,
  FoldMapWithIndex8,
  FoldMapWithIndex9,
} from './FoldMapWithIndex'
import * as FE from './ForEach'
import { Identity, fromIdentityEitherCovariant } from './Identity'
import {
  IdentityEither,
  IdentityEither1,
  IdentityEither10,
  IdentityEither2,
  IdentityEither2EC,
  IdentityEither3,
  IdentityEither3EC,
  IdentityEither3RC,
  IdentityEither3REC,
  IdentityEither4,
  IdentityEither4EC,
  IdentityEither4RC,
  IdentityEither4REC,
  IdentityEither4SC,
  IdentityEither4SEC,
  IdentityEither4SRC,
  IdentityEither4SREC,
  IdentityEither5,
  IdentityEither6,
  IdentityEither7,
  IdentityEither8,
  IdentityEither9,
} from './IdentityEither'
import {
  Top,
  Top1,
  Top10,
  Top2,
  Top2EC,
  Top3,
  Top3EC,
  Top3RC,
  Top3REC,
  Top4,
  Top4EC,
  Top4RC,
  Top4REC,
  Top4SC,
  Top4SEC,
  Top4SRC,
  Top4SREC,
  Top5,
  Top6,
  Top7,
  Top8,
  Top9,
  makeFromValue,
} from './Top'

const Nothing: M.Nothing = {
  tag: 'Nothing',
}

const Just = <A>(value: A): M.Just<A> => ({
  tag: 'Just',
  value,
})

const makeFirstAssociative = <A>(): A.Associative<M.Maybe<A>> => ({
  concat: (f, s) => (f.tag === 'Just' ? f : s),
})

const makeAssociativeIdentity = <A>(A: A.Associative<A>): Identity<M.Maybe<A>> => ({
  concat: (f, s) =>
    f.tag === 'Just' && s.tag === 'Just'
      ? Just(A.concat(f.value, s.value))
      : f.tag === 'Just'
      ? f
      : s,
  id: Nothing,
})

/* #region FoldMap */
export interface FoldMap<T extends HKT> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<T, A>) => B
}

export interface FoldMap1<T extends HKT> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<T, A>) => B
}

export interface FoldMap2<T extends HKT2> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => <E>(kind: Kind2<T, E, A>) => B
}

export interface FoldMap2EC<T extends HKT2, E> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind2<T, E, A>) => B
}

export interface FoldMap3<T extends HKT3> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B
}

export interface FoldMap3RC<T extends HKT3, R> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => <E>(kind: Kind3<T, R, E, A>) => B
}

export interface FoldMap3REC<T extends HKT3, R, E> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind3<T, R, E, A>) => B
}

export interface FoldMap3EC<T extends HKT3, E> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => <R>(kind: Kind3<T, R, E, A>) => B
}

export interface FoldMap4<T extends HKT4> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMap4SREC<T extends HKT4, S, R, E> {
  readonly foldMap: <B>(ID: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMap4SC<T extends HKT4, S> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <R, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMap4SRC<T extends HKT4, S, R> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMap4RC<T extends HKT4, R> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <S, E>(kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMap4SEC<T extends HKT4, S, E> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <R>(kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMap4REC<T extends HKT4, R, E> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <S>(kind: Kind4<T, S, R, E, A>) => B
}

export interface FoldMap4EC<T extends HKT4, E> {
  readonly foldMap: <B>(
    ID: Identity<B>,
  ) => <A>(f: (a: A) => B) => <S, R>(kind: Kind4<T, S, R, E, A>) => B
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
/* #endregion */

/* #region foldLeft */
export function foldLeft<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  I: Identity<A>,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => A

export function foldLeft<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(I: Identity<A>) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => A

export function foldLeft<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(I: Identity<A>) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => A

export function foldLeft<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(I: Identity<A>) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => A

export function foldLeft<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(I: Identity<A>) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => A

export function foldLeft<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(I: Identity<A>) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => A

export function foldLeft<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(I: Identity<A>) => <S, R>(kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(I: Identity<A>) => <S>(kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(I: Identity<A>) => <R>(kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(I: Identity<A>) => <S, E>(kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(I: Identity<A>) => <E>(kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(I: Identity<A>) => <R, E>(kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(I: Identity<A>) => (kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(I: Identity<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(I: Identity<A>) => <R>(kind: Kind3<T, R, E, A>) => A

export function foldLeft<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(I: Identity<A>) => (kind: Kind3<T, R, E, A>) => A

export function foldLeft<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(I: Identity<A>) => <E>(kind: Kind3<T, R, E, A>) => A

export function foldLeft<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(I: Identity<A>) => <R, E>(kind: Kind3<T, R, E, A>) => A

export function foldLeft<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(I: Identity<A>) => (kind: Kind2<T, E, A>) => A

export function foldLeft<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(I: Identity<A>) => <E>(kind: Kind2<T, E, A>) => A

export function foldLeft<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(I: Identity<A>) => (kind: Kind<T, A>) => A

export function foldLeft<T extends HKT>(
  FM: FoldMap<T>,
): <A>(I: Identity<A>) => (kind: Kind<T, A>) => A

export function foldLeft<T extends HKT>(
  FM: FoldMap<T>,
): <A>(I: Identity<A>) => (kind: Kind<T, A>) => A {
  return <A>(I: Identity<A>) => FM.foldMap(I)((a: A) => a)
}

/* #endregion */

/* #region exists */
export function exists<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  f: (a: A) => boolean,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => boolean

export function exists<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  f: (a: A) => boolean,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => boolean

export function exists<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  f: (a: A) => boolean,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => boolean

export function exists<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(f: (a: A) => boolean) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => boolean

export function exists<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(f: (a: A) => boolean) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => boolean

export function exists<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(f: (a: A) => boolean) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => boolean

export function exists<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(f: (a: A) => boolean) => <S, R>(kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(f: (a: A) => boolean) => <S>(kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(f: (a: A) => boolean) => <R>(kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(f: (a: A) => boolean) => <S, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(f: (a: A) => boolean) => <E>(kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(f: (a: A) => boolean) => <R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(f: (a: A) => boolean) => (kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(f: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(f: (a: A) => boolean) => <R>(kind: Kind3<T, R, E, A>) => boolean

export function exists<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(f: (a: A) => boolean) => (kind: Kind3<T, R, E, A>) => boolean

export function exists<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(f: (a: A) => boolean) => <E>(kind: Kind3<T, R, E, A>) => boolean

export function exists<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(f: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => boolean

export function exists<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(f: (a: A) => boolean) => (kind: Kind2<T, E, A>) => boolean

export function exists<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(f: (a: A) => boolean) => <E>(kind: Kind2<T, E, A>) => boolean

export function exists<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(f: (a: A) => boolean) => (kind: Kind<T, A>) => boolean

export function exists<T extends HKT>(
  FM: FoldMap<T>,
): <A>(f: (a: A) => boolean) => (kind: Kind<T, A>) => boolean

export function exists<T extends HKT>(
  FM: FoldMap<T>,
): <A>(f: (a: A) => boolean) => (kind: Kind<T, A>) => boolean {
  return FM.foldMap(B.Any)
}

/* #endregion */

/* #region contains */
export function contains<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  E: Eq<A>,
) => (a: A) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => boolean

export function contains<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  E: Eq<A>,
) => (a: A) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => boolean

export function contains<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  E: Eq<A>,
) => (a: A) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => boolean

export function contains<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(E: Eq<A>) => (a: A) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => boolean

export function contains<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(E: Eq<A>) => (a: A) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => boolean

export function contains<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(E: Eq<A>) => (a: A) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => boolean

export function contains<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(E: Eq<A>) => (a: A) => <S, R>(kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(E: Eq<A>) => (a: A) => <S>(kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(E: Eq<A>) => (a: A) => <R>(kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(E: Eq<A>) => (a: A) => <S, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(E: Eq<A>) => (a: A) => <E>(kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(E: Eq<A>) => (a: A) => <R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(E: Eq<A>) => (a: A) => (kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(E: Eq<A>) => (a: A) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(E: Eq<A>) => (a: A) => <R>(kind: Kind3<T, R, E, A>) => boolean

export function contains<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(E: Eq<A>) => (a: A) => (kind: Kind3<T, R, E, A>) => boolean

export function contains<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(E: Eq<A>) => (a: A) => <E>(kind: Kind3<T, R, E, A>) => boolean

export function contains<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(E: Eq<A>) => (a: A) => <R, E>(kind: Kind3<T, R, E, A>) => boolean

export function contains<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(E: Eq<A>) => (a: A) => (kind: Kind2<T, E, A>) => boolean

export function contains<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(E: Eq<A>) => (a: A) => <E>(kind: Kind2<T, E, A>) => boolean

export function contains<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(E: Eq<A>) => (a: A) => (kind: Kind<T, A>) => boolean

export function contains<T extends HKT>(
  FM: FoldMap<T>,
): <A>(E: Eq<A>) => (a: A) => (kind: Kind<T, A>) => boolean

export function contains<T extends HKT>(
  FM: FoldMap<T>,
): <A>(E: Eq<A>) => (a: A) => (kind: Kind<T, A>) => boolean {
  const foldMap = FM.foldMap(B.Any)

  return <A>(E: Eq<A>) =>
    (a: A) =>
      foldMap((b: A) => E.equals(a, b))
}

/* #endregion */

/* #region count */
export function count<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  f: (a: A) => boolean,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => number

export function count<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  f: (a: A) => boolean,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => number

export function count<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  f: (a: A) => boolean,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => number

export function count<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(f: (a: A) => boolean) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => number

export function count<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(f: (a: A) => boolean) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => number

export function count<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(f: (a: A) => boolean) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => number

export function count<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(f: (a: A) => boolean) => <S, R>(kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(f: (a: A) => boolean) => <S>(kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(f: (a: A) => boolean) => <R>(kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(f: (a: A) => boolean) => <S, E>(kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(f: (a: A) => boolean) => <E>(kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(f: (a: A) => boolean) => <R, E>(kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(f: (a: A) => boolean) => (kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(f: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(f: (a: A) => boolean) => <R>(kind: Kind3<T, R, E, A>) => number

export function count<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(f: (a: A) => boolean) => (kind: Kind3<T, R, E, A>) => number

export function count<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(f: (a: A) => boolean) => <E>(kind: Kind3<T, R, E, A>) => number

export function count<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(f: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => number

export function count<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(f: (a: A) => boolean) => (kind: Kind2<T, E, A>) => number

export function count<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(f: (a: A) => boolean) => <E>(kind: Kind2<T, E, A>) => number

export function count<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(f: (a: A) => boolean) => (kind: Kind<T, A>) => number

export function count<T extends HKT>(
  FM: FoldMap<T>,
): <A>(f: (a: A) => boolean) => (kind: Kind<T, A>) => number

export function count<T extends HKT>(
  FM: FoldMap<T>,
): <A>(f: (a: A) => boolean) => (kind: Kind<T, A>) => number {
  const foldMap = FM.foldMap(N.IdentitySum)

  return <A>(predicate: (a: A) => boolean) => foldMap((a: A) => (predicate(a) ? 1 : 0))
}

/* #endregion */

/* #region find */
export function find<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(predicate: (a: A) => boolean) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(predicate: (a: A) => boolean) => <S, R>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(predicate: (a: A) => boolean) => <S>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(predicate: (a: A) => boolean) => <R>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(predicate: (a: A) => boolean) => <S, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(predicate: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(predicate: (a: A) => boolean) => <R>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function find<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function find<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function find<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function find<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind2<T, E, A>) => M.Maybe<A>

export function find<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind2<T, E, A>) => M.Maybe<A>

export function find<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => M.Maybe<A>

export function find<T extends HKT>(
  FM: FoldMap<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => M.Maybe<A>

export function find<T extends HKT>(
  FM: FoldMap<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => M.Maybe<A> {
  const foldMap = FM.foldMap({ ...makeFirstAssociative<any>(), id: Nothing })

  return <A>(predicate: (a: A) => boolean) => foldMap((a: A) => (predicate(a) ? Just(a) : Nothing))
}

/* #endregion */

/* #region reduce */
export function reduce<T extends HKT10>(
  FM: FoldMap10<T>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B

export function reduce<T extends HKT9>(
  FM: FoldMap9<T>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B

export function reduce<T extends HKT8>(
  FM: FoldMap8<T>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B

export function reduce<T extends HKT7>(
  FM: FoldMap7<T>,
): <B, A>(
  seed: B,
  f: (b: B, a: A) => B,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B

export function reduce<T extends HKT6>(
  FM: FoldMap6<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B

export function reduce<T extends HKT5>(
  FM: FoldMap5<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B

export function reduce<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S, R>(kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S>(kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R>(kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E>(kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT4>(
  FM: FoldMap4<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R>(kind: Kind3<T, R, E, A>) => B

export function reduce<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind3<T, R, E, A>) => B

export function reduce<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E>(kind: Kind3<T, R, E, A>) => B

export function reduce<T extends HKT3>(
  FM: FoldMap3<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B

export function reduce<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind2<T, E, A>) => B

export function reduce<T extends HKT2>(
  FM: FoldMap2<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <E>(kind: Kind2<T, E, A>) => B

export function reduce<T extends HKT>(
  FM: FoldMap1<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<T, A>) => B

export function reduce<T extends HKT>(
  FM: FoldMap<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<T, A>) => B

export function reduce<T extends HKT>(
  FM: FoldMap<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => (kind: Kind<T, A>) => B {
  return <B, A>(seed: B, f: (b: B, a: A) => B) => {
    const foldMap = FM.foldMap(Endo.makeIdentity<B>())

    return flow(
      foldMap((a: A) => (b: B) => f(b, a)),
      (f) => f(seed),
    )
  }
}

/* #endregion */

/* #region toArray */

const arrayIdentity: Identity<ReadonlyArray<any>> = { id: [], concat: (a, b) => a.concat(b) }

export function toArray<T extends HKT10>(
  FM: FoldMap10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT9>(
  FM: FoldMap9<T>,
): <Y, X, W, V, U, S, R, E, A>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT8>(
  FM: FoldMap8<T>,
): <X, W, V, U, S, R, E, A>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT7>(
  FM: FoldMap7<T>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT6>(
  FM: FoldMap6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT5>(
  FM: FoldMap5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <S, R, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <S, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <R, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <S, E, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <E, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <R, E, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT4>(
  FM: FoldMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <R, A>(kind: Kind3<T, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(kind: Kind3<T, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <E, A>(kind: Kind3<T, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT3>(
  FM: FoldMap3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(kind: Kind2<T, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT2>(
  FM: FoldMap2<T>,
): <E, A>(kind: Kind2<T, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT>(FM: FoldMap1<T>): <A>(kind: Kind<T, A>) => ReadonlyArray<A>

export function toArray<T extends HKT>(FM: FoldMap<T>): <A>(kind: Kind<T, A>) => ReadonlyArray<A>

export function toArray<T extends HKT>(FM: FoldMap<T>): <A>(kind: Kind<T, A>) => ReadonlyArray<A> {
  return <A>(kind: Kind<T, A>) =>
    pipe(
      kind,
      FM.foldMap(arrayIdentity)((a) => [a]),
    )
}

/* #endregion */

/* #region reverse */
export function reverse<T extends HKT10>(
  FMFE: FoldMap10<T> & FE.ForEach10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function reverse<T extends HKT9>(
  FMFE: FoldMap9<T> & FE.ForEach9<T>,
): <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function reverse<T extends HKT8>(
  FMFE: FoldMap8<T> & FE.ForEach8<T>,
): <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, A>

export function reverse<T extends HKT7>(
  FMFE: FoldMap7<T> & FE.ForEach7<T>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, A>

export function reverse<T extends HKT6>(
  FMFE: FoldMap6<T> & FE.ForEach6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, A>

export function reverse<T extends HKT5>(
  FMFE: FoldMap5<T> & FE.ForEach5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, A>

export function reverse<T extends HKT4, E>(
  FMFE: FoldMap4EC<T, E> & FE.ForEach4EC<T, E>,
): <S, R, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT4, R, E>(
  FMFE: FoldMap4REC<T, R, E> & FE.ForEach4REC<T, R, E>,
): <S, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT4, S, E>(
  FMFE: FoldMap4SEC<T, S, E> & FE.ForEach4SEC<T, S, E>,
): <R, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT4, R>(
  FMFE: FoldMap4RC<T, R> & FE.ForEach4RC<T, R>,
): <S, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT4, S, R>(
  FMFE: FoldMap4SRC<T, S, R> & FE.ForEach4SRC<T, S, R>,
): <E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT4, S>(
  FMFE: FoldMap4SC<T, S> & FE.ForEach4SC<T, S>,
): <R, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT4, S, R, E>(
  FMFE: FoldMap4SREC<T, S, R, E> & FE.ForEach4SREC<T, S, R, E>,
): <A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT4>(
  FMFE: FoldMap4<T> & FE.ForEach4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT3, E>(
  FMFE: FoldMap3EC<T, E> & FE.ForEach3EC<T, E>,
): <R, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function reverse<T extends HKT3, R, E>(
  FMFE: FoldMap3REC<T, R, E> & FE.ForEach3REC<T, R, E>,
): <A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function reverse<T extends HKT3, R>(
  FMFE: FoldMap3RC<T, R> & FE.ForEach3RC<T, R>,
): <E, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function reverse<T extends HKT3>(
  FMFE: FoldMap3<T> & FE.ForEach3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function reverse<T extends HKT2, E>(
  FMFE: FoldMap2EC<T, E> & FE.ForEach2EC<T, E>,
): <A>(kind: Kind2<T, E, A>) => Kind2<T, E, A>

export function reverse<T extends HKT2>(
  FMFE: FoldMap2<T> & FE.ForEach2<T>,
): <E, A>(kind: Kind2<T, E, A>) => Kind2<T, E, A>

export function reverse<T extends HKT>(
  FMFE: FoldMap1<T> & FE.ForEach1<T>,
): <A>(kind: Kind<T, A>) => Kind<T, A>

export function reverse<T extends HKT>(
  FMFE: FoldMap<T> & FE.ForEach<T>,
): <A>(kind: Kind<T, A>) => Kind<T, A>

export function reverse<T extends HKT>(
  FM: FoldMap<T> & FE.ForEach<T>,
): <A>(kind: Kind<T, A>) => Kind<T, A> {
  const reduce_ = reduce(FM)
  const mapAccum = FE.mapAccum(FM)

  return <A>(kind: Kind<T, A>): Kind<T, A> => {
    const reversed = pipe(
      kind,
      reduce_([] as A[], (as, a) => [a, ...as]),
    )

    return pipe(
      kind,
      mapAccum(reversed, (s) => [s.slice(1), s[0]]),
      snd,
    )
  }
}

/* #endregion */

/* #region reduceRight */
export function reduceRight<T extends HKT10>(
  FMFE: FoldMap10<T> & FE.ForEach10<T>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT9>(
  FMFE: FoldMap9<T> & FE.ForEach9<T>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT8>(
  FMFE: FoldMap8<T> & FE.ForEach8<T>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT7>(
  FMFE: FoldMap7<T> & FE.ForEach7<T>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT6>(
  FMFE: FoldMap6<T> & FE.ForEach6<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT5>(
  FMFE: FoldMap5<T> & FE.ForEach5<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B

export function reduceRight<T extends HKT4, E>(
  FMFE: FoldMap4EC<T, E> & FE.ForEach4EC<T, E>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S, R>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT4, R, E>(
  FMFE: FoldMap4REC<T, R, E> & FE.ForEach4REC<T, R, E>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT4, S, E>(
  FMFE: FoldMap4SEC<T, S, E> & FE.ForEach4SEC<T, S, E>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT4, R>(
  FMFE: FoldMap4RC<T, R> & FE.ForEach4RC<T, R>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT4, S, R>(
  FMFE: FoldMap4SRC<T, S, R> & FE.ForEach4SRC<T, S, R>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT4, S>(
  FMFE: FoldMap4SC<T, S> & FE.ForEach4SC<T, S>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT4, S, R, E>(
  FMFE: FoldMap4SREC<T, S, R, E> & FE.ForEach4SREC<T, S, R, E>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT4>(
  FMFE: FoldMap4<T> & FE.ForEach4<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT3, E>(
  FMFE: FoldMap3EC<T, E> & FE.ForEach3EC<T, E>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R>(kind: Kind3<T, R, E, A>) => B

export function reduceRight<T extends HKT3, R, E>(
  FMFE: FoldMap3REC<T, R, E> & FE.ForEach3REC<T, R, E>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind3<T, R, E, A>) => B

export function reduceRight<T extends HKT3, R>(
  FMFE: FoldMap3RC<T, R> & FE.ForEach3RC<T, R>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind3<T, R, E, A>) => B

export function reduceRight<T extends HKT3>(
  FMFE: FoldMap3<T> & FE.ForEach3<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B

export function reduceRight<T extends HKT2, E>(
  FMFE: FoldMap2EC<T, E> & FE.ForEach2EC<T, E>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind2<T, E, A>) => B

export function reduceRight<T extends HKT2>(
  FMFE: FoldMap2<T> & FE.ForEach2<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind2<T, E, A>) => B

export function reduceRight<T extends HKT>(
  FMFE: FoldMap1<T> & FE.ForEach1<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B

export function reduceRight<T extends HKT>(
  FMFE: FoldMap<T> & FE.ForEach<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B

export function reduceRight<T extends HKT>(
  FM: FoldMap<T> & FE.ForEach<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B {
  const reduce_ = reduce(FM)
  const reverse_ = reverse(FM)

  return <B, A>(b: B, f: (a: A, b: B) => B) =>
    flow(
      reverse_,
      reduce_(b, (b, a: A) => f(a, b)),
    )
}

/* #endregion */

/* #region every */
export function every<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => boolean

export function every<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => boolean

export function every<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => boolean

export function every<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => boolean

export function every<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(predicate: (a: A) => boolean) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => boolean

export function every<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(predicate: (a: A) => boolean) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => boolean

export function every<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(predicate: (a: A) => boolean) => <S, R>(kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(predicate: (a: A) => boolean) => <S>(kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(predicate: (a: A) => boolean) => <R>(kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(predicate: (a: A) => boolean) => <S, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(predicate: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(predicate: (a: A) => boolean) => <R>(kind: Kind3<T, R, E, A>) => boolean

export function every<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind3<T, R, E, A>) => boolean

export function every<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind3<T, R, E, A>) => boolean

export function every<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => boolean

export function every<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind2<T, E, A>) => boolean

export function every<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind2<T, E, A>) => boolean

export function every<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => boolean

export function every<T extends HKT>(
  FM: FoldMap<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => boolean

export function every<T extends HKT>(
  FM: FoldMap<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => boolean {
  return FM.foldMap(B.All)
}

/* #endregion */

/* #region some */
export function some<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => boolean

export function some<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => boolean

export function some<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => boolean

export function some<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => boolean

export function some<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(predicate: (a: A) => boolean) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => boolean

export function some<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(predicate: (a: A) => boolean) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => boolean

export function some<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(predicate: (a: A) => boolean) => <S, R>(kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(predicate: (a: A) => boolean) => <S>(kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(predicate: (a: A) => boolean) => <R>(kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(predicate: (a: A) => boolean) => <S, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(predicate: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(predicate: (a: A) => boolean) => <R>(kind: Kind3<T, R, E, A>) => boolean

export function some<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind3<T, R, E, A>) => boolean

export function some<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind3<T, R, E, A>) => boolean

export function some<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => boolean

export function some<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind2<T, E, A>) => boolean

export function some<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind2<T, E, A>) => boolean

export function some<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => boolean

export function some<T extends HKT>(
  FM: FoldMap<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => boolean

export function some<T extends HKT>(
  FM: FoldMap<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => boolean {
  return FM.foldMap(B.Any)
}

/* #endregion */

/* #region groupBy */
const emptyMap = new Map()

const concatMaps = <K, A>(
  f: ReadonlyMap<K, NonEmptyArray<A>>,
  s: ReadonlyMap<K, NonEmptyArray<A>>,
) => {
  const map = new Map<K, NonEmptyArray<A>>(f)

  for (const [k, v] of s) {
    if (map.has(k)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      map.set(k, [...map.get(k)!, ...v])
    } else {
      map.set(k, v)
    }
  }

  return map
}

export function groupBy<T extends HKT10>(
  FM: FoldMap10<T>,
): <K, A>(
  f: (a: A) => K,
) => <Z, Y, X, W, V, U, S, R, E>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT9>(
  FM: FoldMap9<T>,
): <K, A>(
  f: (a: A) => K,
) => <Y, X, W, V, U, S, R, E>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT8>(
  FM: FoldMap8<T>,
): <K, A>(
  f: (a: A) => K,
) => <X, W, V, U, S, R, E>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT7>(
  FM: FoldMap7<T>,
): <K, A>(
  f: (a: A) => K,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT6>(
  FM: FoldMap6<T>,
): <K, A>(
  f: (a: A) => K,
) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT5>(
  FM: FoldMap5<T>,
): <K, A>(
  f: (a: A) => K,
) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <K, A>(f: (a: A) => K) => <S, R>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <K, A>(f: (a: A) => K) => <S>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <K, A>(f: (a: A) => K) => <R>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <K, A>(f: (a: A) => K) => <S, E>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <K, A>(f: (a: A) => K) => <E>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <K, A>(f: (a: A) => K) => <R, E>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <K, A>(f: (a: A) => K) => (kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT4>(
  FM: FoldMap4<T>,
): <K, A>(
  f: (a: A) => K,
) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <K, A>(f: (a: A) => K) => <R>(kind: Kind3<T, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <K, A>(f: (a: A) => K) => (kind: Kind3<T, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <K, A>(f: (a: A) => K) => <E>(kind: Kind3<T, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT3>(
  FM: FoldMap3<T>,
): <K, A>(f: (a: A) => K) => <R, E>(kind: Kind3<T, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <K, A>(f: (a: A) => K) => (kind: Kind2<T, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT2>(
  FM: FoldMap2<T>,
): <K, A>(f: (a: A) => K) => <E>(kind: Kind2<T, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT>(
  FM: FoldMap1<T>,
): <K, A>(f: (a: A) => K) => (kind: Kind<T, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT>(
  FM: FoldMap<T>,
): <K, A>(f: (a: A) => K) => (kind: Kind<T, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT>(
  FM: FoldMap<T>,
): <K, A>(f: (a: A) => K) => (kind: Kind<T, A>) => ReadonlyMap<K, NonEmptyArray<A>> {
  return <K, A>(f: (a: A) => K) => {
    const foldMap = FM.foldMap<ReadonlyMap<K, NonEmptyArray<A>>>({
      id: emptyMap,
      concat: concatMaps,
    })

    return foldMap((a: A) => new Map([[f(a), [a]]]))
  }
}

/* #endregion */

/* #region isEmpty */
export function isEmpty<T extends HKT10>(
  FM: FoldMap10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => boolean

export function isEmpty<T extends HKT9>(
  FM: FoldMap9<T>,
): <Y, X, W, V, U, S, R, E, A>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => boolean

export function isEmpty<T extends HKT8>(
  FM: FoldMap8<T>,
): <X, W, V, U, S, R, E, A>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => boolean

export function isEmpty<T extends HKT7>(
  FM: FoldMap7<T>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => boolean

export function isEmpty<T extends HKT6>(
  FM: FoldMap6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => boolean

export function isEmpty<T extends HKT5>(
  FM: FoldMap5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => boolean

export function isEmpty<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <S, R, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <S, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <R, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <S, E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <R, E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT4>(
  FM: FoldMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <R, A>(kind: Kind3<T, R, E, A>) => boolean

export function isEmpty<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(kind: Kind3<T, R, E, A>) => boolean

export function isEmpty<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <E, A>(kind: Kind3<T, R, E, A>) => boolean

export function isEmpty<T extends HKT3>(
  FM: FoldMap3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => boolean

export function isEmpty<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(kind: Kind2<T, E, A>) => boolean

export function isEmpty<T extends HKT2>(FM: FoldMap2<T>): <E, A>(kind: Kind2<T, E, A>) => boolean

export function isEmpty<T extends HKT>(FM: FoldMap1<T>): <A>(kind: Kind<T, A>) => boolean

export function isEmpty<T extends HKT>(FM: FoldMap<T>): <A>(kind: Kind<T, A>) => boolean

export function isEmpty<T extends HKT>(FM: FoldMap<T>): <A>(kind: Kind<T, A>) => boolean {
  return FM.foldMap(B.All)(constFalse)
}
/* #endregion */

/* #region isNonEmpty */
export function isNonEmpty<T extends HKT10>(
  FM: FoldMap10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT9>(
  FM: FoldMap9<T>,
): <Y, X, W, V, U, S, R, E, A>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT8>(
  FM: FoldMap8<T>,
): <X, W, V, U, S, R, E, A>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT7>(
  FM: FoldMap7<T>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT6>(
  FM: FoldMap6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT5>(
  FM: FoldMap5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <S, R, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <S, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <R, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <S, E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <R, E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT4>(
  FM: FoldMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <R, A>(kind: Kind3<T, R, E, A>) => boolean

export function isNonEmpty<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(kind: Kind3<T, R, E, A>) => boolean

export function isNonEmpty<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <E, A>(kind: Kind3<T, R, E, A>) => boolean

export function isNonEmpty<T extends HKT3>(
  FM: FoldMap3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => boolean

export function isNonEmpty<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(kind: Kind2<T, E, A>) => boolean

export function isNonEmpty<T extends HKT2>(FM: FoldMap2<T>): <E, A>(kind: Kind2<T, E, A>) => boolean

export function isNonEmpty<T extends HKT>(FM: FoldMap1<T>): <A>(kind: Kind<T, A>) => boolean

export function isNonEmpty<T extends HKT>(FM: FoldMap<T>): <A>(kind: Kind<T, A>) => boolean

export function isNonEmpty<T extends HKT>(FM: FoldMap<T>): <A>(kind: Kind<T, A>) => boolean {
  return not(isEmpty(FM))
}

/* #endregion */

/* #region size */
export function size<T extends HKT10>(
  FM: FoldMap10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => number

export function size<T extends HKT9>(
  FM: FoldMap9<T>,
): <Y, X, W, V, U, S, R, E, A>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => number

export function size<T extends HKT8>(
  FM: FoldMap8<T>,
): <X, W, V, U, S, R, E, A>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => number

export function size<T extends HKT7>(
  FM: FoldMap7<T>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => number

export function size<T extends HKT6>(
  FM: FoldMap6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => number

export function size<T extends HKT5>(
  FM: FoldMap5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => number

export function size<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <S, R, A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <S, A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <R, A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <S, E, A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <E, A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <R, E, A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT4>(
  FM: FoldMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <R, A>(kind: Kind3<T, R, E, A>) => number

export function size<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(kind: Kind3<T, R, E, A>) => number

export function size<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <E, A>(kind: Kind3<T, R, E, A>) => number

export function size<T extends HKT3>(FM: FoldMap3<T>): <R, E, A>(kind: Kind3<T, R, E, A>) => number

export function size<T extends HKT2, E>(FM: FoldMap2EC<T, E>): <A>(kind: Kind2<T, E, A>) => number

export function size<T extends HKT2>(FM: FoldMap2<T>): <E, A>(kind: Kind2<T, E, A>) => number

export function size<T extends HKT>(FM: FoldMap1<T>): <A>(kind: Kind<T, A>) => number

export function size<T extends HKT>(FM: FoldMap<T>): <A>(kind: Kind<T, A>) => number

export function size<T extends HKT>(FM: FoldMap<T>): <A>(kind: Kind<T, A>) => number {
  return FM.foldMap(N.IdentitySum)(() => 1)
}

/* #endregion */

/* #region reduceAssociative */
export function reduceAssociative<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  A: A.Associative<A>,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  A: A.Associative<A>,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  A: A.Associative<A>,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(A: A.Associative<A>) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(A: A.Associative<A>) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(A: A.Associative<A>) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(A: A.Associative<A>) => <S, R>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(A: A.Associative<A>) => <S>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(A: A.Associative<A>) => <R>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(A: A.Associative<A>) => <S, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(A: A.Associative<A>) => <E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(A: A.Associative<A>) => <R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(A: A.Associative<A>) => (kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(A: A.Associative<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(A: A.Associative<A>) => <R>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(A: A.Associative<A>) => (kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(A: A.Associative<A>) => <E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(A: A.Associative<A>) => <R, E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(A: A.Associative<A>) => (kind: Kind2<T, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(A: A.Associative<A>) => <E>(kind: Kind2<T, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(A: A.Associative<A>) => (kind: Kind<T, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT>(
  FM: FoldMap<T>,
): <A>(A: A.Associative<A>) => (kind: Kind<T, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT>(
  FM: FoldMap<T>,
): <A>(A: A.Associative<A>) => (kind: Kind<T, A>) => M.Maybe<A> {
  return <A>(A: A.Associative<A>) => FM.foldMap(makeAssociativeIdentity(A))((a: A) => Just(a))
}
/* #endregion */

/* #region reduceCommutative */
export function reduceCommutative<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  C: Commutative<A>,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  C: Commutative<A>,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  C: Commutative<A>,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(C: Commutative<A>) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(C: Commutative<A>) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(C: Commutative<A>) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(C: Commutative<A>) => <S, R>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(C: Commutative<A>) => <S>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(C: Commutative<A>) => <R>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(C: Commutative<A>) => <S, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(C: Commutative<A>) => <E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(C: Commutative<A>) => <R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(C: Commutative<A>) => (kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(C: Commutative<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(C: Commutative<A>) => <R>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(C: Commutative<A>) => (kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(C: Commutative<A>) => <E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(C: Commutative<A>) => <R, E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(C: Commutative<A>) => (kind: Kind2<T, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(C: Commutative<A>) => <E>(kind: Kind2<T, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(C: Commutative<A>) => (kind: Kind<T, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT>(
  FM: FoldMap<T>,
): <A>(C: Commutative<A>) => (kind: Kind<T, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT>(
  FM: FoldMap<T>,
): <A>(C: Commutative<A>) => (kind: Kind<T, A>) => M.Maybe<A> {
  return reduceAssociative(FM)
}

/* #endregion */

/* #region intercalate */
export function intercalate<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  I: Identity<A>,
) => (a: A) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => A

export function intercalate<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  I: Identity<A>,
) => (a: A) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => A

export function intercalate<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  I: Identity<A>,
) => (a: A) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => A

export function intercalate<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(I: Identity<A>) => (a: A) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => A

export function intercalate<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(I: Identity<A>) => (a: A) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => A

export function intercalate<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(I: Identity<A>) => (a: A) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => A

export function intercalate<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(I: Identity<A>) => (a: A) => <S, R>(kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(I: Identity<A>) => (a: A) => <S>(kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(I: Identity<A>) => (a: A) => <R>(kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(I: Identity<A>) => (a: A) => <S, E>(kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(I: Identity<A>) => (a: A) => <E>(kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(I: Identity<A>) => (a: A) => <R, E>(kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(I: Identity<A>) => (a: A) => (kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(I: Identity<A>) => (a: A) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(I: Identity<A>) => (a: A) => <R>(kind: Kind3<T, R, E, A>) => A

export function intercalate<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(I: Identity<A>) => (a: A) => (kind: Kind3<T, R, E, A>) => A

export function intercalate<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(I: Identity<A>) => (a: A) => <E>(kind: Kind3<T, R, E, A>) => A

export function intercalate<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(I: Identity<A>) => (a: A) => <R, E>(kind: Kind3<T, R, E, A>) => A

export function intercalate<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(I: Identity<A>) => (a: A) => (kind: Kind2<T, E, A>) => A

export function intercalate<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(I: Identity<A>) => (a: A) => <E>(kind: Kind2<T, E, A>) => A

export function intercalate<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(I: Identity<A>) => (a: A) => (kind: Kind<T, A>) => A

export function intercalate<T extends HKT>(
  FM: FoldMap<T>,
): <A>(I: Identity<A>) => (a: A) => (kind: Kind<T, A>) => A

export function intercalate<T extends HKT>(
  FM: FoldMap<T>,
): <A>(I: Identity<A>) => (a: A) => (kind: Kind<T, A>) => A {
  const reduceAssociative_ = reduceAssociative(FM)

  return <A>(I: Identity<A>) =>
    (a: A) =>
      flow(reduceAssociative_(A.intercalate(a)(I)), (x) => (x.tag === 'Just' ? x.value : I.id))
}

/* #endregion */

/* #region reduceIdentity */
export function reduceIdentity<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  I: Identity<A>,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => A

export function reduceIdentity<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(I: Identity<A>) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => A

export function reduceIdentity<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(I: Identity<A>) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => A

export function reduceIdentity<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(I: Identity<A>) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => A

export function reduceIdentity<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(I: Identity<A>) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => A

export function reduceIdentity<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(I: Identity<A>) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => A

export function reduceIdentity<T extends HKT4, E>(
  FM: FoldMap4EC<T, E>,
): <A>(I: Identity<A>) => <S, R>(kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): <A>(I: Identity<A>) => <S>(kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): <A>(I: Identity<A>) => <R>(kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT4, R>(
  FM: FoldMap4RC<T, R>,
): <A>(I: Identity<A>) => <S, E>(kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): <A>(I: Identity<A>) => <E>(kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT4, S>(
  FM: FoldMap4SC<T, S>,
): <A>(I: Identity<A>) => <R, E>(kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): <A>(I: Identity<A>) => (kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(I: Identity<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT3, E>(
  FM: FoldMap3EC<T, E>,
): <A>(I: Identity<A>) => <R>(kind: Kind3<T, R, E, A>) => A

export function reduceIdentity<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): <A>(I: Identity<A>) => (kind: Kind3<T, R, E, A>) => A

export function reduceIdentity<T extends HKT3, R>(
  FM: FoldMap3RC<T, R>,
): <A>(I: Identity<A>) => <E>(kind: Kind3<T, R, E, A>) => A

export function reduceIdentity<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(I: Identity<A>) => <R, E>(kind: Kind3<T, R, E, A>) => A

export function reduceIdentity<T extends HKT2, E>(
  FM: FoldMap2EC<T, E>,
): <A>(I: Identity<A>) => (kind: Kind2<T, E, A>) => A

export function reduceIdentity<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(I: Identity<A>) => <E>(kind: Kind2<T, E, A>) => A

export function reduceIdentity<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(I: Identity<A>) => (kind: Kind<T, A>) => A

export function reduceIdentity<T extends HKT>(
  FM: FoldMap<T>,
): <A>(I: Identity<A>) => (kind: Kind<T, A>) => A

export function reduceIdentity<T extends HKT>(
  FM: FoldMap<T>,
): <A>(I: Identity<A>) => (kind: Kind<T, A>) => A {
  return (I) => flow(reduceAssociative(FM)(I), (x) => (x.tag === 'Just' ? x.value : I.id))
}

/* #endregion */

/* #region partitionMap */
export function partitionMap<T extends HKT10>(
  FMIETC: FoldMap10<T> & IdentityEither10<T> & Top10<T> & Covariant10<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <Z, Y, X, W, V, U, S, R, E>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => readonly [Kind10<T, Z, Y, X, W, V, U, S, R, E, B>, Kind10<T, Z, Y, X, W, V, U, S, R, E, C>]

export function partitionMap<T extends HKT9>(
  FMIETC: FoldMap9<T> & IdentityEither9<T> & Top9<T> & Covariant9<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <Y, X, W, V, U, S, R, E>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => readonly [Kind9<T, Y, X, W, V, U, S, R, E, B>, Kind9<T, Y, X, W, V, U, S, R, E, C>]

export function partitionMap<T extends HKT8>(
  FMIETC: FoldMap8<T> & IdentityEither8<T> & Top8<T> & Covariant8<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <X, W, V, U, S, R, E>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => readonly [Kind8<T, X, W, V, U, S, R, E, B>, Kind8<T, X, W, V, U, S, R, E, C>]

export function partitionMap<T extends HKT7>(
  FMIETC: FoldMap7<T> & IdentityEither7<T> & Top7<T> & Covariant7<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <W, V, U, S, R, E>(
  kind: Kind7<T, W, V, U, S, R, E, A>,
) => readonly [Kind7<T, W, V, U, S, R, E, B>, Kind7<T, W, V, U, S, R, E, C>]

export function partitionMap<T extends HKT6>(
  FMIETC: FoldMap6<T> & IdentityEither6<T> & Top6<T> & Covariant6<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <V, U, S, R, E>(
  kind: Kind6<T, V, U, S, R, E, A>,
) => readonly [Kind6<T, V, U, S, R, E, B>, Kind6<T, V, U, S, R, E, C>]

export function partitionMap<T extends HKT5>(
  FMIETC: FoldMap5<T> & IdentityEither5<T> & Top5<T> & Covariant5<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <U, S, R, E>(
  kind: Kind5<T, U, S, R, E, A>,
) => readonly [Kind5<T, U, S, R, E, B>, Kind5<T, U, S, R, E, C>]

export function partitionMap<T extends HKT4, E>(
  FMIETC: FoldMap4EC<T, E> & IdentityEither4EC<T, E> & Top4EC<T, E> & Covariant4EC<T, E>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <S, R>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT4, R, E>(
  FMIETC: FoldMap4REC<T, R, E> &
    IdentityEither4REC<T, R, E> &
    Top4REC<T, R, E> &
    Covariant4REC<T, R, E>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <S>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT4, S, E>(
  FMIETC: FoldMap4SEC<T, S, E> &
    IdentityEither4SEC<T, S, E> &
    Top4SEC<T, S, E> &
    Covariant4SEC<T, S, E>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <R>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT4, R>(
  FMIETC: FoldMap4RC<T, R> & IdentityEither4RC<T, R> & Top4RC<T, R> & Covariant4RC<T, R>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <S, E>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT4, S, R>(
  FMIETC: FoldMap4SRC<T, S, R> &
    IdentityEither4SRC<T, S, R> &
    Top4SRC<T, S, R> &
    Covariant4SRC<T, S, R>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <E>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT4, S>(
  FMIETC: FoldMap4SC<T, S> & IdentityEither4SC<T, S> & Top4SC<T, S> & Covariant4SC<T, S>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <R, E>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT4, S, R, E>(
  FMIETC: FoldMap4SREC<T, S, R, E> &
    IdentityEither4SREC<T, S, R, E> &
    Top4SREC<T, S, R, E> &
    Covariant4SREC<T, S, R, E>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => (kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT4>(
  FMIETC: FoldMap4<T> & IdentityEither4<T> & Top4<T> & Covariant4<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT3, E>(
  FMIETC: FoldMap3EC<T, E> & IdentityEither3EC<T, E> & Top3EC<T, E> & Covariant3EC<T, E>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <R>(kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]

export function partitionMap<T extends HKT3, R, E>(
  FMIETC: FoldMap3REC<T, R, E> &
    IdentityEither3REC<T, R, E> &
    Top3REC<T, R, E> &
    Covariant3REC<T, R, E>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => (kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]

export function partitionMap<T extends HKT3, R>(
  FMIETC: FoldMap3RC<T, R> & IdentityEither3RC<T, R> & Top3RC<T, R> & Covariant3RC<T, R>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <E>(kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]

export function partitionMap<T extends HKT3>(
  FMIETC: FoldMap3<T> & IdentityEither3<T> & Top3<T> & Covariant3<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <R, E>(kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]

export function partitionMap<T extends HKT2, E>(
  FMIETC: FoldMap2EC<T, E> & IdentityEither2EC<T, E> & Top2EC<T, E> & Covariant2EC<T, E>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => (kind: Kind2<T, E, A>) => readonly [Kind2<T, E, B>, Kind2<T, E, C>]

export function partitionMap<T extends HKT2>(
  FMIETC: FoldMap2<T> & IdentityEither2<T> & Top2<T> & Covariant2<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <E>(kind: Kind2<T, E, A>) => readonly [Kind2<T, E, B>, Kind2<T, E, C>]

export function partitionMap<T extends HKT>(
  FMIETC: FoldMap1<T> & IdentityEither1<T> & Top1<T> & Covariant1<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => (kind: Kind<T, A>) => readonly [Kind<T, B>, Kind<T, C>]

export function partitionMap<T extends HKT>(
  FMIETC: FoldMap<T> & IdentityEither<T> & Top<T> & Covariant<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => (kind: Kind<T, A>) => readonly [Kind<T, B>, Kind<T, C>]

export function partitionMap<T extends HKT>(
  F: FoldMap<T> & IdentityEither<T> & Top<T> & Covariant<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => (kind: Kind<T, A>) => readonly [Kind<T, B>, Kind<T, C>] {
  const fromValue = makeFromValue(F)
  const bottom = F.bottom
  const makeEitherIdentity = fromIdentityEitherCovariant(F)

  return <A, B, C>(f: (a: A) => Either.Either<B, C>) =>
    F.foldMap<readonly [Kind<T, B>, Kind<T, C>]>(
      makeIdentity(makeEitherIdentity<B>(), makeEitherIdentity<C>()),
    )(
      flow(f, (e) =>
        e.tag === 'Left' ? [fromValue(e.left), bottom] : [bottom, fromValue(e.right)],
      ),
    )
}

/* #endregion */

/* #region addIndex */

export function addIndex<T extends HKT10>(FM: FoldMap10<T>): FoldMapWithIndex10<T, number>

export function addIndex<T extends HKT9>(FM: FoldMap9<T>): FoldMapWithIndex9<T, number>

export function addIndex<T extends HKT8>(FM: FoldMap8<T>): FoldMapWithIndex8<T, number>

export function addIndex<T extends HKT7>(FM: FoldMap7<T>): FoldMapWithIndex7<T, number>

export function addIndex<T extends HKT6>(FM: FoldMap6<T>): FoldMapWithIndex6<T, number>

export function addIndex<T extends HKT5>(FM: FoldMap5<T>): FoldMapWithIndex5<T, number>

export function addIndex<T extends HKT4, E>(FM: FoldMap4EC<T, E>): FoldMapWithIndex4EC<T, number, E>

export function addIndex<T extends HKT4, R, E>(
  FM: FoldMap4REC<T, R, E>,
): FoldMapWithIndex4REC<T, number, R, E>

export function addIndex<T extends HKT4, S, E>(
  FM: FoldMap4SEC<T, S, E>,
): FoldMapWithIndex4SEC<T, number, S, E>

export function addIndex<T extends HKT4, R>(FM: FoldMap4RC<T, R>): FoldMapWithIndex4RC<T, number, R>

export function addIndex<T extends HKT4, S, R>(
  FM: FoldMap4SRC<T, S, R>,
): FoldMapWithIndex4SRC<T, number, S, R>

export function addIndex<T extends HKT4, S>(FM: FoldMap4SC<T, S>): FoldMapWithIndex4SC<T, number, S>

export function addIndex<T extends HKT4, S, R, E>(
  FM: FoldMap4SREC<T, S, R, E>,
): FoldMapWithIndex4SREC<T, number, S, R, E>

export function addIndex<T extends HKT4>(FM: FoldMap4<T>): FoldMapWithIndex4<T, number>

export function addIndex<T extends HKT3, E>(FM: FoldMap3EC<T, E>): FoldMapWithIndex3EC<T, number, E>

export function addIndex<T extends HKT3, R, E>(
  FM: FoldMap3REC<T, R, E>,
): FoldMapWithIndex3REC<T, number, R, E>

export function addIndex<T extends HKT3, R>(FM: FoldMap3RC<T, R>): FoldMapWithIndex3RC<T, number, R>

export function addIndex<T extends HKT3>(FM: FoldMap3<T>): FoldMapWithIndex3<T, number>

export function addIndex<T extends HKT2, E>(FM: FoldMap2EC<T, E>): FoldMapWithIndex2EC<T, number, E>

export function addIndex<T extends HKT2>(FM: FoldMap2<T>): FoldMapWithIndex2<T, number>

export function addIndex<T extends HKT>(FM: FoldMap1<T>): FoldMapWithIndex1<T, number>

export function addIndex<T extends HKT>(FM: FoldMap<T>): FoldMapWithIndex<T, number>

export function addIndex<T extends HKT>(FM: FoldMap<T>): FoldMapWithIndex<T, number> {
  return {
    foldMapWithIndex:
      <B>(ID: Identity<B>) =>
      <A>(f: (k: number, a: A) => B) => {
        const foldMap = FM.foldMap(makeStateIdentity<number, B>(ID))

        return flow(
          foldMap((a: A) => (n) => [n + 1, f(n, a)]),
          (f) => f(0),
          snd,
        )
      },
  }
}

/* #endregion */

/* #region foldMap */
export function foldMap<F extends HKT10, G extends HKT10>(
  F: FoldMap10<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
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
) => B

export function foldMap<F extends HKT9, G extends HKT10>(
  F: FoldMap9<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT10>(
  F: FoldMap8<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT10>(
  F: FoldMap7<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT6, G extends HKT10>(
  F: FoldMap6<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT5, G extends HKT10>(
  F: FoldMap5<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, E1, G extends HKT10>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT10>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT10>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, R1, G extends HKT10>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT10>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, G extends HKT10>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, G extends HKT10>(
  F: FoldMap4<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, E1, G extends HKT10>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT10>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, R1, G extends HKT10>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, G extends HKT10>(
  F: FoldMap3<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT2, E1, G extends HKT10>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT2, G extends HKT10>(
  F: FoldMap2<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT, G extends HKT10>(
  F: FoldMap1<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT, G extends HKT10>(
  F: FoldMap<F>,
  G: FoldMap10<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z2, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT9>(
  F: FoldMap10<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT9>(
  F: FoldMap9<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT9>(
  F: FoldMap8<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT9>(
  F: FoldMap7<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT6, G extends HKT9>(
  F: FoldMap6<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT5, G extends HKT9>(
  F: FoldMap5<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, E1, G extends HKT9>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT9>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT9>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, R1, G extends HKT9>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT9>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, G extends HKT9>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, G extends HKT9>(
  F: FoldMap4<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, E1, G extends HKT9>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT9>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, R1, G extends HKT9>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, G extends HKT9>(
  F: FoldMap3<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT2, E1, G extends HKT9>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT2, G extends HKT9>(
  F: FoldMap2<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT, G extends HKT9>(
  F: FoldMap1<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT, G extends HKT9>(
  F: FoldMap<F>,
  G: FoldMap9<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y2, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT8>(
  F: FoldMap10<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT8>(
  F: FoldMap9<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT8>(
  F: FoldMap8<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT8>(
  F: FoldMap7<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT6, G extends HKT8>(
  F: FoldMap6<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT5, G extends HKT8>(
  F: FoldMap5<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, E1, G extends HKT8>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT8>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT8>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, R1, G extends HKT8>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT8>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, G extends HKT8>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, G extends HKT8>(
  F: FoldMap4<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, E1, G extends HKT8>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT8>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, R1, G extends HKT8>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, G extends HKT8>(
  F: FoldMap3<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT2, E1, G extends HKT8>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT8>(
  F: FoldMap2<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, X2, W2, V2, U2, S2, R2, E2>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT, G extends HKT8>(
  F: FoldMap1<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT8>(
  F: FoldMap<F>,
  G: FoldMap8<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X2, W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT10, G extends HKT7>(
  F: FoldMap10<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT7>(
  F: FoldMap9<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT7>(
  F: FoldMap8<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT7>(
  F: FoldMap7<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT6, G extends HKT7>(
  F: FoldMap6<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT5, G extends HKT7>(
  F: FoldMap5<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, E1, G extends HKT7>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT7>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT7>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, R1, G extends HKT7>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT7>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, G extends HKT7>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, G extends HKT7>(
  F: FoldMap4<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, E1, G extends HKT7>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT7>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, G extends HKT7>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT7>(
  F: FoldMap3<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, W2, V2, U2, S2, R2, E2>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT2, E1, G extends HKT7>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT7>(
  F: FoldMap2<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, W2, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT7>(
  F: FoldMap1<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT7>(
  F: FoldMap<F>,
  G: FoldMap7<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W2, V2, U2, S2, R2, E2>(kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT10, G extends HKT6>(
  F: FoldMap10<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT6>(
  F: FoldMap9<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT6>(
  F: FoldMap8<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT6>(
  F: FoldMap7<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT6, G extends HKT6>(
  F: FoldMap6<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT5, G extends HKT6>(
  F: FoldMap5<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, E1, G extends HKT6>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT6>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT6>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, R1, G extends HKT6>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT6>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, G extends HKT6>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, G extends HKT6>(
  F: FoldMap4<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, E1, V2, U2, S2, R2, E2>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT3, E1, G extends HKT6>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT6>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, G extends HKT6>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT6>(
  F: FoldMap3<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, V2, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, E1, G extends HKT6>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT6>(
  F: FoldMap2<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, V2, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT6>(
  F: FoldMap1<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT6>(
  F: FoldMap<F>,
  G: FoldMap6<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V2, U2, S2, R2, E2>(kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT10, G extends HKT5>(
  F: FoldMap10<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT5>(
  F: FoldMap9<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT5>(
  F: FoldMap8<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT5>(
  F: FoldMap7<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT6, G extends HKT5>(
  F: FoldMap6<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT5, G extends HKT5>(
  F: FoldMap5<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, U2, S2, R2, E2>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT4, E1, G extends HKT5>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT5>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT5>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, R1, G extends HKT5>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT5>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, G extends HKT5>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, G extends HKT5>(
  F: FoldMap4<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, E1, U2, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, E1, G extends HKT5>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT5>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, G extends HKT5>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT5>(
  F: FoldMap3<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, U2, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, E1, G extends HKT5>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <U2, S2, R2, E2>(kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT5>(
  F: FoldMap2<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <E1, U2, S2, R2, E2>(kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT5>(
  F: FoldMap1<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <U2, S2, R2, E2>(kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT5>(
  F: FoldMap<F>,
  G: FoldMap5<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <U2, S2, R2, E2>(kind: Kind<F, Kind5<G, U2, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT10, G extends HKT4, E2>(
  F: FoldMap10<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT4, R2, E2>(
  F: FoldMap10<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT4, S2, E2>(
  F: FoldMap10<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT4, R2>(
  F: FoldMap10<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT4, S2, R2>(
  F: FoldMap10<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT4, S2>(
  F: FoldMap10<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: FoldMap10<F>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT4>(
  F: FoldMap10<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT4, E2>(
  F: FoldMap9<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT4, R2, E2>(
  F: FoldMap9<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT4, S2, E2>(
  F: FoldMap9<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT4, R2>(
  F: FoldMap9<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT4, S2, R2>(
  F: FoldMap9<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT4, S2>(
  F: FoldMap9<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: FoldMap9<F>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT4>(
  F: FoldMap9<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT4, E2>(
  F: FoldMap8<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT4, R2, E2>(
  F: FoldMap8<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT4, S2, E2>(
  F: FoldMap8<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT4, R2>(
  F: FoldMap8<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT4, S2, R2>(
  F: FoldMap8<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT4, S2>(
  F: FoldMap8<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: FoldMap8<F>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT4>(
  F: FoldMap8<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT4, E2>(
  F: FoldMap7<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, S2, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT4, R2, E2>(
  F: FoldMap7<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, S2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT4, S2, E2>(
  F: FoldMap7<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT4, R2>(
  F: FoldMap7<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, S2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT4, S2, R2>(
  F: FoldMap7<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT4, S2>(
  F: FoldMap7<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: FoldMap7<F>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT7, G extends HKT4>(
  F: FoldMap7<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT6, G extends HKT4, E2>(
  F: FoldMap6<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, S2, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT4, R2, E2>(
  F: FoldMap6<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, S2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT4, S2, E2>(
  F: FoldMap6<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT4, R2>(
  F: FoldMap6<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, S2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT4, S2, R2>(
  F: FoldMap6<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT4, S2>(
  F: FoldMap6<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: FoldMap6<F>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT4>(
  F: FoldMap6<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, S2, R2, E2>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>,
) => B

export function foldMap<F extends HKT5, G extends HKT4, E2>(
  F: FoldMap5<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, S2, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT4, R2, E2>(
  F: FoldMap5<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, S2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT4, S2, E2>(
  F: FoldMap5<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT4, R2>(
  F: FoldMap5<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, S2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT4, S2, R2>(
  F: FoldMap5<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT4, S2>(
  F: FoldMap5<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: FoldMap5<F>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT4>(
  F: FoldMap5<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, S2, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, E1, G extends HKT4, E2>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, S2, R2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, S2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, R2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, R1, G extends HKT4, R2>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, E1, S2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, G extends HKT4, S2>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => (kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT4, G extends HKT4>(
  F: FoldMap4<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, E1, S2, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT4, E2>(
  F: FoldMap3<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1, S2, R2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT4, R2, E2>(
  F: FoldMap3<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1, S2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT4, S2, E2>(
  F: FoldMap3<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1, R2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT4, R2>(
  F: FoldMap3<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1, S2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT4>(
  F: FoldMap3<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <R1, E1, S2, R2, E2>(kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT4, E2>(
  F: FoldMap2<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, S2, R2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT4, R2, E2>(
  F: FoldMap2<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, S2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT4, S2, E2>(
  F: FoldMap2<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, R2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT4, R2>(
  F: FoldMap2<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, S2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT4, S2, R2>(
  F: FoldMap2<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT4, S2>(
  F: FoldMap2<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, R2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT4>(
  F: FoldMap2<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, S2, R2, E2>(kind: Kind2<F, E1, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, E2>(
  F: FoldMap1<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, R2, E2>(
  F: FoldMap1<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <S2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, S2, E2>(
  F: FoldMap1<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, R2>(
  F: FoldMap1<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, S2, R2>(
  F: FoldMap1<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, S2>(
  F: FoldMap1<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: FoldMap1<F>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4>(
  F: FoldMap1<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, E2>(
  F: FoldMap<F>,
  G: FoldMap4EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S2, R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, R2, E2>(
  F: FoldMap<F>,
  G: FoldMap4REC<G, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <S2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, S2, E2>(
  F: FoldMap<F>,
  G: FoldMap4SEC<G, S2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, R2>(
  F: FoldMap<F>,
  G: FoldMap4RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, S2, R2>(
  F: FoldMap<F>,
  G: FoldMap4SRC<G, S2, R2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, S2>(
  F: FoldMap<F>,
  G: FoldMap4SC<G, S2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: FoldMap<F>,
  G: FoldMap4SREC<G, S2, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT4>(
  F: FoldMap<F>,
  G: FoldMap4<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S2, R2, E2>(kind: Kind<F, Kind4<G, S2, R2, E2, A>>) => B

export function foldMap<F extends HKT10, G extends HKT3, E2>(
  F: FoldMap10<F>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT3, R2, E2>(
  F: FoldMap10<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT3, R2>(
  F: FoldMap10<F>,
  G: FoldMap3RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT3>(
  F: FoldMap10<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT3, E2>(
  F: FoldMap9<F>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT3, R2, E2>(
  F: FoldMap9<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT3, R2>(
  F: FoldMap9<F>,
  G: FoldMap3RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT3>(
  F: FoldMap9<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT3, E2>(
  F: FoldMap8<F>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT3, R2, E2>(
  F: FoldMap8<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT3, R2>(
  F: FoldMap8<F>,
  G: FoldMap3RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT3>(
  F: FoldMap8<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT3, E2>(
  F: FoldMap7<F>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, R2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT7, G extends HKT3, R2, E2>(
  F: FoldMap7<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT7, G extends HKT3, R2>(
  F: FoldMap7<F>,
  G: FoldMap3RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT7, G extends HKT3>(
  F: FoldMap7<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, R2, E2>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>,
) => B

export function foldMap<F extends HKT6, G extends HKT3, E2>(
  F: FoldMap6<F>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, R2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT3, R2, E2>(
  F: FoldMap6<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT3, R2>(
  F: FoldMap6<F>,
  G: FoldMap3RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT3>(
  F: FoldMap6<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, R2, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT3, E2>(
  F: FoldMap5<F>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, R2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT3, R2, E2>(
  F: FoldMap5<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT3, R2>(
  F: FoldMap5<F>,
  G: FoldMap3RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT3>(
  F: FoldMap5<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, R2, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT4, E1, G extends HKT3>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, R1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT3>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT3>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT4, R1, G extends HKT3>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, R2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap3RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT4, G extends HKT3>(
  F: FoldMap4<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <S1, R1, E1, R2, E2>(kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT3, E1, G extends HKT3, E2>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, R2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT3, R1, G extends HKT3, R2>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap3RC<G, R2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, E2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT3>(
  F: FoldMap3<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1, R2, E2>(kind: Kind3<F, R1, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT3, E2>(
  F: FoldMap2<F>,
  G: FoldMap3EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, R2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT3, R2, E2>(
  F: FoldMap2<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT2, E1, G extends HKT3, R2>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap3RC<G, R2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT3>(
  F: FoldMap2<F>,
  G: FoldMap3<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, R2, E2>(kind: Kind2<F, E1, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT3, E2>(
  F: FoldMap1<F>,
  G: FoldMap3EC<G, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT3, R2, E2>(
  F: FoldMap1<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT3, R2>(
  F: FoldMap1<F>,
  G: FoldMap3RC<G, R2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT3>(
  F: FoldMap1<F>,
  G: FoldMap3<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT3, E2>(
  F: FoldMap<F>,
  G: FoldMap3EC<G, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT3, R2, E2>(
  F: FoldMap<F>,
  G: FoldMap3REC<G, R2, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT3, R2>(
  F: FoldMap<F>,
  G: FoldMap3RC<G, R2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT3>(
  F: FoldMap<F>,
  G: FoldMap3<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R2, E2>(kind: Kind<F, Kind3<G, R2, E2, A>>) => B

export function foldMap<F extends HKT10, G extends HKT2, E2>(
  F: FoldMap10<F>,
  G: FoldMap2EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function foldMap<F extends HKT10, G extends HKT2>(
  F: FoldMap10<F>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT2, E2>(
  F: FoldMap9<F>,
  G: FoldMap2EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT2>(
  F: FoldMap9<F>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT2, E2>(
  F: FoldMap8<F>,
  G: FoldMap2EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT8, G extends HKT2>(
  F: FoldMap8<F>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1, E2>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>,
) => B

export function foldMap<F extends HKT7, G extends HKT2, E2>(
  F: FoldMap7<F>,
  G: FoldMap2EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT7, G extends HKT2>(
  F: FoldMap7<F>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1, E2>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT2, E2>(
  F: FoldMap6<F>,
  G: FoldMap2EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT6, G extends HKT2>(
  F: FoldMap6<F>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1, E2>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT2, E2>(
  F: FoldMap5<F>,
  G: FoldMap2EC<G, E2>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT5, G extends HKT2>(
  F: FoldMap5<F>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <U1, S1, R1, E1, E2>(kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT4, E1, G extends HKT2>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, R1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT2>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT2>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT4, R1, G extends HKT2>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT2>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT4, S1, G extends HKT2>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap2EC<G, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT4, G extends HKT2>(
  F: FoldMap4<F>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, R1, E1, E2>(kind: Kind4<F, S1, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT3, E1, G extends HKT2>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT2>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap2<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT3, R1, G extends HKT2, E2>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap2EC<G, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT3, G extends HKT2>(
  F: FoldMap3<F>,
  G: FoldMap2<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1, E2>(kind: Kind3<F, R1, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT2, E1, G extends HKT2, E2>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap2EC<G, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind2<F, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT2, G extends HKT2>(
  F: FoldMap2<F>,
  G: FoldMap2<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1, E2>(kind: Kind2<F, E1, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT2, E2>(
  F: FoldMap1<F>,
  G: FoldMap2EC<G, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT2>(
  F: FoldMap1<F>,
  G: FoldMap2<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT2, E2>(
  F: FoldMap<F>,
  G: FoldMap2EC<G, E2>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT, G extends HKT2>(
  F: FoldMap<F>,
  G: FoldMap2<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E2>(kind: Kind<F, Kind2<G, E2, A>>) => B

export function foldMap<F extends HKT10, G extends HKT>(
  F: FoldMap10<F>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT>(
  F: FoldMap9<F>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT>(
  F: FoldMap8<F>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT7, G extends HKT>(
  F: FoldMap7<F>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT6, G extends HKT>(
  F: FoldMap6<F>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT5, G extends HKT>(
  F: FoldMap5<F>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, E1, G extends HKT>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <S1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, R1, G extends HKT>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, S1, G extends HKT>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, G extends HKT>(
  F: FoldMap4<F>,
  G: FoldMap1<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT3, E1, G extends HKT>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT3, R1, G extends HKT>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT3, G extends HKT>(
  F: FoldMap3<F>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT2, E1, G extends HKT>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind2<F, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT2, G extends HKT>(
  F: FoldMap2<F>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT, G extends HKT>(
  F: FoldMap1<F>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function foldMap<F extends HKT, G extends HKT>(
  F: FoldMap<F>,
  G: FoldMap1<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function foldMap<F extends HKT10, G extends HKT>(
  F: FoldMap10<F>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Z1, Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function foldMap<F extends HKT9, G extends HKT>(
  F: FoldMap9<F>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <Y1, X1, W1, V1, U1, S1, R1, E1>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>,
) => B

export function foldMap<F extends HKT8, G extends HKT>(
  F: FoldMap8<F>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <X1, W1, V1, U1, S1, R1, E1>(kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT7, G extends HKT>(
  F: FoldMap7<F>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <W1, V1, U1, S1, R1, E1>(kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT6, G extends HKT>(
  F: FoldMap6<F>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(
  f: (a: A) => B,
) => <V1, U1, S1, R1, E1>(kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT5, G extends HKT>(
  F: FoldMap5<F>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <U1, S1, R1, E1>(kind: Kind5<F, U1, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, E1, G extends HKT>(
  F: FoldMap4EC<F, E1>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, R1, E1, G extends HKT>(
  F: FoldMap4REC<F, R1, E1>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <S1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, S1, E1, G extends HKT>(
  F: FoldMap4SEC<F, S1, E1>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, R1, G extends HKT>(
  F: FoldMap4RC<F, R1>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, S1, R1, G extends HKT>(
  F: FoldMap4SRC<F, S1, R1>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, S1, G extends HKT>(
  F: FoldMap4SC<F, S1>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: FoldMap4SREC<F, S1, R1, E1>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT4, G extends HKT>(
  F: FoldMap4<F>,
  G: FoldMap<G>,
): <B>(
  I: Identity<B>,
) => <A>(f: (a: A) => B) => <S1, R1, E1>(kind: Kind4<F, S1, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT3, E1, G extends HKT>(
  F: FoldMap3EC<F, E1>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT3, R1, E1, G extends HKT>(
  F: FoldMap3REC<F, R1, E1>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT3, R1, G extends HKT>(
  F: FoldMap3RC<F, R1>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT3, G extends HKT>(
  F: FoldMap3<F>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <R1, E1>(kind: Kind3<F, R1, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT2, E1, G extends HKT>(
  F: FoldMap2EC<F, E1>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind2<F, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT2, G extends HKT>(
  F: FoldMap2<F>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => <E1>(kind: Kind2<F, E1, Kind<G, A>>) => B

export function foldMap<F extends HKT, G extends HKT>(
  F: FoldMap1<F>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function foldMap<F extends HKT, G extends HKT>(
  F: FoldMap<F>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B

export function foldMap<F extends HKT, G extends HKT>(
  F: FoldMap<F>,
  G: FoldMap<G>,
): <B>(I: Identity<B>) => <A>(f: (a: A) => B) => (kind: Kind<F, Kind<G, A>>) => B {
  return <B>(I: Identity<B>) =>
    <A>(f: (a: A) => B) =>
      F.foldMap(I)(G.foldMap(I)(f))
}
/* #endregion */
