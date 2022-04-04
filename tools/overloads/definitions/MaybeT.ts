import { Static, TypeAlias } from '../AST'

import { aTypeParam, hkt, kind_, placeholder } from './common'

export const node = new TypeAlias(
  'MaybeT',
  [hkt, placeholder, aTypeParam],
  kind_([new Static(`Maybe<A>`)]),
)
