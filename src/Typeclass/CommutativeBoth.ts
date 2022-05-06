import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT'

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

export interface CommutativeBoth<T extends HKT> extends AssociativeBoth<T> {}

export interface CommutativeBoth1<T extends HKT> extends AssociativeBoth1<T> {}

export interface CommutativeBoth2<T extends HKT2> extends AssociativeBoth2<T> {}

export interface CommutativeBoth3<T extends HKT3> extends AssociativeBoth3<T> {}

export interface CommutativeBoth4<T extends HKT4> extends AssociativeBoth4<T> {}

export interface CommutativeBoth5<T extends HKT5> extends AssociativeBoth5<T> {}

export interface CommutativeBoth6<T extends HKT6> extends AssociativeBoth6<T> {}

export interface CommutativeBoth7<T extends HKT7> extends AssociativeBoth7<T> {}

export interface CommutativeBoth8<T extends HKT8> extends AssociativeBoth8<T> {}

export interface CommutativeBoth9<T extends HKT9> extends AssociativeBoth9<T> {}

export interface CommutativeBoth10<T extends HKT10> extends AssociativeBoth10<T> {}
