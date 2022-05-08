import { AssociativeBoth } from './AssociativeBoth'
import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import { derived_, hkt } from './common'

export const makeAssociativeBoth = derived_(
  'makeAssociativeBoth',
  [AssociativeFlatten, Covariant],
  AssociativeBoth.toTypeClass(hkt),
)

export const node = makeAssociativeBoth
