import { Tuple } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const node = fn_(
  'tupled',
  [hkt],
  [Covariant.toTypeClass(hkt).labeled('C')],
  fn_(
    '',
    [placeholder, aTypeParam],
    [kind_([aTypeParam]).labeled('kind')],
    kind_([new Tuple([aTypeParam])]),
  ),
)
