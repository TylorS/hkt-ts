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
import { Maybe } from '../Maybe'

export interface Compact<T extends HKT> {
  readonly compact: <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A>
}

export interface Compact1<T extends HKT> {
  readonly compact: <A>(kind: Kind<T, Maybe<A>>) => Kind<T, A>
}

export interface Compact2<T extends HKT2> {
  readonly compact: <E, A>(kind: Kind2<T, E, Maybe<A>>) => Kind2<T, E, A>
}

export interface Compact3<T extends HKT3> {
  readonly compact: <R, E, A>(kind: Kind3<T, R, E, Maybe<A>>) => Kind3<T, R, E, A>
}

export interface Compact4<T extends HKT4> {
  readonly compact: <S, R, E, A>(kind: Kind4<T, S, R, E, Maybe<A>>) => Kind4<T, S, R, E, A>
}

export interface Compact5<T extends HKT5> {
  readonly compact: <U, S, R, E, A>(kind: Kind5<T, U, S, R, E, Maybe<A>>) => Kind5<T, U, S, R, E, A>
}

export interface Compact6<T extends HKT6> {
  readonly compact: <V, U, S, R, E, A>(
    kind: Kind6<T, V, U, S, R, E, Maybe<A>>,
  ) => Kind6<T, V, U, S, R, E, A>
}

export interface Compact7<T extends HKT7> {
  readonly compact: <W, V, U, S, R, E, A>(
    kind: Kind7<T, W, V, U, S, R, E, Maybe<A>>,
  ) => Kind7<T, W, V, U, S, R, E, A>
}

export interface Compact8<T extends HKT8> {
  readonly compact: <X, W, V, U, S, R, E, A>(
    kind: Kind8<T, X, W, V, U, S, R, E, Maybe<A>>,
  ) => Kind8<T, X, W, V, U, S, R, E, A>
}

export interface Compact9<T extends HKT9> {
  readonly compact: <Y, X, W, V, U, S, R, E, A>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, Maybe<A>>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, A>
}

export interface Compact10<T extends HKT10> {
  readonly compact: <Z, Y, X, W, V, U, S, R, E, A>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, Maybe<A>>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>
}
