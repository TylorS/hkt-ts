import { IntersectionNode, Typeclass } from '../AST'

import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import { fn_, hkt } from './common'

export const makeAssociativeBoth = fn_(
  'makeAssociativeBoth',
  [hkt],
  [
    new IntersectionNode(AssociativeFlatten.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled(
      'F',
    ),
  ],
  new Typeclass('AssociativeBoth', hkt),
)

export const node = makeAssociativeBoth
