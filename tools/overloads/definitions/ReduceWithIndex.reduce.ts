import { KindParam, Labeled, Static } from '../AST.js'

import { Reduce } from './Reduce.js'
import { ReduceWithIndex } from './ReduceWithIndex.js'
import { curriedPlaceholder_, fn_, hkt } from './common.js'

const k = new Static(`K`)

export const reduce = fn_(
  'reduce',
  [hkt, k, curriedPlaceholder_(hkt)],
  [
    ReduceWithIndex.toTypeClass(hkt)
      .setParams([k, curriedPlaceholder_(hkt)])
      .labeled('RI'),
  ],
  (Reduce.properties as readonly Labeled<KindParam>[])[0].param,
)

export const node = reduce
