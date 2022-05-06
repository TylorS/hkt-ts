import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from '../HKT'

import {
  AssociativeFlatten,
  AssociativeFlatten1,
  AssociativeFlatten10,
  AssociativeFlatten2,
  AssociativeFlatten3,
  AssociativeFlatten4,
  AssociativeFlatten5,
  AssociativeFlatten6,
  AssociativeFlatten7,
  AssociativeFlatten8,
  AssociativeFlatten9,
} from './AssociativeFlatten'
import { Top, Top1, Top10, Top2, Top3, Top4, Top5, Top6, Top7, Top8, Top9 } from './Top'

export interface IdentityFlatten<T extends HKT> extends AssociativeFlatten<T>, Top<T> {}

export interface IdentityFlatten1<T extends HKT> extends AssociativeFlatten1<T>, Top1<T> {}

export interface IdentityFlatten2<T extends HKT2> extends AssociativeFlatten2<T>, Top2<T> {}

export interface IdentityFlatten3<T extends HKT3> extends AssociativeFlatten3<T>, Top3<T> {}

export interface IdentityFlatten4<T extends HKT4> extends AssociativeFlatten4<T>, Top4<T> {}

export interface IdentityFlatten5<T extends HKT5> extends AssociativeFlatten5<T>, Top5<T> {}

export interface IdentityFlatten6<T extends HKT6> extends AssociativeFlatten6<T>, Top6<T> {}

export interface IdentityFlatten7<T extends HKT7> extends AssociativeFlatten7<T>, Top7<T> {}

export interface IdentityFlatten8<T extends HKT8> extends AssociativeFlatten8<T>, Top8<T> {}

export interface IdentityFlatten9<T extends HKT9> extends AssociativeFlatten9<T>, Top9<T> {}

export interface IdentityFlatten10<T extends HKT10> extends AssociativeFlatten10<T>, Top10<T> {}
