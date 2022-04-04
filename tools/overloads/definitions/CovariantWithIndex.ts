import { Dynamic, FunctionSignature, Interface, Kind, Static } from '../AST'

import { aTypeParam, bTypeParam, hkt, placeholder } from './common'

export const kTypeParam = new Static('K')

export const node = new Interface(
  'CovariantWithIndex',
  [hkt, kTypeParam],
  [
    new FunctionSignature(
      '',
      [aTypeParam, bTypeParam],
      [
        new Dynamic(
          [aTypeParam, bTypeParam, kTypeParam] as const,
          ([a, b, k]) => `(index: ${k}, a: ${a}) => ${b}`,
        ).labeled('f'),
      ],
      new FunctionSignature(
        '',
        [placeholder],
        [new Kind(hkt, [placeholder, aTypeParam]).labeled('kind')],
        new Kind(hkt, [placeholder, bTypeParam]),
      ),
    ).labeled('mapWithIndex'),
  ],
)

export const CovariantWithIndex = node
