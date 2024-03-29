import { Tuple } from '../AST.js'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common.js'

export const AssociativeBoth = interface_(
  'AssociativeBoth',
  [
    fnLabeled_(
      'both',
      [placeholder, bTypeParam],
      [kind_([bTypeParam]).labeled('second')],
      fn_(
        '',
        [aTypeParam],
        [kind_([aTypeParam]).labeled('first')],
        kind_([new Tuple([aTypeParam, bTypeParam])]),
      ),
    ),
  ],
  [],
)

export const node = AssociativeBoth
