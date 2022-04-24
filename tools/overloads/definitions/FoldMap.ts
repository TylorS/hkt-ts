import { Static } from '../AST'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

export const FoldMap = interface_(
  'FoldMap',
  [
    fnLabeled_(
      'foldMap',
      [bTypeParam],
      [new Static(`Identity<B>`).labeled('ID')],
      fn_(
        '',
        [aTypeParam],
        [fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)],
        fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
      ),
    ),
  ],
  [],
)

export const node = FoldMap
