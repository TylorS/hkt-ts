import { Static } from '../AST'

import { ReduceRight } from './ReduceRight'
import { ReduceRightWithIndex } from './ReduceRightWithIndex'
import { fn_, hkt } from './common'

const k = new Static(`K`)

export const reduce = fn_(
  'reduceRight',
  [hkt, k],
  [ReduceRightWithIndex.toTypeClass(hkt).setParams([k]).labeled('RRI')],
  ReduceRight.properties[0].param,
)

export const node = reduce
