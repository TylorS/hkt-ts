import { Static, Tuple } from '../AST'

import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  fnLabeled_,
  fn_,
  interface_,
  kind_,
  placeholder,
} from './common'

export const PartitionMap = interface_(
  'PartitionMap',
  [
    fnLabeled_(
      'partitionMap',
      [aTypeParam, bTypeParam, cTypeParam],
      [
        fnLabeled_(
          'f',
          [],
          [aTypeParam.labeled('a')],
          new Static(`Either<${aTypeParam.type}, ${bTypeParam.type}>`),
        ),
      ],
      fn_(
        '',
        [placeholder],
        [kind_([aTypeParam]).labeled('kind')],
        new Tuple([kind_([bTypeParam]), kind_([cTypeParam])]),
      ),
    ),
  ],
  [],
)

export const node = PartitionMap
