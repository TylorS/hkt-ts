import { HKTParam, Kind, Static } from '../AST.js'

import { Covariant } from './Covariant.js'
import { ForEachWithIndex } from './ForEachWithIndex.js'
import { IdentityBoth } from './IdentityBoth.js'
import {
  aTypeParam,
  bTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common.js'

const hkt2 = new HKTParam(Symbol('T2'), 'T2')
const hkt2Placeholder = hkt2.toPlaceholder()

export const forEach = derived_(
  'forEach',
  [ForEachWithIndex],
  derived_(
    '',
    [IdentityBoth, Covariant],
    fn_(
      '',
      [aTypeParam, hkt2Placeholder, bTypeParam],
      [
        fnLabeled_(
          'f',
          [],
          [aTypeParam.labeled('a')],
          new Kind(hkt2, [hkt2Placeholder, bTypeParam]),
        ),
      ],
      fn_(
        '',
        [placeholder],
        [kind_([aTypeParam]).labeled('kind')],
        new Kind(hkt2, [hkt2Placeholder, kind_([bTypeParam])]),
      ),
    ),
    hkt2,
  ),
  hkt,
  [new Static('K')],
)
