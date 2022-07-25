import { KindParam, Labeled } from '../AST.js'

import { PartitionMap } from './PartitionMap.js'
import { Separate } from './Separate.js'
import { derived_ } from './common.js'

export const separate = derived_(
  'separate',
  [PartitionMap],
  (Separate.properties as readonly Labeled<KindParam>[])[0].param,
)

export const node = separate
