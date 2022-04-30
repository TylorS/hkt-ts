import { IntersectionNode } from '../AST'

import { FoldMap } from './FoldMap'
import { ForEach } from './ForEach'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

export const reduceRight = fn_(
  'reduceRight',
  [hkt],
  [new IntersectionNode(FoldMap.toTypeClass(hkt), ForEach.toTypeClass(hkt)).labeled('FM')],
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
