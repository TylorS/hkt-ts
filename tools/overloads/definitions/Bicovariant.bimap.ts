import { Dynamic } from '../AST'

import { Bicovariant } from './Bicovariant'
import { Covariant } from './Covariant'
import {
  aTypeParam,
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

export const bimap = composed_(
  'bimap',
  [Covariant],
  [Bicovariant],
  fn_(
    '',
    [aTypeParam, bTypeParam, cTypeParam, dTypeParam],
    [
      new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('f'),
      new Dynamic([cTypeParam, dTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('g'),
    ],
    fn_(
      '',
      [placeholderF, placeholderG],
      [kindF_([kindG_([aTypeParam, bTypeParam])]).labeled()],
      kindF_([kindG_([bTypeParam, dTypeParam])]),
    ),
  ),
)
