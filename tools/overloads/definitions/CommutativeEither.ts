import { AssociativeEither } from './AssociativeEither.js'
import { interface_ } from './common.js'

export const CommutativeEither = interface_('CommutativeEither', [], [AssociativeEither])

export const node = CommutativeEither
