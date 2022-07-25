import { Dynamic } from '../AST.js'

import { AssociativeEither } from './AssociativeEither.js'
import { Contravariant } from './Contravariant.js'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common.js'

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
