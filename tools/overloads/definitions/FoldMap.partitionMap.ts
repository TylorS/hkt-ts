import { Static, Tuple } from '../AST.js'

import { Covariant } from './Covariant.js'
import { FoldMap } from './FoldMap.js'
import { IdentityEither } from './IdentityEither.js'
import { Top } from './Top.js'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  derived_,
  fnLabeled_,
  fn_,
  kind_,
  placeholder,
} from './common.js'

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
