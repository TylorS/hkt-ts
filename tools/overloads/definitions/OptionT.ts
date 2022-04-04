import { Kind, Static, TypeAlias } from '../AST'

import { aTypeParam, hkt, placeholder } from './common'

export const node = new TypeAlias(
  'OptionT',
  [hkt, placeholder, aTypeParam],
  new Kind(hkt, [placeholder, new Static(`Option<A>`)]),
)
