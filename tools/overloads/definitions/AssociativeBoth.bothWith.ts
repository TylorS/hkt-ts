import { IntersectionNode, Tuple } from '../AST.js'

import { AssociativeBoth } from './AssociativeBoth.js'
import { Contravariant } from './Contravariant.js'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common.js'

export const bothWith = fn_(
  'bothWith',
  [hkt, curriedPlaceholder_(hkt)],
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
