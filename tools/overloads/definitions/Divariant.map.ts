import { Divariant } from './Divariant'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common'

export const map = derived_(
  'map',
  [Divariant],
  fn_(
    '',
    [bTypeParam, cTypeParam],
    [fnLabeled_('f', [], [bTypeParam.labeled('b')], cTypeParam)],
    fn_(
      '',
      [placeholder, aTypeParam],
      [kind_([aTypeParam, bTypeParam]).labeled()],
      kind_([aTypeParam, cTypeParam]),
    ),
  ),
)
