import { Covariant } from './Covariant.js'
import { Top } from './Top.js'
import { aTypeParam, derived_, fn_, kindWithDefaults_, placeholderWithDefaults } from './common.js'

export const makeFromValue = derived_(
  'makeFromValue',
  [Top, Covariant],
  fn_(
    '',
    [aTypeParam, placeholderWithDefaults],
    [aTypeParam.labeled('a')],
    kindWithDefaults_([aTypeParam]),
  ),
)

export const node = makeFromValue
