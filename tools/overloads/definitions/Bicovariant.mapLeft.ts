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
  'mapLeft',
  [hkt],
  [Bicovariant.toTypeClass(hkt).labeled('B')],
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
