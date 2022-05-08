import { HKTParam, Interface, IntersectionNode, Kind, Static } from '../AST'

import { CovariantWithIndex } from './CovariantWithIndex'
import { IdentityBoth } from './IdentityBoth'
import {
  aTypeParam,
  bTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common'

const hkt2 = new HKTParam(Symbol('T2'), 'T2')
const hkt2Placeholder = hkt2.toPlaceholder()

export const ForEachWithIndex = new Interface(
  'ForEachWithIndex',
  [hkt, new Static(`K`), curriedPlaceholder_(hkt)],
  [
    fnLabeled_(
      'forEachWithIndex',
      [hkt2, new Static(`K2`), curriedPlaceholder_(hkt2)],
      [
        new IntersectionNode(
          IdentityBoth.toTypeClass(hkt2).setParams([curriedPlaceholder_(hkt2)]),
          CovariantWithIndex.toTypeClass(hkt2).setParams([
            new Static(`K2`),
            curriedPlaceholder_(hkt2),
          ]),
        ).labeled('IB'),
      ],
      fn_(
        '',
        [aTypeParam, hkt2Placeholder, bTypeParam],
        [
          fnLabeled_(
            'f',
            [],
            [new Static(`K`).labeled('k'), aTypeParam.labeled('a')],
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
    ),
  ],
  [CovariantWithIndex.setParams([hkt, new Static('K'), curriedPlaceholder_(hkt)])],
)

export const node = ForEachWithIndex
