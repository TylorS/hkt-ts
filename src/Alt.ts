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

export interface Alt<T extends HKT> extends Covariant<T> {
  readonly alt: <A>(second: () => Kind<T, A>) => <B>(first: Kind<T, B>) => Kind<T, B>
}

export interface Alt1<T extends HKT> extends Covariant1<T> {
  readonly alt: <A>(second: () => Kind<T, A>) => <B>(first: Kind<T, B>) => Kind<T, B>
}

export interface Alt2<T extends HKT2> extends Covariant2<T> {
  readonly alt: <E, A>(second: () => Kind2<T, E, A>) => <B>(first: Kind2<T, E, B>) => Kind2<T, E, B>
}

export interface Alt3<T extends HKT3> extends Covariant3<T> {
  readonly alt: <R, E, A>(
    second: () => Kind3<T, R, E, A>,
  ) => <B>(first: Kind3<T, R, E, B>) => Kind3<T, R, E, B>
}

export interface Alt4<T extends HKT4> extends Covariant4<T> {
  readonly alt: <S, R, E, A>(
    second: () => Kind4<T, S, R, E, A>,
  ) => <B>(first: Kind4<T, S, R, E, B>) => Kind4<T, S, R, E, B>
}

export interface Alt5<T extends HKT5> extends Covariant5<T> {
  readonly alt: <U, S, R, E, A>(
    second: () => Kind5<T, U, S, R, E, A>,
  ) => <B>(first: Kind5<T, U, S, R, E, B>) => Kind5<T, U, S, R, E, B>
}

export interface Alt6<T extends HKT6> extends Covariant6<T> {
  readonly alt: <V, U, S, R, E, A>(
    second: () => Kind6<T, V, U, S, R, E, A>,
  ) => <B>(first: Kind6<T, V, U, S, R, E, B>) => Kind6<T, V, U, S, R, E, B>
}

export interface Alt7<T extends HKT7> extends Covariant7<T> {
  readonly alt: <W, V, U, S, R, E, A>(
    second: () => Kind7<T, W, V, U, S, R, E, A>,
  ) => <B>(first: Kind7<T, W, V, U, S, R, E, B>) => Kind7<T, W, V, U, S, R, E, B>
}

export interface Alt8<T extends HKT8> extends Covariant8<T> {
  readonly alt: <X, W, V, U, S, R, E, A>(
    second: () => Kind8<T, X, W, V, U, S, R, E, A>,
  ) => <B>(first: Kind8<T, X, W, V, U, S, R, E, B>) => Kind8<T, X, W, V, U, S, R, E, B>
}

export interface Alt9<T extends HKT9> extends Covariant9<T> {
  readonly alt: <Y, X, W, V, U, S, R, E, A>(
    second: () => Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => <B>(first: Kind9<T, Y, X, W, V, U, S, R, E, B>) => Kind9<T, Y, X, W, V, U, S, R, E, B>
}

export interface Alt10<T extends HKT10> extends Covariant10<T> {
  readonly alt: <Z, Y, X, W, V, U, S, R, E, A>(
    second: () => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => <B>(
    first: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, B>
}
