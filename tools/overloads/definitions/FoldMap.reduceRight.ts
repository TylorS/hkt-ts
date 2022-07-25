import { FoldMap } from './FoldMap.js'
import { ForEach } from './ForEach.js'
import { aTypeParam, bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common.js'

export const reduceRight = derived_(
  'reduceRight',
  [FoldMap, ForEach],
  fn_(
    'reduceRight',
    [bTypeParam, aTypeParam],
    [
      bTypeParam.labeled('b'),
      fnLabeled_('f', [], [aTypeParam.labeled('a'), bTypeParam.labeled('b')], bTypeParam),
    ],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
  ),
)

export const node = reduceRight
