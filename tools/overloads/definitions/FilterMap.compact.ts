import { Static } from '../AST'

import { FilterMap } from './FilterMap'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const makeCompact = fn_(
  'makeCompact',
  [hkt],
  [FilterMap.toTypeClass(hkt).labeled('F')],
  fn_(
    '',
    [placeholder, aTypeParam],
    [kind_([new Static(`Maybe<${aTypeParam.type}>`)]).labeled('kind')],
    kind_([aTypeParam]),
  ),
)

export const node = makeCompact
