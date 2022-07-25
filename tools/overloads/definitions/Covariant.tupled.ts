import { Tuple } from '../AST.js'

import { Covariant } from './Covariant.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

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
