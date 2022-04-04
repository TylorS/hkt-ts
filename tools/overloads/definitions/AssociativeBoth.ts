import { Kind, Tuple } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, interface_, placeholder } from './common'

export const AssociativeBoth = interface_(
  'AssociativeBoth',
  [
    fnLabeled_(
      'both',
      [placeholder, bTypeParam],
      [new Kind(hkt, [placeholder, bTypeParam]).labeled('second')],
      fn_(
        '',
        [aTypeParam],
        [new Kind(hkt, [placeholder, aTypeParam]).labeled('first')],
        new Kind(hkt, [placeholder, new Tuple([aTypeParam, bTypeParam])]),
      ),
    ),
  ],
  [Covariant],
)

export const node = AssociativeBoth
