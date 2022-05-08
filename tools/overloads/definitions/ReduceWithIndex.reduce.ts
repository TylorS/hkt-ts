import { Static } from '../AST'

import { Reduce } from './Reduce'
import { ReduceWithIndex } from './ReduceWithIndex'
import { curriedPlaceholder_, fn_, hkt } from './common'

const k = new Static(`K`)

export const reduce = fn_(
  'reduce',
  [hkt, k, curriedPlaceholder_(hkt)],
  [
    ReduceWithIndex.toTypeClass(hkt)
      .setParams([k, curriedPlaceholder_(hkt)])
      .labeled('RI'),
  ],
  Reduce.properties[0].param,
)

export const node = reduce
