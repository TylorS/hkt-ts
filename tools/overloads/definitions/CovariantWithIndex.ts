import { Dynamic, FunctionSignature, Interface, Static } from '../AST'

import {
  aTypeParam,
  bTypeParam,
  curriedPlaceholder_,
  fnLabeled_,
  hkt,
  kind_,
  placeholder,
} from './common'

export const kTypeParam = new Static('K')

export const node = new Interface(
  'CovariantWithIndex',
  [hkt, kTypeParam, curriedPlaceholder_(hkt)],
  [
    fnLabeled_(
      'mapWithIndex',
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
        [kind_([aTypeParam]).labeled('kind')],
        kind_([bTypeParam]),
      ),
    ),
  ],
)

export const CovariantWithIndex = node
