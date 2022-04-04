import { Compact } from './Compact'
import { Separate } from './Separate'
import { interface_ } from './common'

export const node = interface_('Compactable', [], [Compact, Separate])

export const Compactable = node
