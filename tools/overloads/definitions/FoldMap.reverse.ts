import { IntersectionNode } from '../AST'

import { FoldMap } from './FoldMap'
import { ForEach } from './ForEach'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const reverse = fn_(
  'reverse',
  [hkt],
  [new IntersectionNode(FoldMap.toTypeClass(hkt), ForEach.toTypeClass(hkt)).labeled('FM')],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], kind_([aTypeParam])),
)

export const node = reverse
