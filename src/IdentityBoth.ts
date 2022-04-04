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
} from './identity'

export interface IdentityBoth<T extends HKT> extends Identity<T>, AssociativeBoth<T> {}

export interface IdentityBoth1<T extends HKT> extends Identity1<T>, AssociativeBoth1<T> {}

export interface IdentityBoth2<T extends HKT2> extends Identity2<T>, AssociativeBoth2<T> {}

export interface IdentityBoth3<T extends HKT3> extends Identity3<T>, AssociativeBoth3<T> {}

export interface IdentityBoth4<T extends HKT4> extends Identity4<T>, AssociativeBoth4<T> {}

export interface IdentityBoth5<T extends HKT5> extends Identity5<T>, AssociativeBoth5<T> {}

export interface IdentityBoth6<T extends HKT6> extends Identity6<T>, AssociativeBoth6<T> {}

export interface IdentityBoth7<T extends HKT7> extends Identity7<T>, AssociativeBoth7<T> {}

export interface IdentityBoth8<T extends HKT8> extends Identity8<T>, AssociativeBoth8<T> {}

export interface IdentityBoth9<T extends HKT9> extends Identity9<T>, AssociativeBoth9<T> {}

export interface IdentityBoth10<T extends HKT10> extends Identity10<T>, AssociativeBoth10<T> {}
