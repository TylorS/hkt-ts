import { Dynamic, IntersectionNode, ObjectNode, Static } from '../../AST.js'
import { Covariant } from '../Covariant.js'
import { IdentityEither } from '../IdentityEither.js'
import {
  aTypeParam,
  bTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from '../common.js'

export const testCovariantIdentityEither = fn_(
  'testCovariantIdentityEither',
  [hkt, curriedPlaceholder_(hkt), placeholder, aTypeParam, bTypeParam],
  [
    new IntersectionNode(Covariant.toTypeClass(hkt), IdentityEither.toTypeClass(hkt)).labeled(
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
        new Static(`() => void`).labeled('distributivity'),
        new Static(`() => void`).labeled('leftIdentity'),
        new Static(`() => void`).labeled('rightIdentity'),
        new Static(`() => void`).labeled('annihilation'),
      ]),
    ),
  ),
)
