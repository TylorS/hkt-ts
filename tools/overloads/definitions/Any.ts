import { FunctionSignature, Interface, Kind, Static } from '../AST'

import { hkt, placeholder } from './common'

export const unknownParam = new Static(`unknown`)

export const node = new Interface(
  'Any',
  [hkt],
  [
    new FunctionSignature(
      '',
      [placeholder],
      [],
      new Kind(hkt, [placeholder, unknownParam]),
    ).labeled('any'),
  ],
)
