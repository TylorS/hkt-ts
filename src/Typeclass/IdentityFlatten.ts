import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT.js'

import {
  AssociativeFlatten,
  AssociativeFlatten1,
  AssociativeFlatten10,
  AssociativeFlatten2,
  AssociativeFlatten2EC,
  AssociativeFlatten3,
  AssociativeFlatten3EC,
  AssociativeFlatten3RC,
  AssociativeFlatten3REC,
  AssociativeFlatten4,
  AssociativeFlatten4EC,
  AssociativeFlatten4RC,
  AssociativeFlatten4REC,
  AssociativeFlatten4SC,
  AssociativeFlatten4SEC,
  AssociativeFlatten4SRC,
  AssociativeFlatten4SREC,
  AssociativeFlatten5,
  AssociativeFlatten6,
  AssociativeFlatten7,
  AssociativeFlatten8,
  AssociativeFlatten9,
} from './AssociativeFlatten.js'
import {
  Top,
  Top1,
  Top10,
  Top2,
  Top2EC,
  Top3,
  Top3EC,
  Top3RC,
  Top3REC,
  Top4,
  Top4EC,
  Top4RC,
  Top4REC,
  Top4SC,
  Top4SEC,
  Top4SRC,
  Top4SREC,
  Top5,
  Top6,
  Top7,
  Top8,
  Top9,
} from './Top.js'
export interface IdentityFlatten<T extends HKT> extends AssociativeFlatten<T>, Top<T> {}

export interface IdentityFlatten1<T extends HKT> extends AssociativeFlatten1<T>, Top1<T> {}

export interface IdentityFlatten2<T extends HKT2> extends AssociativeFlatten2<T>, Top2<T> {}

export interface IdentityFlatten2EC<T extends HKT2, E>
  extends AssociativeFlatten2EC<T, E>,
    Top2EC<T, E> {}

export interface IdentityFlatten3<T extends HKT3> extends AssociativeFlatten3<T>, Top3<T> {}

export interface IdentityFlatten3RC<T extends HKT3, R>
  extends AssociativeFlatten3RC<T, R>,
    Top3RC<T, R> {}

export interface IdentityFlatten3REC<T extends HKT3, R, E>
  extends AssociativeFlatten3REC<T, R, E>,
    Top3REC<T, R, E> {}

export interface IdentityFlatten3EC<T extends HKT3, E>
  extends AssociativeFlatten3EC<T, E>,
    Top3EC<T, E> {}

export interface IdentityFlatten4<T extends HKT4> extends AssociativeFlatten4<T>, Top4<T> {}

export interface IdentityFlatten4SREC<T extends HKT4, S, R, E>
  extends AssociativeFlatten4SREC<T, S, R, E>,
    Top4SREC<T, S, R, E> {}

export interface IdentityFlatten4SC<T extends HKT4, S>
  extends AssociativeFlatten4SC<T, S>,
    Top4SC<T, S> {}

export interface IdentityFlatten4SRC<T extends HKT4, S, R>
  extends AssociativeFlatten4SRC<T, S, R>,
    Top4SRC<T, S, R> {}

export interface IdentityFlatten4RC<T extends HKT4, R>
  extends AssociativeFlatten4RC<T, R>,
    Top4RC<T, R> {}

export interface IdentityFlatten4SEC<T extends HKT4, S, E>
  extends AssociativeFlatten4SEC<T, S, E>,
    Top4SEC<T, S, E> {}

export interface IdentityFlatten4REC<T extends HKT4, R, E>
  extends AssociativeFlatten4REC<T, R, E>,
    Top4REC<T, R, E> {}

export interface IdentityFlatten4EC<T extends HKT4, E>
  extends AssociativeFlatten4EC<T, E>,
    Top4EC<T, E> {}

export interface IdentityFlatten5<T extends HKT5> extends AssociativeFlatten5<T>, Top5<T> {}

export interface IdentityFlatten6<T extends HKT6> extends AssociativeFlatten6<T>, Top6<T> {}

export interface IdentityFlatten7<T extends HKT7> extends AssociativeFlatten7<T>, Top7<T> {}

export interface IdentityFlatten8<T extends HKT8> extends AssociativeFlatten8<T>, Top8<T> {}

export interface IdentityFlatten9<T extends HKT9> extends AssociativeFlatten9<T>, Top9<T> {}

export interface IdentityFlatten10<T extends HKT10> extends AssociativeFlatten10<T>, Top10<T> {}
