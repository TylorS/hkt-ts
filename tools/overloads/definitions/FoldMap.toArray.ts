import { ArrayNode } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const toArray = derived_(
  'toArray',
  [FoldMap],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], new ArrayNode(aTypeParam)),
)

export const node = toArray
