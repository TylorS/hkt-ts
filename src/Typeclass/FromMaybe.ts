import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT'
import * as Maybe from '../Maybe'

import {
  NaturalTransformation10_1,
  NaturalTransformation1_1,
  NaturalTransformation2E_1C,
  NaturalTransformation2_1,
  NaturalTransformation3E_1C,
  NaturalTransformation3RE_1C,
  NaturalTransformation3R_1C,
  NaturalTransformation3_1,
  NaturalTransformation4E_1C,
  NaturalTransformation4RE_1C,
  NaturalTransformation4R_1C,
  NaturalTransformation4SE_1C,
  NaturalTransformation4SRE_1C,
  NaturalTransformation4SR_1C,
  NaturalTransformation4S_1C,
  NaturalTransformation4_1,
  NaturalTransformation5_1,
  NaturalTransformation6_1,
  NaturalTransformation7_1,
  NaturalTransformation8_1,
  NaturalTransformation9_1,
  NaturalTransformation_1,
} from './NaturalTransformation'

export interface FromMaybe<F extends HKT> {
  readonly fromMaybe: NaturalTransformation_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe1<F extends HKT> {
  readonly fromMaybe: NaturalTransformation1_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe2<F extends HKT2> {
  readonly fromMaybe: NaturalTransformation2_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe2EC<F extends HKT2, E> {
  readonly fromMaybe: NaturalTransformation2E_1C<F, E, Maybe.MaybeHKT>
}

export interface FromMaybe3<F extends HKT3> {
  readonly fromMaybe: NaturalTransformation3_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe3RC<F extends HKT3, R> {
  readonly fromMaybe: NaturalTransformation3R_1C<F, R, Maybe.MaybeHKT>
}

export interface FromMaybe3REC<F extends HKT3, R, E> {
  readonly fromMaybe: NaturalTransformation3RE_1C<F, R, E, Maybe.MaybeHKT>
}

export interface FromMaybe3EC<F extends HKT3, E> {
  readonly fromMaybe: NaturalTransformation3E_1C<F, E, Maybe.MaybeHKT>
}

export interface FromMaybe4<F extends HKT4> {
  readonly fromMaybe: NaturalTransformation4_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe4SREC<F extends HKT4, S, R, E> {
  readonly fromMaybe: NaturalTransformation4SRE_1C<F, S, R, E, Maybe.MaybeHKT>
}

export interface FromMaybe4SC<F extends HKT4, S> {
  readonly fromMaybe: NaturalTransformation4S_1C<F, S, Maybe.MaybeHKT>
}

export interface FromMaybe4SRC<F extends HKT4, S, R> {
  readonly fromMaybe: NaturalTransformation4SR_1C<F, S, R, Maybe.MaybeHKT>
}

export interface FromMaybe4RC<F extends HKT4, R> {
  readonly fromMaybe: NaturalTransformation4R_1C<F, R, Maybe.MaybeHKT>
}

export interface FromMaybe4SEC<F extends HKT4, S, E> {
  readonly fromMaybe: NaturalTransformation4SE_1C<F, S, E, Maybe.MaybeHKT>
}

export interface FromMaybe4REC<F extends HKT4, R, E> {
  readonly fromMaybe: NaturalTransformation4RE_1C<F, R, E, Maybe.MaybeHKT>
}

export interface FromMaybe4EC<F extends HKT4, E> {
  readonly fromMaybe: NaturalTransformation4E_1C<F, E, Maybe.MaybeHKT>
}

export interface FromMaybe5<F extends HKT5> {
  readonly fromMaybe: NaturalTransformation5_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe6<F extends HKT6> {
  readonly fromMaybe: NaturalTransformation6_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe7<F extends HKT7> {
  readonly fromMaybe: NaturalTransformation7_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe8<F extends HKT8> {
  readonly fromMaybe: NaturalTransformation8_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe9<F extends HKT9> {
  readonly fromMaybe: NaturalTransformation9_1<F, Maybe.MaybeHKT>
}

export interface FromMaybe10<F extends HKT10> {
  readonly fromMaybe: NaturalTransformation10_1<F, Maybe.MaybeHKT>
}
