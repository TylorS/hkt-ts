import { ArrayNode, Dynamic, Kind, Static } from '../AST.js'

import { AssociativeBoth } from './AssociativeBoth.js'
import { Covariant } from './Covariant.js'
import { derived_, fn_, hkt, kindWithDefaults_, placeholder } from './common.js'

export const tuple = derived_(
  'tuple',
  [AssociativeBoth, Covariant],
  fn_(
    '',
    [new ArrayNode(kindWithDefaults_([new Static('any')])).nonEmpty().labeled('AS')],
    [new Static(`AS`).labeled('...values')],
    new Kind(hkt, [
      placeholder.extract(`AS[number]`),
      new Dynamic(
        [hkt],
        ([hkt]) =>
          `{ readonly [K in keyof AS]: ParamOf<${hkt
            .split('extends')[0]
            .trim()}, AS[K], Params.A> }`,
      ),
    ]),
  ),
)
