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
import * as B from '../../data/boolean'
import * as N from '../../data/number'
import { run } from '../../effects/Eff'
import { makeIdentity, runWith, update } from '../../effects/State'
import { flow } from '../../function'
import { Second } from '../concrete/Associative'
import { Eq } from '../concrete/Eq'
import { Identity } from '../concrete/Identity'

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
      makeIdentity<B, B>({
        id: seed,
        ...Second,
      }),
    )

    return flow(
      foldMap((a: A) => update((b: B) => f(b, a))),
      runWith(() => seed),
      run,
    )
  }
}

/* #endregion */
