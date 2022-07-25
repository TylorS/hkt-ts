import { Contravariant } from './Contravariant.js'
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
} from './common.js'

export const contramap = composed_(
  'contramap',
  [Contravariant],
  [Contravariant],
  fn_(
    '',
    [bTypeParam, aTypeParam],
    [fnLabeled_('f', [], [bTypeParam.labeled('b')], aTypeParam)],
    fn_(
      '',
      [placeholderF, placeholderG, aTypeParam],
      [kindF_([kindG_([aTypeParam])]).labeled()],
      kindF_([kindG_([bTypeParam])]),
    ),
  ),
)
