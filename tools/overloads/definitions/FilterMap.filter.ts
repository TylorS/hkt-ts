import { Static } from '../AST'

import { FilterMap } from './FilterMap'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const filter = fn_(
  'filter',
  [hkt],
  [FilterMap.toTypeClass(hkt).labeled('FM')],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Predicate<A>`).labeled('predicate')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([aTypeParam])),
  ),
)

export const node = filter
