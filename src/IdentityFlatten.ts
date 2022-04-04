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

export interface IdentityFlatten<T extends HKT> {
  readonly flatten: <A>(kind: Kind<T, Kind<T, A>>) => Kind<T, A>
}

export interface IdentityFlatten1<T extends HKT> {
  readonly flatten: <A>(kind: Kind<T, Kind<T, A>>) => Kind<T, A>
}

export interface IdentityFlatten2<T extends HKT2> {
  readonly flatten: <E, A>(kind: Kind2<T, E, Kind2<T, E, A>>) => Kind2<T, E, A>
}

export interface IdentityFlatten3<T extends HKT3> {
  readonly flatten: <R, E, A>(kind: Kind3<T, R, E, Kind3<T, R, E, A>>) => Kind3<T, R, E, A>
}

export interface IdentityFlatten4<T extends HKT4> {
  readonly flatten: <S, R, E, A>(
    kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>,
  ) => Kind4<T, S, R, E, A>
}

export interface IdentityFlatten5<T extends HKT5> {
  readonly flatten: <U, S, R, E, A>(
    kind: Kind5<T, U, S, R, E, Kind5<T, U, S, R, E, A>>,
  ) => Kind5<T, U, S, R, E, A>
}

export interface IdentityFlatten6<T extends HKT6> {
  readonly flatten: <V, U, S, R, E, A>(
    kind: Kind6<T, V, U, S, R, E, Kind6<T, V, U, S, R, E, A>>,
  ) => Kind6<T, V, U, S, R, E, A>
}

export interface IdentityFlatten7<T extends HKT7> {
  readonly flatten: <W, V, U, S, R, E, A>(
    kind: Kind7<T, W, V, U, S, R, E, Kind7<T, W, V, U, S, R, E, A>>,
  ) => Kind7<T, W, V, U, S, R, E, A>
}

export interface IdentityFlatten8<T extends HKT8> {
  readonly flatten: <X, W, V, U, S, R, E, A>(
    kind: Kind8<T, X, W, V, U, S, R, E, Kind8<T, X, W, V, U, S, R, E, A>>,
  ) => Kind8<T, X, W, V, U, S, R, E, A>
}

export interface IdentityFlatten9<T extends HKT9> {
  readonly flatten: <Y, X, W, V, U, S, R, E, A>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, Kind9<T, Y, X, W, V, U, S, R, E, A>>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, A>
}

export interface IdentityFlatten10<T extends HKT10> {
  readonly flatten: <Z, Y, X, W, V, U, S, R, E, A>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>
}
