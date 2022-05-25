import { KindParam, Labeled, Static } from '../AST'

import { ReduceRight } from './ReduceRight'
import { ReduceRightWithIndex } from './ReduceRightWithIndex'
import { curriedPlaceholder_, fn_, hkt } from './common'

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
