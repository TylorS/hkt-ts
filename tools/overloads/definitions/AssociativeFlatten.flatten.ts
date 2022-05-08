import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import { ForEach } from './ForEach'
import { IdentityBoth } from './IdentityBoth'
import { aTypeParam, composed_, fn_, kindF_, kindG_, placeholderF, placeholderG } from './common'

export const flatten = composed_(
  'flatten',
  [IdentityBoth, AssociativeFlatten, Covariant],
  [AssociativeFlatten, ForEach],
  fn_(
    '',
    [placeholderF, placeholderG, aTypeParam],
    [kindF_([kindG_([kindF_([kindG_([aTypeParam])])])]).labeled()],
    kindF_([kindG_([aTypeParam])]),
  ),
)
