import { Static, TypeAlias } from '../AST'

import { aTypeParam, bTypeParam, hkt, kind_, placeholder } from './common'

export const node = new TypeAlias(
  'TheseT',
  [hkt, placeholder, aTypeParam, bTypeParam],
  kind_([new Static(`These<A, B>`)]),
)
