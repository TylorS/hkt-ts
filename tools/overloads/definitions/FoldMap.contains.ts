import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

const bool = new Static(`boolean`)

export const contains = fn_(
  'contains',
  [hkt],
  [FoldMap.toTypeClass(hkt).labeled('FM')],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Eq<A>`).labeled('E')],
    fn_(
      '',
      [],
      [aTypeParam.labeled('a')],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bool),
    ),
  ),
)

export const node = contains
