import { Apply } from './Apply'
import { FromValue } from './FromValue'
import { interface_ } from './common'

export const node = interface_('Applicative', [], [Apply, FromValue])

export const Applicative = node
