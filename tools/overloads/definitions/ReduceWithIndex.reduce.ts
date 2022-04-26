import { Static } from '../AST'

import { Reduce } from './Reduce'
import { ReduceWithIndex } from './ReduceWithIndex'
import { fn_, hkt } from './common'

const k = new Static(`K`)

export const reduce = fn_(
  'reduce',
  [hkt, k],
  [ReduceWithIndex.toTypeClass(hkt).setParams([k]).labeled('RI')],
  Reduce.properties[0].param,
)

export const node = reduce
