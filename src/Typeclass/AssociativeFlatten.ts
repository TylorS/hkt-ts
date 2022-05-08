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
  AssociativeBoth2EC,
  AssociativeBoth3,
  AssociativeBoth3EC,
  AssociativeBoth3RC,
  AssociativeBoth3REC,
  AssociativeBoth4,
  AssociativeBoth4EC,
  AssociativeBoth4RC,
  AssociativeBoth4REC,
  AssociativeBoth4SC,
  AssociativeBoth4SEC,
  AssociativeBoth4SRC,
  AssociativeBoth4SREC,
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

/* #region AssociativeFlatten */
export interface AssociativeFlatten<T extends HKT> {
  readonly flatten: <A>(kind: Kind<T, Kind<T, A>>) => Kind<T, A>
}

export interface AssociativeFlatten1<T extends HKT> {
  readonly flatten: <A>(kind: Kind<T, Kind<T, A>>) => Kind<T, A>
}

export interface AssociativeFlatten2<T extends HKT2> {
  readonly flatten: <E, A>(kind: Kind2<T, E, Kind2<T, E, A>>) => Kind2<T, E, A>
}

export interface AssociativeFlatten2EC<T extends HKT2, E> {
  readonly flatten: <A>(kind: Kind2<T, E, Kind2<T, E, A>>) => Kind2<T, E, A>
}

export interface AssociativeFlatten3<T extends HKT3> {
  readonly flatten: <R, E, A>(kind: Kind3<T, R, E, Kind3<T, R, E, A>>) => Kind3<T, R, E, A>
}

export interface AssociativeFlatten3RC<T extends HKT3, R> {
  readonly flatten: <E, A>(kind: Kind3<T, R, E, Kind3<T, R, E, A>>) => Kind3<T, R, E, A>
}

export interface AssociativeFlatten3REC<T extends HKT3, R, E> {
  readonly flatten: <A>(kind: Kind3<T, R, E, Kind3<T, R, E, A>>) => Kind3<T, R, E, A>
}

export interface AssociativeFlatten3EC<T extends HKT3, E> {
  readonly flatten: <R, A>(kind: Kind3<T, R, E, Kind3<T, R, E, A>>) => Kind3<T, R, E, A>
}

export interface AssociativeFlatten4<T extends HKT4> {
  readonly flatten: <S, R, E, A>(
    kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>,
  ) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten4SREC<T extends HKT4, S, R, E> {
  readonly flatten: <A>(kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten4SC<T extends HKT4, S> {
  readonly flatten: <R, E, A>(kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten4SRC<T extends HKT4, S, R> {
  readonly flatten: <E, A>(kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten4RC<T extends HKT4, R> {
  readonly flatten: <S, E, A>(kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten4SEC<T extends HKT4, S, E> {
  readonly flatten: <R, A>(kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten4REC<T extends HKT4, R, E> {
  readonly flatten: <S, A>(kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten4EC<T extends HKT4, E> {
  readonly flatten: <S, R, A>(kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>) => Kind4<T, S, R, E, A>
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
  AFC: AssociativeFlatten10<T> & Covariant10<T>,
): AssociativeBoth10<T>

export function makeAssociativeBoth<T extends HKT9>(
  AFC: AssociativeFlatten9<T> & Covariant9<T>,
): AssociativeBoth9<T>

export function makeAssociativeBoth<T extends HKT8>(
  AFC: AssociativeFlatten8<T> & Covariant8<T>,
): AssociativeBoth8<T>

export function makeAssociativeBoth<T extends HKT7>(
  AFC: AssociativeFlatten7<T> & Covariant7<T>,
): AssociativeBoth7<T>

export function makeAssociativeBoth<T extends HKT6>(
  AFC: AssociativeFlatten6<T> & Covariant6<T>,
): AssociativeBoth6<T>

export function makeAssociativeBoth<T extends HKT5>(
  AFC: AssociativeFlatten5<T> & Covariant5<T>,
): AssociativeBoth5<T>

export function makeAssociativeBoth<T extends HKT4, E>(
  AFC: AssociativeFlatten4EC<T, E> & Covariant4EC<T, E>,
): AssociativeBoth4EC<T, E>

export function makeAssociativeBoth<T extends HKT4, R, E>(
  AFC: AssociativeFlatten4REC<T, R, E> & Covariant4REC<T, R, E>,
): AssociativeBoth4REC<T, R, E>

export function makeAssociativeBoth<T extends HKT4, S, E>(
  AFC: AssociativeFlatten4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): AssociativeBoth4SEC<T, S, E>

export function makeAssociativeBoth<T extends HKT4, R>(
  AFC: AssociativeFlatten4RC<T, R> & Covariant4RC<T, R>,
): AssociativeBoth4RC<T, R>

export function makeAssociativeBoth<T extends HKT4, S, R>(
  AFC: AssociativeFlatten4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): AssociativeBoth4SRC<T, S, R>

export function makeAssociativeBoth<T extends HKT4, S>(
  AFC: AssociativeFlatten4SC<T, S> & Covariant4SC<T, S>,
): AssociativeBoth4SC<T, S>

export function makeAssociativeBoth<T extends HKT4, S, R, E>(
  AFC: AssociativeFlatten4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): AssociativeBoth4SREC<T, S, R, E>

export function makeAssociativeBoth<T extends HKT4>(
  AFC: AssociativeFlatten4<T> & Covariant4<T>,
): AssociativeBoth4<T>

export function makeAssociativeBoth<T extends HKT3, E>(
  AFC: AssociativeFlatten3EC<T, E> & Covariant3EC<T, E>,
): AssociativeBoth3EC<T, E>

export function makeAssociativeBoth<T extends HKT3, R, E>(
  AFC: AssociativeFlatten3REC<T, R, E> & Covariant3REC<T, R, E>,
): AssociativeBoth3REC<T, R, E>

export function makeAssociativeBoth<T extends HKT3, R>(
  AFC: AssociativeFlatten3RC<T, R> & Covariant3RC<T, R>,
): AssociativeBoth3RC<T, R>

export function makeAssociativeBoth<T extends HKT3>(
  AFC: AssociativeFlatten3<T> & Covariant3<T>,
): AssociativeBoth3<T>

export function makeAssociativeBoth<T extends HKT2, E>(
  AFC: AssociativeFlatten2EC<T, E> & Covariant2EC<T, E>,
): AssociativeBoth2EC<T, E>

export function makeAssociativeBoth<T extends HKT2>(
  AFC: AssociativeFlatten2<T> & Covariant2<T>,
): AssociativeBoth2<T>

export function makeAssociativeBoth<T extends HKT>(
  AFC: AssociativeFlatten1<T> & Covariant1<T>,
): AssociativeBoth1<T>

export function makeAssociativeBoth<T extends HKT>(
  AFC: AssociativeFlatten<T> & Covariant<T>,
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

export function flatMap<T extends HKT4, E>(
  AFC: AssociativeFlatten4EC<T, E> & Covariant4EC<T, E>,
): <A, S, R, B>(
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT4, R, E>(
  AFC: AssociativeFlatten4REC<T, R, E> & Covariant4REC<T, R, E>,
): <A, S, B>(
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT4, S, E>(
  AFC: AssociativeFlatten4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): <A, R, B>(
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT4, R>(
  AFC: AssociativeFlatten4RC<T, R> & Covariant4RC<T, R>,
): <A, S, E, B>(
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT4, S, R>(
  AFC: AssociativeFlatten4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): <A, E, B>(
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT4, S>(
  AFC: AssociativeFlatten4SC<T, S> & Covariant4SC<T, S>,
): <A, R, E, B>(
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT4, S, R, E>(
  AFC: AssociativeFlatten4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): <A, B>(f: (a: A) => Kind4<T, S, R, E, B>) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT4>(
  AFC: AssociativeFlatten4<T> & Covariant4<T>,
): <A, S, R, E, B>(
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (kind: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, B>

export function flatMap<T extends HKT3, E>(
  AFC: AssociativeFlatten3EC<T, E> & Covariant3EC<T, E>,
): <A, R, B>(f: (a: A) => Kind3<T, R, E, B>) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function flatMap<T extends HKT3, R, E>(
  AFC: AssociativeFlatten3REC<T, R, E> & Covariant3REC<T, R, E>,
): <A, B>(f: (a: A) => Kind3<T, R, E, B>) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function flatMap<T extends HKT3, R>(
  AFC: AssociativeFlatten3RC<T, R> & Covariant3RC<T, R>,
): <A, E, B>(f: (a: A) => Kind3<T, R, E, B>) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function flatMap<T extends HKT3>(
  AFC: AssociativeFlatten3<T> & Covariant3<T>,
): <A, R, E, B>(f: (a: A) => Kind3<T, R, E, B>) => (kind: Kind3<T, R, E, A>) => Kind3<T, R, E, B>

export function flatMap<T extends HKT2, E>(
  AFC: AssociativeFlatten2EC<T, E> & Covariant2EC<T, E>,
): <A, B>(f: (a: A) => Kind2<T, E, B>) => (kind: Kind2<T, E, A>) => Kind2<T, E, B>

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

/* #region bind */
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

export function bind<T extends HKT4, E>(
  AFC: AssociativeFlatten4EC<T, E> & Covariant4EC<T, E>,
): <N extends string, A extends Readonly<Record<string, any>>, S, R, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT4, R, E>(
  AFC: AssociativeFlatten4REC<T, R, E> & Covariant4REC<T, R, E>,
): <N extends string, A extends Readonly<Record<string, any>>, S, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT4, S, E>(
  AFC: AssociativeFlatten4SEC<T, S, E> & Covariant4SEC<T, S, E>,
): <N extends string, A extends Readonly<Record<string, any>>, R, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT4, R>(
  AFC: AssociativeFlatten4RC<T, R> & Covariant4RC<T, R>,
): <N extends string, A extends Readonly<Record<string, any>>, S, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT4, S, R>(
  AFC: AssociativeFlatten4SRC<T, S, R> & Covariant4SRC<T, S, R>,
): <N extends string, A extends Readonly<Record<string, any>>, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT4, S>(
  AFC: AssociativeFlatten4SC<T, S> & Covariant4SC<T, S>,
): <N extends string, A extends Readonly<Record<string, any>>, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT4, S, R, E>(
  AFC: AssociativeFlatten4SREC<T, S, R, E> & Covariant4SREC<T, S, R, E>,
): <N extends string, A extends Readonly<Record<string, any>>, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT4>(
  AFC: AssociativeFlatten4<T> & Covariant4<T>,
): <N extends string, A extends Readonly<Record<string, any>>, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<T, S, R, E, B>,
) => (
  kind: Kind4<T, S, R, E, A>,
) => Kind4<T, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT3, E>(
  AFC: AssociativeFlatten3EC<T, E> & Covariant3EC<T, E>,
): <N extends string, A extends Readonly<Record<string, any>>, R, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<T, R, E, B>,
) => (
  kind: Kind3<T, R, E, A>,
) => Kind3<T, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT3, R, E>(
  AFC: AssociativeFlatten3REC<T, R, E> & Covariant3REC<T, R, E>,
): <N extends string, A extends Readonly<Record<string, any>>, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<T, R, E, B>,
) => (
  kind: Kind3<T, R, E, A>,
) => Kind3<T, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT3, R>(
  AFC: AssociativeFlatten3RC<T, R> & Covariant3RC<T, R>,
): <N extends string, A extends Readonly<Record<string, any>>, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<T, R, E, B>,
) => (
  kind: Kind3<T, R, E, A>,
) => Kind3<T, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT3>(
  AFC: AssociativeFlatten3<T> & Covariant3<T>,
): <N extends string, A extends Readonly<Record<string, any>>, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<T, R, E, B>,
) => (
  kind: Kind3<T, R, E, A>,
) => Kind3<T, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

export function bind<T extends HKT2, E>(
  AFC: AssociativeFlatten2EC<T, E> & Covariant2EC<T, E>,
): <N extends string, A extends Readonly<Record<string, any>>, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind2<T, E, B>,
) => (
  kind: Kind2<T, E, A>,
) => Kind2<T, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>

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

/* #region flatten */
export function flatten<F extends HKT10, G extends HKT10>(
  F: Covariant10<F>,
  G: AssociativeFlatten10<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
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
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT10>(
  F: Covariant9<F>,
  G: AssociativeFlatten10<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT10>(
  F: Covariant8<F>,
  G: AssociativeFlatten10<G>,
): <X1, W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT10>(
  F: Covariant7<F>,
  G: AssociativeFlatten10<G>,
): <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT10>(
  F: Covariant6<F>,
  G: AssociativeFlatten10<G>,
): <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT10>(
  F: Covariant5<F>,
  G: AssociativeFlatten10<G>,
): <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT10>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten10<G>,
): <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT10>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten10<G>,
): <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT10>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT10>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten10<G>,
): <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT10>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT10>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT10>(
  F: Covariant4<F>,
  G: AssociativeFlatten10<G>,
): <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT10>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT10>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT10>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT10>(
  F: Covariant3<F>,
  G: AssociativeFlatten10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT10>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT10>(
  F: Covariant2<F>,
  G: AssociativeFlatten10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT10>(
  F: Covariant1<F>,
  G: AssociativeFlatten10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT10>(
  F: Covariant<F>,
  G: AssociativeFlatten10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT9>(
  F: Covariant10<F>,
  G: AssociativeFlatten9<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
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
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT9>(
  F: Covariant9<F>,
  G: AssociativeFlatten9<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT9>(
  F: Covariant8<F>,
  G: AssociativeFlatten9<G>,
): <X1, W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT9>(
  F: Covariant7<F>,
  G: AssociativeFlatten9<G>,
): <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT9>(
  F: Covariant6<F>,
  G: AssociativeFlatten9<G>,
): <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT9>(
  F: Covariant5<F>,
  G: AssociativeFlatten9<G>,
): <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT9>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten9<G>,
): <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT9>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten9<G>,
): <S1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT9>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT9>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten9<G>,
): <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT9>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT9>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT9>(
  F: Covariant4<F>,
  G: AssociativeFlatten9<G>,
): <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT9>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT9>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT9>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT9>(
  F: Covariant3<F>,
  G: AssociativeFlatten9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT9>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT9>(
  F: Covariant2<F>,
  G: AssociativeFlatten9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT9>(
  F: Covariant1<F>,
  G: AssociativeFlatten9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT9>(
  F: Covariant<F>,
  G: AssociativeFlatten9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT8>(
  F: Covariant10<F>,
  G: AssociativeFlatten8<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
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
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT8>(
  F: Covariant9<F>,
  G: AssociativeFlatten8<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT8>(
  F: Covariant8<F>,
  G: AssociativeFlatten8<G>,
): <X1, W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT8>(
  F: Covariant7<F>,
  G: AssociativeFlatten8<G>,
): <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT8>(
  F: Covariant6<F>,
  G: AssociativeFlatten8<G>,
): <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT8>(
  F: Covariant5<F>,
  G: AssociativeFlatten8<G>,
): <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT8>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten8<G>,
): <S1, R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT8>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten8<G>,
): <S1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT8>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT8>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten8<G>,
): <S1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT8>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT8>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT8>(
  F: Covariant4<F>,
  G: AssociativeFlatten8<G>,
): <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT8>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT8>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT8>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT8>(
  F: Covariant3<F>,
  G: AssociativeFlatten8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT8>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT8>(
  F: Covariant2<F>,
  G: AssociativeFlatten8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT8>(
  F: Covariant1<F>,
  G: AssociativeFlatten8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT8>(
  F: Covariant<F>,
  G: AssociativeFlatten8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT7>(
  F: Covariant10<F>,
  G: AssociativeFlatten7<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
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
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT7>(
  F: Covariant9<F>,
  G: AssociativeFlatten7<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT7>(
  F: Covariant8<F>,
  G: AssociativeFlatten7<G>,
): <X1, W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT7>(
  F: Covariant7<F>,
  G: AssociativeFlatten7<G>,
): <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT7>(
  F: Covariant6<F>,
  G: AssociativeFlatten7<G>,
): <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT7>(
  F: Covariant5<F>,
  G: AssociativeFlatten7<G>,
): <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT7>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten7<G>,
): <S1, R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT7>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten7<G>,
): <S1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT7>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten7<G>,
): <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT7>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten7<G>,
): <S1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT7>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT7>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT7>(
  F: Covariant4<F>,
  G: AssociativeFlatten7<G>,
): <S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT7>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten7<G>,
): <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT7>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT7>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT7>(
  F: Covariant3<F>,
  G: AssociativeFlatten7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT7>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT7>(
  F: Covariant2<F>,
  G: AssociativeFlatten7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT7>(
  F: Covariant1<F>,
  G: AssociativeFlatten7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT7>(
  F: Covariant<F>,
  G: AssociativeFlatten7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT6>(
  F: Covariant10<F>,
  G: AssociativeFlatten6<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
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
    Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT6>(
  F: Covariant9<F>,
  G: AssociativeFlatten6<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT6>(
  F: Covariant8<F>,
  G: AssociativeFlatten6<G>,
): <X1, W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT6>(
  F: Covariant7<F>,
  G: AssociativeFlatten6<G>,
): <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT6>(
  F: Covariant6<F>,
  G: AssociativeFlatten6<G>,
): <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT6>(
  F: Covariant5<F>,
  G: AssociativeFlatten6<G>,
): <U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT6>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten6<G>,
): <S1, R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT6>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten6<G>,
): <S1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT6>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten6<G>,
): <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT6>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten6<G>,
): <S1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT6>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT6>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten6<G>,
): <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT6>(
  F: Covariant4<F>,
  G: AssociativeFlatten6<G>,
): <S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT6>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten6<G>,
): <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT6>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT6>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT6>(
  F: Covariant3<F>,
  G: AssociativeFlatten6<G>,
): <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT6>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT6>(
  F: Covariant2<F>,
  G: AssociativeFlatten6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT6>(
  F: Covariant1<F>,
  G: AssociativeFlatten6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT6>(
  F: Covariant<F>,
  G: AssociativeFlatten6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, Kind6<G, V2, U2, S2, R2, E2, A>>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT5>(
  F: Covariant10<F>,
  G: AssociativeFlatten5<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
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
    Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT5>(
  F: Covariant9<F>,
  G: AssociativeFlatten5<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind9<
    F,
    Y1,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT5>(
  F: Covariant8<F>,
  G: AssociativeFlatten5<G>,
): <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT5>(
  F: Covariant7<F>,
  G: AssociativeFlatten5<G>,
): <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT5>(
  F: Covariant6<F>,
  G: AssociativeFlatten5<G>,
): <V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT5>(
  F: Covariant5<F>,
  G: AssociativeFlatten5<G>,
): <U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT5>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten5<G>,
): <S1, R1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT5>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten5<G>,
): <S1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT5>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten5<G>,
): <R1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT5>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten5<G>,
): <S1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT5>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT5>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten5<G>,
): <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT5>(
  F: Covariant4<F>,
  G: AssociativeFlatten5<G>,
): <S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT5>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten5<G>,
): <R1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT5>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT5>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT5>(
  F: Covariant3<F>,
  G: AssociativeFlatten5<G>,
): <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT5>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT5>(
  F: Covariant2<F>,
  G: AssociativeFlatten5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT5>(
  F: Covariant1<F>,
  G: AssociativeFlatten5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT5>(
  F: Covariant<F>,
  G: AssociativeFlatten5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, Kind5<G, U2, S2, R2, E2, A>>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, E2>(
  F: Covariant10<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
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
    Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, R2, E2>(
  F: Covariant10<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
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
    Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, S2, E2>(
  F: Covariant10<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
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
    Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, R2>(
  F: Covariant10<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
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
    Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, S2, R2>(
  F: Covariant10<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
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
    Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, S2>(
  F: Covariant10<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
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
    Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Covariant10<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
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
    Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4>(
  F: Covariant10<F>,
  G: AssociativeFlatten4<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
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
    Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, E2>(
  F: Covariant9<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, R2, E2>(
  F: Covariant9<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, S2, E2>(
  F: Covariant9<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, R2>(
  F: Covariant9<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, S2, R2>(
  F: Covariant9<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, S2>(
  F: Covariant9<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Covariant9<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4>(
  F: Covariant9<F>,
  G: AssociativeFlatten4<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, E2>(
  F: Covariant8<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, R2, E2>(
  F: Covariant8<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, S2, E2>(
  F: Covariant8<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, R2>(
  F: Covariant8<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, S2, R2>(
  F: Covariant8<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, S2>(
  F: Covariant8<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Covariant8<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4>(
  F: Covariant8<F>,
  G: AssociativeFlatten4<G>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, E2>(
  F: Covariant7<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, R2, E2>(
  F: Covariant7<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, S2, E2>(
  F: Covariant7<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, R2>(
  F: Covariant7<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, S2, R2>(
  F: Covariant7<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, S2>(
  F: Covariant7<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Covariant7<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4>(
  F: Covariant7<F>,
  G: AssociativeFlatten4<G>,
): <W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, E2>(
  F: Covariant6<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, R2, E2>(
  F: Covariant6<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, S2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, S2, E2>(
  F: Covariant6<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, R2>(
  F: Covariant6<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, S2, R2>(
  F: Covariant6<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, S2>(
  F: Covariant6<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Covariant6<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4>(
  F: Covariant6<F>,
  G: AssociativeFlatten4<G>,
): <V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, E2>(
  F: Covariant5<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <U1, S1, R1, E1, S2, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, R2, E2>(
  F: Covariant5<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <U1, S1, R1, E1, S2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, S2, E2>(
  F: Covariant5<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, R2>(
  F: Covariant5<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <U1, S1, R1, E1, S2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, S2, R2>(
  F: Covariant5<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, S2>(
  F: Covariant5<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Covariant5<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4>(
  F: Covariant5<F>,
  G: AssociativeFlatten4<G>,
): <U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT4, E2>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten4EC<G, E2>,
): <S1, R1, S2, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <S1, S2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <R1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT4, R2>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten4RC<G, R2>,
): <S1, E1, S2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT4, S2>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten4SC<G, S2>,
): <R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT4>(
  F: Covariant4<F>,
  G: AssociativeFlatten4<G>,
): <S1, R1, E1, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4, E2>(
  F: Covariant3<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <R1, E1, S2, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4, R2, E2>(
  F: Covariant3<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <R1, E1, S2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4, S2, E2>(
  F: Covariant3<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <R1, E1, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4, R2>(
  F: Covariant3<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <R1, E1, S2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <R1, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten4SC<G, S2>,
): <R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <E1, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4>(
  F: Covariant3<F>,
  G: AssociativeFlatten4<G>,
): <R1, E1, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, E2>(
  F: Covariant2<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <E1, S2, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, R2, E2>(
  F: Covariant2<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <E1, S2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, S2, E2>(
  F: Covariant2<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <E1, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, R2>(
  F: Covariant2<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <E1, S2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, S2, R2>(
  F: Covariant2<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <E1, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, S2>(
  F: Covariant2<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <E1, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4>(
  F: Covariant2<F>,
  G: AssociativeFlatten4<G>,
): <E1, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, E2>(
  F: Covariant1<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <S2, R2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, R2, E2>(
  F: Covariant1<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <S2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, E2>(
  F: Covariant1<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <R2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, R2>(
  F: Covariant1<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <S2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant1<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2>(
  F: Covariant1<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Covariant1<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4>(
  F: Covariant1<F>,
  G: AssociativeFlatten4<G>,
): <S2, R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, E2>(
  F: Covariant<F>,
  G: AssociativeFlatten4EC<G, E2>,
): <S2, R2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, R2, E2>(
  F: Covariant<F>,
  G: AssociativeFlatten4REC<G, R2, E2>,
): <S2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, E2>(
  F: Covariant<F>,
  G: AssociativeFlatten4SEC<G, S2, E2>,
): <R2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, R2>(
  F: Covariant<F>,
  G: AssociativeFlatten4RC<G, R2>,
): <S2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, R2>(
  F: Covariant<F>,
  G: AssociativeFlatten4SRC<G, S2, R2>,
): <E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2>(
  F: Covariant<F>,
  G: AssociativeFlatten4SC<G, S2>,
): <R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Covariant<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4>(
  F: Covariant<F>,
  G: AssociativeFlatten4<G>,
): <S2, R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind4<G, S2, R2, E2, A>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT3, E2>(
  F: Covariant10<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT3, R2, E2>(
  F: Covariant10<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT3, R2>(
  F: Covariant10<F>,
  G: AssociativeFlatten3RC<G, R2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT3>(
  F: Covariant10<F>,
  G: AssociativeFlatten3<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT3, E2>(
  F: Covariant9<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT3, R2, E2>(
  F: Covariant9<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT3, R2>(
  F: Covariant9<F>,
  G: AssociativeFlatten3RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT3>(
  F: Covariant9<F>,
  G: AssociativeFlatten3<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT3, E2>(
  F: Covariant8<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT3, R2, E2>(
  F: Covariant8<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT3, R2>(
  F: Covariant8<F>,
  G: AssociativeFlatten3RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT3>(
  F: Covariant8<F>,
  G: AssociativeFlatten3<G>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT3, E2>(
  F: Covariant7<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT3, R2, E2>(
  F: Covariant7<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT3, R2>(
  F: Covariant7<F>,
  G: AssociativeFlatten3RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT3>(
  F: Covariant7<F>,
  G: AssociativeFlatten3<G>,
): <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT3, E2>(
  F: Covariant6<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT3, R2, E2>(
  F: Covariant6<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT3, R2>(
  F: Covariant6<F>,
  G: AssociativeFlatten3RC<G, R2>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT3>(
  F: Covariant6<F>,
  G: AssociativeFlatten3<G>,
): <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT3, E2>(
  F: Covariant5<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT3, R2, E2>(
  F: Covariant5<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT3, R2>(
  F: Covariant5<F>,
  G: AssociativeFlatten3RC<G, R2>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT3>(
  F: Covariant5<F>,
  G: AssociativeFlatten3<G>,
): <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT3>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten3<G>,
): <S1, R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT3>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten3<G>,
): <S1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT3>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten3<G>,
): <R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT3>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten3<G>,
): <S1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten3EC<G, E2>,
): <E1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten3RC<G, R2>,
): <E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT3>(
  F: Covariant4<F>,
  G: AssociativeFlatten3<G>,
): <S1, R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT3, E2>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten3EC<G, E2>,
): <R1, R2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT3, R2>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten3RC<G, R2>,
): <E1, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT3>(
  F: Covariant3<F>,
  G: AssociativeFlatten3<G>,
): <R1, E1, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT3, E2>(
  F: Covariant2<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <E1, R2, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT3, R2, E2>(
  F: Covariant2<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <E1, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT3, R2>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten3RC<G, R2>,
): <E2, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT3>(
  F: Covariant2<F>,
  G: AssociativeFlatten3<G>,
): <E1, R2, E2, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, E2>(
  F: Covariant1<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <R2, A>(kind: Kind<F, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, R2, E2>(
  F: Covariant1<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <A>(kind: Kind<F, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, R2>(
  F: Covariant1<F>,
  G: AssociativeFlatten3RC<G, R2>,
): <E2, A>(kind: Kind<F, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3>(
  F: Covariant1<F>,
  G: AssociativeFlatten3<G>,
): <R2, E2, A>(kind: Kind<F, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, E2>(
  F: Covariant<F>,
  G: AssociativeFlatten3EC<G, E2>,
): <R2, A>(kind: Kind<F, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, R2, E2>(
  F: Covariant<F>,
  G: AssociativeFlatten3REC<G, R2, E2>,
): <A>(kind: Kind<F, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, R2>(
  F: Covariant<F>,
  G: AssociativeFlatten3RC<G, R2>,
): <E2, A>(kind: Kind<F, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3>(
  F: Covariant<F>,
  G: AssociativeFlatten3<G>,
): <R2, E2, A>(kind: Kind<F, Kind3<G, R2, E2, Kind3<G, R2, E2, A>>>) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT2, E2>(
  F: Covariant10<F>,
  G: AssociativeFlatten2EC<G, E2>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT10, G extends HKT2>(
  F: Covariant10<F>,
  G: AssociativeFlatten2<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT9, G extends HKT2, E2>(
  F: Covariant9<F>,
  G: AssociativeFlatten2EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT9, G extends HKT2>(
  F: Covariant9<F>,
  G: AssociativeFlatten2<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT8, G extends HKT2, E2>(
  F: Covariant8<F>,
  G: AssociativeFlatten2EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT8, G extends HKT2>(
  F: Covariant8<F>,
  G: AssociativeFlatten2<G>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT7, G extends HKT2, E2>(
  F: Covariant7<F>,
  G: AssociativeFlatten2EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT7, G extends HKT2>(
  F: Covariant7<F>,
  G: AssociativeFlatten2<G>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT6, G extends HKT2, E2>(
  F: Covariant6<F>,
  G: AssociativeFlatten2EC<G, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT6, G extends HKT2>(
  F: Covariant6<F>,
  G: AssociativeFlatten2<G>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT5, G extends HKT2, E2>(
  F: Covariant5<F>,
  G: AssociativeFlatten2EC<G, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT5, G extends HKT2>(
  F: Covariant5<F>,
  G: AssociativeFlatten2<G>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT2>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten2<G>,
): <S1, R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT2>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten2<G>,
): <S1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT2>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten2<G>,
): <R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT2>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten2<G>,
): <S1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT2>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten2<G>,
): <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT2>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten2<G>,
): <R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten2EC<G, E2>,
): <A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, G extends HKT2>(
  F: Covariant4<F>,
  G: AssociativeFlatten2<G>,
): <S1, R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT2>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten2<G>,
): <R1, E2, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT2>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten2<G>,
): <E2, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT2, E2>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten2EC<G, E2>,
): <E1, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT3, G extends HKT2>(
  F: Covariant3<F>,
  G: AssociativeFlatten2<G>,
): <R1, E1, E2, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Kind2<G, E2, A>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT2, E2>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten2EC<G, E2>,
): <A>(kind: Kind2<F, E1, Kind2<G, E2, Kind2<G, E2, A>>>) => Kind2<F, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT2, G extends HKT2>(
  F: Covariant2<F>,
  G: AssociativeFlatten2<G>,
): <E1, E2, A>(kind: Kind2<F, E1, Kind2<G, E2, Kind2<G, E2, A>>>) => Kind2<F, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT, G extends HKT2, E2>(
  F: Covariant1<F>,
  G: AssociativeFlatten2EC<G, E2>,
): <A>(kind: Kind<F, Kind2<G, E2, Kind2<G, E2, A>>>) => Kind<F, Kind2<G, E2, A>>

export function flatten<F extends HKT, G extends HKT2>(
  F: Covariant1<F>,
  G: AssociativeFlatten2<G>,
): <E2, A>(kind: Kind<F, Kind2<G, E2, Kind2<G, E2, A>>>) => Kind<F, Kind2<G, E2, A>>

export function flatten<F extends HKT, G extends HKT2, E2>(
  F: Covariant<F>,
  G: AssociativeFlatten2EC<G, E2>,
): <A>(kind: Kind<F, Kind2<G, E2, Kind2<G, E2, A>>>) => Kind<F, Kind2<G, E2, A>>

export function flatten<F extends HKT, G extends HKT2>(
  F: Covariant<F>,
  G: AssociativeFlatten2<G>,
): <E2, A>(kind: Kind<F, Kind2<G, E2, Kind2<G, E2, A>>>) => Kind<F, Kind2<G, E2, A>>

export function flatten<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: AssociativeFlatten1<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: AssociativeFlatten1<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: AssociativeFlatten1<G>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: AssociativeFlatten1<G>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: AssociativeFlatten1<G>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: AssociativeFlatten1<G>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, E1, G extends HKT>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten1<G>,
): <S1, R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten1<G>,
): <S1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten1<G>,
): <R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, R1, G extends HKT>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten1<G>,
): <S1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten1<G>,
): <E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, G extends HKT>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten1<G>,
): <R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten1<G>,
): <A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: AssociativeFlatten1<G>,
): <S1, R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, E1, G extends HKT>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten1<G>,
): <R1, A>(kind: Kind3<F, R1, E1, Kind<G, Kind<G, A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten1<G>,
): <A>(kind: Kind3<F, R1, E1, Kind<G, Kind<G, A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, R1, G extends HKT>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten1<G>,
): <E1, A>(kind: Kind3<F, R1, E1, Kind<G, Kind<G, A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: AssociativeFlatten1<G>,
): <R1, E1, A>(kind: Kind3<F, R1, E1, Kind<G, Kind<G, A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT2, E1, G extends HKT>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten1<G>,
): <A>(kind: Kind2<F, E1, Kind<G, Kind<G, A>>>) => Kind2<F, E1, Kind<G, A>>

export function flatten<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: AssociativeFlatten1<G>,
): <E1, A>(kind: Kind2<F, E1, Kind<G, Kind<G, A>>>) => Kind2<F, E1, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: AssociativeFlatten1<G>,
): <A>(kind: Kind<F, Kind<G, Kind<G, A>>>) => Kind<F, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: AssociativeFlatten1<G>,
): <A>(kind: Kind<F, Kind<G, Kind<G, A>>>) => Kind<F, Kind<G, A>>

export function flatten<F extends HKT10, G extends HKT>(
  F: Covariant10<F>,
  G: AssociativeFlatten<G>,
): <Z1, Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT9, G extends HKT>(
  F: Covariant9<F>,
  G: AssociativeFlatten<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT8, G extends HKT>(
  F: Covariant8<F>,
  G: AssociativeFlatten<G>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT7, G extends HKT>(
  F: Covariant7<F>,
  G: AssociativeFlatten<G>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT6, G extends HKT>(
  F: Covariant6<F>,
  G: AssociativeFlatten<G>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT5, G extends HKT>(
  F: Covariant5<F>,
  G: AssociativeFlatten<G>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, E1, G extends HKT>(
  F: Covariant4EC<F, E1>,
  G: AssociativeFlatten<G>,
): <S1, R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT>(
  F: Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten<G>,
): <S1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT>(
  F: Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten<G>,
): <R1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, R1, G extends HKT>(
  F: Covariant4RC<F, R1>,
  G: AssociativeFlatten<G>,
): <S1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT>(
  F: Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten<G>,
): <E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, G extends HKT>(
  F: Covariant4SC<F, S1>,
  G: AssociativeFlatten<G>,
): <R1, E1, A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten<G>,
): <A>(kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, G extends HKT>(
  F: Covariant4<F>,
  G: AssociativeFlatten<G>,
): <S1, R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind<G, A>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, E1, G extends HKT>(
  F: Covariant3EC<F, E1>,
  G: AssociativeFlatten<G>,
): <R1, A>(kind: Kind3<F, R1, E1, Kind<G, Kind<G, A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT>(
  F: Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten<G>,
): <A>(kind: Kind3<F, R1, E1, Kind<G, Kind<G, A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, R1, G extends HKT>(
  F: Covariant3RC<F, R1>,
  G: AssociativeFlatten<G>,
): <E1, A>(kind: Kind3<F, R1, E1, Kind<G, Kind<G, A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, G extends HKT>(
  F: Covariant3<F>,
  G: AssociativeFlatten<G>,
): <R1, E1, A>(kind: Kind3<F, R1, E1, Kind<G, Kind<G, A>>>) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT2, E1, G extends HKT>(
  F: Covariant2EC<F, E1>,
  G: AssociativeFlatten<G>,
): <A>(kind: Kind2<F, E1, Kind<G, Kind<G, A>>>) => Kind2<F, E1, Kind<G, A>>

export function flatten<F extends HKT2, G extends HKT>(
  F: Covariant2<F>,
  G: AssociativeFlatten<G>,
): <E1, A>(kind: Kind2<F, E1, Kind<G, Kind<G, A>>>) => Kind2<F, E1, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: Covariant1<F>,
  G: AssociativeFlatten<G>,
): <A>(kind: Kind<F, Kind<G, Kind<G, A>>>) => Kind<F, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: AssociativeFlatten<G>,
): <A>(kind: Kind<F, Kind<G, Kind<G, A>>>) => Kind<F, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: Covariant<F>,
  G: AssociativeFlatten<G>,
): <A>(kind: Kind<F, Kind<G, Kind<G, A>>>) => Kind<F, Kind<G, A>> {
  return F.map(G.flatten)
}
/* #endregion */
