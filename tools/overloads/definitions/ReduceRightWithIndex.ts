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

export const ReduceRightWithIndex = new Interface(
  'ReduceRightWithIndex',
  [hkt, new Static(`K`), curriedPlaceholder_(hkt)],
  [
    fnLabeled_(
      'reduceRightWithIndex',
      [bTypeParam, aTypeParam],
      [
        bTypeParam.labeled('b'),
        fnLabeled_(
          'f',
          [],
          [new Static(`K`).labeled('k'), aTypeParam.labeled('a'), bTypeParam.labeled('b')],
          bTypeParam,
        ),
      ],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
    ),
  ],
  [],
)

export const node = ReduceRightWithIndex
