import { FoldMap } from './FoldMap'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

export const reduce = fn_(
  'reduce',
  [hkt],
  [FoldMap.toTypeClass(hkt).labeled('FM')],
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
