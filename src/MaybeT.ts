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
} from './HKT'
import { Maybe } from './Maybe'

export type MaybeT<T extends HKT, A> = Kind<T, Maybe<A>>

export type MaybeT1<T extends HKT, A> = Kind<T, Maybe<A>>

export type MaybeT2<T extends HKT2, E, A> = Kind2<T, E, Maybe<A>>

export type MaybeT3<T extends HKT3, R, E, A> = Kind3<T, R, E, Maybe<A>>

export type MaybeT4<T extends HKT4, S, R, E, A> = Kind4<T, S, R, E, Maybe<A>>

export type MaybeT5<T extends HKT5, U, S, R, E, A> = Kind5<T, U, S, R, E, Maybe<A>>

export type MaybeT6<T extends HKT6, V, U, S, R, E, A> = Kind6<T, V, U, S, R, E, Maybe<A>>

export type MaybeT7<T extends HKT7, W, V, U, S, R, E, A> = Kind7<T, W, V, U, S, R, E, Maybe<A>>

export type MaybeT8<T extends HKT8, X, W, V, U, S, R, E, A> = Kind8<
  T,
  X,
  W,
  V,
  U,
  S,
  R,
  E,
  Maybe<A>
>

export type MaybeT9<T extends HKT9, Y, X, W, V, U, S, R, E, A> = Kind9<
  T,
  Y,
  X,
  W,
  V,
  U,
  S,
  R,
  E,
  Maybe<A>
>

export type MaybeT10<T extends HKT10, Z, Y, X, W, V, U, S, R, E, A> = Kind10<
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
  Maybe<A>
>
