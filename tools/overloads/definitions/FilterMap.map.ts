import { FilterMap } from './FilterMap.js'
import { aTypeParam, bTypeParam, derived_, fab_, fn_, kind_, placeholder } from './common.js'

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
