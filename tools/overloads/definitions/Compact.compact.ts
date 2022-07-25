import { Dynamic } from '../AST.js'

import { Compact } from './Compact.js'
import { Covariant } from './Covariant.js'
import { aTypeParam, composed_, fn_, kindF_, kindG_, placeholderF, placeholderG } from './common.js'

export const compact = composed_(
  'compact',
  [Covariant],
  [Compact],
  fn_(
    '',
    [placeholderF, placeholderG, aTypeParam],
    [kindF_([kindG_([new Dynamic([aTypeParam], ([a]) => `Maybe<${a}>`)])]).labeled()],
    kindF_([kindG_([aTypeParam])]),
  ),
)
