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
import { constant, pipe } from '../function'

import { Associative } from './Associative'
import { orElse } from './AssociativeEither'
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
  IdentityEither,
  IdentityEither1,
  IdentityEither10,
  IdentityEither2,
  IdentityEither3,
  IdentityEither4,
  IdentityEither5,
  IdentityEither6,
  IdentityEither7,
  IdentityEither8,
  IdentityEither9,
} from './IdentityEither'

export interface Identity<A> extends Associative<A> {
  readonly id: A
}

export function fromIdentityEitherCovariant<T extends HKT10>(
  IEC: IdentityEither10<T> & Covariant10<T>,
): <Z, Y, X, W, V, U, S, R, E, A>() => Identity<Kind10<T, Z, Y, X, W, V, U, S, R, E, A>>

export function fromIdentityEitherCovariant<T extends HKT9>(
  IEC: IdentityEither9<T> & Covariant9<T>,
): <Y, X, W, V, U, S, R, E, A>() => Identity<Kind9<T, Y, X, W, V, U, S, R, E, A>>

export function fromIdentityEitherCovariant<T extends HKT8>(
  IEC: IdentityEither8<T> & Covariant8<T>,
): <X, W, V, U, S, R, E, A>() => Identity<Kind8<T, X, W, V, U, S, R, E, A>>

export function fromIdentityEitherCovariant<T extends HKT7>(
  IEC: IdentityEither7<T> & Covariant7<T>,
): <W, V, U, S, R, E, A>() => Identity<Kind7<T, W, V, U, S, R, E, A>>

export function fromIdentityEitherCovariant<T extends HKT6>(
  IEC: IdentityEither6<T> & Covariant6<T>,
): <V, U, S, R, E, A>() => Identity<Kind6<T, V, U, S, R, E, A>>

export function fromIdentityEitherCovariant<T extends HKT5>(
  IEC: IdentityEither5<T> & Covariant5<T>,
): <U, S, R, E, A>() => Identity<Kind5<T, U, S, R, E, A>>

export function fromIdentityEitherCovariant<T extends HKT4>(
  IEC: IdentityEither4<T> & Covariant4<T>,
): <S, R, E, A>() => Identity<Kind4<T, S, R, E, A>>

export function fromIdentityEitherCovariant<T extends HKT3>(
  IEC: IdentityEither3<T> & Covariant3<T>,
): <R, E, A>() => Identity<Kind3<T, R, E, A>>

export function fromIdentityEitherCovariant<T extends HKT2>(
  IEC: IdentityEither2<T> & Covariant2<T>,
): <E, A>() => Identity<Kind2<T, E, A>>

export function fromIdentityEitherCovariant<T extends HKT>(
  IEC: IdentityEither1<T> & Covariant1<T>,
): <A>() => Identity<Kind<T, A>>

export function fromIdentityEitherCovariant<T extends HKT>(
  IEC: IdentityEither<T> & Covariant<T>,
): <A>() => Identity<Kind<T, A>>

export function fromIdentityEitherCovariant<T extends HKT>(
  IEC: IdentityEither<T> & Covariant<T>,
): <A>() => Identity<Kind<T, A>> {
  const orElse_ = orElse(IEC)
  const id = {
    id: IEC.bottom,
    concat: (f: Kind<T, any>, s: Kind<T, any>) =>
      pipe(
        f,
        orElse_(() => s),
      ),
  }

  return constant(id)
}
