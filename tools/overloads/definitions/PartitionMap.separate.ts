import { PartitionMap } from './PartitionMap'
import { Separate } from './Separate'
import { fn_, hkt } from './common'

export const separate = fn_(
  'separate',
  [hkt],
  [PartitionMap.toTypeClass(hkt).labeled('PM')],
  Separate.properties[0].param,
)

export const node = separate
