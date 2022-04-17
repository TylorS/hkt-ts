import { IntersectionNode, UnionNode } from '../AST'

import { AssociativeEither } from './AssociativeEither'
import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

export const orElse = fn_(
  'orElse',
  [hkt],
  [
    new IntersectionNode(AssociativeEither.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled(
      'AE',
    ),
  ],
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
