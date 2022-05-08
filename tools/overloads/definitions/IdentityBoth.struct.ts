import { Dynamic, Kind, Static } from '../AST'

import { Covariant } from './Covariant'
import { IdentityBoth } from './IdentityBoth'
import { derived_, fn_, hkt, placeholder, placeholderWithDefaults } from './common'

export const struct = derived_(
  'struct',
  [IdentityBoth, Covariant],
  fn_(
    '',
    [
      new Dynamic(
        [placeholderWithDefaults],
        ([...params]) =>
          `A extends Readonly<Record<string, Kind${
            params.length > 1 ? params.length : ''
          }<T, ${params
            .slice(0, -1)
            .map((s) => s.split('=')[1])
            .join(', ')}${params.length > 1 ? ', ' : ''}any>>>`,
      ),
    ],
    [new Static(`A`).labeled('values')],
    new Kind(hkt, [
      placeholder.extract(`A[string]`),
      new Dynamic([hkt], ([hkt]) => `{ readonly [K in keyof A]: ParamOf<${hkt}, A[K], Params.A> }`),
    ]),
  ),
)

export const node = struct
