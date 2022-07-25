import { Dynamic } from '../AST.js'

import { AssociativeEither } from './AssociativeEither.js'
import { AssociativeFlatten } from './AssociativeFlatten.js'
import { Covariant } from './Covariant.js'
import {
  aTypeParam,
  bTypeParam,
  composed_,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common.js'

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
