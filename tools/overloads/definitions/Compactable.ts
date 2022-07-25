import { Compact } from './Compact.js'
import { Separate } from './Separate.js'
import { interface_ } from './common.js'

export const node = interface_('Compactable', [], [Compact, Separate])

export const Compactable = node
