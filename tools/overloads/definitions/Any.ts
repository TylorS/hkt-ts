import { Static } from '../AST'

import { fnLabeled_, interface_, kind_, placeholder } from './common'

export const unknownParam = new Static(`unknown`)

export const node = interface_('Any', [fnLabeled_('any', [placeholder], [], kind_([unknownParam]))])

export const Any = node
