import { FoldMap } from './FoldMap.js'
import { aTypeParam, derived_, fn_, kind_, number_, placeholder } from './common.js'

export const size = derived_(
  'size',
  [FoldMap],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], number_),
)

export const node = size
