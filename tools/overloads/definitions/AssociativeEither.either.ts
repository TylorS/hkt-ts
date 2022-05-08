import { Dynamic } from '../AST'

import { AssociativeEither } from './AssociativeEither'
import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import {
  aTypeParam,
  bTypeParam,
  composed_,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common'

export const either = composed_(
  'either',
  [AssociativeFlatten, Covariant],
  [AssociativeEither],
  fn_(
    '',
    [placeholderF, placeholderG, bTypeParam],
    [kindF_([kindG_([bTypeParam])]).labeled('second')],
    fn_(
      '',
      [aTypeParam],
      [kindF_([kindG_([aTypeParam])]).labeled('first')],
      kindF_([kindG_([new Dynamic([aTypeParam, bTypeParam], ([a, b]) => `Either<${a}, ${b}>`)])]),
    ),
  ),
)
