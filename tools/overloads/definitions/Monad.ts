import { Flatten } from './Flatten'
import { FromValue } from './FromValue'
import { interface_ } from './common'

export const node = interface_('Monad', [], [FromValue, Flatten])

export const Monad = node
