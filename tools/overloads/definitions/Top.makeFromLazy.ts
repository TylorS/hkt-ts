import { IntersectionNode, Static } from '../AST'

import { Covariant } from './Covariant'
import { Top } from './Top'
import { aTypeParam, fn_, hkt, kindWithDefaults_, placeholderWithDefaults } from './common'

export const makeFromLazy = fn_(
  'makeFromLazy',
  [hkt],
  [new IntersectionNode(Top.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled('T')],
  fn_(
    '',
    [aTypeParam, placeholderWithDefaults],
    [new Static(`Lazy<A>`).labeled('f')],
    kindWithDefaults_([aTypeParam]),
  ),
)

export const node = makeFromLazy
