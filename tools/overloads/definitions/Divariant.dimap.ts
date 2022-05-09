import { Covariant } from './Covariant'
import { Divariant } from './Divariant'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  composed_,
  dTypeParam,
  fnLabeled_,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common'

export const dimap = composed_(
  'dimap',
  [Divariant],
  [Covariant],
  fn_(
    '',
    [aTypeParam, bTypeParam, cTypeParam, dTypeParam],
    [
      fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam),
      fnLabeled_('g', [], [cTypeParam.labeled('c')], dTypeParam),
    ],
    fn_(
      '',
      [placeholderF, placeholderG],
      [kindF_([bTypeParam, kindG_([cTypeParam])]).labeled()],
      kindF_([aTypeParam, kindG_([dTypeParam])]),
    ),
  ),
)
