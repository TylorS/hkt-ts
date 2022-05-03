import { Static } from '../AST'

import { FoldMapWithIndex } from './FoldMapWithIndex'
import { aTypeParam, fn_, hkt, kind_, placeholder } from './common'

const k = new Static(`K`)

export const toMap = fn_(
  'toMap',
  [hkt, k],
  [FoldMapWithIndex.toTypeClass(hkt).setParams([k]).labeled()],
  fn_(
    '',
    [placeholder, aTypeParam],
    [kind_([aTypeParam]).labeled()],
    new Static(`ReadonlyMap<K, A>`),
  ),
)
