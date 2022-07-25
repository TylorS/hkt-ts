import { aTypeParam, fnLabeled_, interface_, kind_, placeholder } from './common.js'

export const AssociativeFlatten = interface_(
  'AssociativeFlatten',
  [
    fnLabeled_(
      'flatten',
      [placeholder, aTypeParam],
      [kind_([kind_([aTypeParam])]).labeled('kind')],
      kind_([aTypeParam]),
    ),
  ],
  [],
)

export const node = AssociativeFlatten
