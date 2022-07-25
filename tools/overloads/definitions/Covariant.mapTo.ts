import { Static } from '../AST.js'

import { Covariant } from './Covariant.js'
import { aTypeParam, bTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

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
