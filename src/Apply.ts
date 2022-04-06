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

export interface Apply<T extends HKT> extends Covariant<T> {
  readonly ap: <A>(value: Kind<T, A>) => <B>(fn: Kind<T, (a: A) => B>) => Kind<T, B>
}

export interface Apply1<T extends HKT> extends Covariant1<T> {
  readonly ap: <A>(value: Kind<T, A>) => <B>(fn: Kind<T, (a: A) => B>) => Kind<T, B>
}

export interface Apply2<T extends HKT2> extends Covariant2<T> {
  readonly ap: <E, A>(value: Kind2<T, E, A>) => <B>(fn: Kind2<T, E, (a: A) => B>) => Kind2<T, E, B>
}

export interface Apply3<T extends HKT3> extends Covariant3<T> {
  readonly ap: <R, E, A>(
    value: Kind3<T, R, E, A>,
  ) => <B>(fn: Kind3<T, R, E, (a: A) => B>) => Kind3<T, R, E, B>
}

export interface Apply4<T extends HKT4> extends Covariant4<T> {
  readonly ap: <S, R, E, A>(
    value: Kind4<T, S, R, E, A>,
  ) => <B>(fn: Kind4<T, S, R, E, (a: A) => B>) => Kind4<T, S, R, E, B>
}

export interface Apply5<T extends HKT5> extends Covariant5<T> {
  readonly ap: <U, S, R, E, A>(
    value: Kind5<T, U, S, R, E, A>,
  ) => <B>(fn: Kind5<T, U, S, R, E, (a: A) => B>) => Kind5<T, U, S, R, E, B>
}

export interface Apply6<T extends HKT6> extends Covariant6<T> {
  readonly ap: <V, U, S, R, E, A>(
    value: Kind6<T, V, U, S, R, E, A>,
  ) => <B>(fn: Kind6<T, V, U, S, R, E, (a: A) => B>) => Kind6<T, V, U, S, R, E, B>
}

export interface Apply7<T extends HKT7> extends Covariant7<T> {
  readonly ap: <W, V, U, S, R, E, A>(
    value: Kind7<T, W, V, U, S, R, E, A>,
  ) => <B>(fn: Kind7<T, W, V, U, S, R, E, (a: A) => B>) => Kind7<T, W, V, U, S, R, E, B>
}

export interface Apply8<T extends HKT8> extends Covariant8<T> {
  readonly ap: <X, W, V, U, S, R, E, A>(
    value: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => <B>(fn: Kind8<T, X, W, V, U, S, R, E, (a: A) => B>) => Kind8<T, X, W, V, U, S, R, E, B>
}

export interface Apply9<T extends HKT9> extends Covariant9<T> {
  readonly ap: <Y, X, W, V, U, S, R, E, A>(
    value: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => <B>(fn: Kind9<T, Y, X, W, V, U, S, R, E, (a: A) => B>) => Kind9<T, Y, X, W, V, U, S, R, E, B>
}

export interface Apply10<T extends HKT10> extends Covariant10<T> {
  readonly ap: <Z, Y, X, W, V, U, S, R, E, A>(
    value: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => <B>(
    fn: Kind10<T, Z, Y, X, W, V, U, S, R, E, (a: A) => B>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
}
