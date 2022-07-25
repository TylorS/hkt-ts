import { Static } from '../AST.js'

import { Covariant } from './Covariant.js'
import { Top } from './Top.js'
import { aTypeParam, derived_, fn_, kindWithDefaults_, placeholderWithDefaults } from './common.js'

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
