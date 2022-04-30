import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fn_, kind_, number_, placeholder } from './common'

export const size = derived_(
  'size',
  FoldMap,
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], number_),
)

export const node = size
