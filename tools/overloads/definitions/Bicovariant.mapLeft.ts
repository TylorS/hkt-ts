import { Bicovariant } from './Bicovariant'
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

export const node = derived_(
  'mapLeft',
  [Bicovariant],
  fn_(
    '',
    [aTypeParam, bTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)],
    fn_(
      '',
      [placeholder, cTypeParam],
      [kind_([aTypeParam, cTypeParam]).labeled('kind')],
      kind_([bTypeParam, cTypeParam]),
    ),
  ),
)
