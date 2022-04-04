import { Dynamic } from '../AST'

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
} from './common'

export const node = interface_('Bivariant', [
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

export const Bivariant = node
