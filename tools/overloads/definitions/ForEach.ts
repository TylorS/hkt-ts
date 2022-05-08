import { HKTParam, Kind } from '../AST'

import { Covariant } from './Covariant'
import { IdentityBoth } from './IdentityBoth'
import {
  aTypeParam,
  bTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  interface_,
  kind_,
  placeholder,
} from './common'

const hkt2 = new HKTParam(Symbol('T2'), 'T2')
const hkt2Placeholder = hkt2.toPlaceholder()

export const ForEach = interface_(
  'ForEach',
  [
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
    ).labeled('forEach'),
  ],
  [Covariant],
)

export const node = ForEach
