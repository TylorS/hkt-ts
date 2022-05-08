import { Static, Tuple } from '../AST'

import { Covariant } from './Covariant'
import { FoldMap } from './FoldMap'
import { IdentityEither } from './IdentityEither'
import { Top } from './Top'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common'

export const partitionMap = derived_(
  'partitionMap',
  [FoldMap, IdentityEither, Top, Covariant],
  fn_(
    '',
    [aTypeParam, bTypeParam, cTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], new Static(`Either<B, C>`))],
    fn_(
      '',
      [placeholder],
      [kind_([aTypeParam]).labeled()],
      new Tuple([kind_([bTypeParam]), kind_([cTypeParam])]),
    ),
  ),
)
