import { HKTParam, Kind, Static } from '../AST'

import { Covariant } from './Covariant'
import { ForEach } from './ForEach'
import { IdentityBoth } from './IdentityBoth'
import { Compact } from './Compact'
import {
  aTypeParam,
  bTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common'

const hkt2 = new HKTParam(Symbol('T2'), 'T2')

export const compacted = derived_(
  'compacted',
  [ForEach, Compact],
  derived_(
    '',
    [IdentityBoth, Covariant],
    fn_(
      '',
      [aTypeParam,hkt2.toPlaceholder(), bTypeParam],
      [
        fnLabeled_(
          'f',
          [],
          [aTypeParam.labeled('a')],
          new Kind(hkt2, [hkt2.toPlaceholder(), new Static(`Maybe<B>`)]),
        ),
      ],
      fn_(
        '',
        [placeholder],
        [kind_([aTypeParam]).labeled()],
        new Kind(hkt2, [
          hkt2.toPlaceholder(),
          kind_([bTypeParam]),
        ]),
      ),
    ),
    hkt2,
  ),
)

