import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import { aTypeParam, composed_, fn_, kindF_, kindG_, placeholderF, placeholderG } from './common'

export const flatten = composed_(
  'flatten',
  [Covariant],
  [AssociativeFlatten],
  fn_(
    '',
    [placeholderF, placeholderG, aTypeParam],
    [kindF_([kindG_([kindG_([aTypeParam])])]).labeled()],
    kindF_([kindG_([aTypeParam])]),
  ),
)
