import { Dynamic, Static } from '../AST.js'

import { AssociativeFlatten } from './AssociativeFlatten.js'
import { Covariant } from './Covariant.js'
import { bTypeParam, derived_, fnLabeled_, fn_, kind_, placeholder } from './common.js'

const aTypeParam = new Static(`A extends Readonly<Record<string, any>>`)

export const nameTypeParam = new Static('N extends string')

export const node = derived_(
  'bind',
  [AssociativeFlatten, Covariant],
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
