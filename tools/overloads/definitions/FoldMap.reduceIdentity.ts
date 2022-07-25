import { Static } from '../AST.js'

import { FoldMap } from './FoldMap.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const reduceIdentity = derived_(
  'reduceIdentity',
  [FoldMap],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Identity<A>`).labeled('I')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled()], aTypeParam),
  ),
)
