import { Dynamic } from '../AST'

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

export const map = composed_(
  'map',
  [Covariant],
  [Covariant],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('f')],
    fn_(
      '',
      [placeholderF, placeholderG],
      [kindF_([kindG_([aTypeParam])]).labeled()],
      kindF_([kindG_([bTypeParam])]),
    ),
  ),
)
