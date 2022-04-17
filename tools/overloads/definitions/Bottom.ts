import { Kind, Static } from '../AST'

import { hkt, interface_, placeholderWithDefaults } from './common'

const neverType = new Static('never')

export const Bottom = interface_(
  'Bottom',
  [new Kind(hkt, [placeholderWithDefaults, neverType]).labeled('bottom')],
  [],
)

export const node = Bottom
