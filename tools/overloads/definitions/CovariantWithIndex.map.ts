import { Static } from '../AST'

import { CovariantWithIndex } from './CovariantWithIndex'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

const kTypeParam = new Static('K')

export const map = fn_(
  'map',
  [hkt, kTypeParam],
  [CovariantWithIndex.toTypeClass(hkt).setParams([kTypeParam]).labeled('CI')],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
)

export const node = map
