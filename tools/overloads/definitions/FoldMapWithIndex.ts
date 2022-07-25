import { Interface, Static } from '../AST.js'

import {
  aTypeParam,
  bTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common.js'

export const FoldMapWithIndex = new Interface(
  'FoldMapWithIndex',
  [hkt, new Static(`K`), curriedPlaceholder_(hkt)],
  [
    fnLabeled_(
      'foldMapWithIndex',
      [bTypeParam],
      [new Static(`Identity<B>`).labeled('ID')],
      fn_(
        '',
        [aTypeParam],
        [fnLabeled_('f', [], [new Static(`K`).labeled('k'), aTypeParam.labeled('a')], bTypeParam)],
        fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
      ),
    ),
  ],
  [],
)

export const node = FoldMapWithIndex
