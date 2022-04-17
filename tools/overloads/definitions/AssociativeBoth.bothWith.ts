import { IntersectionNode, Tuple } from '../AST'

import { AssociativeBoth } from './AssociativeBoth'
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

export const bothWith = fn_(
  'bothWith',
  [hkt],
  [
    new IntersectionNode(AssociativeBoth.toTypeClass(hkt), Contravariant.toTypeClass(hkt)).labeled(
      'AB',
    ),
  ],
  fn_(
    '',
    [placeholder, bTypeParam, cTypeParam, aTypeParam],
    [
      kind_([bTypeParam]).labeled('b'),
      fnLabeled_('f', [], [cTypeParam.labeled('c')], new Tuple([aTypeParam, bTypeParam])),
    ],
    fn_('', [], [kind_([aTypeParam]).labeled('a')], kind_([cTypeParam])),
  ),
)

export const node = bothWith
