import { TypeLambda } from '../../HKT.js'

import { AssociativeBoth } from './AssociativeBoth.js'
import { Top } from './Top.js'

export interface IdentityBoth<T extends TypeLambda> extends AssociativeBoth<T>, Top<T> {}
