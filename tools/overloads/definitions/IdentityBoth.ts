import { AssociativeBoth } from './AssociativeBoth'
import { Top } from './Top'
import { interface_ } from './common'

export const IdentityBoth = interface_('IdentityBoth', [], [AssociativeBoth, Top])

export const node = IdentityBoth
