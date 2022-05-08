import { FoldMap } from './FoldMap'
import { FoldMapWithIndex } from './FoldMapWithIndex'
import { derived_, hkt, number_ } from './common'

export const addIndex = derived_(
  'addIndex',
  [FoldMap],
  FoldMapWithIndex.toTypeClass(hkt).setParams([number_]),
)
