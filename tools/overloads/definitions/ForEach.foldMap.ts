import { Static } from '../AST'

import { ForEach } from './ForEach'
import { aTypeParam, bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

export const foldMap = fn_(
  'foldMap',
  [hkt],
  [ForEach.toTypeClass(hkt).labeled('F')],
  fn_(
    '',
    [bTypeParam],
    [new Static('Identity<B>').labeled('I')],
    fn_(
      '',
      [aTypeParam],
      [fnLabeled_('f', [], [aTypeParam.labeled('a')], bTypeParam)],
      fn_('', [placeholder], [kind_([aTypeParam]).labeled('kind')], bTypeParam),
    ),
  ),
)

export const node = foldMap
