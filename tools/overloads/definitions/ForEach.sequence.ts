import { HKTParam, Kind } from '../AST'

import { Covariant } from './Covariant'
import { ForEach } from './ForEach'
import { IdentityBoth } from './IdentityBoth'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

const hkt2 = new HKTParam(Symbol('T2'), 'T2')
const hkt2Placeholder = hkt2.toPlaceholder()

export const sequence = derived_(
  'sequence',
  [ForEach],
  derived_(
    '',
    [IdentityBoth, Covariant],
    fn_(
      '',
      [placeholder, hkt2Placeholder, aTypeParam],
      [kind_([new Kind(hkt2, [hkt2Placeholder, aTypeParam])]).labeled('kind')],
      new Kind(hkt2, [hkt2Placeholder, kind_([aTypeParam])]),
    ),
    hkt2,
  ),
)

export const node = sequence
