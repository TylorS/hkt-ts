import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const concat = derived_(
  'concat',
  [FoldMap],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Identity<${aTypeParam.type}>`).labeled('I')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], aTypeParam),
  ),
)

export const node = concat
