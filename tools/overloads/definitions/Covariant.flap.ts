import { Dynamic, Static } from '../AST.js'

import { Covariant } from './Covariant.js'
import { aTypeParam, bTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const node = derived_(
  'flap',
  [Covariant],
  fn_(
    '',
    [aTypeParam],
    [new Static('A').labeled('a')],
    fn_(
      '',
      [placeholder, bTypeParam],
      [kind_([new Dynamic([], () => `(a: A) => B`)]).labeled('kind')],
      kind_([bTypeParam]),
    ),
  ),
)
