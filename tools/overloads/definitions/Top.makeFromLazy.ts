import { Static } from '../AST'

import { Covariant } from './Covariant'
import { Top } from './Top'
import { aTypeParam, derived_, fn_, kindWithDefaults_, placeholderWithDefaults } from './common'

export const makeFromLazy = derived_(
  'makeFromLazy',
  [Top, Covariant],
  fn_(
    '',
    [aTypeParam, placeholderWithDefaults],
    [new Static(`Lazy<A>`).labeled('f')],
    kindWithDefaults_([aTypeParam]),
  ),
)

export const node = makeFromLazy
