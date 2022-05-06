// eslint-disable-next-line import/no-cycle
import * as Either from '../Either'
// eslint-disable-next-line import/no-cycle
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
// eslint-disable-next-line import/no-cycle
import * as M from '../Maybe'
import type { NonEmptyArray } from '../NonEmptyArray'
import { not } from '../Predicate'
import { makeIdentity, snd } from '../Tuple'
import * as B from '../boolean'
import { makeStateIdentity } from '../common'
import { constFalse, flow, pipe } from '../function'
import * as N from '../number'

import * as A from './Associative'
import { Commutative } from './Commutative'
import {
  Covariant,
  Covariant1,
  Covariant10,
  Covariant2,
  Covariant3,
  Covariant4,
  Covariant5,
  Covariant6,
  Covariant7,
  Covariant8,
  Covariant9,
} from './Covariant'
import { Eq } from './Eq'
import {
  FoldMapWithIndex,
  FoldMapWithIndex1,
  FoldMapWithIndex10,
  FoldMapWithIndex2,
  FoldMapWithIndex3,
  FoldMapWithIndex4,
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
  IdentityEither3,
  IdentityEither4,
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
  Top3,
  Top4,
  Top5,
  Top6,
  Top7,
  Top8,
  Top9,
  makeFromValue,
} from './Top'

/* #region Typeclass */
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

export function foldLeft<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(I: Identity<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => A

export function foldLeft<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(I: Identity<A>) => <R, E>(kind: Kind3<T, R, E, A>) => A

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

export function exists<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(f: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function exists<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(f: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => boolean

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

export function contains<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(E: Eq<A>) => (a: A) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function contains<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(E: Eq<A>) => (a: A) => <R, E>(kind: Kind3<T, R, E, A>) => boolean

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

export function count<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(f: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => number

export function count<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(f: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => number

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

export function find<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(predicate: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function find<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

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
  const foldMap = FM.foldMap({ ...M.makeFirstAssociative<any>(), id: M.Nothing })

  return <A>(predicate: (a: A) => boolean) =>
    foldMap((a: A) => (predicate(a) ? M.Just(a) : M.Nothing))
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

export function reduce<T extends HKT4>(
  FM: FoldMap4<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduce<T extends HKT3>(
  FM: FoldMap3<T>,
): <B, A>(seed: B, f: (b: B, a: A) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B

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

export function toArray<T extends HKT4>(
  FM: FoldMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => ReadonlyArray<A>

export function toArray<T extends HKT3>(
  FM: FoldMap3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => ReadonlyArray<A>

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
  FM: FoldMap10<T> & FE.ForEach10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function reverse<T extends HKT9>(
  FM: FoldMap9<T> & FE.ForEach9<T>,
): <Y, X, W, V, U, S, R, E, A>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function reverse<T extends HKT8>(
  FM: FoldMap8<T> & FE.ForEach8<T>,
): <X, W, V, U, S, R, E, A>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, A>

export function reverse<T extends HKT7>(
  FM: FoldMap7<T> & FE.ForEach7<T>,
): <W, V, U, S, R, E, A>(kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, A>

export function reverse<T extends HKT6>(
  FM: FoldMap6<T> & FE.ForEach6<T>,
): <V, U, S, R, E, A>(kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, A>

export function reverse<T extends HKT5>(
  FM: FoldMap5<T> & FE.ForEach5<T>,
): <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, A>

export function reverse<T extends HKT4>(
  FM: FoldMap4<T> & FE.ForEach4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, A>

export function reverse<T extends HKT3>(
  FM: FoldMap3<T> & FE.ForEach3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => Kind3<T, R, E, A>

export function reverse<T extends HKT2>(
  FM: FoldMap2<T> & FE.ForEach2<T>,
): <E, A>(kind: Kind2<T, E, A>) => Kind2<T, E, A>

export function reverse<T extends HKT>(
  FM: FoldMap1<T> & FE.ForEach1<T>,
): <A>(kind: Kind<T, A>) => Kind<T, A>

export function reverse<T extends HKT>(
  FM: FoldMap<T> & FE.ForEach<T>,
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
  FM: FoldMap10<T> & FE.ForEach10<T>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT9>(
  FM: FoldMap9<T> & FE.ForEach9<T>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT8>(
  FM: FoldMap8<T> & FE.ForEach8<T>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT7>(
  FM: FoldMap7<T> & FE.ForEach7<T>,
): <B, A>(
  b: B,
  f: (a: A, b: B) => B,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT6>(
  FM: FoldMap6<T> & FE.ForEach6<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => B

export function reduceRight<T extends HKT5>(
  FM: FoldMap5<T> & FE.ForEach5<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => B

export function reduceRight<T extends HKT4>(
  FM: FoldMap4<T> & FE.ForEach4<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => B

export function reduceRight<T extends HKT3>(
  FM: FoldMap3<T> & FE.ForEach3<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <R, E>(kind: Kind3<T, R, E, A>) => B

export function reduceRight<T extends HKT2>(
  FM: FoldMap2<T> & FE.ForEach2<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => <E>(kind: Kind2<T, E, A>) => B

export function reduceRight<T extends HKT>(
  FM: FoldMap1<T> & FE.ForEach1<T>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (kind: Kind<T, A>) => B

export function reduceRight<T extends HKT>(
  FM: FoldMap<T> & FE.ForEach<T>,
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

export function every<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(predicate: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function every<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => boolean

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

export function some<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(predicate: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => boolean

export function some<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => boolean

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

export function groupBy<T extends HKT4>(
  FM: FoldMap4<T>,
): <K, A>(
  f: (a: A) => K,
) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

export function groupBy<T extends HKT3>(
  FM: FoldMap3<T>,
): <K, A>(f: (a: A) => K) => <R, E>(kind: Kind3<T, R, E, A>) => ReadonlyMap<K, NonEmptyArray<A>>

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

export function isEmpty<T extends HKT4>(
  FM: FoldMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isEmpty<T extends HKT3>(
  FM: FoldMap3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => boolean

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

export function isNonEmpty<T extends HKT4>(
  FM: FoldMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => boolean

export function isNonEmpty<T extends HKT3>(
  FM: FoldMap3<T>,
): <R, E, A>(kind: Kind3<T, R, E, A>) => boolean

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

export function size<T extends HKT4>(
  FM: FoldMap4<T>,
): <S, R, E, A>(kind: Kind4<T, S, R, E, A>) => number

export function size<T extends HKT3>(FM: FoldMap3<T>): <R, E, A>(kind: Kind3<T, R, E, A>) => number

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

export function reduceAssociative<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(A: A.Associative<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceAssociative<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(A: A.Associative<A>) => <R, E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

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
  return <A>(A: A.Associative<A>) => FM.foldMap(M.makeAssociativeIdentity(A))((a: A) => M.Just(a))
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

export function reduceCommutative<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(C: Commutative<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => M.Maybe<A>

export function reduceCommutative<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(C: Commutative<A>) => <R, E>(kind: Kind3<T, R, E, A>) => M.Maybe<A>

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

export function intercalate<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(I: Identity<A>) => (a: A) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => A

export function intercalate<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(I: Identity<A>) => (a: A) => <R, E>(kind: Kind3<T, R, E, A>) => A

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
      flow(
        reduceAssociative_(A.intercalate(a)(I)),
        M.getOrElse(() => I.id),
      )
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

export function reduceIdentity<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(I: Identity<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => A

export function reduceIdentity<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(I: Identity<A>) => <R, E>(kind: Kind3<T, R, E, A>) => A

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
  return (I) =>
    flow(
      reduceAssociative(FM)(I),
      M.getOrElse(() => I.id),
    )
}

/* #endregion */

/* #region partitionMap */
export function partitionMap<T extends HKT10>(
  F: FoldMap10<T> & IdentityEither10<T> & Top10<T> & Covariant10<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <Z, Y, X, W, V, U, S, R, E>(
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => readonly [Kind10<T, Z, Y, X, W, V, U, S, R, E, B>, Kind10<T, Z, Y, X, W, V, U, S, R, E, C>]

export function partitionMap<T extends HKT9>(
  F: FoldMap9<T> & IdentityEither9<T> & Top9<T> & Covariant9<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <Y, X, W, V, U, S, R, E>(
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => readonly [Kind9<T, Y, X, W, V, U, S, R, E, B>, Kind9<T, Y, X, W, V, U, S, R, E, C>]

export function partitionMap<T extends HKT8>(
  F: FoldMap8<T> & IdentityEither8<T> & Top8<T> & Covariant8<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <X, W, V, U, S, R, E>(
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => readonly [Kind8<T, X, W, V, U, S, R, E, B>, Kind8<T, X, W, V, U, S, R, E, C>]

export function partitionMap<T extends HKT7>(
  F: FoldMap7<T> & IdentityEither7<T> & Top7<T> & Covariant7<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <W, V, U, S, R, E>(
  kind: Kind7<T, W, V, U, S, R, E, A>,
) => readonly [Kind7<T, W, V, U, S, R, E, B>, Kind7<T, W, V, U, S, R, E, C>]

export function partitionMap<T extends HKT6>(
  F: FoldMap6<T> & IdentityEither6<T> & Top6<T> & Covariant6<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <V, U, S, R, E>(
  kind: Kind6<T, V, U, S, R, E, A>,
) => readonly [Kind6<T, V, U, S, R, E, B>, Kind6<T, V, U, S, R, E, C>]

export function partitionMap<T extends HKT5>(
  F: FoldMap5<T> & IdentityEither5<T> & Top5<T> & Covariant5<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <U, S, R, E>(
  kind: Kind5<T, U, S, R, E, A>,
) => readonly [Kind5<T, U, S, R, E, B>, Kind5<T, U, S, R, E, C>]

export function partitionMap<T extends HKT4>(
  F: FoldMap4<T> & IdentityEither4<T> & Top4<T> & Covariant4<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => readonly [Kind4<T, S, R, E, B>, Kind4<T, S, R, E, C>]

export function partitionMap<T extends HKT3>(
  F: FoldMap3<T> & IdentityEither3<T> & Top3<T> & Covariant3<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <R, E>(kind: Kind3<T, R, E, A>) => readonly [Kind3<T, R, E, B>, Kind3<T, R, E, C>]

export function partitionMap<T extends HKT2>(
  F: FoldMap2<T> & IdentityEither2<T> & Top2<T> & Covariant2<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => <E>(kind: Kind2<T, E, A>) => readonly [Kind2<T, E, B>, Kind2<T, E, C>]

export function partitionMap<T extends HKT>(
  F: FoldMap1<T> & IdentityEither1<T> & Top1<T> & Covariant1<T>,
): <A, B, C>(
  f: (a: A) => Either.Either<B, C>,
) => (kind: Kind<T, A>) => readonly [Kind<T, B>, Kind<T, C>]

export function partitionMap<T extends HKT>(
  F: FoldMap<T> & IdentityEither<T> & Top<T> & Covariant<T>,
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
      flow(
        f,
        Either.match(
          (b) => [fromValue(b), bottom],
          (c) => [bottom, fromValue(c)],
        ),
      ),
    )
}

/* #endregion */

export function addIndex<T extends HKT10>(FM: FoldMap10<T>): FoldMapWithIndex10<T, number>

export function addIndex<T extends HKT9>(FM: FoldMap9<T>): FoldMapWithIndex9<T, number>

export function addIndex<T extends HKT8>(FM: FoldMap8<T>): FoldMapWithIndex8<T, number>

export function addIndex<T extends HKT7>(FM: FoldMap7<T>): FoldMapWithIndex7<T, number>

export function addIndex<T extends HKT6>(FM: FoldMap6<T>): FoldMapWithIndex6<T, number>

export function addIndex<T extends HKT5>(FM: FoldMap5<T>): FoldMapWithIndex5<T, number>

export function addIndex<T extends HKT4>(FM: FoldMap4<T>): FoldMapWithIndex4<T, number>

export function addIndex<T extends HKT3>(FM: FoldMap3<T>): FoldMapWithIndex3<T, number>

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
