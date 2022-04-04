import { FunctionSignature, Interface, Kind } from '../AST'

import { aTypeParam, hkt, placeholder } from './common'

export const node = new Interface(
  'Identity',
  [hkt],
  [
    new FunctionSignature(
      '',
      [aTypeParam, placeholder],
      [],
      new Kind(hkt, [placeholder, aTypeParam]),
    ).labeled('id'),
  ],
)

export const Identity = node
