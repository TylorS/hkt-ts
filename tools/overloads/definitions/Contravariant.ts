import { Dynamic, FunctionSignature, Interface, Kind } from '../AST'

import { aTypeParam, bTypeParam, hkt, placeholder } from './common'

export const node = new Interface(
  'Contravariant',
  [hkt],
  [
    new FunctionSignature(
      '',
      [bTypeParam, aTypeParam],
      [
        new Dynamic([bTypeParam, aTypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled(
          'f',
        ),
      ],
      new FunctionSignature(
        '',
        [placeholder],
        [new Kind(hkt, [placeholder, aTypeParam]).labeled('kind')],
        new Kind(hkt, [placeholder, bTypeParam]),
      ),
    ).labeled('contramap'),
  ],
)

export const Contravariant = node
