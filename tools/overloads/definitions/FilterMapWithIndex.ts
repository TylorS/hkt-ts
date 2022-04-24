import { Interface, Static } from '../AST'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

const kTypeParam = new Static(`K`)

export const FilterMapWithIndex = new Interface(
  'FilterMapWithIndex',
  [hkt, kTypeParam],
  [
    fnLabeled_(
      'filterMapWithIndex',
      [aTypeParam, bTypeParam],
      [
        fnLabeled_(
          'f',
          [],
          [kTypeParam.labeled('k'), aTypeParam.labeled('a')],
          new Static(`Maybe<B>`),
        ),
      ],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
    ),
  ],
  [],
)

export const node = FilterMapWithIndex
