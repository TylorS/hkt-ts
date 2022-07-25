import { Static } from '../AST.js'

import { Covariant } from './Covariant.js'
import { FilterMap } from './FilterMap.js'
import {
  aTypeParam,
  bTypeParam,
  composed_,
  fnLabeled_,
  fn_,
  kindF_,
  kindG_,
  placeholderF,
  placeholderG,
} from './common.js'

export const filterMap = composed_(
  'filterMap',
  [Covariant],
  [FilterMap],
  fn_(
    'filterMap',
    [aTypeParam, bTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], new Static(`Maybe<B>`))],
    fn_(
      '',
      [placeholderF, placeholderG],
      [kindF_([kindG_([aTypeParam])]).labeled('kind')],
      kindF_([kindG_([bTypeParam])]),
    ),
  ),
)
