import { Static, Tuple } from '../AST.js'

import { PartitionMapWithIndex } from './PartitionMapWithIndex.js'
import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  fn_,
  hkt,
  kind_,
  placeholder,
} from './common.js'

const kTypeParam = new Static('K')

export const partitionMap = fn_(
  'partitionMap',
  [hkt, kTypeParam, curriedPlaceholder_(hkt)],
  [
    PartitionMapWithIndex.toTypeClass(hkt)
      .setParams([kTypeParam, curriedPlaceholder_(hkt)])
      .labeled('PMI'),
  ],
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
