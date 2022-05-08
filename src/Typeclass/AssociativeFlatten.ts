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
import {
  ForEach,
  ForEach1,
  ForEach10,
  ForEach2,
  ForEach2EC,
  ForEach3,
  ForEach3EC,
  ForEach3RC,
  ForEach3REC,
  ForEach4,
  ForEach4EC,
  ForEach4RC,
  ForEach4REC,
  ForEach4SC,
  ForEach4SEC,
  ForEach4SRC,
  ForEach4SREC,
  ForEach5,
  ForEach6,
  ForEach7,
  ForEach8,
  ForEach9,
  sequence,
} from './ForEach'
import {
  IdentityBoth,
  IdentityBoth1,
  IdentityBoth10,
  IdentityBoth2,
  IdentityBoth2EC,
  IdentityBoth3,
  IdentityBoth3EC,
  IdentityBoth3RC,
  IdentityBoth3REC,
  IdentityBoth4,
  IdentityBoth4EC,
  IdentityBoth4RC,
  IdentityBoth4REC,
  IdentityBoth4SC,
  IdentityBoth4SEC,
  IdentityBoth4SRC,
  IdentityBoth4SREC,
  IdentityBoth5,
  IdentityBoth6,
  IdentityBoth7,
  IdentityBoth8,
  IdentityBoth9,
} from './IdentityBoth'

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
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
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
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind10<
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
      >
    >
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT10>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
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
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT10>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
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
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT10>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <W1, V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT10>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <V1, U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT10>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <U1, S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind5<F, U1, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT10>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <S1, R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT10>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <S1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT10>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT10>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <S1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT10>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT10>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT10>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <S1, R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT10>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <R1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT10>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT10>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT10>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <R1, E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind3<F, R1, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT10>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT10>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <E1, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind2<F, E1, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT10>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT10>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten10<G> & ForEach10<G>,
): <Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind10<
      G,
      Z2,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind<F, Kind10<G, Z2, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT9>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
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
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT9>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
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
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT9>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
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
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT9>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <W1, V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT9>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <V1, U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT9>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <U1, S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind5<F, U1, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT9>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <S1, R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT9>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <S1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT9>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT9>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <S1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT9>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT9>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT9>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <S1, R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT9>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <R1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT9>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT9>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT9>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <R1, E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind3<F, R1, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT9>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT9>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <E1, Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind9<
      G,
      Y2,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind2<F, E1, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT9>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT9>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten9<G> & ForEach9<G>,
): <Y2, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind<F, Kind9<G, Y2, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT8>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
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
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT8>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
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
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT8>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
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
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT8>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <W1, V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT8>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <V1, U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT8>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <U1, S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind5<F, U1, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT8>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <S1, R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT8>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <S1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT8>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT8>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <S1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT8>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT8>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT8>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <S1, R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind8<
      G,
      X2,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind4<F, S1, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT8>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <R1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT8>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT8>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT8>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <R1, E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT8>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT8>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <E1, X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind2<F, E1, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT8>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT8>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten8<G> & ForEach8<G>,
): <X2, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<
    F,
    Kind8<G, X2, W2, V2, U2, S2, R2, E2, Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind<F, Kind8<G, X2, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT7>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
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
    Kind7<
      G,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT7>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
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
    Kind7<
      G,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT7>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
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
    Kind7<
      G,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT7>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <W1, V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind7<
      G,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT7>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <V1, U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind7<
      G,
      W2,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT7>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <U1, S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT7>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <S1, R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT7>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <S1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT7>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT7>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <S1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT7>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT7>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT7>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <S1, R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT7>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <R1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT7>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT7>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT7>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <R1, E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT7>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT7>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <E1, W2, V2, U2, S2, R2, E2, A>(
  kind: Kind2<
    F,
    E1,
    Kind7<G, W2, V2, U2, S2, R2, E2, Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind2<F, E1, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT7>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT7>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten7<G> & ForEach7<G>,
): <W2, V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>>>,
) => Kind<F, Kind7<G, W2, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT6>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
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
    Kind6<
      G,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT6>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
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
    Kind6<
      G,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT6>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
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
    Kind6<
      G,
      V2,
      U2,
      S2,
      R2,
      E2,
      Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>
    >
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT6>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <W1, V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT6>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <V1, U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT6>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <U1, S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT6>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <S1, R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT6>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <S1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT6>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT6>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <S1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT6>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT6>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT6>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <S1, R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT6>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <R1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT6>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT6>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT6>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <R1, E1, V2, U2, S2, R2, E2, A>(
  kind: Kind3<
    F,
    R1,
    E1,
    Kind6<G, V2, U2, S2, R2, E2, Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>
  >,
) => Kind3<F, R1, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT6>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT6>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <E1, V2, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT6>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT6>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten6<G> & ForEach6<G>,
): <V2, U2, S2, R2, E2, A>(
  kind: Kind<F, Kind6<G, V2, U2, S2, R2, E2, Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>>>,
) => Kind<F, Kind6<G, V2, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT5>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
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
    Kind5<
      G,
      U2,
      S2,
      R2,
      E2,
      Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>
    >
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT5>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
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
    Kind5<G, U2, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT5>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <X1, W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT5>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <W1, V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT5>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <V1, U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT5>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <U1, S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT5>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <S1, R1, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT5>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <S1, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT5>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <R1, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT5>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <S1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT5>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT5>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT5>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <S1, R1, E1, U2, S2, R2, E2, A>(
  kind: Kind4<
    F,
    S1,
    R1,
    E1,
    Kind5<G, U2, S2, R2, E2, Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>
  >,
) => Kind4<F, S1, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT5>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <R1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT5>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT5>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT5>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <R1, E1, U2, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT5>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT5>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <E1, U2, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind5<G, U2, S2, R2, E2, Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT5>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, Kind<F, Kind5<G, U2, S2, R2, E2, A>>>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT5>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten5<G> & ForEach5<G>,
): <U2, S2, R2, E2, A>(
  kind: Kind<F, Kind5<G, U2, S2, R2, E2, Kind<F, Kind5<G, U2, S2, R2, E2, A>>>>,
) => Kind<F, Kind5<G, U2, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, E2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
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
    Kind4<G, S2, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, R2, E2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
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
    Kind4<G, S2, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, S2, E2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
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
    Kind4<G, S2, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, R2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
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
    Kind4<G, S2, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, S2, R2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
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
    Kind4<G, S2, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, S2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
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
    Kind4<G, S2, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
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
    Kind4<G, S2, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT4>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
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
    Kind4<G, S2, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, E2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
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
    Kind4<G, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, R2, E2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, A>(
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
    Kind4<G, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, S2, E2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
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
    Kind4<G, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, R2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
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
    Kind4<G, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, S2, R2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
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
    Kind4<G, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, S2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
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
    Kind4<G, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
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
    Kind4<G, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT4>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
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
    Kind4<G, S2, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, E2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, R2, E2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, S2, E2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, R2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, S2, R2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, S2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT4>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <X1, W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, E2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, R2, E2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, S2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, S2, E2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, R2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, S2, R2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, S2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT4>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <W1, V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, E2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <V1, U1, S1, R1, E1, S2, R2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, R2, E2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, S2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, S2, E2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, R2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <V1, U1, S1, R1, E1, S2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, S2, R2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, S2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT4>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <V1, U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, E2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <U1, S1, R1, E1, S2, R2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, R2, E2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <U1, S1, R1, E1, S2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, S2, E2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <U1, S1, R1, E1, R2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, R2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <U1, S1, R1, E1, S2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, S2, R2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, S2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT4>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <U1, S1, R1, E1, S2, R2, E2, A>(
  kind: Kind5<
    F,
    U1,
    S1,
    R1,
    E1,
    Kind4<G, S2, R2, E2, Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>
  >,
) => Kind5<F, U1, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT4, E2>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <S1, R1, S2, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <S1, S2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <R1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT4, R2>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <S1, E1, S2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT4, S2>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT4>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <S1, R1, E1, S2, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4, E2>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <R1, E1, S2, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4, R2, E2>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <R1, E1, S2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4, S2, E2>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <R1, E1, R2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4, R2>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <R1, E1, S2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <R1, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <E1, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT4>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <R1, E1, S2, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind4<G, S2, R2, E2, Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, E2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <E1, S2, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind2<F, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, R2, E2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <E1, S2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind2<F, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, S2, E2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <E1, R2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind2<F, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, R2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <E1, S2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind2<F, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, S2, R2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <E1, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind2<F, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4, S2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <E1, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind2<F, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind2<F, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT4>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <E1, S2, R2, E2, A>(
  kind: Kind2<F, E1, Kind4<G, S2, R2, E2, Kind2<F, E1, Kind4<G, S2, R2, E2, A>>>>,
) => Kind2<F, E1, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, E2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <S2, R2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, R2, E2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <S2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, E2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <R2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, R2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <S2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, R2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <S2, R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, E2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten4EC<G, E2> & ForEach4EC<G, E2>,
): <S2, R2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, R2, E2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten4REC<G, R2, E2> & ForEach4REC<G, R2, E2>,
): <S2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, E2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten4SEC<G, S2, E2> & ForEach4SEC<G, S2, E2>,
): <R2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, R2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten4RC<G, R2> & ForEach4RC<G, R2>,
): <S2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, R2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten4SRC<G, S2, R2> & ForEach4SRC<G, S2, R2>,
): <E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten4SC<G, S2> & ForEach4SC<G, S2>,
): <R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten4SREC<G, S2, R2, E2> & ForEach4SREC<G, S2, R2, E2>,
): <A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT4>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten4<G> & ForEach4<G>,
): <S2, R2, E2, A>(
  kind: Kind<F, Kind4<G, S2, R2, E2, Kind<F, Kind4<G, S2, R2, E2, A>>>>,
) => Kind<F, Kind4<G, S2, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT3, E2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
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
    Kind3<G, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT3, R2, E2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
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
    Kind3<G, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT3, R2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
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
    Kind3<G, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT3>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
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
    Kind3<G, R2, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT3, E2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, A>(
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
    Kind3<G, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT3, R2, E2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
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
    Kind3<G, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT3, R2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
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
    Kind3<G, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT9, G extends HKT3>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
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
    Kind3<G, R2, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT3, E2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT3, R2, E2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT3, R2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT8, G extends HKT3>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <X1, W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT3, E2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, R2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT3, R2, E2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT3, R2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT7, G extends HKT3>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <W1, V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT3, E2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <V1, U1, S1, R1, E1, R2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT3, R2, E2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT3, R2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT6, G extends HKT3>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <V1, U1, S1, R1, E1, R2, E2, A>(
  kind: Kind6<
    F,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind3<G, R2, E2, Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>
  >,
) => Kind6<F, V1, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT3, E2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <U1, S1, R1, E1, R2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT3, R2, E2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT3, R2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT5, G extends HKT3>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <U1, S1, R1, E1, R2, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind5<F, U1, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT3>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <S1, R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT3>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <S1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT3>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <R1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT3>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <S1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <E1, R2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT4, G extends HKT3>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <S1, R1, E1, R2, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind3<G, R2, E2, Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT3, E2>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <R1, R2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Kind3<F, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Kind3<F, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT3, R2>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <E1, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Kind3<F, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT3, G extends HKT3>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <R1, E1, R2, E2, A>(
  kind: Kind3<F, R1, E1, Kind3<G, R2, E2, Kind3<F, R1, E1, Kind3<G, R2, E2, A>>>>,
) => Kind3<F, R1, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT3, E2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <E1, R2, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Kind2<F, E1, Kind3<G, R2, E2, A>>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT3, R2, E2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <E1, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Kind2<F, E1, Kind3<G, R2, E2, A>>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT3, R2>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <E2, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Kind2<F, E1, Kind3<G, R2, E2, A>>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT2, G extends HKT3>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <E1, R2, E2, A>(
  kind: Kind2<F, E1, Kind3<G, R2, E2, Kind2<F, E1, Kind3<G, R2, E2, A>>>>,
) => Kind2<F, E1, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, E2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <R2, A>(
  kind: Kind<F, Kind3<G, R2, E2, Kind<F, Kind3<G, R2, E2, A>>>>,
) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, R2, E2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <A>(
  kind: Kind<F, Kind3<G, R2, E2, Kind<F, Kind3<G, R2, E2, A>>>>,
) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, R2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <E2, A>(
  kind: Kind<F, Kind3<G, R2, E2, Kind<F, Kind3<G, R2, E2, A>>>>,
) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <R2, E2, A>(
  kind: Kind<F, Kind3<G, R2, E2, Kind<F, Kind3<G, R2, E2, A>>>>,
) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, E2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten3EC<G, E2> & ForEach3EC<G, E2>,
): <R2, A>(
  kind: Kind<F, Kind3<G, R2, E2, Kind<F, Kind3<G, R2, E2, A>>>>,
) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, R2, E2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten3REC<G, R2, E2> & ForEach3REC<G, R2, E2>,
): <A>(
  kind: Kind<F, Kind3<G, R2, E2, Kind<F, Kind3<G, R2, E2, A>>>>,
) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3, R2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten3RC<G, R2> & ForEach3RC<G, R2>,
): <E2, A>(
  kind: Kind<F, Kind3<G, R2, E2, Kind<F, Kind3<G, R2, E2, A>>>>,
) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT, G extends HKT3>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten3<G> & ForEach3<G>,
): <R2, E2, A>(
  kind: Kind<F, Kind3<G, R2, E2, Kind<F, Kind3<G, R2, E2, A>>>>,
) => Kind<F, Kind3<G, R2, E2, A>>

export function flatten<F extends HKT10, G extends HKT2, E2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
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
    Kind2<G, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT10, G extends HKT2>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
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
    Kind2<G, E2, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT9, G extends HKT2, E2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
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
    Kind2<G, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT9, G extends HKT2>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, E2, A>(
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
    Kind2<G, E2, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT8, G extends HKT2, E2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind2<G, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT8, G extends HKT2>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <X1, W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind2<G, E2, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT7, G extends HKT2, E2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind2<G, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT7, G extends HKT2>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <W1, V1, U1, S1, R1, E1, E2, A>(
  kind: Kind7<
    F,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind2<G, E2, Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>
  >,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT6, G extends HKT2, E2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT6, G extends HKT2>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <V1, U1, S1, R1, E1, E2, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT5, G extends HKT2, E2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT5, G extends HKT2>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <U1, S1, R1, E1, E2, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind2<G, E2, Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind5<F, U1, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, E1, G extends HKT2>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <S1, R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind4<F, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT2>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <S1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind4<F, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT2>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <R1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind4<F, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, R1, G extends HKT2>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <S1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind4<F, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT2>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind4<F, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, S1, G extends HKT2>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind4<F, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind4<F, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT4, G extends HKT2>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <S1, R1, E1, E2, A>(
  kind: Kind4<F, S1, R1, E1, Kind2<G, E2, Kind4<F, S1, R1, E1, Kind2<G, E2, A>>>>,
) => Kind4<F, S1, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT3, E1, G extends HKT2>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <R1, E2, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Kind3<F, R1, E1, Kind2<G, E2, A>>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT2>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <E2, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Kind3<F, R1, E1, Kind2<G, E2, A>>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT3, R1, G extends HKT2, E2>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <E1, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Kind3<F, R1, E1, Kind2<G, E2, A>>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT3, G extends HKT2>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <R1, E1, E2, A>(
  kind: Kind3<F, R1, E1, Kind2<G, E2, Kind3<F, R1, E1, Kind2<G, E2, A>>>>,
) => Kind3<F, R1, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT2, E1, G extends HKT2, E2>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <A>(
  kind: Kind2<F, E1, Kind2<G, E2, Kind2<F, E1, Kind2<G, E2, A>>>>,
) => Kind2<F, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT2, G extends HKT2>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <E1, E2, A>(
  kind: Kind2<F, E1, Kind2<G, E2, Kind2<F, E1, Kind2<G, E2, A>>>>,
) => Kind2<F, E1, Kind2<G, E2, A>>

export function flatten<F extends HKT, G extends HKT2, E2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <A>(kind: Kind<F, Kind2<G, E2, Kind<F, Kind2<G, E2, A>>>>) => Kind<F, Kind2<G, E2, A>>

export function flatten<F extends HKT, G extends HKT2>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <E2, A>(kind: Kind<F, Kind2<G, E2, Kind<F, Kind2<G, E2, A>>>>) => Kind<F, Kind2<G, E2, A>>

export function flatten<F extends HKT, G extends HKT2, E2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten2EC<G, E2> & ForEach2EC<G, E2>,
): <A>(kind: Kind<F, Kind2<G, E2, Kind<F, Kind2<G, E2, A>>>>) => Kind<F, Kind2<G, E2, A>>

export function flatten<F extends HKT, G extends HKT2>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten2<G> & ForEach2<G>,
): <E2, A>(kind: Kind<F, Kind2<G, E2, Kind<F, Kind2<G, E2, A>>>>) => Kind<F, Kind2<G, E2, A>>

export function flatten<F extends HKT10, G extends HKT>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
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
    Kind<G, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT9, G extends HKT>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
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
    Kind<G, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT8, G extends HKT>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind<G, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT7, G extends HKT>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT6, G extends HKT>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT5, G extends HKT>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, Kind5<F, U1, S1, R1, E1, Kind<G, A>>>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, E1, G extends HKT>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <S1, R1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <S1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <R1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, R1, G extends HKT>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <S1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, G extends HKT>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, G extends HKT>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <S1, R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, E1, G extends HKT>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <R1, A>(
  kind: Kind3<F, R1, E1, Kind<G, Kind3<F, R1, E1, Kind<G, A>>>>,
) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <A>(
  kind: Kind3<F, R1, E1, Kind<G, Kind3<F, R1, E1, Kind<G, A>>>>,
) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, R1, G extends HKT>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <E1, A>(
  kind: Kind3<F, R1, E1, Kind<G, Kind3<F, R1, E1, Kind<G, A>>>>,
) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, G extends HKT>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <R1, E1, A>(
  kind: Kind3<F, R1, E1, Kind<G, Kind3<F, R1, E1, Kind<G, A>>>>,
) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT2, E1, G extends HKT>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <A>(kind: Kind2<F, E1, Kind<G, Kind2<F, E1, Kind<G, A>>>>) => Kind2<F, E1, Kind<G, A>>

export function flatten<F extends HKT2, G extends HKT>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <E1, A>(kind: Kind2<F, E1, Kind<G, Kind2<F, E1, Kind<G, A>>>>) => Kind2<F, E1, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <A>(kind: Kind<F, Kind<G, Kind<F, Kind<G, A>>>>) => Kind<F, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten1<G> & ForEach1<G>,
): <A>(kind: Kind<F, Kind<G, Kind<F, Kind<G, A>>>>) => Kind<F, Kind<G, A>>

export function flatten<F extends HKT10, G extends HKT>(
  F: IdentityBoth10<F> & AssociativeFlatten10<F> & Covariant10<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
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
    Kind<G, Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>>
  >,
) => Kind10<F, Z1, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT9, G extends HKT>(
  F: IdentityBoth9<F> & AssociativeFlatten9<F> & Covariant9<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <Y1, X1, W1, V1, U1, S1, R1, E1, A>(
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
    Kind<G, Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>>
  >,
) => Kind9<F, Y1, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT8, G extends HKT>(
  F: IdentityBoth8<F> & AssociativeFlatten8<F> & Covariant8<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <X1, W1, V1, U1, S1, R1, E1, A>(
  kind: Kind8<
    F,
    X1,
    W1,
    V1,
    U1,
    S1,
    R1,
    E1,
    Kind<G, Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>>
  >,
) => Kind8<F, X1, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT7, G extends HKT>(
  F: IdentityBoth7<F> & AssociativeFlatten7<F> & Covariant7<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <W1, V1, U1, S1, R1, E1, A>(
  kind: Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>>>,
) => Kind7<F, W1, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT6, G extends HKT>(
  F: IdentityBoth6<F> & AssociativeFlatten6<F> & Covariant6<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <V1, U1, S1, R1, E1, A>(
  kind: Kind6<F, V1, U1, S1, R1, E1, Kind<G, Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>>>,
) => Kind6<F, V1, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT5, G extends HKT>(
  F: IdentityBoth5<F> & AssociativeFlatten5<F> & Covariant5<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <U1, S1, R1, E1, A>(
  kind: Kind5<F, U1, S1, R1, E1, Kind<G, Kind5<F, U1, S1, R1, E1, Kind<G, A>>>>,
) => Kind5<F, U1, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, E1, G extends HKT>(
  F: IdentityBoth4EC<F, E1> & AssociativeFlatten4EC<F, E1> & Covariant4EC<F, E1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <S1, R1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, R1, E1, G extends HKT>(
  F: IdentityBoth4REC<F, R1, E1> & AssociativeFlatten4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <S1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, E1, G extends HKT>(
  F: IdentityBoth4SEC<F, S1, E1> & AssociativeFlatten4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <R1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, R1, G extends HKT>(
  F: IdentityBoth4RC<F, R1> & AssociativeFlatten4RC<F, R1> & Covariant4RC<F, R1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <S1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, R1, G extends HKT>(
  F: IdentityBoth4SRC<F, S1, R1> & AssociativeFlatten4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, G extends HKT>(
  F: IdentityBoth4SC<F, S1> & AssociativeFlatten4SC<F, S1> & Covariant4SC<F, S1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: IdentityBoth4SREC<F, S1, R1, E1> &
    AssociativeFlatten4SREC<F, S1, R1, E1> &
    Covariant4SREC<F, S1, R1, E1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT4, G extends HKT>(
  F: IdentityBoth4<F> & AssociativeFlatten4<F> & Covariant4<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <S1, R1, E1, A>(
  kind: Kind4<F, S1, R1, E1, Kind<G, Kind4<F, S1, R1, E1, Kind<G, A>>>>,
) => Kind4<F, S1, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, E1, G extends HKT>(
  F: IdentityBoth3EC<F, E1> & AssociativeFlatten3EC<F, E1> & Covariant3EC<F, E1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <R1, A>(
  kind: Kind3<F, R1, E1, Kind<G, Kind3<F, R1, E1, Kind<G, A>>>>,
) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, R1, E1, G extends HKT>(
  F: IdentityBoth3REC<F, R1, E1> & AssociativeFlatten3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <A>(
  kind: Kind3<F, R1, E1, Kind<G, Kind3<F, R1, E1, Kind<G, A>>>>,
) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, R1, G extends HKT>(
  F: IdentityBoth3RC<F, R1> & AssociativeFlatten3RC<F, R1> & Covariant3RC<F, R1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <E1, A>(
  kind: Kind3<F, R1, E1, Kind<G, Kind3<F, R1, E1, Kind<G, A>>>>,
) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT3, G extends HKT>(
  F: IdentityBoth3<F> & AssociativeFlatten3<F> & Covariant3<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <R1, E1, A>(
  kind: Kind3<F, R1, E1, Kind<G, Kind3<F, R1, E1, Kind<G, A>>>>,
) => Kind3<F, R1, E1, Kind<G, A>>

export function flatten<F extends HKT2, E1, G extends HKT>(
  F: IdentityBoth2EC<F, E1> & AssociativeFlatten2EC<F, E1> & Covariant2EC<F, E1>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <A>(kind: Kind2<F, E1, Kind<G, Kind2<F, E1, Kind<G, A>>>>) => Kind2<F, E1, Kind<G, A>>

export function flatten<F extends HKT2, G extends HKT>(
  F: IdentityBoth2<F> & AssociativeFlatten2<F> & Covariant2<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <E1, A>(kind: Kind2<F, E1, Kind<G, Kind2<F, E1, Kind<G, A>>>>) => Kind2<F, E1, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: IdentityBoth1<F> & AssociativeFlatten1<F> & Covariant1<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <A>(kind: Kind<F, Kind<G, Kind<F, Kind<G, A>>>>) => Kind<F, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <A>(kind: Kind<F, Kind<G, Kind<F, Kind<G, A>>>>) => Kind<F, Kind<G, A>>

export function flatten<F extends HKT, G extends HKT>(
  F: IdentityBoth<F> & AssociativeFlatten<F> & Covariant<F>,
  G: AssociativeFlatten<G> & ForEach<G>,
): <A>(kind: Kind<F, Kind<G, Kind<F, Kind<G, A>>>>) => Kind<F, Kind<G, A>> {
  return flow(F.map(flow(sequence(G)(F), F.map(G.flatten))), F.flatten)
}
/* #endregion */
