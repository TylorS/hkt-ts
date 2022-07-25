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
} from '../HKT.js'
import { Lazy, constant } from '../function.js'

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
} from './Covariant.js'
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

export function top<F extends HKT10, G extends HKT10>(
  F: Top10<F> & Covariant10<F>,
  G: Top10<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT9, G extends HKT10>(
  F: Top9<F> & Covariant9<F>,
  G: Top10<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT8, G extends HKT10>(
  F: Top8<F> & Covariant8<F>,
  G: Top10<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT7, G extends HKT10>(
  F: Top7<F> & Covariant7<F>,
  G: Top10<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT6, G extends HKT10>(
  F: Top6<F> & Covariant6<F>,
  G: Top10<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT5, G extends HKT10>(
  F: Top5<F> & Covariant5<F>,
  G: Top10<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, E1, G extends HKT10>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, E1, G extends HKT10>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, E1, G extends HKT10>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, G extends HKT10>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, G extends HKT10>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, G extends HKT10>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT10>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, G extends HKT10>(
  F: Top4<F> & Covariant4<F>,
  G: Top10<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, E1, G extends HKT10>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top10<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, E1, G extends HKT10>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top10<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, G extends HKT10>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top10<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, G extends HKT10>(
  F: Top3<F> & Covariant3<F>,
  G: Top10<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, E1, G extends HKT10>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top10<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, G extends HKT10>(
  F: Top2<F> & Covariant2<F>,
  G: Top10<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT10>(
  F: Top1<F> & Covariant1<F>,
  G: Top10<G>,
): Kind<
  F,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT10>(
  F: Top<F> & Covariant<F>,
  G: Top10<G>,
): Kind<
  F,
  Kind10<
    G,
    DefaultOf<G, Params.Z>,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT10, G extends HKT9>(
  F: Top10<F> & Covariant10<F>,
  G: Top9<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT9, G extends HKT9>(
  F: Top9<F> & Covariant9<F>,
  G: Top9<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT8, G extends HKT9>(
  F: Top8<F> & Covariant8<F>,
  G: Top9<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT7, G extends HKT9>(
  F: Top7<F> & Covariant7<F>,
  G: Top9<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT6, G extends HKT9>(
  F: Top6<F> & Covariant6<F>,
  G: Top9<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT5, G extends HKT9>(
  F: Top5<F> & Covariant5<F>,
  G: Top9<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, E1, G extends HKT9>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, E1, G extends HKT9>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, E1, G extends HKT9>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, G extends HKT9>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, G extends HKT9>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, G extends HKT9>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT9>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, G extends HKT9>(
  F: Top4<F> & Covariant4<F>,
  G: Top9<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, E1, G extends HKT9>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top9<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, E1, G extends HKT9>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top9<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, G extends HKT9>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top9<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, G extends HKT9>(
  F: Top3<F> & Covariant3<F>,
  G: Top9<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, E1, G extends HKT9>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top9<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, G extends HKT9>(
  F: Top2<F> & Covariant2<F>,
  G: Top9<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT9>(
  F: Top1<F> & Covariant1<F>,
  G: Top9<G>,
): Kind<
  F,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT9>(
  F: Top<F> & Covariant<F>,
  G: Top9<G>,
): Kind<
  F,
  Kind9<
    G,
    DefaultOf<G, Params.Y>,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT10, G extends HKT8>(
  F: Top10<F> & Covariant10<F>,
  G: Top8<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT9, G extends HKT8>(
  F: Top9<F> & Covariant9<F>,
  G: Top8<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT8, G extends HKT8>(
  F: Top8<F> & Covariant8<F>,
  G: Top8<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT7, G extends HKT8>(
  F: Top7<F> & Covariant7<F>,
  G: Top8<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT6, G extends HKT8>(
  F: Top6<F> & Covariant6<F>,
  G: Top8<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT5, G extends HKT8>(
  F: Top5<F> & Covariant5<F>,
  G: Top8<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, E1, G extends HKT8>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, E1, G extends HKT8>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, E1, G extends HKT8>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, G extends HKT8>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, G extends HKT8>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, G extends HKT8>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT8>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, G extends HKT8>(
  F: Top4<F> & Covariant4<F>,
  G: Top8<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, E1, G extends HKT8>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top8<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, E1, G extends HKT8>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top8<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, G extends HKT8>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top8<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, G extends HKT8>(
  F: Top3<F> & Covariant3<F>,
  G: Top8<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, E1, G extends HKT8>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top8<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, G extends HKT8>(
  F: Top2<F> & Covariant2<F>,
  G: Top8<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT8>(
  F: Top1<F> & Covariant1<F>,
  G: Top8<G>,
): Kind<
  F,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT8>(
  F: Top<F> & Covariant<F>,
  G: Top8<G>,
): Kind<
  F,
  Kind8<
    G,
    DefaultOf<G, Params.X>,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT10, G extends HKT7>(
  F: Top10<F> & Covariant10<F>,
  G: Top7<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT9, G extends HKT7>(
  F: Top9<F> & Covariant9<F>,
  G: Top7<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT8, G extends HKT7>(
  F: Top8<F> & Covariant8<F>,
  G: Top7<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT7, G extends HKT7>(
  F: Top7<F> & Covariant7<F>,
  G: Top7<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT6, G extends HKT7>(
  F: Top6<F> & Covariant6<F>,
  G: Top7<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT5, G extends HKT7>(
  F: Top5<F> & Covariant5<F>,
  G: Top7<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, E1, G extends HKT7>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, E1, G extends HKT7>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, E1, G extends HKT7>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, G extends HKT7>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, G extends HKT7>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, G extends HKT7>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT7>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, G extends HKT7>(
  F: Top4<F> & Covariant4<F>,
  G: Top7<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, E1, G extends HKT7>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top7<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, E1, G extends HKT7>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top7<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, G extends HKT7>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top7<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, G extends HKT7>(
  F: Top3<F> & Covariant3<F>,
  G: Top7<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, E1, G extends HKT7>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top7<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, G extends HKT7>(
  F: Top2<F> & Covariant2<F>,
  G: Top7<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT7>(
  F: Top1<F> & Covariant1<F>,
  G: Top7<G>,
): Kind<
  F,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT7>(
  F: Top<F> & Covariant<F>,
  G: Top7<G>,
): Kind<
  F,
  Kind7<
    G,
    DefaultOf<G, Params.W>,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT10, G extends HKT6>(
  F: Top10<F> & Covariant10<F>,
  G: Top6<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT9, G extends HKT6>(
  F: Top9<F> & Covariant9<F>,
  G: Top6<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT8, G extends HKT6>(
  F: Top8<F> & Covariant8<F>,
  G: Top6<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT7, G extends HKT6>(
  F: Top7<F> & Covariant7<F>,
  G: Top6<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT6, G extends HKT6>(
  F: Top6<F> & Covariant6<F>,
  G: Top6<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT5, G extends HKT6>(
  F: Top5<F> & Covariant5<F>,
  G: Top6<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, E1, G extends HKT6>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, E1, G extends HKT6>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, E1, G extends HKT6>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, G extends HKT6>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, G extends HKT6>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, G extends HKT6>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT6>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, G extends HKT6>(
  F: Top4<F> & Covariant4<F>,
  G: Top6<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, E1, G extends HKT6>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top6<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, E1, G extends HKT6>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top6<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, G extends HKT6>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top6<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, G extends HKT6>(
  F: Top3<F> & Covariant3<F>,
  G: Top6<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, E1, G extends HKT6>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top6<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, G extends HKT6>(
  F: Top2<F> & Covariant2<F>,
  G: Top6<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT6>(
  F: Top1<F> & Covariant1<F>,
  G: Top6<G>,
): Kind<
  F,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT6>(
  F: Top<F> & Covariant<F>,
  G: Top6<G>,
): Kind<
  F,
  Kind6<
    G,
    DefaultOf<G, Params.V>,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT10, G extends HKT5>(
  F: Top10<F> & Covariant10<F>,
  G: Top5<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT9, G extends HKT5>(
  F: Top9<F> & Covariant9<F>,
  G: Top5<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT8, G extends HKT5>(
  F: Top8<F> & Covariant8<F>,
  G: Top5<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT7, G extends HKT5>(
  F: Top7<F> & Covariant7<F>,
  G: Top5<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT6, G extends HKT5>(
  F: Top6<F> & Covariant6<F>,
  G: Top5<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT5, G extends HKT5>(
  F: Top5<F> & Covariant5<F>,
  G: Top5<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, E1, G extends HKT5>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, E1, G extends HKT5>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, E1, G extends HKT5>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, R1, G extends HKT5>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, G extends HKT5>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, G extends HKT5>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT5>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT4, G extends HKT5>(
  F: Top4<F> & Covariant4<F>,
  G: Top5<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, E1, G extends HKT5>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top5<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, E1, G extends HKT5>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top5<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, R1, G extends HKT5>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top5<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT3, G extends HKT5>(
  F: Top3<F> & Covariant3<F>,
  G: Top5<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, E1, G extends HKT5>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top5<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT2, G extends HKT5>(
  F: Top2<F> & Covariant2<F>,
  G: Top5<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT5>(
  F: Top1<F> & Covariant1<F>,
  G: Top5<G>,
): Kind<
  F,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT, G extends HKT5>(
  F: Top<F> & Covariant<F>,
  G: Top5<G>,
): Kind<
  F,
  Kind5<
    G,
    DefaultOf<G, Params.U>,
    DefaultOf<G, Params.S>,
    DefaultOf<G, Params.R>,
    DefaultOf<G, Params.E>,
    unknown
  >
>

export function top<F extends HKT10, G extends HKT4, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Top4EC<G, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT4, R2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Top4REC<G, R2, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT4, S2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Top4SEC<G, S2, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT4, R2>(
  F: Top10<F> & Covariant10<F>,
  G: Top4RC<G, R2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT4, S2, R2>(
  F: Top10<F> & Covariant10<F>,
  G: Top4SRC<G, S2, R2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT4, S2>(
  F: Top10<F> & Covariant10<F>,
  G: Top4SC<G, S2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT4, S2, R2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT4>(
  F: Top10<F> & Covariant10<F>,
  G: Top4<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT4, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Top4EC<G, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT4, R2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Top4REC<G, R2, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT4, S2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Top4SEC<G, S2, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT4, R2>(
  F: Top9<F> & Covariant9<F>,
  G: Top4RC<G, R2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT4, S2, R2>(
  F: Top9<F> & Covariant9<F>,
  G: Top4SRC<G, S2, R2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT4, S2>(
  F: Top9<F> & Covariant9<F>,
  G: Top4SC<G, S2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT4, S2, R2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT4>(
  F: Top9<F> & Covariant9<F>,
  G: Top4<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT4, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Top4EC<G, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT4, R2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Top4REC<G, R2, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT4, S2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Top4SEC<G, S2, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT4, R2>(
  F: Top8<F> & Covariant8<F>,
  G: Top4RC<G, R2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT4, S2, R2>(
  F: Top8<F> & Covariant8<F>,
  G: Top4SRC<G, S2, R2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT4, S2>(
  F: Top8<F> & Covariant8<F>,
  G: Top4SC<G, S2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT4, S2, R2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT4>(
  F: Top8<F> & Covariant8<F>,
  G: Top4<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT4, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Top4EC<G, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT4, R2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Top4REC<G, R2, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT4, S2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Top4SEC<G, S2, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT4, R2>(
  F: Top7<F> & Covariant7<F>,
  G: Top4RC<G, R2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT4, S2, R2>(
  F: Top7<F> & Covariant7<F>,
  G: Top4SRC<G, S2, R2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT4, S2>(
  F: Top7<F> & Covariant7<F>,
  G: Top4SC<G, S2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT4, S2, R2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT4>(
  F: Top7<F> & Covariant7<F>,
  G: Top4<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT4, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Top4EC<G, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT4, R2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Top4REC<G, R2, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT4, S2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Top4SEC<G, S2, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT4, R2>(
  F: Top6<F> & Covariant6<F>,
  G: Top4RC<G, R2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT4, S2, R2>(
  F: Top6<F> & Covariant6<F>,
  G: Top4SRC<G, S2, R2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT4, S2>(
  F: Top6<F> & Covariant6<F>,
  G: Top4SC<G, S2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT4, S2, R2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT4>(
  F: Top6<F> & Covariant6<F>,
  G: Top4<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT4, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Top4EC<G, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT4, R2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Top4REC<G, R2, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT4, S2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Top4SEC<G, S2, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT4, R2>(
  F: Top5<F> & Covariant5<F>,
  G: Top4RC<G, R2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT4, S2, R2>(
  F: Top5<F> & Covariant5<F>,
  G: Top4SRC<G, S2, R2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT4, S2>(
  F: Top5<F> & Covariant5<F>,
  G: Top4SC<G, S2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT4, S2, R2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT4>(
  F: Top5<F> & Covariant5<F>,
  G: Top4<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, E1, G extends HKT4, E2>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top4EC<G, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, R1, E1, G extends HKT4, R2, E2>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top4REC<G, R2, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, E1, G extends HKT4, S2, E2>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top4SEC<G, S2, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, R1, G extends HKT4, R2>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top4RC<G, R2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, R1, G extends HKT4, S2, R2>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top4SRC<G, S2, R2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, G extends HKT4, S2>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top4SC<G, S2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT4, S2, R2, E2>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, G extends HKT4>(
  F: Top4<F> & Covariant4<F>,
  G: Top4<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, G extends HKT4, E2>(
  F: Top3<F> & Covariant3<F>,
  G: Top4EC<G, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, G extends HKT4, R2, E2>(
  F: Top3<F> & Covariant3<F>,
  G: Top4REC<G, R2, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, G extends HKT4, S2, E2>(
  F: Top3<F> & Covariant3<F>,
  G: Top4SEC<G, S2, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, G extends HKT4, R2>(
  F: Top3<F> & Covariant3<F>,
  G: Top4RC<G, R2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, E1, G extends HKT4, S2, R2>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top4SRC<G, S2, R2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, R1, E1, G extends HKT4, S2>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top4SC<G, S2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, R1, G extends HKT4, S2, R2, E2>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, G extends HKT4>(
  F: Top3<F> & Covariant3<F>,
  G: Top4<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT4, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Top4EC<G, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT4, R2, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Top4REC<G, R2, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT4, S2, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Top4SEC<G, S2, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT4, R2>(
  F: Top2<F> & Covariant2<F>,
  G: Top4RC<G, R2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT4, S2, R2>(
  F: Top2<F> & Covariant2<F>,
  G: Top4SRC<G, S2, R2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT4, S2>(
  F: Top2<F> & Covariant2<F>,
  G: Top4SC<G, S2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, E1, G extends HKT4, S2, R2, E2>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT4>(
  F: Top2<F> & Covariant2<F>,
  G: Top4<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Top4EC<G, E2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, R2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Top4REC<G, R2, E2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, S2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Top4SEC<G, S2, E2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, R2>(
  F: Top1<F> & Covariant1<F>,
  G: Top4RC<G, R2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, S2, R2>(
  F: Top1<F> & Covariant1<F>,
  G: Top4SRC<G, S2, R2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, S2>(
  F: Top1<F> & Covariant1<F>,
  G: Top4SC<G, S2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4>(
  F: Top1<F> & Covariant1<F>,
  G: Top4<G>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, E2>(
  F: Top<F> & Covariant<F>,
  G: Top4EC<G, E2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, R2, E2>(
  F: Top<F> & Covariant<F>,
  G: Top4REC<G, R2, E2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, S2, E2>(
  F: Top<F> & Covariant<F>,
  G: Top4SEC<G, S2, E2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, R2>(
  F: Top<F> & Covariant<F>,
  G: Top4RC<G, R2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, S2, R2>(
  F: Top<F> & Covariant<F>,
  G: Top4SRC<G, S2, R2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, S2>(
  F: Top<F> & Covariant<F>,
  G: Top4SC<G, S2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4, S2, R2, E2>(
  F: Top<F> & Covariant<F>,
  G: Top4SREC<G, S2, R2, E2>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT4>(
  F: Top<F> & Covariant<F>,
  G: Top4<G>,
): Kind<
  F,
  Kind4<G, DefaultOf<G, Params.S>, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT3, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Top3EC<G, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT3, R2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Top3REC<G, R2, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT3, R2>(
  F: Top10<F> & Covariant10<F>,
  G: Top3RC<G, R2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT3>(
  F: Top10<F> & Covariant10<F>,
  G: Top3<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT3, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Top3EC<G, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT3, R2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Top3REC<G, R2, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT3, R2>(
  F: Top9<F> & Covariant9<F>,
  G: Top3RC<G, R2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT3>(
  F: Top9<F> & Covariant9<F>,
  G: Top3<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT3, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Top3EC<G, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT3, R2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Top3REC<G, R2, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT3, R2>(
  F: Top8<F> & Covariant8<F>,
  G: Top3RC<G, R2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT3>(
  F: Top8<F> & Covariant8<F>,
  G: Top3<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT3, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Top3EC<G, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT3, R2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Top3REC<G, R2, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT3, R2>(
  F: Top7<F> & Covariant7<F>,
  G: Top3RC<G, R2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT3>(
  F: Top7<F> & Covariant7<F>,
  G: Top3<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT3, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Top3EC<G, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT3, R2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Top3REC<G, R2, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT3, R2>(
  F: Top6<F> & Covariant6<F>,
  G: Top3RC<G, R2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT3>(
  F: Top6<F> & Covariant6<F>,
  G: Top3<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT3, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Top3EC<G, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT3, R2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Top3REC<G, R2, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT3, R2>(
  F: Top5<F> & Covariant5<F>,
  G: Top3RC<G, R2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT3>(
  F: Top5<F> & Covariant5<F>,
  G: Top3<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, E1, G extends HKT3>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, R1, E1, G extends HKT3>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, E1, G extends HKT3>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, R1, G extends HKT3>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, R1, G extends HKT3, E2>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top3EC<G, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, G extends HKT3, R2, E2>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top3REC<G, R2, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT3, R2>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top3RC<G, R2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, G extends HKT3>(
  F: Top4<F> & Covariant4<F>,
  G: Top3<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, E1, G extends HKT3, E2>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top3EC<G, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, R1, E1, G extends HKT3, R2, E2>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top3REC<G, R2, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, R1, G extends HKT3, R2>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top3RC<G, R2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, G extends HKT3>(
  F: Top3<F> & Covariant3<F>,
  G: Top3<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT3, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Top3EC<G, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT3, R2, E2>(
  F: Top2<F> & Covariant2<F>,
  G: Top3REC<G, R2, E2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, E1, G extends HKT3, R2>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top3RC<G, R2>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, G extends HKT3>(
  F: Top2<F> & Covariant2<F>,
  G: Top3<G>,
): Kind2<
  F,
  DefaultOf<F, Params.E>,
  Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT, G extends HKT3, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Top3EC<G, E2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT3, R2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Top3REC<G, R2, E2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT3, R2>(
  F: Top1<F> & Covariant1<F>,
  G: Top3RC<G, R2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT3>(
  F: Top1<F> & Covariant1<F>,
  G: Top3<G>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT3, E2>(
  F: Top<F> & Covariant<F>,
  G: Top3EC<G, E2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT3, R2, E2>(
  F: Top<F> & Covariant<F>,
  G: Top3REC<G, R2, E2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT3, R2>(
  F: Top<F> & Covariant<F>,
  G: Top3RC<G, R2>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT3>(
  F: Top<F> & Covariant<F>,
  G: Top3<G>,
): Kind<F, Kind3<G, DefaultOf<G, Params.R>, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT10, G extends HKT2, E2>(
  F: Top10<F> & Covariant10<F>,
  G: Top2EC<G, E2>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT10, G extends HKT2>(
  F: Top10<F> & Covariant10<F>,
  G: Top2<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT2, E2>(
  F: Top9<F> & Covariant9<F>,
  G: Top2EC<G, E2>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT9, G extends HKT2>(
  F: Top9<F> & Covariant9<F>,
  G: Top2<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT2, E2>(
  F: Top8<F> & Covariant8<F>,
  G: Top2EC<G, E2>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT8, G extends HKT2>(
  F: Top8<F> & Covariant8<F>,
  G: Top2<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT2, E2>(
  F: Top7<F> & Covariant7<F>,
  G: Top2EC<G, E2>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT7, G extends HKT2>(
  F: Top7<F> & Covariant7<F>,
  G: Top2<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT2, E2>(
  F: Top6<F> & Covariant6<F>,
  G: Top2EC<G, E2>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT6, G extends HKT2>(
  F: Top6<F> & Covariant6<F>,
  G: Top2<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT2, E2>(
  F: Top5<F> & Covariant5<F>,
  G: Top2EC<G, E2>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT5, G extends HKT2>(
  F: Top5<F> & Covariant5<F>,
  G: Top2<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, E1, G extends HKT2>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, R1, E1, G extends HKT2>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, E1, G extends HKT2>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, R1, G extends HKT2>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, R1, G extends HKT2>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, G extends HKT2>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT2, E2>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top2EC<G, E2>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT4, G extends HKT2>(
  F: Top4<F> & Covariant4<F>,
  G: Top2<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, E1, G extends HKT2>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top2<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, R1, E1, G extends HKT2>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top2<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, R1, G extends HKT2, E2>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top2EC<G, E2>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT3, G extends HKT2>(
  F: Top3<F> & Covariant3<F>,
  G: Top2<G>,
): Kind3<
  F,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind2<G, DefaultOf<G, Params.E>, unknown>
>

export function top<F extends HKT2, E1, G extends HKT2, E2>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top2EC<G, E2>,
): Kind2<F, DefaultOf<F, Params.E>, Kind2<G, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT2, G extends HKT2>(
  F: Top2<F> & Covariant2<F>,
  G: Top2<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind2<G, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT2, E2>(
  F: Top1<F> & Covariant1<F>,
  G: Top2EC<G, E2>,
): Kind<F, Kind2<G, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT2>(
  F: Top1<F> & Covariant1<F>,
  G: Top2<G>,
): Kind<F, Kind2<G, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT2, E2>(
  F: Top<F> & Covariant<F>,
  G: Top2EC<G, E2>,
): Kind<F, Kind2<G, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT, G extends HKT2>(
  F: Top<F> & Covariant<F>,
  G: Top2<G>,
): Kind<F, Kind2<G, DefaultOf<G, Params.E>, unknown>>

export function top<F extends HKT10, G extends HKT>(
  F: Top10<F> & Covariant10<F>,
  G: Top1<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT9, G extends HKT>(
  F: Top9<F> & Covariant9<F>,
  G: Top1<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT8, G extends HKT>(
  F: Top8<F> & Covariant8<F>,
  G: Top1<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT7, G extends HKT>(
  F: Top7<F> & Covariant7<F>,
  G: Top1<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT6, G extends HKT>(
  F: Top6<F> & Covariant6<F>,
  G: Top1<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT5, G extends HKT>(
  F: Top5<F> & Covariant5<F>,
  G: Top1<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, E1, G extends HKT>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top1<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, R1, E1, G extends HKT>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top1<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, S1, E1, G extends HKT>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top1<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, R1, G extends HKT>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top1<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, S1, R1, G extends HKT>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top1<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, S1, G extends HKT>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top1<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top1<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, G extends HKT>(
  F: Top4<F> & Covariant4<F>,
  G: Top1<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT3, E1, G extends HKT>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top1<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT3, R1, E1, G extends HKT>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top1<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT3, R1, G extends HKT>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top1<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT3, G extends HKT>(
  F: Top3<F> & Covariant3<F>,
  G: Top1<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT2, E1, G extends HKT>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top1<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT2, G extends HKT>(
  F: Top2<F> & Covariant2<F>,
  G: Top1<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT, G extends HKT>(
  F: Top1<F> & Covariant1<F>,
  G: Top1<G>,
): Kind<F, Kind<G, unknown>>

export function top<F extends HKT, G extends HKT>(
  F: Top<F> & Covariant<F>,
  G: Top1<G>,
): Kind<F, Kind<G, unknown>>

export function top<F extends HKT10, G extends HKT>(
  F: Top10<F> & Covariant10<F>,
  G: Top<G>,
): Kind10<
  F,
  DefaultOf<F, Params.Z>,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT9, G extends HKT>(
  F: Top9<F> & Covariant9<F>,
  G: Top<G>,
): Kind9<
  F,
  DefaultOf<F, Params.Y>,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT8, G extends HKT>(
  F: Top8<F> & Covariant8<F>,
  G: Top<G>,
): Kind8<
  F,
  DefaultOf<F, Params.X>,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT7, G extends HKT>(
  F: Top7<F> & Covariant7<F>,
  G: Top<G>,
): Kind7<
  F,
  DefaultOf<F, Params.W>,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT6, G extends HKT>(
  F: Top6<F> & Covariant6<F>,
  G: Top<G>,
): Kind6<
  F,
  DefaultOf<F, Params.V>,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT5, G extends HKT>(
  F: Top5<F> & Covariant5<F>,
  G: Top<G>,
): Kind5<
  F,
  DefaultOf<F, Params.U>,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, E1, G extends HKT>(
  F: Top4EC<F, E1> & Covariant4EC<F, E1>,
  G: Top<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, R1, E1, G extends HKT>(
  F: Top4REC<F, R1, E1> & Covariant4REC<F, R1, E1>,
  G: Top<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, S1, E1, G extends HKT>(
  F: Top4SEC<F, S1, E1> & Covariant4SEC<F, S1, E1>,
  G: Top<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, R1, G extends HKT>(
  F: Top4RC<F, R1> & Covariant4RC<F, R1>,
  G: Top<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, S1, R1, G extends HKT>(
  F: Top4SRC<F, S1, R1> & Covariant4SRC<F, S1, R1>,
  G: Top<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, S1, G extends HKT>(
  F: Top4SC<F, S1> & Covariant4SC<F, S1>,
  G: Top<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, S1, R1, E1, G extends HKT>(
  F: Top4SREC<F, S1, R1, E1> & Covariant4SREC<F, S1, R1, E1>,
  G: Top<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT4, G extends HKT>(
  F: Top4<F> & Covariant4<F>,
  G: Top<G>,
): Kind4<
  F,
  DefaultOf<F, Params.S>,
  DefaultOf<F, Params.R>,
  DefaultOf<F, Params.E>,
  Kind<G, unknown>
>

export function top<F extends HKT3, E1, G extends HKT>(
  F: Top3EC<F, E1> & Covariant3EC<F, E1>,
  G: Top<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT3, R1, E1, G extends HKT>(
  F: Top3REC<F, R1, E1> & Covariant3REC<F, R1, E1>,
  G: Top<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT3, R1, G extends HKT>(
  F: Top3RC<F, R1> & Covariant3RC<F, R1>,
  G: Top<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT3, G extends HKT>(
  F: Top3<F> & Covariant3<F>,
  G: Top<G>,
): Kind3<F, DefaultOf<F, Params.R>, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT2, E1, G extends HKT>(
  F: Top2EC<F, E1> & Covariant2EC<F, E1>,
  G: Top<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT2, G extends HKT>(
  F: Top2<F> & Covariant2<F>,
  G: Top<G>,
): Kind2<F, DefaultOf<F, Params.E>, Kind<G, unknown>>

export function top<F extends HKT, G extends HKT>(
  F: Top1<F> & Covariant1<F>,
  G: Top<G>,
): Kind<F, Kind<G, unknown>>

export function top<F extends HKT, G extends HKT>(
  F: Top<F> & Covariant<F>,
  G: Top<G>,
): Kind<F, Kind<G, unknown>>

export function top<F extends HKT, G extends HKT>(
  F: Top<F> & Covariant<F>,
  G: Top<G>,
): Kind<F, Kind<G, unknown>> {
  return F.map(() => G.top)(F.top)
}
