import { AssociativeEither } from './AssociativeEither'
import { Identity } from './Identity'
import { interface_ } from './common'

export const IdentityEither = interface_('IdentityEither', [], [Identity, AssociativeEither])

export const node = IdentityEither
