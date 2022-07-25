import { UnionNode } from '../AST.js'

import { AssociativeEither } from './AssociativeEither.js'
import { Covariant } from './Covariant.js'
import { aTypeParam, bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common.js'

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
