import { Dynamic, FunctionSignature, Kind } from '../AST'

import { AssociativeBoth } from './AssociativeBoth'
import { aTypeParam, hkt, placeholderWithDefaults } from './common'

export const node = new FunctionSignature(
  'makeAssociative',
  [hkt],
  [AssociativeBoth.toTypeClass(hkt).labeled('AB')],
  new FunctionSignature(
    '',
    [aTypeParam, placeholderWithDefaults],
    [new Dynamic([aTypeParam], ([a]) => `Associative<${a}>`).labeled('A')],
    new Dynamic(
      [new Kind(hkt, [placeholderWithDefaults, aTypeParam])],
      (params) => `Associative<${params.join(', ')}>`,
    ),
  ),
)
