import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const concat = fn_(
  'concat',
  [hkt],
  [FoldMap.toTypeClass(hkt).labeled('FM')],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Identity<${aTypeParam.type}>`).labeled('I')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], aTypeParam),
  ),
)

export const node = concat
