import { FoldMap } from './FoldMap'
import { ForEach } from './ForEach'
import { aTypeParam, derived_, fn_, kind_, placeholder } from './common'

export const reverse = derived_(
  'reverse',
  [FoldMap, ForEach],
  fn_('', [placeholder, aTypeParam], [kind_([aTypeParam]).labeled()], kind_([aTypeParam])),
)

export const node = reverse
