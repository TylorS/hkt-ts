import { Static } from '../AST.js'

import { FoldMap } from './FoldMap.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const reduceAssociative = derived_(
  'reduceAssociative',
  [FoldMap],
  fn_(
    '',
    [aTypeParam],
    [new Static(`Associative<A>`).labeled('A')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled()], new Static(`Maybe<A>`)),
  ),
)
