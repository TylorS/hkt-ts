import { Dynamic } from '../AST.js'

import { Bicovariant } from './Bicovariant.js'
import { Covariant } from './Covariant.js'
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
} from './common.js'

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
      [kindF_([kindG_([aTypeParam, cTypeParam])]).labeled()],
      kindF_([kindG_([bTypeParam, dTypeParam])]),
    ),
  ),
)
