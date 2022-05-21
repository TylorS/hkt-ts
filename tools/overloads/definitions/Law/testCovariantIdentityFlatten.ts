import { Dynamic, IntersectionNode, ObjectNode, Static } from '../../AST'
import { Covariant } from '../Covariant'
import { IdentityFlatten } from '../IdentityFlatten'
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
} from '../common'

export const testCovariantIdentityFlatten = fn_(
  'testCovariantIdentityFlatten',
  [hkt, curriedPlaceholder_(hkt), placeholder, aTypeParam, bTypeParam, cTypeParam],
  [
    new IntersectionNode(Covariant.toTypeClass(hkt), IdentityFlatten.toTypeClass(hkt)).labeled(
      'AFC',
    ),
    fnLabeled_('f', [], [aTypeParam.labeled('a')], kind_([bTypeParam])),
    new Dynamic([kind_([cTypeParam])], ([k]) => `Eq<${k}>`).labeled('E'),
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
        new Static(`() => void`).labeled('leftIdentity'),
        new Static(`() => void`).labeled('rightIdentity'),
      ]),
    ),
  ),
)
