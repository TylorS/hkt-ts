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
import { Either } from './Either'
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

export interface AssociativeEither<T extends HKT> extends Covariant<T> {
  readonly either: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, Either<A, B>>
}

export interface AssociativeEither1<T extends HKT> extends Covariant1<T> {
  readonly either: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, Either<A, B>>
}

export interface AssociativeEither2<T extends HKT2> extends Covariant2<T> {
  readonly either: <E, B>(
    second: Kind2<T, E, B>,
  ) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, Either<A, B>>
}

export interface AssociativeEither3<T extends HKT3> extends Covariant3<T> {
  readonly either: <R, E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, Either<A, B>>
}

export interface AssociativeEither4<T extends HKT4> extends Covariant4<T> {
  readonly either: <S, R, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, Either<A, B>>
}

export interface AssociativeEither5<T extends HKT5> extends Covariant5<T> {
  readonly either: <U, S, R, E, B>(
    second: Kind5<T, U, S, R, E, B>,
  ) => <A>(first: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither6<T extends HKT6> extends Covariant6<T> {
  readonly either: <V, U, S, R, E, B>(
    second: Kind6<T, V, U, S, R, E, B>,
  ) => <A>(first: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither7<T extends HKT7> extends Covariant7<T> {
  readonly either: <W, V, U, S, R, E, B>(
    second: Kind7<T, W, V, U, S, R, E, B>,
  ) => <A>(first: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither8<T extends HKT8> extends Covariant8<T> {
  readonly either: <X, W, V, U, S, R, E, B>(
    second: Kind8<T, X, W, V, U, S, R, E, B>,
  ) => <A>(first: Kind8<T, X, W, V, U, S, R, E, A>) => Kind8<T, X, W, V, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither9<T extends HKT9> extends Covariant9<T> {
  readonly either: <Y, X, W, V, U, S, R, E, B>(
    second: Kind9<T, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, Either<A, B>>
}

export interface AssociativeEither10<T extends HKT10> extends Covariant10<T> {
  readonly either: <Z, Y, X, W, V, U, S, R, E, B>(
    second: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, Either<A, B>>
}
