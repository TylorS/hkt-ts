import { kTypeParam } from './CovariantWithIndex'
import { FoldMap } from './FoldMap'
import { FoldMapWithIndex } from './FoldMapWithIndex'
import { derived_ } from './common'

export const foldMapWithIndex = derived_(
  'foldMap',
  [FoldMapWithIndex.setParams([kTypeParam])],
  FoldMap.properties[0].param,
  undefined,
  [kTypeParam],
)
