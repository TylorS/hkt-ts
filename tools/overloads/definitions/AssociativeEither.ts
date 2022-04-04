import { Kind, Static } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, interface_, placeholder } from './common'

export const AssociativeEither = interface_(
  'AssociativeEither',
  [
    fnLabeled_(
      'either',
      [placeholder, bTypeParam],
      [new Kind(hkt, [placeholder, bTypeParam]).labeled('second')],
      fn_(
        '',
        [aTypeParam],
        [new Kind(hkt, [placeholder, aTypeParam]).labeled('first')],
        new Kind(hkt, [placeholder, new Static(`Either<A, B>`)]),
      ),
    ),
  ],
  [Covariant],
)

export const node = AssociativeEither
