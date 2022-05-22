import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT'
import { Either } from '../index'

import {
  NaturalTransformation10_2,
  NaturalTransformation1_2,
  NaturalTransformation2E_2EC,
  NaturalTransformation2_2,
  NaturalTransformation3E_2C,
  NaturalTransformation3RE_2C,
  NaturalTransformation3R_2C,
  NaturalTransformation3_2,
  NaturalTransformation4E_2C,
  NaturalTransformation4RE_2C,
  NaturalTransformation4R_2C,
  NaturalTransformation4SE_2C,
  NaturalTransformation4SRE_2C,
  NaturalTransformation4SR_2C,
  NaturalTransformation4S_2C,
  NaturalTransformation4_2,
  NaturalTransformation5_2,
  NaturalTransformation6_2,
  NaturalTransformation7_2,
  NaturalTransformation8_2,
  NaturalTransformation9_2,
  NaturalTransformation_2,
} from './NaturalTransformation'

export interface FromEither<F extends HKT> {
  readonly fromEither: NaturalTransformation_2<F, Either.EitherHKT>
}

export interface FromEither1<F extends HKT> {
  readonly fromEither: NaturalTransformation1_2<F, Either.EitherHKT>
}

export interface FromEither2<F extends HKT2> {
  readonly fromEither: NaturalTransformation2_2<F, Either.EitherHKT>
}

export interface FromEither2EC<F extends HKT2, E> {
  readonly fromEither: NaturalTransformation2E_2EC<F, E, Either.EitherHKT, E>
}

export interface FromEither3<F extends HKT3> {
  readonly fromEither: NaturalTransformation3_2<F, Either.EitherHKT>
}

export interface FromEither3RC<F extends HKT3, R> {
  readonly fromEither: NaturalTransformation3R_2C<F, R, Either.EitherHKT>
}

export interface FromEither3REC<F extends HKT3, R, E> {
  readonly fromEither: NaturalTransformation3RE_2C<F, R, E, Either.EitherHKT>
}

export interface FromEither3EC<F extends HKT3, E> {
  readonly fromEither: NaturalTransformation3E_2C<F, E, Either.EitherHKT>
}

export interface FromEither4<F extends HKT4> {
  readonly fromEither: NaturalTransformation4_2<F, Either.EitherHKT>
}

export interface FromEither4SREC<F extends HKT4, S, R, E> {
  readonly fromEither: NaturalTransformation4SRE_2C<F, S, R, E, Either.EitherHKT>
}

export interface FromEither4SC<F extends HKT4, S> {
  readonly fromEither: NaturalTransformation4S_2C<F, S, Either.EitherHKT>
}

export interface FromEither4SRC<F extends HKT4, S, R> {
  readonly fromEither: NaturalTransformation4SR_2C<F, S, R, Either.EitherHKT>
}

export interface FromEither4RC<F extends HKT4, R> {
  readonly fromEither: NaturalTransformation4R_2C<F, R, Either.EitherHKT>
}

export interface FromEither4SEC<F extends HKT4, S, E> {
  readonly fromEither: NaturalTransformation4SE_2C<F, S, E, Either.EitherHKT>
}

export interface FromEither4REC<F extends HKT4, R, E> {
  readonly fromEither: NaturalTransformation4RE_2C<F, R, E, Either.EitherHKT>
}

export interface FromEither4EC<F extends HKT4, E> {
  readonly fromEither: NaturalTransformation4E_2C<F, E, Either.EitherHKT>
}

export interface FromEither5<F extends HKT5> {
  readonly fromEither: NaturalTransformation5_2<F, Either.EitherHKT>
}

export interface FromEither6<F extends HKT6> {
  readonly fromEither: NaturalTransformation6_2<F, Either.EitherHKT>
}

export interface FromEither7<F extends HKT7> {
  readonly fromEither: NaturalTransformation7_2<F, Either.EitherHKT>
}

export interface FromEither8<F extends HKT8> {
  readonly fromEither: NaturalTransformation8_2<F, Either.EitherHKT>
}

export interface FromEither9<F extends HKT9> {
  readonly fromEither: NaturalTransformation9_2<F, Either.EitherHKT>
}

export interface FromEither10<F extends HKT10> {
  readonly fromEither: NaturalTransformation10_2<F, Either.EitherHKT>
}
