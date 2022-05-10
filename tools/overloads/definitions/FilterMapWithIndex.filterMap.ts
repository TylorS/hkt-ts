import { Static } from '../AST'

import { FilterMap } from './FilterMap'
import { FilterMapWithIndex } from './FilterMapWithIndex'
import { curriedPlaceholder_, fn_, hkt } from './common'

const k = new Static(`K`)

export const filterMap = fn_(
  'filterMap',
  [hkt, k, curriedPlaceholder_(hkt)],
  [
    FilterMapWithIndex.toTypeClass(hkt)
      .setParams([k, curriedPlaceholder_(hkt)])
      .labeled(),
  ],
  FilterMap.properties[0].param,
)
