import { FoldMap } from './FoldMap.js'
import { ForEach } from './ForEach.js'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common.js'

export const reverse = derived_(
  'reverse',
  [FoldMap, ForEach],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], kind_([aTypeParam])),
)

export const node = reverse
