import { Covariant } from './Covariant.js'
import { Invariant } from './Invariant.js'
import {
  aTypeParam,
  bTypeParam,
  composed_,
  fab_,
  fnLabeled_,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common.js'

export const imap = composed_(
  'imap',
  [Covariant],
  [Invariant],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [fab_, fnLabeled_('g', [], [bTypeParam.labeled('b')], aTypeParam)],
    fn_(
      '',
      [placeholderF, placeholderG],
      [kindF_([kindG_([aTypeParam])]).labeled()],
      kindF_([kindG_([bTypeParam])]),
    ),
  ),
)
