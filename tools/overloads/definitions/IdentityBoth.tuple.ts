import { ArrayNode, Dynamic, Kind, Static } from '../AST'

import { Covariant } from './Covariant'
import { IdentityBoth } from './IdentityBoth'
import { derived_, fn_, hkt, kindWithDefaults_, placeholder } from './common'

export const tuple = derived_(
  'tuple',
  [IdentityBoth, Covariant],
  fn_(
    '',
    [new ArrayNode(kindWithDefaults_([new Static('any')])).labeled('AS')],
    [new Static(`AS`).labeled('...values')],
    new Kind(hkt, [
      placeholder.extract(`AS[number]`),
      new Dynamic(
        [hkt],
        ([hkt]) => `{ readonly [K in keyof AS]: ParamOf<${hkt}, AS[K], Params.A> }`,
      ),
    ]),
  ),
)

export const node = tuple
