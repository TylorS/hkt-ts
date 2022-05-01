import { IntersectionNode } from '../AST'

import { AssociativeBoth } from './AssociativeBoth'
import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const zipRight = fn_(
  'zipRight',
  [hkt],
  [
    new IntersectionNode(AssociativeBoth.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled(
      'ABC',
    ),
  ],
  fn_(
    '',
    [placeholder, bTypeParam],
    [kind_([bTypeParam]).labeled('second')],
    fn_('', [aTypeParam], [kind_([aTypeParam]).labeled('first')], kind_([bTypeParam])),
  ),
)
