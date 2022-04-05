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
  FromValue,
  FromValue1,
  FromValue10,
  FromValue2,
  FromValue3,
  FromValue4,
  FromValue5,
  FromValue6,
  FromValue7,
  FromValue8,
  FromValue9,
} from './FromValue'
import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from './HKT'

export interface Applicative<T extends HKT> extends FromValue<T>, AssociativeBoth<T> {}

export interface Applicative1<T extends HKT> extends FromValue1<T>, AssociativeBoth1<T> {}

export interface Applicative2<T extends HKT2> extends FromValue2<T>, AssociativeBoth2<T> {}

export interface Applicative3<T extends HKT3> extends FromValue3<T>, AssociativeBoth3<T> {}

export interface Applicative4<T extends HKT4> extends FromValue4<T>, AssociativeBoth4<T> {}

export interface Applicative5<T extends HKT5> extends FromValue5<T>, AssociativeBoth5<T> {}

export interface Applicative6<T extends HKT6> extends FromValue6<T>, AssociativeBoth6<T> {}

export interface Applicative7<T extends HKT7> extends FromValue7<T>, AssociativeBoth7<T> {}

export interface Applicative8<T extends HKT8> extends FromValue8<T>, AssociativeBoth8<T> {}

export interface Applicative9<T extends HKT9> extends FromValue9<T>, AssociativeBoth9<T> {}

export interface Applicative10<T extends HKT10> extends FromValue10<T>, AssociativeBoth10<T> {}
