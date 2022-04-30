import { FoldMap } from './FoldMap'
import { aTypeParam, boolean_, derived_, fn_, kind_, placeholder } from './common'

export const isNonEmpty = derived_(
  'isNonEmpty',
  FoldMap,
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], boolean_),
)

export const node = isNonEmpty
