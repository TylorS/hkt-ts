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
import {
  Bottom,
  Bottom1,
  Bottom10,
  Bottom2,
  Bottom3,
  Bottom4,
  Bottom5,
  Bottom6,
  Bottom7,
  Bottom8,
  Bottom9,
} from './Bottom'
import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../../HKT'

export interface IdentityEither<T extends HKT> extends AssociativeEither<T>, Bottom<T> {}

export interface IdentityEither1<T extends HKT> extends AssociativeEither1<T>, Bottom1<T> {}

export interface IdentityEither2<T extends HKT2> extends AssociativeEither2<T>, Bottom2<T> {}

export interface IdentityEither3<T extends HKT3> extends AssociativeEither3<T>, Bottom3<T> {}

export interface IdentityEither4<T extends HKT4> extends AssociativeEither4<T>, Bottom4<T> {}

export interface IdentityEither5<T extends HKT5> extends AssociativeEither5<T>, Bottom5<T> {}

export interface IdentityEither6<T extends HKT6> extends AssociativeEither6<T>, Bottom6<T> {}

export interface IdentityEither7<T extends HKT7> extends AssociativeEither7<T>, Bottom7<T> {}

export interface IdentityEither8<T extends HKT8> extends AssociativeEither8<T>, Bottom8<T> {}

export interface IdentityEither9<T extends HKT9> extends AssociativeEither9<T>, Bottom9<T> {}

export interface IdentityEither10<T extends HKT10> extends AssociativeEither10<T>, Bottom10<T> {}
