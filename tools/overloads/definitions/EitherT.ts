import { Static, TypeAlias } from '../AST'

import { aTypeParam, bTypeParam, hkt, kind_, placeholder } from './common'

export const node = new TypeAlias(
  'EitherT',
  [hkt, placeholder, aTypeParam, bTypeParam],
  kind_([new Static(`Either<A, B>`)]),
)
