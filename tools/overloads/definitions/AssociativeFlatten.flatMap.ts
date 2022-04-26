import { IntersectionNode } from '../AST'

import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

export const flatMap = fn_(
  'flatMap',
  [hkt],
  [
    new IntersectionNode(AssociativeFlatten.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled(
      'AFC',
    ),
  ],
  fn_(
    '',
    [aTypeParam, placeholder, bTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], kind_([bTypeParam]))],
    fn_('', [], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
)

export const node = flatMap
