import { HKTParam, IntersectionNode, Kind } from '../AST'

import { Covariant } from './Covariant'
import { IdentityBoth } from './IdentityBoth'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

const hkt2 = new HKTParam(Symbol('T2'), 'T2')
const hkt2Placeholder = hkt2.toPlaceholder()

export const ForEach = interface_(
  'ForEach',
  [
    fnLabeled_(
      'forEach',
      [hkt2],
      [
        new IntersectionNode(IdentityBoth.toTypeClass(hkt2), Covariant.toTypeClass(hkt2)).labeled(
          'IB',
        ),
      ],
      fn_(
        '',
        [aTypeParam, hkt2Placeholder, bTypeParam],
        [
          fnLabeled_(
            'f',
            [hkt2Placeholder],
            [aTypeParam.labeled('a')],
            new Kind(hkt2, [hkt2Placeholder, bTypeParam]),
          ),
        ],
        fn_(
          '',
          [placeholder],
          [kind_([aTypeParam]).labeled('kind')],
          kind_([new Kind(hkt2, [hkt2Placeholder, bTypeParam])]),
        ),
      ),
    ),
  ],
  [],
)

export const node = ForEach
