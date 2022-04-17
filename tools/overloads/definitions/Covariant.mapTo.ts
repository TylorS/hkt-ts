import { Static } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const node = fn_(
  'mapTo',
  [hkt],
  [Covariant.toTypeClass(hkt).labeled('C')],
  fn_(
    '',
    [bTypeParam],
    [new Static('B').labeled('b')],
    fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
)
