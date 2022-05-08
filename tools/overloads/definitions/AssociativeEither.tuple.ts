import { ArrayNode, Dynamic, Kind, Static } from '../AST'

import { AssociativeEither } from './AssociativeEither'
import { Covariant } from './Covariant'
import { derived_, fn_, hkt, kindWithDefaults_, placeholder } from './common'

export const tuple = derived_(
  'tuple',
  [AssociativeEither, Covariant],
  fn_(
    '',
    [new ArrayNode(kindWithDefaults_([new Static('any')])).nonEmpty().labeled('AS')],
    [new Static(`AS`).labeled('...values')],
    new Kind(hkt, [
      placeholder.extract(`AS[number]`),
      new Dynamic(
        [hkt],
        ([hkt]) => `ParamOf<${hkt.split('extends')[0].trim()}, AS[number], Params.A>`,
      ),
    ]),
  ),
)
