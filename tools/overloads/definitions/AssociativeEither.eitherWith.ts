import { Dynamic } from '../AST'

import { AssociativeEither } from './AssociativeEither'
import { Contravariant } from './Contravariant'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common'

export const eitherWith = derived_(
  'eitherWith',
  [AssociativeEither, Contravariant],
  fn_(
    '',
    [placeholder, bTypeParam, cTypeParam, aTypeParam],
    [
      kind_([bTypeParam]).labeled('b'),
      fnLabeled_(
        'f',
        [],
        [cTypeParam.labeled('c')],
        new Dynamic([aTypeParam, bTypeParam], ([a, b]) => `Either<${a}, ${b}>`),
      ),
    ],
    fn_('', [], [kind_([aTypeParam]).labeled('a')], kind_([cTypeParam])),
  ),
)

export const node = eitherWith
