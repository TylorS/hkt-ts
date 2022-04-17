import { IntersectionNode } from '../AST'

import { Covariant } from './Covariant'
import { Top } from './Top'
import { aTypeParam, fn_, hkt, kindWithDefaults_, placeholderWithDefaults } from './common'

export const makeFromValue = fn_(
  'makeFromValue',
  [hkt],
  [new IntersectionNode(Top.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled('T')],
  fn_(
    '',
    [aTypeParam, placeholderWithDefaults],
    [aTypeParam.labeled('a')],
    kindWithDefaults_([aTypeParam]),
  ),
)

export const node = makeFromValue
