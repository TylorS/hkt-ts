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
import { flow } from '../function'

import {
  AssociativeBoth,
  AssociativeBoth1,
  AssociativeBoth10,
  AssociativeBoth2,
  AssociativeBoth3,
  AssociativeBoth4,
  AssociativeBoth5,
  AssociativeBoth6,
  AssociativeBoth7,
  AssociativeBoth8,
  AssociativeBoth9,
} from './AssociativeBoth'
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

/* #region  Typeclass */
export interface AssociativeFlatten<T extends HKT> {
  readonly flatten: <A>(kind: Kind<T, Kind<T, A>>) => Kind<T, A>
}

export interface AssociativeFlatten1<T extends HKT> {
  readonly flatten: <A>(kind: Kind<T, Kind<T, A>>) => Kind<T, A>
}

export interface AssociativeFlatten2<T extends HKT2> {
  readonly flatten: <E, A>(kind: Kind2<T, E, Kind2<T, E, A>>) => Kind2<T, E, A>
}

export interface AssociativeFlatten3<T extends HKT3> {
  readonly flatten: <R, E, A>(kind: Kind3<T, R, E, Kind3<T, R, E, A>>) => Kind3<T, R, E, A>
}

export interface AssociativeFlatten4<T extends HKT4> {
  readonly flatten: <S, R, E, A>(
    kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>,
  ) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten5<T extends HKT5> {
  readonly flatten: <U, S, R, E, A>(
    kind: Kind5<T, U, S, R, E, Kind5<T, U, S, R, E, A>>,
  ) => Kind5<T, U, S, R, E, A>
}

export interface AssociativeFlatten6<T extends HKT6> {
  readonly flatten: <V, U, S, R, E, A>(
    kind: Kind6<T, V, U, S, R, E, Kind6<T, V, U, S, R, E, A>>,
  ) => Kind6<T, V, U, S, R, E, A>
}

export interface AssociativeFlatten7<T extends HKT7> {
  readonly flatten: <W, V, U, S, R, E, A>(
    kind: Kind7<T, W, V, U, S, R, E, Kind7<T, W, V, U, S, R, E, A>>,
  ) => Kind7<T, W, V, U, S, R, E, A>
}

export interface AssociativeFlatten8<T extends HKT8> {
  readonly flatten: <X, W, V, U, S, R, E, A>(
    kind: Kind8<T, X, W, V, U, S, R, E, Kind8<T, X, W, V, U, S, R, E, A>>,
  ) => Kind8<T, X, W, V, U, S, R, E, A>
}

export interface AssociativeFlatten9<T extends HKT9> {
  readonly flatten: <Y, X, W, V, U, S, R, E, A>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, Kind9<T, Y, X, W, V, U, S, R, E, A>>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, A>
}

export interface AssociativeFlatten10<T extends HKT10> {
  readonly flatten: <Z, Y, X, W, V, U, S, R, E, A>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>
}
/* #endregion */

/* #region makeAssociativeBoth */
export function makeAssociativeBoth<T extends HKT10>(
  F: AssociativeFlatten10<T> & Covariant10<T>,
): AssociativeBoth10<T>

export function makeAssociativeBoth<T extends HKT9>(
  F: AssociativeFlatten9<T> & Covariant9<T>,
): AssociativeBoth9<T>

export function makeAssociativeBoth<T extends HKT8>(
  F: AssociativeFlatten8<T> & Covariant8<T>,
): AssociativeBoth8<T>

export function makeAssociativeBoth<T extends HKT7>(
  F: AssociativeFlatten7<T> & Covariant7<T>,
): AssociativeBoth7<T>

export function makeAssociativeBoth<T extends HKT6>(
  F: AssociativeFlatten6<T> & Covariant6<T>,
): AssociativeBoth6<T>

export function makeAssociativeBoth<T extends HKT5>(
  F: AssociativeFlatten5<T> & Covariant5<T>,
): AssociativeBoth5<T>

export function makeAssociativeBoth<T extends HKT4>(
  F: AssociativeFlatten4<T> & Covariant4<T>,
): AssociativeBoth4<T>

export function makeAssociativeBoth<T extends HKT3>(
  F: AssociativeFlatten3<T> & Covariant3<T>,
): AssociativeBoth3<T>

export function makeAssociativeBoth<T extends HKT2>(
  F: AssociativeFlatten2<T> & Covariant2<T>,
): AssociativeBoth2<T>

export function makeAssociativeBoth<T extends HKT>(
  F: AssociativeFlatten1<T> & Covariant1<T>,
): AssociativeBoth1<T>

export function makeAssociativeBoth<T extends HKT>(
  F: AssociativeFlatten<T> & Covariant<T>,
): AssociativeBoth<T>

export function makeAssociativeBoth<T extends HKT>(
  F: AssociativeFlatten<T> & Covariant<T>,
): AssociativeBoth<T> {
  return {
    both: (s) => (f) => F.flatten(F.map((a) => F.map((b) => [a, b])(s))(f)),
  }
}
/* #endregion */

/* #region flatMap */

export function flatMap<T extends HKT10>(
  AFC: AssociativeFlatten10<T> & Covariant10<T>,
): <A, Z, Y, X, W, V, U, S, R, E, B>(
  f: (a: A) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
) => (kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>

export function flatMap<T extends HKT9>(
  AFC: AssociativeFlatten9<T> & Covariant9<T>,
): <A, Y, X, W, V, U, S, R, E, B>(
  f: (a: A) => Kind9<T, Y, X, W, V, U, S, R, E, B>,
) => (kind: Kind9<T, Y, X, W, V, U, S, R, E, A>) => Kind9<T, Y, X, W, V, U, S, R, E, B>

export function flatMap<T extends HKT8>(
  AFC: AssociativeFlatten8<T> & Covariant8<T>,
): <A, X, W, V, U, S, R, E, B>(
  f: (a: A) => Kind8<T, X, W, V, U, S, R, E, B>,
) => (kind: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, B>

export function flatMap<T extends HKT7>(
  AFC: AssociativeFlatten7<T> & Covariant7<T>,
): <A, W, V, U, S, R, E, B>(
  f: (a: A) => Kind7<T, W, V, U, S, R, E, B>,
) => (kind: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, B>

export function flatMap<T extends HKT6>(
  AFC: AssociativeFlatten6<T> & Covariant6<T>,
): <A, V, U, S, R, E, B>(
  f: (a: A) => Kind6<T, V, U, S, R, E, B>,
) => (kind: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, B>

export function flatMap<T extends HKT5>(
  AFC: AssociativeFlatten5<T> & Covariant5<T>,
): <A, U, S, R, E, B>(
  f: (a: A) => Kind5<T, U, S, R, E, B>,
) => (kind: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, B>

export function flatMap<T extends HKT4>(
  AFC: AssociativeFlatten4<T> & Covariant4<T>,
): <A, S, R, E, B>(
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT3>(
  AFC: AssociativeFlatten3<T> & Covariant3<T>,
): <A, R, E, B>(f: (a: A) => Kind3<T, R, E, B>) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function flatMap<T extends HKT2>(
  AFC: AssociativeFlatten2<T> & Covariant2<T>,
): <A, E, B>(f: (a: A) => Kind2<T, E, B>) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>

export function flatMap<T extends HKT>(
  AFC: AssociativeFlatten1<T> & Covariant1<T>,
): <A, B>(f: (a: A) => Kind<T, B>) => (kind: Kind<T, A>) => Kind<T, B>

export function flatMap<T extends HKT>(
  AFC: AssociativeFlatten<T> & Covariant<T>,
): <A, B>(f: (a: A) => Kind<T, B>) => (kind: Kind<T, A>) => Kind<T, B>

export function flatMap<T extends HKT>(
  AFC: AssociativeFlatten<T> & Covariant<T>,
): <A, B>(f: (a: A) => Kind<T, B>) => (kind: Kind<T, A>) => Kind<T, B> {
  return <A, B>(f: (a: A) => Kind<T, B>) => flow(AFC.map(f), AFC.flatten)
}

/* #endregion */

/* #region  bind */
export function bind<T extends HKT10>(
  AFC: AssociativeFlatten10<T> & Covariant10<T>,
): <N extends string, A extends Readonly<Record<string, any>>, Z, Y, X, W, V, U, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
) => (
  kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
) => Kind10<
  T,
  Z,
  Y,
  X,
  W,
  V,
  U,
  S,
  R,
  E,
  { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }
>

export function bind<T extends HKT9>(
  AFC: AssociativeFlatten9<T> & Covariant9<T>,
): <N extends string, A extends Readonly<Record<string, any>>, Y, X, W, V, U, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind9<T, Y, X, W, V, U, S, R, E, B>,
) => (
  kind: Kind9<T, Y, X, W, V, U, S, R, E, A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT8>(
  AFC: AssociativeFlatten8<T> & Covariant8<T>,
): <N extends string, A extends Readonly<Record<string, any>>, X, W, V, U, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind8<T, X, W, V, U, S, R, E, B>,
) => (
  kind: Kind8<T, X, W, V, U, S, R, E, A>,
) => Kind8<T, X, W, V, U, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT7>(
  AFC: AssociativeFlatten7<T> & Covariant7<T>,
): <N extends string, A extends Readonly<Record<string, any>>, W, V, U, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind7<T, W, V, U, S, R, E, B>,
) => (
  kind: Kind7<T, W, V, U, S, R, E, A>,
) => Kind7<T, W, V, U, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT6>(
  AFC: AssociativeFlatten6<T> & Covariant6<T>,
): <N extends string, A extends Readonly<Record<string, any>>, V, U, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind6<T, V, U, S, R, E, B>,
) => (
  kind: Kind6<T, V, U, S, R, E, A>,
) => Kind6<T, V, U, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT5>(
  AFC: AssociativeFlatten5<T> & Covariant5<T>,
): <N extends string, A extends Readonly<Record<string, any>>, U, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind5<T, U, S, R, E, B>,
) => (
  kind: Kind5<T, U, S, R, E, A>,
) => Kind5<T, U, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT4>(
  AFC: AssociativeFlatten4<T> & Covariant4<T>,
): <N extends string, A extends Readonly<Record<string, any>>, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT3>(
  AFC: AssociativeFlatten3<T> & Covariant3<T>,
): <N extends string, A extends Readonly<Record<string, any>>, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<T, R, E, B>,
) => (
  kind: Kind3<T, R, E, A>,
) => Kind3<T, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT2>(
  AFC: AssociativeFlatten2<T> & Covariant2<T>,
): <N extends string, A extends Readonly<Record<string, any>>, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind2<T, E, B>,
) => (
  kind: Kind2<T, E, A>,
) => Kind2<T, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT>(
  AFC: AssociativeFlatten1<T> & Covariant1<T>,
): <N extends string, A extends Readonly<Record<string, any>>, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind<T, B>,
) => (kind: Kind<T, A>) => Kind<T, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT>(
  AFC: AssociativeFlatten<T> & Covariant<T>,
): <N extends string, A extends Readonly<Record<string, any>>, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind<T, B>,
) => (kind: Kind<T, A>) => Kind<T, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT>(
  AFC: AssociativeFlatten<T> & Covariant<T>,
): <N extends string, A extends Readonly<Record<string, any>>, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind<T, B>,
) => (kind: Kind<T, A>) => Kind<T, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> {
  return <N extends string, A extends Readonly<Record<string, any>>, B>(
      name: N,
      f: (a: A) => Kind<T, B>,
    ) =>
    (kind: Kind<T, A>) =>
      AFC.flatten(
        AFC.map((a: A) =>
          AFC.map(
            (b: B) =>
              ({ ...a, [name]: b } as {
                readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
              }),
          )(f(a)),
        )(kind),
      )
}

/* #endregion */
