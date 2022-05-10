import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import {
  aTypeParam,
  bTypeParam,
  composed_,
  fab_,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common'

export const foldMap = composed_(
  'foldMap',
  [FoldMap],
  [FoldMap],
  fn_(
    '',
    [bTypeParam],
    [new Static(`Identity<B>`).labeled('I')],
    fn_(
      '',
      [aTypeParam],
      [fab_],
      fn_('', [placeholderF, placeholderG], [kindF_([kindG_([aTypeParam])]).labeled()], bTypeParam),
    ),
  ),
)
