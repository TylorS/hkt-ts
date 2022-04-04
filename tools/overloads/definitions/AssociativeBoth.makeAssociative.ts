import { Dynamic } from '../AST'

import { AssociativeBoth } from './AssociativeBoth'
import { aTypeParam, fn_, hkt, kindWithDefaults_, placeholderWithDefaults } from './common'

export const node = fn_(
  'makeAssociative',
  [hkt],
  [AssociativeBoth.toTypeClass(hkt).labeled('AB')],
  fn_(
    '',
    [aTypeParam, placeholderWithDefaults],
    [new Dynamic([aTypeParam], ([a]) => `Associative<${a}>`).labeled('A')],
    new Dynamic([kindWithDefaults_([aTypeParam])], (params) => `Associative<${params.join(', ')}>`),
  ),
)
