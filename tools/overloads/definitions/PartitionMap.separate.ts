import { PartitionMap } from './PartitionMap'
import { Separate } from './Separate'
import { derived_ } from './common'

export const separate = derived_('separate', [PartitionMap], Separate.properties[0].param)

export const node = separate
