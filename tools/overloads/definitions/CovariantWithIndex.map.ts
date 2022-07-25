import { Static } from '../AST.js'

import { CovariantWithIndex } from './CovariantWithIndex.js'
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

const kTypeParam = new Static('K')

export const map = fn_(
  'map',
  [hkt, kTypeParam, curriedPlaceholder_(hkt)],
  [
    CovariantWithIndex.toTypeClass(hkt)
      .setParams([kTypeParam, curriedPlaceholder_(hkt)])
      .labeled('CI'),
  ],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)],
    fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
)

export const node = map
