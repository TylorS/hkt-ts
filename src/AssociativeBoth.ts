import { Associative } from './Associative'
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
  Params,
} from './HKT'
import { pipe } from './function'

export interface AssociativeBoth<T extends HKT> extends Covariant<T> {
  readonly both: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, readonly [A, B]>
}

export interface AssociativeBoth1<T extends HKT> extends Covariant1<T> {
  readonly both: <B>(second: Kind<T, B>) => <A>(first: Kind<T, A>) => Kind<T, readonly [A, B]>
}

export interface AssociativeBoth2<T extends HKT2> extends Covariant2<T> {
  readonly both: <E, B>(
    second: Kind2<T, E, B>,
  ) => <A>(first: Kind2<T, E, A>) => Kind2<T, E, readonly [A, B]>
}

export interface AssociativeBoth3<T extends HKT3> extends Covariant3<T> {
  readonly both: <R, E, B>(
    second: Kind3<T, R, E, B>,
  ) => <A>(first: Kind3<T, R, E, A>) => Kind3<T, R, E, readonly [A, B]>
}

export interface AssociativeBoth4<T extends HKT4> extends Covariant4<T> {
  readonly both: <S, R, E, B>(
    second: Kind4<T, S, R, E, B>,
  ) => <A>(first: Kind4<T, S, R, E, A>) => Kind4<T, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth5<T extends HKT5> extends Covariant5<T> {
  readonly both: <U, S, R, E, B>(
    second: Kind5<T, U, S, R, E, B>,
  ) => <A>(first: Kind5<T, U, S, R, E, A>) => Kind5<T, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth6<T extends HKT6> extends Covariant6<T> {
  readonly both: <V, U, S, R, E, B>(
    second: Kind6<T, V, U, S, R, E, B>,
  ) => <A>(first: Kind6<T, V, U, S, R, E, A>) => Kind6<T, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth7<T extends HKT7> extends Covariant7<T> {
  readonly both: <W, V, U, S, R, E, B>(
    second: Kind7<T, W, V, U, S, R, E, B>,
  ) => <A>(first: Kind7<T, W, V, U, S, R, E, A>) => Kind7<T, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth8<T extends HKT8> extends Covariant8<T> {
  readonly both: <X, W, V, U, S, R, E, B>(
    second: Kind8<T, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind8<T, X, W, V, U, S, R, E, A>,
  ) => Kind8<T, X, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth9<T extends HKT9> extends Covariant9<T> {
  readonly both: <Y, X, W, V, U, S, R, E, B>(
    second: Kind9<T, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind9<T, Y, X, W, V, U, S, R, E, A>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, readonly [A, B]>
}

export interface AssociativeBoth10<T extends HKT10> extends Covariant10<T> {
  readonly both: <Z, Y, X, W, V, U, S, R, E, B>(
    second: Kind10<T, Z, Y, X, W, V, U, S, R, E, B>,
  ) => <A>(
    first: Kind10<T, Z, Y, X, W, V, U, S, R, E, A>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, readonly [A, B]>
}

export function makeAssociative<T extends HKT10>(
  AB: AssociativeBoth10<T>,
): <
  A,
  Z = T['defaults'][Params.Z],
  Y = T['defaults'][Params.Y],
  X = T['defaults'][Params.X],
  W = T['defaults'][Params.W],
  V = T['defaults'][Params.V],
  U = T['defaults'][Params.U],
  S = T['defaults'][Params.S],
  R = T['defaults'][Params.R],
  E = T['defaults'][Params.E],
>(
  A: Associative<A>,
) => Associative<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>

export function makeAssociative<T extends HKT9>(
  AB: AssociativeBoth9<T>,
): <
  A,
  Y = T['defaults'][Params.Y],
  X = T['defaults'][Params.X],
  W = T['defaults'][Params.W],
  V = T['defaults'][Params.V],
  U = T['defaults'][Params.U],
  S = T['defaults'][Params.S],
  R = T['defaults'][Params.R],
  E = T['defaults'][Params.E],
>(
  A: Associative<A>,
) => Associative<Kind9<T, Y, X, W, V, U, S, R, E, A>>

export function makeAssociative<T extends HKT8>(
  AB: AssociativeBoth8<T>,
): <
  A,
  X = T['defaults'][Params.X],
  W = T['defaults'][Params.W],
  V = T['defaults'][Params.V],
  U = T['defaults'][Params.U],
  S = T['defaults'][Params.S],
  R = T['defaults'][Params.R],
  E = T['defaults'][Params.E],
>(
  A: Associative<A>,
) => Associative<Kind8<T, X, W, V, U, S, R, E, A>>

export function makeAssociative<T extends HKT7>(
  AB: AssociativeBoth7<T>,
): <
  A,
  W = T['defaults'][Params.W],
  V = T['defaults'][Params.V],
  U = T['defaults'][Params.U],
  S = T['defaults'][Params.S],
  R = T['defaults'][Params.R],
  E = T['defaults'][Params.E],
>(
  A: Associative<A>,
) => Associative<Kind7<T, W, V, U, S, R, E, A>>

export function makeAssociative<T extends HKT6>(
  AB: AssociativeBoth6<T>,
): <
  A,
  V = T['defaults'][Params.V],
  U = T['defaults'][Params.U],
  S = T['defaults'][Params.S],
  R = T['defaults'][Params.R],
  E = T['defaults'][Params.E],
>(
  A: Associative<A>,
) => Associative<Kind6<T, V, U, S, R, E, A>>

export function makeAssociative<T extends HKT5>(
  AB: AssociativeBoth5<T>,
): <
  A,
  U = T['defaults'][Params.U],
  S = T['defaults'][Params.S],
  R = T['defaults'][Params.R],
  E = T['defaults'][Params.E],
>(
  A: Associative<A>,
) => Associative<Kind5<T, U, S, R, E, A>>

export function makeAssociative<T extends HKT4>(
  AB: AssociativeBoth4<T>,
): <A, S = T['defaults'][Params.S], R = T['defaults'][Params.R], E = T['defaults'][Params.E]>(
  A: Associative<A>,
) => Associative<Kind4<T, S, R, E, A>>

export function makeAssociative<T extends HKT3>(
  AB: AssociativeBoth3<T>,
): <A, R = T['defaults'][Params.R], E = T['defaults'][Params.E]>(
  A: Associative<A>,
) => Associative<Kind3<T, R, E, A>>

export function makeAssociative<T extends HKT2>(
  AB: AssociativeBoth2<T>,
): <A, E = T['defaults'][Params.E]>(A: Associative<A>) => Associative<Kind2<T, E, A>>

export function makeAssociative<T extends HKT>(
  AB: AssociativeBoth1<T>,
): <A>(A: Associative<A>) => Associative<Kind<T, A>>

export function makeAssociative<T extends HKT>(
  AB: AssociativeBoth<T>,
): <A>(A: Associative<A>) => Associative<Kind<T, A>>

export function makeAssociative<T extends HKT>(
  AB: AssociativeBoth<T>,
): <A>(A: Associative<A>) => Associative<Kind<T, A>> {
  return (A) => ({
    concat: (f, s) =>
      pipe(
        f,
        AB.both(s),
        AB.map((values) => A.concat(...values)),
      ),
  })
}
