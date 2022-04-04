import { Dynamic } from '../AST'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

export const node = interface_('Covariant', [
  fnLabeled_(
    'map',
    [aTypeParam, bTypeParam],
    [new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('f')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
])

export const Covariant = node
