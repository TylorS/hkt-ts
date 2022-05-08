import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common'

const bool = new Static(`boolean`)

export const exists = derived_(
  'exists',
  [FoldMap],
  fn_(
    '',
    [aTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], bool)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bool),
  ),
)

export const node = exists
