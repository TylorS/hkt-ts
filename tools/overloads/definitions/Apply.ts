import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

export const Apply = interface_(
  'Apply',
  [
    fnLabeled_(
      'ap',
      [placeholder, aTypeParam],
      [kind_([aTypeParam]).labeled('value')],
      fn_(
        '',
        [bTypeParam],
        [kind_([fn_('', [], [aTypeParam.labeled('a')], bTypeParam)]).labeled('fn')],
        kind_([bTypeParam]),
      ),
    ),
  ],
  [Covariant],
)

export const node = Apply
