import {
  DefaultOf,
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
  Params,
} from '../HKT'
import { Lazy, constant } from '../function'

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
export interface Top<T extends HKT> {
  readonly top: Kind<T, unknown>
}

export interface Top1<T extends HKT> {
  readonly top: Kind<T, unknown>
}

export interface Top2<T extends HKT2> {
  readonly top: Kind2<T, DefaultOf<T, Params.E>, unknown>
}

export interface Top2EC<T extends HKT2, E> {
  readonly top: Kind2<T, E, unknown>
}

export interface Top3<T extends HKT3> {
  readonly top: Kind3<T, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, unknown>
}

export interface Top3RC<T extends HKT3, R> {
  readonly top: Kind3<T, R, DefaultOf<T, Params.E>, unknown>
}

export interface Top3REC<T extends HKT3, R, E> {
  readonly top: Kind3<T, R, E, unknown>
}

export interface Top3EC<T extends HKT3, E> {
  readonly top: Kind3<T, DefaultOf<T, Params.R>, E, unknown>
}

export interface Top4<T extends HKT4> {
  readonly top: Kind4<
    T,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    unknown
  >
}

export interface Top4SREC<T extends HKT4, S, R, E> {
  readonly top: Kind4<T, S, R, E, unknown>
}

export interface Top4SC<T extends HKT4, S> {
  readonly top: Kind4<T, S, DefaultOf<T, Params.R>, DefaultOf<T, Params.E>, unknown>
}

export interface Top4SRC<T extends HKT4, S, R> {
  readonly top: Kind4<T, S, R, DefaultOf<T, Params.E>, unknown>
}

export interface Top4RC<T extends HKT4, R> {
  readonly top: Kind4<T, DefaultOf<T, Params.S>, R, DefaultOf<T, Params.E>, unknown>
}

export interface Top4SEC<T extends HKT4, S, E> {
  readonly top: Kind4<T, S, DefaultOf<T, Params.R>, E, unknown>
}

export interface Top4REC<T extends HKT4, R, E> {
  readonly top: Kind4<T, DefaultOf<T, Params.S>, R, E, unknown>
}

export interface Top4EC<T extends HKT4, E> {
  readonly top: Kind4<T, DefaultOf<T, Params.S>, DefaultOf<T, Params.R>, E, unknown>
}

export interface Top5<T extends HKT5> {
  readonly top: Kind5<
    T,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    unknown
  >
}

export interface Top6<T extends HKT6> {
  readonly top: Kind6<
    T,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    unknown
  >
}

export interface Top7<T extends HKT7> {
  readonly top: Kind7<
    T,
    DefaultOf<T, Params.W>,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    unknown
  >
}

export interface Top8<T extends HKT8> {
  readonly top: Kind8<
    T,
    DefaultOf<T, Params.X>,
    DefaultOf<T, Params.W>,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    unknown
  >
}

export interface Top9<T extends HKT9> {
  readonly top: Kind9<
    T,
    DefaultOf<T, Params.Y>,
    DefaultOf<T, Params.X>,
    DefaultOf<T, Params.W>,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    unknown
  >
}

export interface Top10<T extends HKT10> {
  readonly top: Kind10<
    T,
    DefaultOf<T, Params.Z>,
    DefaultOf<T, Params.Y>,
    DefaultOf<T, Params.X>,
    DefaultOf<T, Params.W>,
    DefaultOf<T, Params.V>,
    DefaultOf<T, Params.U>,
    DefaultOf<T, Params.S>,
    DefaultOf<T, Params.R>,
    DefaultOf<T, Params.E>,
    unknown
  >
}

export function makeFromValue<T extends HKT10>(
  T: Top10<T> & Covariant10<T>,
): <
  A,
  Z = DefaultOf<T, Params.Z>,
  Y = DefaultOf<T, Params.Y>,
  X = DefaultOf<T, Params.X>,
  W = DefaultOf<T, Params.W>,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  a: A,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function makeFromValue<T extends HKT9>(
  T: Top9<T> & Covariant9<T>,
): <
  A,
  Y = DefaultOf<T, Params.Y>,
  X = DefaultOf<T, Params.X>,
  W = DefaultOf<T, Params.W>,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  a: A,
) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function makeFromValue<T extends HKT8>(
  T: Top8<T> & Covariant8<T>,
): <
  A,
  X = DefaultOf<T, Params.X>,
  W = DefaultOf<T, Params.W>,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  a: A,
) => Kind8<T, X, W, V, U, S, R, E, A>

export function makeFromValue<T extends HKT7>(
  T: Top7<T> & Covariant7<T>,
): <
  A,
  W = DefaultOf<T, Params.W>,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  a: A,
) => Kind7<T, W, V, U, S, R, E, A>

export function makeFromValue<T extends HKT6>(
  T: Top6<T> & Covariant6<T>,
): <
  A,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  a: A,
) => Kind6<T, V, U, S, R, E, A>

export function makeFromValue<T extends HKT5>(
  T: Top5<T> & Covariant5<T>,
): <
  A,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  a: A,
) => Kind5<T, U, S, R, E, A>

export function makeFromValue<T extends HKT4>(
  T: Top4<T> & Covariant4<T>,
): <A, S = DefaultOf<T, Params.S>, R = DefaultOf<T, Params.R>, E = DefaultOf<T, Params.E>>(
  a: A,
) => Kind4<T, S, R, E, A>

export function makeFromValue<T extends HKT3>(
  T: Top3<T> & Covariant3<T>,
): <A, R = DefaultOf<T, Params.R>, E = DefaultOf<T, Params.E>>(a: A) => Kind3<T, R, E, A>

export function makeFromValue<T extends HKT2>(
  T: Top2<T> & Covariant2<T>,
): <A, E = DefaultOf<T, Params.E>>(a: A) => Kind2<T, E, A>

export function makeFromValue<T extends HKT>(T: Top1<T> & Covariant1<T>): <A>(a: A) => Kind<T, A>

export function makeFromValue<T extends HKT>(T: Top<T> & Covariant<T>): <A>(a: A) => Kind<T, A>

export function makeFromValue<T extends HKT>(T: Top<T> & Covariant<T>): <A>(a: A) => Kind<T, A>

export function makeFromValue<T extends HKT>(T: Top<T> & Covariant<T>): <A>(a: A) => Kind<T, A> {
  return (a) => T.map(constant(a))(T.top)
}

export function makeFromLazy<T extends HKT10>(
  T: Top10<T> & Covariant10<T>,
): <
  A,
  Z = DefaultOf<T, Params.Z>,
  Y = DefaultOf<T, Params.Y>,
  X = DefaultOf<T, Params.X>,
  W = DefaultOf<T, Params.W>,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  f: Lazy<A>,
) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>

export function makeFromLazy<T extends HKT9>(
  T: Top9<T> & Covariant9<T>,
): <
  A,
  Y = DefaultOf<T, Params.Y>,
  X = DefaultOf<T, Params.X>,
  W = DefaultOf<T, Params.W>,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  f: Lazy<A>,
) => Kind9<T, Y, X, W, V, U, S, R, E, A>

export function makeFromLazy<T extends HKT8>(
  T: Top8<T> & Covariant8<T>,
): <
  A,
  X = DefaultOf<T, Params.X>,
  W = DefaultOf<T, Params.W>,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  f: Lazy<A>,
) => Kind8<T, X, W, V, U, S, R, E, A>

export function makeFromLazy<T extends HKT7>(
  T: Top7<T> & Covariant7<T>,
): <
  A,
  W = DefaultOf<T, Params.W>,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  f: Lazy<A>,
) => Kind7<T, W, V, U, S, R, E, A>

export function makeFromLazy<T extends HKT6>(
  T: Top6<T> & Covariant6<T>,
): <
  A,
  V = DefaultOf<T, Params.V>,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  f: Lazy<A>,
) => Kind6<T, V, U, S, R, E, A>

export function makeFromLazy<T extends HKT5>(
  T: Top5<T> & Covariant5<T>,
): <
  A,
  U = DefaultOf<T, Params.U>,
  S = DefaultOf<T, Params.S>,
  R = DefaultOf<T, Params.R>,
  E = DefaultOf<T, Params.E>,
>(
  f: Lazy<A>,
) => Kind5<T, U, S, R, E, A>

export function makeFromLazy<T extends HKT4>(
  T: Top4<T> & Covariant4<T>,
): <A, S = DefaultOf<T, Params.S>, R = DefaultOf<T, Params.R>, E = DefaultOf<T, Params.E>>(
  f: Lazy<A>,
) => Kind4<T, S, R, E, A>

export function makeFromLazy<T extends HKT3>(
  T: Top3<T> & Covariant3<T>,
): <A, R = DefaultOf<T, Params.R>, E = DefaultOf<T, Params.E>>(f: Lazy<A>) => Kind3<T, R, E, A>

export function makeFromLazy<T extends HKT2>(
  T: Top2<T> & Covariant2<T>,
): <A, E = DefaultOf<T, Params.E>>(f: Lazy<A>) => Kind2<T, E, A>

export function makeFromLazy<T extends HKT>(
  T: Top1<T> & Covariant1<T>,
): <A>(f: Lazy<A>) => Kind<T, A>

export function makeFromLazy<T extends HKT>(T: Top<T> & Covariant<T>): <A>(f: Lazy<A>) => Kind<T, A>

export function makeFromLazy<T extends HKT>(
  T: Top<T> & Covariant<T>,
): <A>(f: Lazy<A>) => Kind<T, A> {
  return (f) => T.map(f)(T.top)
}
