import { aTypeParam, bTypeParam, fnLabeled_, fn_, interface_, kind_, placeholder } from './common.js'

export const ReduceRight = interface_(
  'ReduceRight',
  [
    fnLabeled_(
      'reduceRight',
      [bTypeParam, aTypeParam],
      [
        bTypeParam.labeled('b'),
        fnLabeled_('f', [], [aTypeParam.labeled('a'), bTypeParam.labeled('b')], bTypeParam),
      ],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
    ),
  ],
  [],
)

export const node = ReduceRight
