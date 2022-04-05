import { Any } from './Any'
import { AssociativeBoth } from './AssociativeBoth'
import { interface_ } from './common'

export const AnyBoth = interface_('AnyBoth', [], [Any, AssociativeBoth])

export const node = AnyBoth
