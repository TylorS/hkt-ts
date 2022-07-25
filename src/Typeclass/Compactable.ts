import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT.js'

import {
  Compact,
  Compact1,
  Compact10,
  Compact2,
  Compact2EC,
  Compact3,
  Compact3EC,
  Compact3RC,
  Compact3REC,
  Compact4,
  Compact4EC,
  Compact4RC,
  Compact4REC,
  Compact4SC,
  Compact4SEC,
  Compact4SRC,
  Compact4SREC,
  Compact5,
  Compact6,
  Compact7,
  Compact8,
  Compact9,
} from './Compact.js'
import {
  Separate,
  Separate1,
  Separate10,
  Separate2,
  Separate2EC,
  Separate3,
  Separate3EC,
  Separate3RC,
  Separate3REC,
  Separate4,
  Separate4EC,
  Separate4RC,
  Separate4REC,
  Separate4SC,
  Separate4SEC,
  Separate4SRC,
  Separate4SREC,
  Separate5,
  Separate6,
  Separate7,
  Separate8,
  Separate9,
} from './Separate.js'

export interface Compactable<T extends HKT> extends Compact<T>, Separate<T> {}

export interface Compactable1<T extends HKT> extends Compact1<T>, Separate1<T> {}

export interface Compactable2<T extends HKT2> extends Compact2<T>, Separate2<T> {}

export interface Compactable2EC<T extends HKT2, E> extends Compact2EC<T, E>, Separate2EC<T, E> {}

export interface Compactable3<T extends HKT3> extends Compact3<T>, Separate3<T> {}

export interface Compactable3RC<T extends HKT3, R> extends Compact3RC<T, R>, Separate3RC<T, R> {}

export interface Compactable3REC<T extends HKT3, R, E>
  extends Compact3REC<T, R, E>,
    Separate3REC<T, R, E> {}

export interface Compactable3EC<T extends HKT3, E> extends Compact3EC<T, E>, Separate3EC<T, E> {}

export interface Compactable4<T extends HKT4> extends Compact4<T>, Separate4<T> {}

export interface Compactable4SREC<T extends HKT4, S, R, E>
  extends Compact4SREC<T, S, R, E>,
    Separate4SREC<T, S, R, E> {}

export interface Compactable4SC<T extends HKT4, S> extends Compact4SC<T, S>, Separate4SC<T, S> {}

export interface Compactable4SRC<T extends HKT4, S, R>
  extends Compact4SRC<T, S, R>,
    Separate4SRC<T, S, R> {}

export interface Compactable4RC<T extends HKT4, R> extends Compact4RC<T, R>, Separate4RC<T, R> {}

export interface Compactable4SEC<T extends HKT4, S, E>
  extends Compact4SEC<T, S, E>,
    Separate4SEC<T, S, E> {}

export interface Compactable4REC<T extends HKT4, R, E>
  extends Compact4REC<T, R, E>,
    Separate4REC<T, R, E> {}

export interface Compactable4EC<T extends HKT4, E> extends Compact4EC<T, E>, Separate4EC<T, E> {}

export interface Compactable5<T extends HKT5> extends Compact5<T>, Separate5<T> {}

export interface Compactable6<T extends HKT6> extends Compact6<T>, Separate6<T> {}

export interface Compactable7<T extends HKT7> extends Compact7<T>, Separate7<T> {}

export interface Compactable8<T extends HKT8> extends Compact8<T>, Separate8<T> {}

export interface Compactable9<T extends HKT9> extends Compact9<T>, Separate9<T> {}

export interface Compactable10<T extends HKT10> extends Compact10<T>, Separate10<T> {}
