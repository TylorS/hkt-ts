import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

const bool = new Static(`boolean`)

export const find = fn_(
  'find',
  [hkt],
  [FoldMap.toTypeClass(hkt).labeled('FM')],
  fn_(
    '',
    [aTypeParam],
    [fnLabeled_('predicate', [], [aTypeParam.labeled('a')], bool)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], new Static(`Maybe<A>`)),
  ),
)

export const node = find
