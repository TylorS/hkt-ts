import { Static } from '../AST'

import { FilterMap } from './FilterMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

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
