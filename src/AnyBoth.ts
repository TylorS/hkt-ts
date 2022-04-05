import { Any, Any1, Any10, Any2, Any3, Any4, Any5, Any6, Any7, Any8, Any9 } from './Any'
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

export interface AnyBoth<T extends HKT> extends Any<T>, AssociativeBoth<T> {}

export interface AnyBoth1<T extends HKT> extends Any1<T>, AssociativeBoth1<T> {}

export interface AnyBoth2<T extends HKT2> extends Any2<T>, AssociativeBoth2<T> {}

export interface AnyBoth3<T extends HKT3> extends Any3<T>, AssociativeBoth3<T> {}

export interface AnyBoth4<T extends HKT4> extends Any4<T>, AssociativeBoth4<T> {}

export interface AnyBoth5<T extends HKT5> extends Any5<T>, AssociativeBoth5<T> {}

export interface AnyBoth6<T extends HKT6> extends Any6<T>, AssociativeBoth6<T> {}

export interface AnyBoth7<T extends HKT7> extends Any7<T>, AssociativeBoth7<T> {}

export interface AnyBoth8<T extends HKT8> extends Any8<T>, AssociativeBoth8<T> {}

export interface AnyBoth9<T extends HKT9> extends Any9<T>, AssociativeBoth9<T> {}

export interface AnyBoth10<T extends HKT10> extends Any10<T>, AssociativeBoth10<T> {}
