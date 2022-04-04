import { FunctionSignature, Interface, Kind, Static } from '../AST'

import { aTypeParam, hkt, placeholder } from './common'

export const node = new Interface(
  'Compact',
  [hkt],
  [
    new FunctionSignature(
      '',
      [placeholder, aTypeParam],
      [new Kind(hkt, [placeholder, new Static(`Option<A>`)]).labeled('kind')],
      new Kind(hkt, [placeholder, aTypeParam]),
    ).labeled('comapct'),
  ],
)

export const Compact = node
