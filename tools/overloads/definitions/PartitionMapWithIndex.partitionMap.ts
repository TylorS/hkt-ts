import { Static, Tuple } from '../AST'

import { PartitionMapWithIndex } from './PartitionMapWithIndex'
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

const kTypeParam = new Static('K')

export const partitionMap = fn_(
  'partitionMap',
  [hkt, kTypeParam],
  [PartitionMapWithIndex.toTypeClass(hkt).setParams([kTypeParam]).labeled('PMI')],
  fn_(
    '',
    [aTypeParam, bTypeParam, cTypeParam],
    [
      fnLabeled_(
        'f',
        [],
        [aTypeParam.labeled('a')],
        new Static(`Either<${bTypeParam.type}, ${cTypeParam.type}>`),
      ),
    ],
    fn_(
      '',
      [placeholder],
      [kind_([aTypeParam]).labeled('kind')],
      new Tuple([kind_([bTypeParam]), kind_([cTypeParam])]),
    ),
  ),
)

export const node = partitionMap
