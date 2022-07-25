import { Interface } from '../AST.js'

import { aTypeParam } from './common.js'

export const node = new Interface(
  'Identity',
  [aTypeParam],
  [aTypeParam.labeled('id')],
  [new Interface('Associative', [aTypeParam], [])],
)

export const Identity = node
