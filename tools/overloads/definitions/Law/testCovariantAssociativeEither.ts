import { Dynamic, IntersectionNode, ObjectNode, Static } from '../../AST'
import { AssociativeEither } from '../AssociativeEither'
import { Covariant } from '../Covariant'
import {
  aTypeParam,
  bTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from '../common'

export const testCovariantAssociativeEither = fn_(
  'testCovariantAssociativeEither',
  [hkt, curriedPlaceholder_(hkt), placeholder, aTypeParam, bTypeParam],
  [
    new IntersectionNode(Covariant.toTypeClass(hkt), AssociativeEither.toTypeClass(hkt)).labeled(
      'IBC',
    ),
    new Dynamic([kind_([aTypeParam])], ([k]) => `Eq<${k}>`).labeled('EA'),
    fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam),
    new Dynamic([kind_([bTypeParam])], ([k]) => `Eq<${k}>`).labeled('EB'),
  ],
  fn_(
    '',
    [],
    [new Dynamic([kind_([aTypeParam])], ([k]) => `Arbitrary.Arbitrary<${k}>`).labeled('A')],
    fn_(
      '',
      [],
      [new Static(`typeof import('fast-check')`).labeled('fc')],
      new ObjectNode([
        new Static(`() => void`).labeled('associativity'),
        new Static(`() => void`).labeled('distributivity'),
      ]),
    ),
  ),
)
