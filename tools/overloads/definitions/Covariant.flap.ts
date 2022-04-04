import { FunctionSignature, Kind, Static } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, hkt, placeholder } from './common'

export const node = new FunctionSignature(
  'flap',
  [hkt],
  [Covariant.toTypeClass(hkt).labeled('C"')],
  new FunctionSignature(
    '',
    [aTypeParam],
    [new Static('A').labeled('a')],
    new FunctionSignature(
      '',
      [placeholder, bTypeParam],
      [new Kind(hkt, [placeholder, new Static(`(a: A) => B`)]).labeled('kind')],
      new Kind(hkt, [placeholder, bTypeParam]),
    ),
  ),
)
