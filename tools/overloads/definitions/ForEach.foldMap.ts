import { Static } from '../AST'

import { ForEach } from './ForEach'
import { aTypeParam, bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common'

export const foldMap = derived_(
  'foldMap',
  [ForEach],
  fn_(
    '',
    [bTypeParam],
    [new Static(`Identity<B>`).labeled('I')],
    fn_(
      '',
      [aTypeParam],
      [fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled()], bTypeParam),
    ),
  ),
)
