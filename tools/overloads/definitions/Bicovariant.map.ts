import { Bicovariant } from './Bicovariant.js'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common.js'

export const node = derived_(
  'map',
  [Bicovariant],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)],
    fn_(
      '',
      [placeholder, cTypeParam],
      [kind_([cTypeParam, aTypeParam]).labeled('kind')],
      kind_([cTypeParam, bTypeParam]),
    ),
  ),
)
