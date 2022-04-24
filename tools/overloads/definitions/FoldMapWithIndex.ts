import { Interface, Static } from '../AST'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

export const FoldMapWithIndex = new Interface(
  'FoldMapWithIndex',
  [hkt, new Static(`K`)],
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
