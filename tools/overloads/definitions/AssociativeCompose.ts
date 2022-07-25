import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  fnLabeled_,
  fn_,
  interface_,
  kind_,
  placeholder,
} from './common.js'

export const node = interface_('AssociativeCompose', [
  fnLabeled_(
    'compose',
    [placeholder, bTypeParam, cTypeParam],
    [kind_([bTypeParam, cTypeParam]).labeled('second')],
    fn_(
      '',
      [aTypeParam],
      [kind_([aTypeParam, bTypeParam]).labeled('first')],
      kind_([aTypeParam, cTypeParam]),
    ),
  ),
])

export const AssociativeCompose = node
