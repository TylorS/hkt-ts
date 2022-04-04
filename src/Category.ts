import {
  AssociativeCompose,
  AssociativeCompose10,
  AssociativeCompose2,
  AssociativeCompose3,
  AssociativeCompose4,
  AssociativeCompose5,
  AssociativeCompose6,
  AssociativeCompose7,
  AssociativeCompose8,
  AssociativeCompose9,
} from './AssociativeCompose'
import { HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from './HKT'
import {
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

export interface Category<T extends HKT2> extends Identity2<T>, AssociativeCompose<T> {}

export interface Category2<T extends HKT2> extends Identity2<T>, AssociativeCompose2<T> {}

export interface Category3<T extends HKT3> extends Identity3<T>, AssociativeCompose3<T> {}

export interface Category4<T extends HKT4> extends Identity4<T>, AssociativeCompose4<T> {}

export interface Category5<T extends HKT5> extends Identity5<T>, AssociativeCompose5<T> {}

export interface Category6<T extends HKT6> extends Identity6<T>, AssociativeCompose6<T> {}

export interface Category7<T extends HKT7> extends Identity7<T>, AssociativeCompose7<T> {}

export interface Category8<T extends HKT8> extends Identity8<T>, AssociativeCompose8<T> {}

export interface Category9<T extends HKT9> extends Identity9<T>, AssociativeCompose9<T> {}

export interface Category10<T extends HKT10> extends Identity10<T>, AssociativeCompose10<T> {}
