import { Static, Tuple } from '../AST.js'

import {
  aTypeParam,
  bTypeParam,
  cTypeParam,
  fnLabeled_,
  fn_,
  interface_,
  kind_,
  placeholder,
} from './common.js'

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
  ],
  [],
)

export const node = PartitionMap
