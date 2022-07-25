import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT.js'

import {
  AssociativeEither,
  AssociativeEither1,
  AssociativeEither10,
  AssociativeEither2,
  AssociativeEither2EC,
  AssociativeEither3,
  AssociativeEither3EC,
  AssociativeEither3RC,
  AssociativeEither3REC,
  AssociativeEither4,
  AssociativeEither4EC,
  AssociativeEither4RC,
  AssociativeEither4REC,
  AssociativeEither4SC,
  AssociativeEither4SEC,
  AssociativeEither4SRC,
  AssociativeEither4SREC,
  AssociativeEither5,
  AssociativeEither6,
  AssociativeEither7,
  AssociativeEither8,
  AssociativeEither9,
} from './AssociativeEither.js'

export interface CommutativeEither<T extends HKT> extends AssociativeEither<T> {}

export interface CommutativeEither1<T extends HKT> extends AssociativeEither1<T> {}

export interface CommutativeEither2<T extends HKT2> extends AssociativeEither2<T> {}

export interface CommutativeEither2EC<T extends HKT2, E> extends AssociativeEither2EC<T, E> {}

export interface CommutativeEither3<T extends HKT3> extends AssociativeEither3<T> {}

export interface CommutativeEither3RC<T extends HKT3, R> extends AssociativeEither3RC<T, R> {}

export interface CommutativeEither3REC<T extends HKT3, R, E>
  extends AssociativeEither3REC<T, R, E> {}

export interface CommutativeEither3EC<T extends HKT3, E> extends AssociativeEither3EC<T, E> {}

export interface CommutativeEither4<T extends HKT4> extends AssociativeEither4<T> {}

export interface CommutativeEither4SREC<T extends HKT4, S, R, E>
  extends AssociativeEither4SREC<T, S, R, E> {}

export interface CommutativeEither4SC<T extends HKT4, S> extends AssociativeEither4SC<T, S> {}

export interface CommutativeEither4SRC<T extends HKT4, S, R>
  extends AssociativeEither4SRC<T, S, R> {}

export interface CommutativeEither4RC<T extends HKT4, R> extends AssociativeEither4RC<T, R> {}

export interface CommutativeEither4SEC<T extends HKT4, S, E>
  extends AssociativeEither4SEC<T, S, E> {}

export interface CommutativeEither4REC<T extends HKT4, R, E>
  extends AssociativeEither4REC<T, R, E> {}

export interface CommutativeEither4EC<T extends HKT4, E> extends AssociativeEither4EC<T, E> {}

export interface CommutativeEither5<T extends HKT5> extends AssociativeEither5<T> {}

export interface CommutativeEither6<T extends HKT6> extends AssociativeEither6<T> {}

export interface CommutativeEither7<T extends HKT7> extends AssociativeEither7<T> {}

export interface CommutativeEither8<T extends HKT8> extends AssociativeEither8<T> {}

export interface CommutativeEither9<T extends HKT9> extends AssociativeEither9<T> {}

export interface CommutativeEither10<T extends HKT10> extends AssociativeEither10<T> {}
