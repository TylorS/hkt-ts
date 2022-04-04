import { aTypeParam, fnLabeled_, interface_, kind_, placeholder } from './common'

export const IdentityFlatten = interface_('IdentityFlatten', [
  fnLabeled_(
    'flatten',
    [placeholder, aTypeParam],
    [kind_([kind_([aTypeParam])]).labeled('kind')],
    kind_([aTypeParam]),
  ),
])

export const node = IdentityFlatten
