import { Dynamic, IntersectionNode, ObjectNode, Static } from '../../AST.js'
import { AssociativeFlatten } from '../AssociativeFlatten.js'
import { Covariant } from '../Covariant.js'
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
} from '../common.js'

export const testCovariantAssociativeFlatten = fn_(
  'testCovariantAssociativeFlatten',
  [hkt, curriedPlaceholder_(hkt), placeholder, aTypeParam, bTypeParam, cTypeParam],
  [
    new IntersectionNode(Covariant.toTypeClass(hkt), AssociativeFlatten.toTypeClass(hkt)).labeled(
      'AFC',
    ),
    fnLabeled_('f', [], [aTypeParam.labeled('a')], kind_([bTypeParam])),
    fnLabeled_('g', [], [bTypeParam.labeled('b')], kind_([cTypeParam])),
    new Dynamic([kind_([bTypeParam])], ([k]) => `Eq<${k}>`).labeled('E'),
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
        new Static(`() => void`).labeled('derivedAssociativeBoth'),
      ]),
    ),
  ),
)
