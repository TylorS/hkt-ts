import { Bicovariant } from './Bicovariant'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common'

export const node = fn_(
  'map',
  [hkt],
  [Bicovariant.toTypeClass(hkt).labeled('B')],
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
