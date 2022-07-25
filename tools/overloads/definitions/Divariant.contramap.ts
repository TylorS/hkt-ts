import { Divariant } from './Divariant.js'
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

export const contramap = derived_(
  'contramap',
  [Divariant],
  fn_(
    '',
    [bTypeParam, cTypeParam],
    [fnLabeled_('f', [], [bTypeParam.labeled('b')], cTypeParam)],
    fn_(
      '',
      [placeholder, aTypeParam],
      [kind_([cTypeParam, aTypeParam]).labeled()],
      kind_([bTypeParam, aTypeParam]),
    ),
  ),
)
