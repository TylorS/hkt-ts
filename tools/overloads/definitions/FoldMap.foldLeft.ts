import { Static } from '../AST.js'

import { FoldMap } from './FoldMap.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const foldLeft = derived_(
  'foldLeft',
  [FoldMap],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Identity<${aTypeParam.type}>`).labeled('I')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], aTypeParam),
  ),
)
