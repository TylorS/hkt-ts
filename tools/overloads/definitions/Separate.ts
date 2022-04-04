import { Dynamic, FunctionSignature, Interface, Kind, Tuple } from '../AST'

import { aTypeParam, bTypeParam, hkt, placeholder } from './common'

export const node = new Interface(
  'Separate',
  [hkt],
  [
    new FunctionSignature(
      '',
      [placeholder, aTypeParam, bTypeParam],
      [
        new Kind(hkt, [
          placeholder,
          new Dynamic([aTypeParam, bTypeParam], ([A, B]) => `Either<${A}, ${B}>`),
        ]).labeled('kind'),
      ],
      new Tuple([
        new Kind(hkt, [placeholder, aTypeParam]),
        new Kind(hkt, [placeholder, bTypeParam]),
      ]),
    ).labeled('separate'),
  ],
)

export const Separate = node
