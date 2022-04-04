import { FunctionSignature, Interface, Kind } from '../AST'

import { aTypeParam, bTypeParam, cTypeParam, hkt, placeholder } from './common'

export const node = new Interface(
  'AssociativeCompose',
  [hkt],
  [
    new FunctionSignature(
      '',
      [placeholder, bTypeParam, cTypeParam],
      [new Kind(hkt, [placeholder, bTypeParam, cTypeParam]).labeled('second')],
      new FunctionSignature(
        '',
        [aTypeParam],
        [new Kind(hkt, [placeholder, aTypeParam, bTypeParam]).labeled('first')],
        new Kind(hkt, [placeholder, aTypeParam, cTypeParam]),
      ),
    ).labeled('compose'),
  ],
)
