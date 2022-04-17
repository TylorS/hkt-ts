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
} from '../../HKT'

import {
  AssociativeBoth,
  AssociativeBoth1,
  AssociativeBoth10,
  AssociativeBoth2,
  AssociativeBoth3,
  AssociativeBoth4,
  AssociativeBoth5,
  AssociativeBoth6,
  AssociativeBoth7,
  AssociativeBoth8,
  AssociativeBoth9,
} from './AssociativeBoth'
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

export interface AssociativeFlatten<T extends HKT> extends Covariant<T> {
  readonly flatten: <A>(kind: Kind<T, Kind<T, A>>) => Kind<T, A>
}

export interface AssociativeFlatten1<T extends HKT> extends Covariant1<T> {
  readonly flatten: <A>(kind: Kind<T, Kind<T, A>>) => Kind<T, A>
}

export interface AssociativeFlatten2<T extends HKT2> extends Covariant2<T> {
  readonly flatten: <E, A>(kind: Kind2<T, E, Kind2<T, E, A>>) => Kind2<T, E, A>
}

export interface AssociativeFlatten3<T extends HKT3> extends Covariant3<T> {
  readonly flatten: <R, E, A>(kind: Kind3<T, R, E, Kind3<T, R, E, A>>) => Kind3<T, R, E, A>
}

export interface AssociativeFlatten4<T extends HKT4> extends Covariant4<T> {
  readonly flatten: <S, R, E, A>(
    kind: Kind4<T, S, R, E, Kind4<T, S, R, E, A>>,
  ) => Kind4<T, S, R, E, A>
}

export interface AssociativeFlatten5<T extends HKT5> extends Covariant5<T> {
  readonly flatten: <U, S, R, E, A>(
    kind: Kind5<T, U, S, R, E, Kind5<T, U, S, R, E, A>>,
  ) => Kind5<T, U, S, R, E, A>
}

export interface AssociativeFlatten6<T extends HKT6> extends Covariant6<T> {
  readonly flatten: <V, U, S, R, E, A>(
    kind: Kind6<T, V, U, S, R, E, Kind6<T, V, U, S, R, E, A>>,
  ) => Kind6<T, V, U, S, R, E, A>
}

export interface AssociativeFlatten7<T extends HKT7> extends Covariant7<T> {
  readonly flatten: <W, V, U, S, R, E, A>(
    kind: Kind7<T, W, V, U, S, R, E, Kind7<T, W, V, U, S, R, E, A>>,
  ) => Kind7<T, W, V, U, S, R, E, A>
}

export interface AssociativeFlatten8<T extends HKT8> extends Covariant8<T> {
  readonly flatten: <X, W, V, U, S, R, E, A>(
    kind: Kind8<T, X, W, V, U, S, R, E, Kind8<T, X, W, V, U, S, R, E, A>>,
  ) => Kind8<T, X, W, V, U, S, R, E, A>
}

export interface AssociativeFlatten9<T extends HKT9> extends Covariant9<T> {
  readonly flatten: <Y, X, W, V, U, S, R, E, A>(
    kind: Kind9<T, Y, X, W, V, U, S, R, E, Kind9<T, Y, X, W, V, U, S, R, E, A>>,
  ) => Kind9<T, Y, X, W, V, U, S, R, E, A>
}

export interface AssociativeFlatten10<T extends HKT10> extends Covariant10<T> {
  readonly flatten: <Z, Y, X, W, V, U, S, R, E, A>(
    kind: Kind10<T, Z, Y, X, W, V, U, S, R, E, Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>,
  ) => Kind10<T, Z, Y, X, W, V, U, S, R, E, A>
}

export function makeAssociativeBoth<T extends HKT10>(
  F: AssociativeFlatten10<T> & Covariant10<T>,
): AssociativeBoth10<T>

export function makeAssociativeBoth<T extends HKT9>(
  F: AssociativeFlatten9<T> & Covariant9<T>,
): AssociativeBoth9<T>

export function makeAssociativeBoth<T extends HKT8>(
  F: AssociativeFlatten8<T> & Covariant8<T>,
): AssociativeBoth8<T>

export function makeAssociativeBoth<T extends HKT7>(
  F: AssociativeFlatten7<T> & Covariant7<T>,
): AssociativeBoth7<T>

export function makeAssociativeBoth<T extends HKT6>(
  F: AssociativeFlatten6<T> & Covariant6<T>,
): AssociativeBoth6<T>

export function makeAssociativeBoth<T extends HKT5>(
  F: AssociativeFlatten5<T> & Covariant5<T>,
): AssociativeBoth5<T>

export function makeAssociativeBoth<T extends HKT4>(
  F: AssociativeFlatten4<T> & Covariant4<T>,
): AssociativeBoth4<T>

export function makeAssociativeBoth<T extends HKT3>(
  F: AssociativeFlatten3<T> & Covariant3<T>,
): AssociativeBoth3<T>

export function makeAssociativeBoth<T extends HKT2>(
  F: AssociativeFlatten2<T> & Covariant2<T>,
): AssociativeBoth2<T>

export function makeAssociativeBoth<T extends HKT>(
  F: AssociativeFlatten1<T> & Covariant1<T>,
): AssociativeBoth1<T>

export function makeAssociativeBoth<T extends HKT>(
  F: AssociativeFlatten<T> & Covariant<T>,
): AssociativeBoth<T>

export function makeAssociativeBoth<T extends HKT>(
  F: AssociativeFlatten<T> & Covariant<T>,
): AssociativeBoth<T> {
  return {
    both: (s) => (f) => F.flatten(F.map((a) => F.map((b) => [a, b])(s))(f)),
  }
}
