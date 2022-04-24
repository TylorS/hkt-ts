import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

export const Reduce = interface_(
  'Reduce',
  [
    fnLabeled_(
      'reduce',
      [bTypeParam, aTypeParam],
      [
        bTypeParam.labeled('b'),
        fnLabeled_('f', [], [bTypeParam.labeled('b'), aTypeParam.labeled('a')], bTypeParam),
      ],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
    ),
  ],
  [],
)

export const node = Reduce
