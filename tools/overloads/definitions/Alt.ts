import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

export const node = interface_(
  'Alt',
  [
    fnLabeled_(
      'alt',
      [placeholder, aTypeParam],
      [fnLabeled_('second', [], [], kind_([aTypeParam]))],
      fn_('', [bTypeParam], [kind_([bTypeParam]).labeled('first')], kind_([bTypeParam])),
    ),
  ],
  [Covariant],
)

export const Alt = node
