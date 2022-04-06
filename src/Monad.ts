import {
  Flatten,
  Flatten1,
  Flatten10,
  Flatten2,
  Flatten3,
  Flatten4,
  Flatten5,
  Flatten6,
  Flatten7,
  Flatten8,
  Flatten9,
} from './Flatten'
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

export interface Monad<T extends HKT> extends FromValue<T>, Flatten<T> {}

export interface Monad1<T extends HKT> extends FromValue1<T>, Flatten1<T> {}

export interface Monad2<T extends HKT2> extends FromValue2<T>, Flatten2<T> {}

export interface Monad3<T extends HKT3> extends FromValue3<T>, Flatten3<T> {}

export interface Monad4<T extends HKT4> extends FromValue4<T>, Flatten4<T> {}

export interface Monad5<T extends HKT5> extends FromValue5<T>, Flatten5<T> {}

export interface Monad6<T extends HKT6> extends FromValue6<T>, Flatten6<T> {}

export interface Monad7<T extends HKT7> extends FromValue7<T>, Flatten7<T> {}

export interface Monad8<T extends HKT8> extends FromValue8<T>, Flatten8<T> {}

export interface Monad9<T extends HKT9> extends FromValue9<T>, Flatten9<T> {}

export interface Monad10<T extends HKT10> extends FromValue10<T>, Flatten10<T> {}
