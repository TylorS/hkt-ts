import { Dynamic, FunctionSignature, Interface, Kind } from '../AST'

import { aTypeParam, bTypeParam, hkt, placeholder } from './common'

export const node = new Interface(
  'Covariant',
  [hkt],
  [
    new FunctionSignature(
      '',
      [aTypeParam, bTypeParam],
      [
        new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled(
          'f',
        ),
      ],
      new FunctionSignature(
        '',
        [placeholder],
        [new Kind(hkt, [placeholder, aTypeParam]).labeled('kind')],
        new Kind(hkt, [placeholder, bTypeParam]),
      ),
    ).labeled('map'),
  ],
)

export const Covariant = node
