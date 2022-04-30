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
import { Just, Maybe, Nothing, makeFirstAssociative } from '../../data/Maybe'
import { NonEmptyArray } from '../../data/NonEmptyArray'
import { snd } from '../../data/Tuple'
import * as B from '../../data/boolean'
import * as N from '../../data/number'
import { run } from '../../effects/Eff'
import * as State from '../../effects/State'
import { not } from '../../function/Predicate'
import { constFalse, flow, pipe } from '../../function/function'
import { Second } from '../concrete/Associative'
import { Eq } from '../concrete/Eq'
import { Identity } from '../concrete/Identity'

import * as FE from './ForEach'

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

/* #region concat */
export function concat<T extends HKT10>(
  FM: FoldMap10<T>,
): <A>(
  I: Identity<A>,
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => A

export function concat<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(I: Identity<A>) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => A

export function concat<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(I: Identity<A>) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => A

export function concat<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(I: Identity<A>) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => A

export function concat<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(I: Identity<A>) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => A

export function concat<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(I: Identity<A>) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => A

export function concat<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(I: Identity<A>) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => A

export function concat<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(I: Identity<A>) => <R, E>(kind: Kind3<T, R, E, A>) => A

export function concat<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(I: Identity<A>) => <E>(kind: Kind2<T, E, A>) => A

export function concat<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(I: Identity<A>) => (kind: Kind<T, A>) => A

export function concat<T extends HKT>(
  FM: FoldMap<T>,
): <A>(I: Identity<A>) => (kind: Kind<T, A>) => A

export function concat<T extends HKT>(
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
) => <Z, Y, X, W, V, U, S, R, E>(kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => Maybe<A>

export function find<T extends HKT9>(
  FM: FoldMap9<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <Y, X, W, V, U, S, R, E>(kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Maybe<A>

export function find<T extends HKT8>(
  FM: FoldMap8<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <X, W, V, U, S, R, E>(kind: Kind8<T, X, W, V, U, S, R, E, A>) => Maybe<A>

export function find<T extends HKT7>(
  FM: FoldMap7<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <W, V, U, S, R, E>(kind: Kind7<T, W, V, U, S, R, E, A>) => Maybe<A>

export function find<T extends HKT6>(
  FM: FoldMap6<T>,
): <A>(
  predicate: (a: A) => boolean,
) => <V, U, S, R, E>(kind: Kind6<T, V, U, S, R, E, A>) => Maybe<A>

export function find<T extends HKT5>(
  FM: FoldMap5<T>,
): <A>(predicate: (a: A) => boolean) => <U, S, R, E>(kind: Kind5<T, U, S, R, E, A>) => Maybe<A>

export function find<T extends HKT4>(
  FM: FoldMap4<T>,
): <A>(predicate: (a: A) => boolean) => <S, R, E>(kind: Kind4<T, S, R, E, A>) => Maybe<A>

export function find<T extends HKT3>(
  FM: FoldMap3<T>,
): <A>(predicate: (a: A) => boolean) => <R, E>(kind: Kind3<T, R, E, A>) => Maybe<A>

export function find<T extends HKT2>(
  FM: FoldMap2<T>,
): <A>(predicate: (a: A) => boolean) => <E>(kind: Kind2<T, E, A>) => Maybe<A>

export function find<T extends HKT>(
  FM: FoldMap1<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => Maybe<A>

export function find<T extends HKT>(
  FM: FoldMap<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => Maybe<A>

export function find<T extends HKT>(
  FM: FoldMap<T>,
): <A>(predicate: (a: A) => boolean) => (kind: Kind<T, A>) => Maybe<A> {
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
    const foldMap = FM.foldMap(
      State.makeIdentity<B, B>({
        id: seed,
        ...Second,
      }),
    )

    return flow(
      foldMap((a: A) => State.update((b: B) => f(b, a))),
      State.runWith(() => seed),
      run,
      snd,
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
