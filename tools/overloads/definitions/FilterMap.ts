import { Static } from '../AST.js'

import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common.js'

export const FilterMap = interface_(
  'FilterMap',
  [
    fnLabeled_(
      'filterMap',
      [aTypeParam, bTypeParam],
      [fnLabeled_('f', [], [aTypeParam.labeled('a')], new Static(`Maybe<B>`))],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
    ),
  ],
  [],
)

export const node = FilterMap
