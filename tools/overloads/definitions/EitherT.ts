import { Kind, Static, TypeAlias } from '../AST'

import { aTypeParam, bTypeParam, hkt, placeholder } from './common'

export const node = new TypeAlias(
  'EitherT',
  [hkt, placeholder, aTypeParam, bTypeParam],
  new Kind(hkt, [placeholder, new Static(`Either<A, B>`)]),
)
