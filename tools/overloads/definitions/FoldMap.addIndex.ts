import { FoldMap } from './FoldMap'
import { FoldMapWithIndex } from './FoldMapWithIndex'
import { curriedPlaceholder_, derived_, hkt, number_ } from './common'

export const addIndex = derived_(
  'addIndex',
  [FoldMap],
  FoldMapWithIndex.toTypeClass(hkt).setParams([number_, curriedPlaceholder_(hkt)]),
)
