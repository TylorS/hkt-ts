import { Dynamic, ObjectNode, Static } from '../../AST'
import { FilterMap } from '../FilterMap'
import {
  aTypeParam,
  boolean_,
  curriedPlaceholder_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from '../common'

export const testFilterMap = fn_(
  'testFilterMap',
  [hkt, curriedPlaceholder_(hkt), aTypeParam, placeholder],
  [
    FilterMap.toTypeClass(hkt).labeled('FM'),
    fnLabeled_('f', [], [aTypeParam.labeled('a')], boolean_),
    fnLabeled_('g', [], [aTypeParam.labeled('b')], boolean_),
    new Dynamic([kind_([aTypeParam])], ([kind]) => `Eq<${kind}>`).labeled(`Eq?`),
  ],
  fn_(
    '',
    [],
    [new Dynamic([kind_([aTypeParam])], ([k]) => `Arbitrary.Arbitrary<${k}>`).labeled(`Arb`)],
    fn_(
      '',
      [],
      [new Static(`typeof import('fast-check')`).labeled('fc')],
      new ObjectNode([
        new Static(`() => void`).labeled('identity'),
        new Static(`() => void`).labeled('distributivity'),
        new Static(`() => void`).labeled('annihilation'),
      ]),
    ),
  ),
)
