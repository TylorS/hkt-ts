import { Dynamic } from '../AST'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

export const node = interface_('Contravariant', [
  fnLabeled_(
    'contramap',
    [bTypeParam, aTypeParam],
    [new Dynamic([bTypeParam, aTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled('f')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
])

export const Contravariant = node
