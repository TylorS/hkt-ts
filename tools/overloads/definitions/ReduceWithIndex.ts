import { Interface, Static } from '../AST'

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

export const ReduceWithIndex = new Interface(
  'ReduceWithIndex',
  [hkt, new Static(`K`), curriedPlaceholder_(hkt)],
  [
    fnLabeled_(
      'reduceWithIndex',
      [bTypeParam, aTypeParam],
      [
        bTypeParam.labeled('b'),
        fnLabeled_(
          'f',
          [],
          [new Static(`K`).labeled('k'), bTypeParam.labeled('b'), aTypeParam.labeled('a')],
          bTypeParam,
        ),
      ],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
    ),
  ],
  [],
)

export const node = ReduceWithIndex
