import { ArrayNode, Dynamic, IntersectionNode, Kind, Static } from '../AST'

import { AssociativeBoth } from './AssociativeBoth'
import { Covariant } from './Covariant'
import { fn_, hkt, kindWithDefaults_, placeholder } from './common'

export const tuple = fn_(
  'tuple',
  [hkt],
  [
    new IntersectionNode(AssociativeBoth.toTypeClass(hkt), Covariant.toTypeClass(hkt)).labeled(
      'AB',
    ),
  ],
  fn_(
    '',
    [new ArrayNode(kindWithDefaults_([new Static('any')])).nonEmpty().labeled('AS')],
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
