import { ObjectNode, Static } from '../AST.js'

import { Covariant } from './Covariant.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const nameTypeParam = new Static('N extends string')

export const node = derived_(
  'bindTo',
  [Covariant],
  fn_(
    '',
    [nameTypeParam],
    [nameTypeParam.labeled('name')],
    fn_(
      '',
      [placeholder, aTypeParam],
      [kind_([aTypeParam]).labeled('kind')],
      kind_([new ObjectNode([new Static('A').labeled(`[K in N]`)])]),
    ),
  ),
)
