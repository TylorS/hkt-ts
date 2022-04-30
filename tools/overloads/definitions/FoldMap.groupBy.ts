import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

const k = new Static(`K`)

export const groupBy = fn_(
  'groupBy',
  [hkt],
  [FoldMap.toTypeClass(hkt).labeled('FM')],
  fn_(
    '',
    [k, aTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], k)],
    fn_(
      '',
      [placeholder],
      [kind_([aTypeParam]).labeled()],
      new Static(`ReadonlyMap<K, NonEmptyArray<A>>`),
    ),
  ),
)

export const node = groupBy
