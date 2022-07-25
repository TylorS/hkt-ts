import { Dynamic, Static } from '../../AST.js'
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

export const testCovariant = fn_(
  'testCovariant',
  [hkt, curriedPlaceholder_(hkt), aTypeParam, bTypeParam, cTypeParam, placeholder],
  [
    Covariant.toTypeClass(hkt).labeled('C'),
    fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam),
    fnLabeled_('g', [], [bTypeParam.labeled('b')], cTypeParam),
    new Dynamic([kind_([cTypeParam])], ([kind]) => `Eq<${kind}>`).labeled(`Eq?`),
  ],
  fn_(
    '',
    [],
    [new Dynamic([kind_([aTypeParam])], ([k]) => `Arbitrary.Arbitrary<${k}>`).labeled(`Arb`)],
    fn_('', [], [new Static(`typeof import('fast-check')`).labeled('fc')], new Static(`void`)),
  ),
)
