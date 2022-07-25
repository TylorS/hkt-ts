import { KindParam, Labeled } from '../AST.js'

import { kTypeParam } from './CovariantWithIndex.js'
import { FoldMap } from './FoldMap.js'
import { FoldMapWithIndex } from './FoldMapWithIndex.js'
import { derived_ } from './common.js'

export const foldMapWithIndex = derived_(
  'foldMap',
  [FoldMapWithIndex.setParams([kTypeParam])],
  (FoldMap.properties as readonly Labeled<KindParam>[])[0].param,
  undefined,
  [kTypeParam],
)
