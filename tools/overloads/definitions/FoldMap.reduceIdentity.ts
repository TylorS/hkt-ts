import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const reduceIdentity = derived_(
  'reduceIdentity',
  FoldMap,
  fn_(
    '',
    [aTypeParam],
    [new Static(`Identity<A>`).labeled('I')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled()], aTypeParam),
  ),
)
