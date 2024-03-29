import { AssociativeBoth } from './AssociativeBoth.js'
import { Covariant } from './Covariant.js'
import { aTypeParam, bTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const zipRight = derived_(
  'zipRight',
  [AssociativeBoth, Covariant],
  fn_(
    '',
    [placeholder, bTypeParam],
    [kind_([bTypeParam]).labeled('second')],
    fn_('', [aTypeParam], [kind_([aTypeParam]).labeled('first')], kind_([bTypeParam])),
  ),
)
