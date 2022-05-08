import { Covariant } from './Covariant'
import { Top } from './Top'
import { aTypeParam, derived_, fn_, kindWithDefaults_, placeholderWithDefaults } from './common'

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
