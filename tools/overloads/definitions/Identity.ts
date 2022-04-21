import { Interface } from '../AST'

import { aTypeParam } from './common'

export const node = new Interface(
  'Identity',
  [aTypeParam],
  [aTypeParam.labeled('id')],
  [new Interface('Associative', [aTypeParam], [])],
)

export const Identity = node
