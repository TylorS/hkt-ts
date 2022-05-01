import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const reduceAssociative = derived_(
  'reduceAssociative',
  FoldMap,
  fn_(
    '',
    [aTypeParam],
    [new Static(`Associative<A>`).labeled('A')],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled()], new Static(`Maybe<A>`)),
  ),
)
