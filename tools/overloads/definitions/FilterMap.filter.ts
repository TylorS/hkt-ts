import { Static } from '../AST'

import { FilterMap } from './FilterMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const filter = derived_(
  'filter',
  [FilterMap],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Predicate<A>`).labeled('predicate')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([aTypeParam])),
  ),
)

export const node = filter
