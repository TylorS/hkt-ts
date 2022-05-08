import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import { aTypeParam, bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common'

export const flatMap = derived_(
  'flatMap',
  [AssociativeFlatten, Covariant],
  fn_(
    '',
    [aTypeParam, placeholder, bTypeParam],
    [fnLabeled_('f', [], [aTypeParam.labeled('a')], kind_([bTypeParam]))],
    fn_('', [], [kind_([aTypeParam]).labeled('kind')], kind_([bTypeParam])),
  ),
)

export const node = flatMap
