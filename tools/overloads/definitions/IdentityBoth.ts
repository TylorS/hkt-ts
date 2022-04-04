import { AssociativeBoth } from './AssociativeBoth'
import { Identity } from './Identity'
import { interface_ } from './common'

export const IdentityBoth = interface_('IdentityBoth', [], [Identity, AssociativeBoth])

export const node = IdentityBoth
