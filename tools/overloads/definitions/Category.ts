import { Interface } from '../AST'

import { node as AssociativeCompose } from './AssociativeCompose'
import { node as Identity } from './Identity'
import { hkt } from './common'

export const node = new Interface('Category', [hkt], [], [Identity, AssociativeCompose])

export const Category = node
