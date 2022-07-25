import { FoldMap } from './FoldMap.js'
import { FoldMapWithIndex } from './FoldMapWithIndex.js'
import { curriedPlaceholder_, derived_, hkt, number_ } from './common.js'

export const addIndex = derived_(
  'addIndex',
  [FoldMap],
  FoldMapWithIndex.toTypeClass(hkt).setParams([number_, curriedPlaceholder_(hkt)]),
)
