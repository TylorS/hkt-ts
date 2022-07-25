import { Kind, Static } from '../AST.js'

import { hkt, interface_, placeholderWithDefaults } from './common.js'

const unknownType = new Static('unknown')

export const Top = interface_(
  'Top',
  [new Kind(hkt, [placeholderWithDefaults, unknownType]).labeled('top')],
  [],
)

export const node = Top
