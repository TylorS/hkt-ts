import { Dynamic } from '../AST.js'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common.js'

export const AssociativeEither = interface_(
  'AssociativeEither',
  [
    fnLabeled_(
      'either',
      [placeholder, bTypeParam],
      [kind_([bTypeParam]).labeled('second')],
      fn_(
        '',
        [aTypeParam],
        [kind_([aTypeParam]).labeled('first')],
        kind_([new Dynamic([aTypeParam, bTypeParam], ([a, b]) => `Either<${a}, ${b}>`)]),
      ),
    ),
  ],
  [],
)

export const node = AssociativeEither
