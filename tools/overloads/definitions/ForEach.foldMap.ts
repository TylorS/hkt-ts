import { FoldMap } from './FoldMap'
import { ForEach } from './ForEach'
import { fn_, hkt } from './common'

export const foldMap = fn_(
  'foldMap',
  [hkt],
  [ForEach.toTypeClass(hkt).labeled('FE')],
  FoldMap.properties[0].param,
)

export const node = foldMap
