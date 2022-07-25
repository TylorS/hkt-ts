import { Dynamic } from '../AST.js'

import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  dTypeParam,
  fnLabeled_,
  fn_,
  interface_,
  kind_,
  placeholder,
} from './common.js'

export const node = interface_('Divariant', [
  fnLabeled_(
    'dimap',
    [aTypeParam, bTypeParam, cTypeParam, dTypeParam],
    [
      new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('f'),
      new Dynamic([cTypeParam, dTypeParam] as const, ([c, d]) => `Unary<${c}, ${d}>`).labeled('g'),
    ],
    fn_(
      '',
      [placeholder],
      [kind_([bTypeParam, cTypeParam]).labeled('kind')],
      kind_([aTypeParam, dTypeParam]),
    ),
  ),
])

export const Divariant = node
