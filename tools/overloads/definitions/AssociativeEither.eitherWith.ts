import { Dynamic, IntersectionNode } from '../AST'

import { AssociativeEither } from './AssociativeEither'
import { Contravariant } from './Contravariant'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common'

export const eitherWith = fn_(
  'eitherWith',
  [hkt],
  [
    new IntersectionNode(
      AssociativeEither.toTypeClass(hkt),
      Contravariant.toTypeClass(hkt),
    ).labeled('AE'),
  ],
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
