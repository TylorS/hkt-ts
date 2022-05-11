import { Dynamic, Static } from '../AST'

import { fnLabeled_, fn_, interface_, kind_, placeholder } from './common'

const r1TypeParam = new Static(`R1`)
const r2TypeParam = new Static(`R2`)

const e1TypeParam = new Static(`E1`)
const e2TypeParam = new Static(`E2`)

const a1TypeParam = new Static(`A1`)
const a2TypeParam = new Static(`A2`)

export const Trivariant = interface_('Trivariant', [
  fnLabeled_(
    'trimap',
    [r1TypeParam, r2TypeParam, e1TypeParam, e2TypeParam, a1TypeParam, a2TypeParam],
    [
      new Dynamic([r1TypeParam, r2TypeParam] as const, ([a, b]) => `Unary<${a}, ${b}>`).labeled(
        'f',
      ),
      new Dynamic([e1TypeParam, e2TypeParam] as const, ([c, d]) => `Unary<${c}, ${d}>`).labeled(
        'g',
      ),
      new Dynamic([a1TypeParam, a2TypeParam] as const, ([e, f]) => `Unary<${e}, ${f}>`).labeled(
        'h',
      ),
    ],
    fn_(
      '',
      [placeholder],
      [kind_([r2TypeParam, e1TypeParam, a1TypeParam]).labeled('kind')],
      kind_([r1TypeParam, e2TypeParam, a2TypeParam]),
    ),
  ),
])
