import { ReduceRight } from './ReduceRight'
import {
  aTypeParam,
  bTypeParam,
  composed_,
  fnLabeled_,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common'

export const reduceRight = composed_(
  'reduceRight',
  [ReduceRight],
  [ReduceRight],
  fn_(
    '',
    [bTypeParam, aTypeParam],
    [
      bTypeParam.labeled('b'),
      fnLabeled_('f', [], [aTypeParam.labeled('a'), bTypeParam.labeled('b')], bTypeParam),
    ],
    fn_('', [placeholderF, placeholderG], [kindF_([kindG_([aTypeParam])]).labeled()], bTypeParam),
  ),
)
