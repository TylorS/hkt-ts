import { ArrayNode, Dynamic, Kind, Static } from '../AST'

import { AssociativeBoth } from './AssociativeBoth'
import { Covariant } from './Covariant'
import { derived_, fn_, hkt, kindWithDefaults_, placeholder } from './common'

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
