import { Dynamic, FunctionSignature, HKTParam, Kind } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, curriedPlaceholder_ } from './common'

export const hktF = new HKTParam(Symbol('F'), 'F')
export const hktG = new HKTParam(Symbol('G'), 'G')
export const placeholderF = hktF.toPlaceholder()
export const placeholderG = hktG.toPlaceholder()

export const node = new FunctionSignature(
  'map',
  [hktF, curriedPlaceholder_(hktF), hktG, curriedPlaceholder_(hktG)],
  [
    Covariant.toTypeClass(hktF)
      .setParams([curriedPlaceholder_(hktF)])
      .labeled('F'),
    Covariant.toTypeClass(hktG)
      .setParams([curriedPlaceholder_(hktG)])
      .labeled('G'),
  ],
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
