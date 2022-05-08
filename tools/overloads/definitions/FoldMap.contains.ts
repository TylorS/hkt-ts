import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

const bool = new Static(`boolean`)

export const contains = derived_(
  'contains',
  [FoldMap],
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
