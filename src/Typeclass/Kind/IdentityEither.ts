import { TypeLambda } from '../../HKT.js'

import { AssociativeEither } from './AssociativeEither.js'
import { Bottom } from './Bottom.js'

export interface IdentityEither<T extends TypeLambda> extends AssociativeEither<T>, Bottom<T> {}
