import { Tuple } from '../AST'

import { AssociativeBoth } from './AssociativeBoth'
import { Covariant } from './Covariant'
import {
  aTypeParam,
  bTypeParam,
  composed_,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common'

export const both = composed_(
  'both',
  [AssociativeBoth, Covariant],
  [AssociativeBoth],
  fn_(
    '',
    [placeholderF, placeholderG, bTypeParam],
    [kindF_([kindG_([bTypeParam])]).labeled('second')],
    fn_(
      '',
      [aTypeParam],
      [kindF_([kindG_([aTypeParam])]).labeled('first')],
      kindF_([kindG_([new Tuple([aTypeParam, bTypeParam])])]),
    ),
  ),
)
