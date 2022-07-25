import { HKTParam, Kind, Static, Tuple } from '../AST.js'

import { Covariant } from './Covariant.js'
import { ForEach } from './ForEach.js'
import { IdentityBoth } from './IdentityBoth.js'
import { Separate } from './Separate.js'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common.js'

const hkt2 = new HKTParam(Symbol('T2'), 'T2')

export const separated = derived_(
  'separated',
  [ForEach, Separate],
  derived_(
    '',
    [IdentityBoth, Covariant],
    fn_(
      '',
      [aTypeParam,hkt2.toPlaceholder(), bTypeParam, cTypeParam],
      [
        fnLabeled_(
          'f',
          [],
          [aTypeParam.labeled('a')],
          new Kind(hkt2, [hkt2.toPlaceholder(), new Static(`Either<B, C>`)]),
        ),
      ],
      fn_(
        '',
        [placeholder],
        [kind_([aTypeParam]).labeled()],
        new Kind(hkt2, [
          hkt2.toPlaceholder(),
          new Tuple([kind_([bTypeParam]), kind_([cTypeParam])]),
        ]),
      ),
    ),
    hkt2,
  ),
)
