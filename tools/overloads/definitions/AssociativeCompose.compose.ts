import { AssociativeCompose } from './AssociativeCompose.js'
import { AssociativeFlatten } from './AssociativeFlatten.js'
import { Covariant } from './Covariant.js'
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
} from './common.js'

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
