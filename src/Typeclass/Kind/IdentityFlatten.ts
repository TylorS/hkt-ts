import { TypeLambda } from '../../HKT.js'

import { AssociativeFlatten } from './AssociativeFlatten.js'
import { Top } from './Top.js'

export interface IdentityFlatten<T extends TypeLambda> extends AssociativeFlatten<T>, Top<T> {}
