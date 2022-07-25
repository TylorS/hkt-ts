import { Covariant } from './Covariant.js'
import { ForEach } from './ForEach.js'
import { IdentityBoth } from './IdentityBoth.js'
import {
  aTypeParam,
  bTypeParam,
  composed_,
  derived_,
  fnLabeled_,
  fn_,
  kindF_,
  kindG_,
  kind_,
  placeholder,
  placeholderF,
  placeholderG,
} from './common.js'

export const forEach = composed_(
  'forEach',
  [ForEach],
  [ForEach],
  derived_(
    '',
    [IdentityBoth, Covariant],
    fn_(
      '',
      [aTypeParam, placeholder, bTypeParam],
      [fnLabeled_('f', [], [aTypeParam.labeled('a')], kind_([bTypeParam]))],
      fn_(
        '',
        [placeholderF, placeholderG],
        [kindF_([kindG_([aTypeParam])]).labeled('kind')],
        kind_([kindF_([kindG_([bTypeParam])])]),
      ),
    ),
  ),
)
