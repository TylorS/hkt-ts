import { Static } from '../AST.js'

import { FoldMap } from './FoldMap.js'
import { aTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common.js'

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
