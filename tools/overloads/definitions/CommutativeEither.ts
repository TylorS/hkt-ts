import { AssociativeEither } from './AssociativeEither'
import { interface_ } from './common'

export const CommutativeEither = interface_('CommutativeEither', [], [AssociativeEither])

export const node = CommutativeEither
