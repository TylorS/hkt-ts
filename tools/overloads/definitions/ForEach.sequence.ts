import { HKTParam, IntersectionNode, Kind } from '../AST'

import { Covariant } from './Covariant'
import { ForEach } from './ForEach'
import { IdentityBoth } from './IdentityBoth'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

const hkt2 = new HKTParam(Symbol('T2'), 'T2')
const hkt2Placeholder = hkt2.toPlaceholder()

export const sequence = fn_(
  'sequence',
  [hkt],
  [ForEach.toTypeClass(hkt).labeled('FE')],
  fn_(
    '',
    [hkt2],
    [
      new IntersectionNode(IdentityBoth.toTypeClass(hkt2), Covariant.toTypeClass(hkt2)).labeled(
        'IBC',
      ),
    ],
    fn_(
      '',
      [placeholder, hkt2Placeholder, aTypeParam],
      [kind_([new Kind(hkt2, [hkt2Placeholder, aTypeParam])]).labeled('kind')],
      new Kind(hkt2, [hkt2Placeholder, kind_([aTypeParam])]),
    ),
  ),
)

export const node = sequence
