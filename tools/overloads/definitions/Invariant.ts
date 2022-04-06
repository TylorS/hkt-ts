import { Dynamic } from '../AST'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

export const node = interface_('Invariant', [
  fnLabeled_(
    'imap',
    [aTypeParam, bTypeParam],
    [
      new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('f'),
      new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${b}, ${a}>`).labeled('g'),
    ],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
])

export const Covariant = node
