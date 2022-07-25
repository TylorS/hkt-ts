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

export const Bicovariant = interface_('Bicovariant', [
  fnLabeled_(
    'bimap',
    [aTypeParam, bTypeParam, cTypeParam, dTypeParam],
    [
      new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('f'),
      new Dynamic([cTypeParam, dTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('g'),
    ],
    fn_(
      '',
      [placeholder],
      [kind_([aTypeParam, cTypeParam]).labeled('kind')],
      kind_([bTypeParam, dTypeParam]),
    ),
  ),
])

export const node = Bicovariant
