import { FunctionSignature, Kind, ObjectNode, Static } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, hkt, placeholder } from './common'

export const nameTypeParam = new Static('N extends string')

export const node = new FunctionSignature(
  'bindTo',
  [hkt],
  [Covariant.toTypeClass(hkt).labeled('C"')],
  new FunctionSignature(
    '',
    [nameTypeParam],
    [nameTypeParam.labeled('name')],
    new FunctionSignature(
      '',
      [placeholder, aTypeParam],
      [new Kind(hkt, [placeholder, aTypeParam]).labeled('kind')],
      new Kind(hkt, [placeholder, new ObjectNode([new Static('A').labeled(`[K in N]`)])]),
    ),
  ),
)
