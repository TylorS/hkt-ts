import { IntersectionNode } from '../AST'

import { AssociativeEither } from './AssociativeEither'
import { Covariant } from './Covariant'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

export const eventually = fn_(
  'eventually',
  [hkt],
  [
    new IntersectionNode(AssociativeEither.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled(
      'AE',
    ),
  ],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled('kind')], kind_([aTypeParam])),
)

export const node = eventually
