import { FunctionSignature, Kind } from '../AST'

import { Bicovariant } from './Bicovariant'
import { aTypeParam, bTypeParam, cTypeParam, hkt, placeholder } from './common'

export const node = new FunctionSignature(
  'mapLeft',
  [hkt],
  [Bicovariant.toTypeClass(hkt).labeled('B')],
  new FunctionSignature(
    '',
    [aTypeParam, bTypeParam],
    [new FunctionSignature('f', [], [aTypeParam.labeled('a')], bTypeParam).labeled('f')],
    new FunctionSignature(
      '',
      [placeholder, cTypeParam],
      [new Kind(hkt, [placeholder, aTypeParam, cTypeParam]).labeled('kind')],
      new Kind(hkt, [placeholder, bTypeParam, cTypeParam]),
    ),
  ),
)
