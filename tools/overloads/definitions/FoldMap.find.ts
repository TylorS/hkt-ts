import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common'

const bool = new Static(`boolean`)

export const find = derived_(
  'find',
  [FoldMap],
  fn_(
    '',
    [aTypeParam],
    [fnLabeled_('predicate', [], [aTypeParam.labeled('a')], bool)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], new Static(`Maybe<A>`)),
  ),
)

export const node = find
