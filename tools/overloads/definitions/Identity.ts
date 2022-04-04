import { aTypeParam, fnLabeled_, interface_, kind_, placeholder } from './common'

export const node = interface_('Identity', [
  fnLabeled_('id', [aTypeParam, placeholder], [], kind_([aTypeParam])),
])

export const Identity = node
