import { UnionNode } from '../AST'

import { AssociativeEither } from './AssociativeEither'
import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common'

export const orElse = derived_(
  'orElse',
  [AssociativeEither, Covariant],
  fn_(
    '',
    [placeholder, bTypeParam],
    [fnLabeled_('f', [], [], kind_([bTypeParam]))],
    fn_(
      '',
      [aTypeParam],
      [kind_([aTypeParam]).labeled('kind')],
      kind_([new UnionNode(aTypeParam, bTypeParam)]),
    ),
  ),
)

export const node = orElse
