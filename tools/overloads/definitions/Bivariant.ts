import { Dynamic, FunctionSignature, Interface, Kind } from '../AST'

import { aTypeParam, bTypeParam, cTypeParam, dTypeParam, hkt, placeholder } from './common'

export const node = new Interface(
  'Bivariant',
  [hkt],
  [
    new FunctionSignature(
      '',
      [aTypeParam, bTypeParam, cTypeParam, dTypeParam],
      [
        new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled(
          'f',
        ),
        new Dynamic([cTypeParam, dTypeParam] as const, ([c, d]) => `Unary<${c}, ${d}>`).labeled(
          'g',
        ),
      ],
      new FunctionSignature(
        '',
        [placeholder],
        [new Kind(hkt, [placeholder, bTypeParam, cTypeParam]).labeled('kind')],
        new Kind(hkt, [placeholder, aTypeParam, dTypeParam]),
      ),
    ).labeled('dimap'),
  ],
)

export const Bivariant = node
