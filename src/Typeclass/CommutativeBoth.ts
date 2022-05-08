import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT'

import {
  AssociativeBoth,
  AssociativeBoth1,
  AssociativeBoth10,
  AssociativeBoth2,
  AssociativeBoth2EC,
  AssociativeBoth3,
  AssociativeBoth3EC,
  AssociativeBoth3RC,
  AssociativeBoth3REC,
  AssociativeBoth4,
  AssociativeBoth4EC,
  AssociativeBoth4RC,
  AssociativeBoth4REC,
  AssociativeBoth4SC,
  AssociativeBoth4SEC,
  AssociativeBoth4SRC,
  AssociativeBoth4SREC,
  AssociativeBoth5,
  AssociativeBoth6,
  AssociativeBoth7,
  AssociativeBoth8,
  AssociativeBoth9,
} from './AssociativeBoth'
export interface CommutativeBoth<T extends HKT> extends AssociativeBoth<T> {}

export interface CommutativeBoth1<T extends HKT> extends AssociativeBoth1<T> {}

export interface CommutativeBoth2<T extends HKT2> extends AssociativeBoth2<T> {}

export interface CommutativeBoth2EC<T extends HKT2, E> extends AssociativeBoth2EC<T, E> {}

export interface CommutativeBoth3<T extends HKT3> extends AssociativeBoth3<T> {}

export interface CommutativeBoth3RC<T extends HKT3, R> extends AssociativeBoth3RC<T, R> {}

export interface CommutativeBoth3REC<T extends HKT3, R, E> extends AssociativeBoth3REC<T, R, E> {}

export interface CommutativeBoth3EC<T extends HKT3, E> extends AssociativeBoth3EC<T, E> {}

export interface CommutativeBoth4<T extends HKT4> extends AssociativeBoth4<T> {}

export interface CommutativeBoth4SREC<T extends HKT4, S, R, E>
  extends AssociativeBoth4SREC<T, S, R, E> {}

export interface CommutativeBoth4SC<T extends HKT4, S> extends AssociativeBoth4SC<T, S> {}

export interface CommutativeBoth4SRC<T extends HKT4, S, R> extends AssociativeBoth4SRC<T, S, R> {}

export interface CommutativeBoth4RC<T extends HKT4, R> extends AssociativeBoth4RC<T, R> {}

export interface CommutativeBoth4SEC<T extends HKT4, S, E> extends AssociativeBoth4SEC<T, S, E> {}

export interface CommutativeBoth4REC<T extends HKT4, R, E> extends AssociativeBoth4REC<T, R, E> {}

export interface CommutativeBoth4EC<T extends HKT4, E> extends AssociativeBoth4EC<T, E> {}

export interface CommutativeBoth5<T extends HKT5> extends AssociativeBoth5<T> {}

export interface CommutativeBoth6<T extends HKT6> extends AssociativeBoth6<T> {}

export interface CommutativeBoth7<T extends HKT7> extends AssociativeBoth7<T> {}

export interface CommutativeBoth8<T extends HKT8> extends AssociativeBoth8<T> {}

export interface CommutativeBoth9<T extends HKT9> extends AssociativeBoth9<T> {}

export interface CommutativeBoth10<T extends HKT10> extends AssociativeBoth10<T> {}
