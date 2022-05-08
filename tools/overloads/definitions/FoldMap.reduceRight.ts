import { FoldMap } from './FoldMap'
import { ForEach } from './ForEach'
import { aTypeParam, bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common'

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
