import { AssociativeFlatten } from './AssociativeFlatten.js'
import { Top } from './Top.js'
import { interface_ } from './common.js'

export const IdentityFlatten = interface_('IdentityFlatten', [], [AssociativeFlatten, Top])

export const node = IdentityFlatten
