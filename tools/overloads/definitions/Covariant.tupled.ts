import { Tuple } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const node = derived_(
  'tupled',
  [Covariant],
  fn_(
    '',
    [placeholder, aTypeParam],
    [kind_([aTypeParam]).labeled('kind')],
    kind_([new Tuple([aTypeParam])]),
  ),
)
