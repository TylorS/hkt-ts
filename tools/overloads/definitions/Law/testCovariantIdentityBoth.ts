import { Dynamic, IntersectionNode, ObjectNode, Static } from '../../AST'
import { Covariant } from '../Covariant'
import { IdentityBoth } from '../IdentityBoth'
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

export const testCovariantIdentityBoth = fn_(
  'testCovariantIdentityBoth',
  [hkt, curriedPlaceholder_(hkt), placeholder, aTypeParam, bTypeParam],
  [
    new IntersectionNode(Covariant.toTypeClass(hkt), IdentityBoth.toTypeClass(hkt)).labeled('IBC'),
    new Dynamic([kind_([aTypeParam])], ([k]) => `Eq<${k}>`).labeled('EA'),
    fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam),
    new Dynamic([kind_([bTypeParam])], ([k]) => `Eq<${k}>`).labeled('EB'),
  ],
  fn_(
    '',
    [],
    [new Static(`Arbitrary.Arbitrary<A>`).labeled('A')],
    fn_(
      '',
      [],
      [new Static(`typeof import('fast-check')`).labeled('fc')],
      new ObjectNode([
        new Static(`() => void`).labeled('identity'),
        new Static(`() => void`).labeled('homomorphism'),
        new Static(`() => void`).labeled('interchange'),
      ]),
    ),
  ),
)
