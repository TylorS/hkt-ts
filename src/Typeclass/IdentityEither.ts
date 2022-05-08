import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT'

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
} from './AssociativeEither'
import {
  Bottom,
  Bottom1,
  Bottom10,
  Bottom2,
  Bottom2EC,
  Bottom3,
  Bottom3EC,
  Bottom3RC,
  Bottom3REC,
  Bottom4,
  Bottom4EC,
  Bottom4RC,
  Bottom4REC,
  Bottom4SC,
  Bottom4SEC,
  Bottom4SRC,
  Bottom4SREC,
  Bottom5,
  Bottom6,
  Bottom7,
  Bottom8,
  Bottom9,
} from './Bottom'
export interface IdentityEither<T extends HKT> extends AssociativeEither<T>, Bottom<T> {}

export interface IdentityEither1<T extends HKT> extends AssociativeEither1<T>, Bottom1<T> {}

export interface IdentityEither2<T extends HKT2> extends AssociativeEither2<T>, Bottom2<T> {}

export interface IdentityEither2EC<T extends HKT2, E>
  extends AssociativeEither2EC<T, E>,
    Bottom2EC<T, E> {}

export interface IdentityEither3<T extends HKT3> extends AssociativeEither3<T>, Bottom3<T> {}

export interface IdentityEither3RC<T extends HKT3, R>
  extends AssociativeEither3RC<T, R>,
    Bottom3RC<T, R> {}

export interface IdentityEither3REC<T extends HKT3, R, E>
  extends AssociativeEither3REC<T, R, E>,
    Bottom3REC<T, R, E> {}

export interface IdentityEither3EC<T extends HKT3, E>
  extends AssociativeEither3EC<T, E>,
    Bottom3EC<T, E> {}

export interface IdentityEither4<T extends HKT4> extends AssociativeEither4<T>, Bottom4<T> {}

export interface IdentityEither4SREC<T extends HKT4, S, R, E>
  extends AssociativeEither4SREC<T, S, R, E>,
    Bottom4SREC<T, S, R, E> {}

export interface IdentityEither4SC<T extends HKT4, S>
  extends AssociativeEither4SC<T, S>,
    Bottom4SC<T, S> {}

export interface IdentityEither4SRC<T extends HKT4, S, R>
  extends AssociativeEither4SRC<T, S, R>,
    Bottom4SRC<T, S, R> {}

export interface IdentityEither4RC<T extends HKT4, R>
  extends AssociativeEither4RC<T, R>,
    Bottom4RC<T, R> {}

export interface IdentityEither4SEC<T extends HKT4, S, E>
  extends AssociativeEither4SEC<T, S, E>,
    Bottom4SEC<T, S, E> {}

export interface IdentityEither4REC<T extends HKT4, R, E>
  extends AssociativeEither4REC<T, R, E>,
    Bottom4REC<T, R, E> {}

export interface IdentityEither4EC<T extends HKT4, E>
  extends AssociativeEither4EC<T, E>,
    Bottom4EC<T, E> {}

export interface IdentityEither5<T extends HKT5> extends AssociativeEither5<T>, Bottom5<T> {}

export interface IdentityEither6<T extends HKT6> extends AssociativeEither6<T>, Bottom6<T> {}

export interface IdentityEither7<T extends HKT7> extends AssociativeEither7<T>, Bottom7<T> {}

export interface IdentityEither8<T extends HKT8> extends AssociativeEither8<T>, Bottom8<T> {}

export interface IdentityEither9<T extends HKT9> extends AssociativeEither9<T>, Bottom9<T> {}

export interface IdentityEither10<T extends HKT10> extends AssociativeEither10<T>, Bottom10<T> {}
