import { AssociativeFlatten } from './AssociativeFlatten'
import { Top } from './Top'
import { interface_ } from './common'

export const IdentityFlatten = interface_('IdentityFlatten', [], [AssociativeFlatten, Top])

export const node = IdentityFlatten
