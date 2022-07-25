import { AssociativeFlatten } from './AssociativeFlatten.js'
import { Covariant } from './Covariant.js'
import { aTypeParam, bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common.js'

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
