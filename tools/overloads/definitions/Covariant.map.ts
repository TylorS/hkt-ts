import { Dynamic, FunctionSignature, HKTParam, Kind } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam } from './common'

export const hktF = new HKTParam('F')
export const hktG = new HKTParam('G')
export const placeholderF = hktF.toPlaceholder()
export const placeholderG = hktG.toPlaceholder()

export const node = new FunctionSignature(
  'map',
  [hktF, hktG],
  [Covariant.toTypeClass(hktF).labeled('F'), Covariant.toTypeClass(hktG).labeled('G')],
  new FunctionSignature(
    '',
    [aTypeParam, bTypeParam],
    [new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('f')],
    new FunctionSignature(
      '',
      [placeholderF, placeholderG],
      [new Kind(hktF, [placeholderF, new Kind(hktG, [placeholderG, aTypeParam])]).labeled('kind')],
      new Kind(hktF, [placeholderF, new Kind(hktG, [placeholderG, bTypeParam])]),
    ),
  ),
)
