import { Dynamic } from '../AST'

import { node as Divariant } from './Divariant'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  fnLabeled_,
  interface_,
  kind_,
  placeholder,
} from './common'

export const node = interface_(
  'Choice',
  [
    fnLabeled_(
      'left',
      [placeholder, aTypeParam, bTypeParam, cTypeParam],
      [kind_([aTypeParam, bTypeParam]).labeled('kind')],
      kind_([
        new Dynamic([aTypeParam, cTypeParam], ([a, b]) => `Either<${a}, ${b}>`),
        new Dynamic([bTypeParam, cTypeParam], ([b, c]) => `Either<${b}, ${c}>`),
      ]),
    ),
    fnLabeled_(
      'right',
      [placeholder, aTypeParam, bTypeParam, cTypeParam],
      [kind_([bTypeParam, cTypeParam]).labeled('kind')],
      kind_([
        new Dynamic([aTypeParam, bTypeParam], ([a, b]) => `Either<${a}, ${b}>`),
        new Dynamic([aTypeParam, cTypeParam], ([b, c]) => `Either<${b}, ${c}>`),
      ]),
    ),
  ],
  [Divariant],
)

export const Category = node
