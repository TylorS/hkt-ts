import { Any } from './Any'
import { AssociativeEither } from './AssociativeEither'
import { interface_ } from './common'

export const AnyBoth = interface_('AnyBoth', [], [Any, AssociativeEither])

export const node = AnyBoth
