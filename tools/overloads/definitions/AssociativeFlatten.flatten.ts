import { AssociativeFlatten } from './AssociativeFlatten.js'
import { Covariant } from './Covariant.js'
import { ForEach } from './ForEach.js'
import { IdentityBoth } from './IdentityBoth.js'
import { aTypeParam, composed_, fn_, kindF_, kindG_, placeholderF, placeholderG } from './common.js'

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
