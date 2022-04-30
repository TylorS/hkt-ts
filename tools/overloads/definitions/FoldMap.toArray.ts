import { ArrayNode } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const toArray = fn_(
  'toArray',
  [hkt],
  [FoldMap.toTypeClass(hkt).labeled('FM')],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], new ArrayNode(aTypeParam)),
)

export const node = toArray
