import { FunctionSignature, Kind, Tuple } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, hkt, placeholder } from './common'

export const node = new FunctionSignature(
  'tupled',
  [hkt],
  [Covariant.toTypeClass(hkt).labeled('C')],
  new FunctionSignature(
    '',
    [placeholder, aTypeParam],
    [new Kind(hkt, [placeholder, aTypeParam]).labeled('kind')],
    new Kind(hkt, [placeholder, new Tuple([aTypeParam])]),
  ),
)
