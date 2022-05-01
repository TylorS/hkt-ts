import { IntersectionNode, Static, Tuple } from '../AST'

import { Covariant } from './Covariant'
import { FoldMap } from './FoldMap'
import { IdentityEither } from './IdentityEither'
import { Top } from './Top'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common'

export const partitionMap = fn_(
  'partitionMap',
  [hkt],
  [
    new IntersectionNode(
      FoldMap.toTypeClass(hkt),
      new IntersectionNode(
        IdentityEither.toTypeClass(hkt),
        new IntersectionNode(Top.toTypeClass(hkt), Covariant.toTypeClass(hkt)),
      ),
    ).labeled('F'),
  ],
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
