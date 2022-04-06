import { Covariant } from './Covariant'
import { aTypeParam, fnLabeled_, interface_, kind_, placeholder } from './common'

export const Flatten = interface_(
  'Flatten',
  [
    fnLabeled_(
      'flatten',
      [placeholder, aTypeParam],
      [kind_([kind_([aTypeParam])]).labeled('kind')],
      kind_([aTypeParam]),
    ),
  ],
  [Covariant],
)

export const node = Flatten
