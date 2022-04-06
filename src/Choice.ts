import {
  Divariant,
  Divariant10,
  Divariant2,
  Divariant3,
  Divariant4,
  Divariant5,
  Divariant6,
  Divariant7,
  Divariant8,
  Divariant9,
} from './Divariant'
import { Either } from './Either'
import {
  HKT10,
  HKT2,
  HKT3,
  HKT4,
  HKT5,
  HKT6,
  HKT7,
  HKT8,
  HKT9,
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

export interface Choice<T extends HKT2> extends Divariant<T> {
  readonly left: <A, B, C>(kind: Kind2<T, A, B>) => Kind2<T, Either<A, C>, Either<B, C>>
  readonly right: <A, B, C>(kind: Kind2<T, B, C>) => Kind2<T, Either<A, B>, Either<A, C>>
}

export interface Choice2<T extends HKT2> extends Divariant2<T> {
  readonly left: <A, B, C>(kind: Kind2<T, A, B>) => Kind2<T, Either<A, C>, Either<B, C>>
  readonly right: <A, B, C>(kind: Kind2<T, B, C>) => Kind2<T, Either<A, B>, Either<A, C>>
}

export interface Choice3<T extends HKT3> extends Divariant3<T> {
  readonly left: <R, A, B, C>(kind: Kind3<T, R, A, B>) => Kind3<T, R, Either<A, C>, Either<B, C>>
  readonly right: <R, A, B, C>(kind: Kind3<T, R, B, C>) => Kind3<T, R, Either<A, B>, Either<A, C>>
}

export interface Choice4<T extends HKT4> extends Divariant4<T> {
  readonly left: <S, R, A, B, C>(
    kind: Kind4<T, S, R, A, B>,
  ) => Kind4<T, S, R, Either<A, C>, Either<B, C>>
  readonly right: <S, R, A, B, C>(
    kind: Kind4<T, S, R, B, C>,
  ) => Kind4<T, S, R, Either<A, B>, Either<A, C>>
}

export interface Choice5<T extends HKT5> extends Divariant5<T> {
  readonly left: <U, S, R, A, B, C>(
    kind: Kind5<T, U, S, R, A, B>,
  ) => Kind5<T, U, S, R, Either<A, C>, Either<B, C>>
  readonly right: <U, S, R, A, B, C>(
    kind: Kind5<T, U, S, R, B, C>,
  ) => Kind5<T, U, S, R, Either<A, B>, Either<A, C>>
}

export interface Choice6<T extends HKT6> extends Divariant6<T> {
  readonly left: <V, U, S, R, A, B, C>(
    kind: Kind6<T, V, U, S, R, A, B>,
  ) => Kind6<T, V, U, S, R, Either<A, C>, Either<B, C>>
  readonly right: <V, U, S, R, A, B, C>(
    kind: Kind6<T, V, U, S, R, B, C>,
  ) => Kind6<T, V, U, S, R, Either<A, B>, Either<A, C>>
}

export interface Choice7<T extends HKT7> extends Divariant7<T> {
  readonly left: <W, V, U, S, R, A, B, C>(
    kind: Kind7<T, W, V, U, S, R, A, B>,
  ) => Kind7<T, W, V, U, S, R, Either<A, C>, Either<B, C>>
  readonly right: <W, V, U, S, R, A, B, C>(
    kind: Kind7<T, W, V, U, S, R, B, C>,
  ) => Kind7<T, W, V, U, S, R, Either<A, B>, Either<A, C>>
}

export interface Choice8<T extends HKT8> extends Divariant8<T> {
  readonly left: <X, W, V, U, S, R, A, B, C>(
    kind: Kind8<T, X, W, V, U, S, R, A, B>,
  ) => Kind8<T, X, W, V, U, S, R, Either<A, C>, Either<B, C>>
  readonly right: <X, W, V, U, S, R, A, B, C>(
    kind: Kind8<T, X, W, V, U, S, R, B, C>,
  ) => Kind8<T, X, W, V, U, S, R, Either<A, B>, Either<A, C>>
}

export interface Choice9<T extends HKT9> extends Divariant9<T> {
  readonly left: <Y, X, W, V, U, S, R, A, B, C>(
    kind: Kind9<T, Y, X, W, V, U, S, R, A, B>,
  ) => Kind9<T, Y, X, W, V, U, S, R, Either<A, C>, Either<B, C>>
  readonly right: <Y, X, W, V, U, S, R, A, B, C>(
    kind: Kind9<T, Y, X, W, V, U, S, R, B, C>,
  ) => Kind9<T, Y, X, W, V, U, S, R, Either<A, B>, Either<A, C>>
}

export interface Choice10<T extends HKT10> extends Divariant10<T> {
  readonly left: <Z, Y, X, W, V, U, S, R, A, B, C>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, A, B>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, Either<A, C>, Either<B, C>>
  readonly right: <Z, Y, X, W, V, U, S, R, A, B, C>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, B, C>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, Either<A, B>, Either<A, C>>
}
