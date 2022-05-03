import { Dynamic, IntersectionNode, Kind, Static } from '../AST'

import { Covariant } from './Covariant'
import { IdentityBoth } from './IdentityBoth'
import { fn_, hkt, placeholder, placeholderWithDefaults } from './common'

export const struct = fn_(
  'struct',
  [hkt],
  [new IntersectionNode(IdentityBoth.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled('AB')],
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
