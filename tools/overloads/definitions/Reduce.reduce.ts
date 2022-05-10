import { Reduce } from './Reduce'
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

export const reduce = composed_(
  'reduce',
  [Reduce],
  [Reduce],
  fn_(
    '',
    [bTypeParam, aTypeParam],
    [
      bTypeParam.labeled('seed'),
      fnLabeled_('f', [], [bTypeParam.labeled('b'), aTypeParam.labeled('a')], bTypeParam),
    ],
    fn_('', [placeholderF, placeholderG], [kindF_([kindG_([aTypeParam])]).labeled()], bTypeParam),
  ),
)
