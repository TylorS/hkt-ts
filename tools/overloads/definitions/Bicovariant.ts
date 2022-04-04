import { Dynamic, FunctionSignature, Interface, Kind } from '../AST'

import { aTypeParam, bTypeParam, cTypeParam, dTypeParam, hkt, placeholder } from './common'

export const Bicovariant = new Interface(
  'Bicovariant',
  [hkt],
  [
    new FunctionSignature(
      '',
      [aTypeParam, bTypeParam, cTypeParam, dTypeParam],
      [
        new Dynamic([aTypeParam, bTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled(
          'f',
        ),
        new Dynamic([cTypeParam, dTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled(
          'g',
        ),
      ],
      new FunctionSignature(
        '',
        [placeholder],
        [new Kind(hkt, [placeholder, aTypeParam, cTypeParam]).labeled('kind')],
        new Kind(hkt, [placeholder, bTypeParam, dTypeParam]),
      ),
    ).labeled('bimap'),
  ],
)

export const node = Bicovariant
