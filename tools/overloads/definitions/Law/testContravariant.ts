import { ObjectNode, Static } from '../../AST'
import { Contravariant } from '../Contravariant'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  curriedPlaceholder_,
  dTypeParam,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from '../common'

export const testContravariant = fn_(
  'testContravariant',
  [hkt, curriedPlaceholder_(hkt), aTypeParam, bTypeParam, cTypeParam, placeholder, dTypeParam],
  [
    Contravariant.toTypeClass(hkt).labeled('C'),
    fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam),
    fnLabeled_('g', [], [bTypeParam.labeled('b')], cTypeParam),
    kind_([aTypeParam]).labeled('kindA'),
    kind_([cTypeParam]).labeled('kindC'),
    fnLabeled_(
      'run',
      [aTypeParam],
      [
        kind_([aTypeParam]).labeled(),
        aTypeParam.labeled('a'),
        aTypeParam.labeled('b'),
        aTypeParam.labeled('c'),
      ],
      dTypeParam,
    ),
    new Static(`Eq<D>`).labeled(`Eq?`),
  ],
  fn_(
    '',
    [],
    [new Static(`Arbitrary.Arbitrary<A>`).labeled('AA')],
    fn_(
      '',
      [],
      [new Static(`typeof import('fast-check')`).labeled('fc')],
      new ObjectNode([
        new Static(`() => void`).labeled('identity'),
        new Static(`() => void`).labeled('associativity'),
      ]),
    ),
  ),
)
