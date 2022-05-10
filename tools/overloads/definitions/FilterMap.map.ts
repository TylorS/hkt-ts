import { FilterMap } from './FilterMap'
import { aTypeParam, bTypeParam, derived_, fab_, fn_, kind_, placeholder } from './common'

export const map = derived_(
  'map',
  [FilterMap],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [fab_],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled()], kind_([bTypeParam])),
  ),
)
