import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

const bool = new Static(`boolean`)

export const exists = fn_(
  'exists',
  [hkt],
  [FoldMap.toTypeClass(hkt).labeled('FM')],
  fn_(
    '',
    [aTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], bool)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bool),
  ),
)

export const node = exists
