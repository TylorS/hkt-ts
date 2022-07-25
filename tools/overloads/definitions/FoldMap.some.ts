import { Static } from '../AST.js'

import { FoldMap } from './FoldMap.js'
import { aTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common.js'

const bool = new Static(`boolean`)

export const some = derived_(
  'some',
  [FoldMap],
  fn_(
    '',
    [aTypeParam],
    [fnLabeled_('predicate', [], [aTypeParam.labeled('a')], bool)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled()], bool),
  ),
)

export const node = some
