import { KindParam, Labeled, Static } from '../AST.js'

import { ReduceRight } from './ReduceRight.js'
import { ReduceRightWithIndex } from './ReduceRightWithIndex.js'
import { curriedPlaceholder_, fn_, hkt } from './common.js'

const k = new Static(`K`)

export const reduceRight = fn_(
  'reduceRight',
  [hkt, k, curriedPlaceholder_(hkt)],
  [
    ReduceRightWithIndex.toTypeClass(hkt)
      .setParams([k, curriedPlaceholder_(hkt)])
      .labeled('RRI'),
  ],
  (ReduceRight.properties as readonly Labeled<KindParam>[])[0].param,
)

export const node = reduceRight
