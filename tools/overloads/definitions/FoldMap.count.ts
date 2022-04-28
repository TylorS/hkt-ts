import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

const bool = new Static(`boolean`)

export const count = fn_(
  'count',
  [hkt],
  [FoldMap.toTypeClass(hkt).labeled('FM')],
  fn_(
    '',
    [aTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], bool)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], new Static(`number`)),
  ),
)

export const node = count
