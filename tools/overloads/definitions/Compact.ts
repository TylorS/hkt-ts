import { Static } from '../AST'

import { aTypeParam, fnLabeled_, interface_, kind_, placeholder } from './common'

export const node = interface_('Compact', [
  fnLabeled_(
    'compact',
    [placeholder, aTypeParam],
    [kind_([new Static(`Maybe<A>`)]).labeled('kind')],
    kind_([aTypeParam]),
  ),
])

export const Compact = node
