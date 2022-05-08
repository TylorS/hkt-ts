import { AssociativeCompose } from './AssociativeCompose'
import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import {
  bTypeParam,
  cTypeParam,
  composed_,
  dTypeParam,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common'

export const compose = composed_(
  'compose',
  [AssociativeFlatten, Covariant],
  [AssociativeCompose],
  fn_(
    '',
    [placeholderF, placeholderG, cTypeParam, dTypeParam],
    [kindF_([kindG_([cTypeParam, dTypeParam])]).labeled('second')],
    fn_(
      '',
      [bTypeParam],
      [kindF_([kindG_([bTypeParam, cTypeParam])]).labeled('first')],
      kindF_([kindG_([bTypeParam, dTypeParam])]),
    ),
  ),
)
