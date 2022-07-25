import { Dynamic } from '../AST.js'

import { ForEach } from './ForEach.js'
import {
  aTypeParam,
  bTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common.js'

export const map = fn_(
  'map',
  [hkt, curriedPlaceholder_(hkt)],
  [
    new Dynamic(
      [ForEach.toTypeClass(hkt).setParams([curriedPlaceholder_(hkt)])],
      (f) => `${f}['forEach']`,
    ).labeled('forEach'),
  ],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled()], kind_([bTypeParam])),
  ),
)
