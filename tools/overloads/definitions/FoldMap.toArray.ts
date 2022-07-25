import { ArrayNode } from '../AST.js'

import { FoldMap } from './FoldMap.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const toArray = derived_(
  'toArray',
  [FoldMap],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], new ArrayNode(aTypeParam)),
)

export const node = toArray
