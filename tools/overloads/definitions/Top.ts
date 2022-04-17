import { Kind, Static } from '../AST'

import { hkt, interface_, placeholderWithDefaults } from './common'

const unknownType = new Static('unknown')

export const Top = interface_(
  'Top',
  [new Kind(hkt, [placeholderWithDefaults, unknownType]).labeled('top')],
  [],
)

export const node = Top
