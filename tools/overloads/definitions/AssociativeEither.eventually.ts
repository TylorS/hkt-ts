import { AssociativeEither } from './AssociativeEither'
import { Covariant } from './Covariant'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const eventually = derived_(
  'eventually',
  [AssociativeEither, Covariant],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled('kind')], kind_([aTypeParam])),
)

export const node = eventually
