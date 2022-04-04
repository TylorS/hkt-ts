import {
  AssociativeEither,
  AssociativeEither1,
  AssociativeEither10,
  AssociativeEither2,
  AssociativeEither3,
  AssociativeEither4,
  AssociativeEither5,
  AssociativeEither6,
  AssociativeEither7,
  AssociativeEither8,
  AssociativeEither9,
} from './AssociativeEither'
import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from './HKT'
import {
  Identity,
  Identity1,
  Identity10,
  Identity2,
  Identity3,
  Identity4,
  Identity5,
  Identity6,
  Identity7,
  Identity8,
  Identity9,
} from './Identity'

export interface IdentityEither<T extends HKT> extends Identity<T>, AssociativeEither<T> {}

export interface IdentityEither1<T extends HKT> extends Identity1<T>, AssociativeEither1<T> {}

export interface IdentityEither2<T extends HKT2> extends Identity2<T>, AssociativeEither2<T> {}

export interface IdentityEither3<T extends HKT3> extends Identity3<T>, AssociativeEither3<T> {}

export interface IdentityEither4<T extends HKT4> extends Identity4<T>, AssociativeEither4<T> {}

export interface IdentityEither5<T extends HKT5> extends Identity5<T>, AssociativeEither5<T> {}

export interface IdentityEither6<T extends HKT6> extends Identity6<T>, AssociativeEither6<T> {}

export interface IdentityEither7<T extends HKT7> extends Identity7<T>, AssociativeEither7<T> {}

export interface IdentityEither8<T extends HKT8> extends Identity8<T>, AssociativeEither8<T> {}

export interface IdentityEither9<T extends HKT9> extends Identity9<T>, AssociativeEither9<T> {}

export interface IdentityEither10<T extends HKT10> extends Identity10<T>, AssociativeEither10<T> {}
