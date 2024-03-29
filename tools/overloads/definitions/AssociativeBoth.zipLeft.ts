import { AssociativeBoth } from './AssociativeBoth.js'
import { Covariant } from './Covariant.js'
import { aTypeParam, bTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const zipLeft = derived_(
  'zipLeft',
  [AssociativeBoth, Covariant],
  fn_(
    '',
    [placeholder, bTypeParam],
    [kind_([bTypeParam]).labeled('second')],
    fn_('', [aTypeParam], [kind_([aTypeParam]).labeled('first')], kind_([aTypeParam])),
  ),
)
