import { Static } from '../AST.js'

import { Trivariant } from './Trivariant.js'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  dTypeParam,
  derived_,
  fab_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common.js'

const rTypeParam = new Static(`R`)

export const bimap = derived_(
  'bimap',
  [Trivariant],
  fn_(
    '',
    [aTypeParam, bTypeParam, cTypeParam, dTypeParam],
    [fab_, fnLabeled_('g', [], [cTypeParam.labeled('c')], dTypeParam)],
    fn_(
      '',
      [placeholder, rTypeParam],
      [kind_([rTypeParam, aTypeParam, cTypeParam]).labeled()],
      kind_([rTypeParam, bTypeParam, dTypeParam]),
    ),
  ),
)
