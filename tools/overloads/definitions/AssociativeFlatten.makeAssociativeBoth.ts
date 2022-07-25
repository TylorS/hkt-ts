import { AssociativeBoth } from './AssociativeBoth.js'
import { AssociativeFlatten } from './AssociativeFlatten.js'
import { Covariant } from './Covariant.js'
import { derived_, hkt } from './common.js'

export const makeAssociativeBoth = derived_(
  'makeAssociativeBoth',
  [AssociativeFlatten, Covariant],
  AssociativeBoth.toTypeClass(hkt),
)

export const node = makeAssociativeBoth
