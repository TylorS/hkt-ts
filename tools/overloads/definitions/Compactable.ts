import { Interface } from '../AST'

import { Compact } from './Compact'
import { Separate } from './Separate'
import { hkt } from './common'

export const node = new Interface('Compactable', [hkt], [], [Compact, Separate])

export const Compactable = node
