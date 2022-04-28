import { Dynamic, IntersectionNode, Static } from '../AST'

import { AssociativeFlatten } from './AssociativeFlatten'
import { Covariant } from './Covariant'
import { bTypeParam, fnLabeled_, fn_, hkt, kind_, placeholder } from './common'

const aTypeParam = new Static(`A extends Readonly<Record<string, any>>`)

export const nameTypeParam = new Static('N extends string')

export const node = fn_(
  'bind',
  [hkt],
  [
    new IntersectionNode(AssociativeFlatten.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled(
      'AFC',
    ),
  ],
  fn_(
    '',
    [nameTypeParam, aTypeParam, placeholder, bTypeParam],
    [
      new Dynamic(
        [nameTypeParam, aTypeParam],
        ([name, a]) => `Exclude<${name}, keyof ${a}>`,
      ).labeled('name'),
      fnLabeled_('f', [], [aTypeParam.labeled('a')], kind_([bTypeParam])),
    ],
    fn_(
      '',
      [],
      [kind_([aTypeParam]).labeled('kind')],
      kind_([
        new Dynamic(
          [aTypeParam, bTypeParam],
          ([a, b]) => `{ readonly [K in keyof ${a} | N]: K extends keyof ${a} ? ${a}[K] : ${b} }`,
        ),
      ]),
    ),
  ),
)
