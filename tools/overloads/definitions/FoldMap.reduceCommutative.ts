import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const reduceCommutative = derived_(
  'reduceCommutative',
  [FoldMap],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Commutative<A>`).labeled('C')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled()], new Static(`Maybe<A>`)),
  ),
)
