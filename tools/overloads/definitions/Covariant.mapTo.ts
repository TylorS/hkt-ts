import { Static } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const node = derived_(
  'mapTo',
  [Covariant],
  fn_(
    '',
    [bTypeParam],
    [new Static('B').labeled('b')],
    fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
)
