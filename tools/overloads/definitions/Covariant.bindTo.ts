import { ObjectNode, Static } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const nameTypeParam = new Static('N extends string')

export const node = fn_(
  'bindTo',
  [hkt],
  [Covariant.toTypeClass(hkt).labeled('C')],
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
