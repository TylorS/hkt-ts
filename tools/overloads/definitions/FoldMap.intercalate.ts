import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const intercalate = derived_(
  'intercalate',
  FoldMap,
  fn_(
    '',
    [aTypeParam],
    [new Static(`Identity<A>`).labeled('I')],
    fn_(
      '',
      [],
      [aTypeParam.labeled('a')],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled()], aTypeParam),
    ),
  ),
)
