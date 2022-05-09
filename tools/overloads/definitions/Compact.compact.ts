import { Dynamic } from '../AST'

import { Compact } from './Compact'
import { Covariant } from './Covariant'
import { aTypeParam, composed_, fn_, kindF_, kindG_, placeholderF, placeholderG } from './common'

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
