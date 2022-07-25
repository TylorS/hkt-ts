import { FoldMap } from './FoldMap.js'
import { aTypeParam, bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common.js'

export const reduce = derived_(
  'reduce',
  [FoldMap],
  fn_(
    '',
    [bTypeParam, aTypeParam],
    [
      bTypeParam.labeled('seed'),
      fnLabeled_('f', [], [bTypeParam.labeled('b'), aTypeParam.labeled('a')], bTypeParam),
    ],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
  ),
)

export const node = reduce
