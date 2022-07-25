import { Static } from '../AST.js'

import { FoldMap } from './FoldMap.js'
import { aTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common.js'

const k = new Static(`K`)

export const groupBy = derived_(
  'groupBy',
  [FoldMap],
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
