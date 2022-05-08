import { Static } from '../AST'

import { FoldMapWithIndex } from './FoldMapWithIndex'
import { aTypeParam, curriedPlaceholder_, fn_, hkt, kind_, placeholder } from './common'

const k = new Static(`K`)

export const toMap = fn_(
  'toMap',
  [hkt, k, curriedPlaceholder_(hkt)],
  [
    FoldMapWithIndex.toTypeClass(hkt)
      .setParams([k, curriedPlaceholder_(hkt)])
      .labeled(),
  ],
  fn_(
    '',
    [placeholder, aTypeParam],
    [kind_([aTypeParam]).labeled()],
    new Static(`ReadonlyMap<K, A>`),
  ),
)
