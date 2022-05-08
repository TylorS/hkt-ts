import { Interface, Static, Tuple } from '../AST'

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
} from './common'

export const PartitionMapWithIndex = new Interface(
  'PartitionMapWithIndex',
  [hkt, new Static(`K`), curriedPlaceholder_(hkt)],
  [
    fnLabeled_(
      'partitionMapWithIndex',
      [aTypeParam, bTypeParam, cTypeParam],
      [
        fnLabeled_(
          'f',
          [],
          [new Static(`K`).labeled('k'), aTypeParam.labeled('a')],
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

export const node = PartitionMapWithIndex
