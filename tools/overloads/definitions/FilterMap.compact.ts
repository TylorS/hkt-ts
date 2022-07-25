import { Static } from '../AST.js'

import { FilterMap } from './FilterMap.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const makeCompact = derived_(
  'makeCompact',
  [FilterMap],
  fn_(
    '',
    [placeholder, aTypeParam],
    [kind_([new Static(`Maybe<${aTypeParam.type}>`)]).labeled('kind')],
    kind_([aTypeParam]),
  ),
)

export const node = makeCompact
