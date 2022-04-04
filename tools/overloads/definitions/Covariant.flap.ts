import { Static } from '../AST'

import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const node = fn_(
  'flap',
  [hkt],
  [Covariant.toTypeClass(hkt).labeled('C')],
  fn_(
    '',
    [aTypeParam],
    [new Static('A').labeled('a')],
    fn_(
      '',
      [placeholder, bTypeParam],
      [kind_([new Static(`(a: A) => B`)]).labeled('kind')],
      kind_([bTypeParam]),
    ),
  ),
)
