import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../../HKT'

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

export interface CommutativeEither<T extends HKT> extends AssociativeEither<T> {}

export interface CommutativeEither1<T extends HKT> extends AssociativeEither1<T> {}

export interface CommutativeEither2<T extends HKT2> extends AssociativeEither2<T> {}

export interface CommutativeEither3<T extends HKT3> extends AssociativeEither3<T> {}

export interface CommutativeEither4<T extends HKT4> extends AssociativeEither4<T> {}

export interface CommutativeEither5<T extends HKT5> extends AssociativeEither5<T> {}

export interface CommutativeEither6<T extends HKT6> extends AssociativeEither6<T> {}

export interface CommutativeEither7<T extends HKT7> extends AssociativeEither7<T> {}

export interface CommutativeEither8<T extends HKT8> extends AssociativeEither8<T> {}

export interface CommutativeEither9<T extends HKT9> extends AssociativeEither9<T> {}

export interface CommutativeEither10<T extends HKT10> extends AssociativeEither10<T> {}
