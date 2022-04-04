import { Dynamic, Tuple } from '../AST'

import { aTypeParam, bTypeParam, fnLabeled_, interface_, kind_, placeholder } from './common'

export const node = interface_('Separate', [
  fnLabeled_(
    'separate',
    [placeholder, aTypeParam, bTypeParam],
    [
      kind_([new Dynamic([aTypeParam, bTypeParam], ([A, B]) => `Either<${A}, ${B}>`)]).labeled(
        'kind',
      ),
    ],
    new Tuple([kind_([aTypeParam]), kind_([bTypeParam])]),
  ),
])

export const Separate = node
