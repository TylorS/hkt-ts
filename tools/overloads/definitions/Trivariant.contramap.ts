import { Static } from '../AST'

import { Trivariant } from './Trivariant'
import { aTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common'

const eTypeParam = new Static(`E`)
const r1TypeParam = new Static(`R1`)
const r2TypeParam = new Static(`R2`)

export const contramap = derived_(
  'contramap',
  [Trivariant],
  fn_(
    '',
    [r1TypeParam, r2TypeParam],
    [fnLabeled_('f', [], [r1TypeParam.labeled('r1')], r2TypeParam)],
    fn_(
      '',
      [placeholder, eTypeParam, aTypeParam],
      [kind_([r2TypeParam, eTypeParam, aTypeParam]).labeled()],
      kind_([r1TypeParam, eTypeParam, aTypeParam]),
    ),
  ),
)
