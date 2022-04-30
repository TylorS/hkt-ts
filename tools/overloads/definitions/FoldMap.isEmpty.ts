import { FoldMap } from './FoldMap'
import { aTypeParam, boolean_, derived_, fn_, kind_, placeholder } from './common'

export const isEmpty = derived_(
  'isEmpty',
  FoldMap,
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], boolean_),
)

export const node = isEmpty
