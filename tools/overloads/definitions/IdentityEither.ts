import { AssociativeEither } from './AssociativeEither.js'
import { Bottom } from './Bottom.js'
import { interface_ } from './common.js'

export const IdentityEither = interface_('IdentityEither', [], [AssociativeEither, Bottom])

export const node = IdentityEither
