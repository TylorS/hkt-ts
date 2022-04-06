import { Alt } from './Alt'
import { Zero } from './Zero'
import { interface_ } from './common'

export const node = interface_('Alternative', [], [Alt, Zero])

export const Alternative = node
