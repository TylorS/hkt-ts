import { AssociativeEither } from './AssociativeEither'
import { Bottom } from './Bottom'
import { interface_ } from './common'

export const IdentityEither = interface_('IdentityEither', [], [AssociativeEither, Bottom])

export const node = IdentityEither
