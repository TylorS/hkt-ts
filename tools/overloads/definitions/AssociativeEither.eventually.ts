import { AssociativeEither } from './AssociativeEither.js'
import { Covariant } from './Covariant.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const eventually = derived_(
  'eventually',
  [AssociativeEither, Covariant],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled('kind')], kind_([aTypeParam])),
)

export const node = eventually
