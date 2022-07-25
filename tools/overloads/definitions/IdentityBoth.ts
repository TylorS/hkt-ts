import { AssociativeBoth } from './AssociativeBoth.js'
import { Top } from './Top.js'
import { interface_ } from './common.js'

export const IdentityBoth = interface_('IdentityBoth', [], [AssociativeBoth, Top])

export const node = IdentityBoth
