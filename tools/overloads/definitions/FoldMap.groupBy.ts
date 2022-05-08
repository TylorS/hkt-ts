import { Static } from '../AST'

import { FoldMap } from './FoldMap'
import { aTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common'

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
