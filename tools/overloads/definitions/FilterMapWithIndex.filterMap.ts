import { KindParam, Labeled, Static } from '../AST.js'

import { FilterMap } from './FilterMap.js'
import { FilterMapWithIndex } from './FilterMapWithIndex.js'
import { curriedPlaceholder_, fn_, hkt } from './common.js'

const k = new Static(`K`)

export const filterMap = fn_(
  'filterMap',
  [hkt, k, curriedPlaceholder_(hkt)],
  [
    FilterMapWithIndex.toTypeClass(hkt)
      .setParams([k, curriedPlaceholder_(hkt)])
      .labeled(),
  ],
  (FilterMap.properties as readonly Labeled<KindParam>[])[0].param,
)
