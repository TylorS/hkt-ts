import {
  Apply,
  Apply1,
  Apply10,
  Apply2,
  Apply3,
  Apply4,
  Apply5,
  Apply6,
  Apply7,
  Apply8,
  Apply9,
} from './Apply'
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

export interface Applicative<T extends HKT> extends Apply<T>, FromValue<T> {}

export interface Applicative1<T extends HKT> extends Apply1<T>, FromValue1<T> {}

export interface Applicative2<T extends HKT2> extends Apply2<T>, FromValue2<T> {}

export interface Applicative3<T extends HKT3> extends Apply3<T>, FromValue3<T> {}

export interface Applicative4<T extends HKT4> extends Apply4<T>, FromValue4<T> {}

export interface Applicative5<T extends HKT5> extends Apply5<T>, FromValue5<T> {}

export interface Applicative6<T extends HKT6> extends Apply6<T>, FromValue6<T> {}

export interface Applicative7<T extends HKT7> extends Apply7<T>, FromValue7<T> {}

export interface Applicative8<T extends HKT8> extends Apply8<T>, FromValue8<T> {}

export interface Applicative9<T extends HKT9> extends Apply9<T>, FromValue9<T> {}

export interface Applicative10<T extends HKT10> extends Apply10<T>, FromValue10<T> {}
